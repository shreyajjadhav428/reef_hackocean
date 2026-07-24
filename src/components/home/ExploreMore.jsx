const ExploreMore = () => {
  return (
    <section className="w-full bg-[#040810] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore More
          </h2>
          <p className="text-lg text-slate-300">
            Discover more ways to make a difference in our oceans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder content */}
          <div className="bg-[#050d1a] border border-slate-700 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Learn More</h3>
            <p className="text-slate-300">Discover fascinating facts about ocean conservation</p>
          </div>
          
          <div className="bg-[#050d1a] border border-slate-700 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Get Involved</h3>
            <p className="text-slate-300">Join our community of ocean advocates</p>
          </div>
          
          <div className="bg-[#050d1a] border border-slate-700 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Support Us</h3>
            <p className="text-slate-300">Help fund our conservation efforts</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreMore
