import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function inlineCSS() {
  return {
    name: 'inline-css',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      if (!ctx || !ctx.bundle) return html;
      
      let newHtml = html;
      for (const [, chunk] of Object.entries(ctx.bundle)) {
        if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
          // Remove the injected <link rel="stylesheet"> for this CSS file
          const regex = new RegExp(`<link[^>]*?href="[^"]*?${chunk.fileName}"[^>]*?>`, 'g');
          newHtml = newHtml.replace(regex, '');
          // Inject it as <style> tag
          newHtml = newHtml.replace(
            '</head>',
            `<style>${chunk.source}</style>\n</head>`
          );
        }
      }
      return newHtml;
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCSS()],
})
