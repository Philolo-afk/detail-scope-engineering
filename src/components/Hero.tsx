const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/bgbearing.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-5xl">
          <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
            Engineering Reliability in
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight mt-2">
            Every Revolution
          </h2>

          <div className="mt-16 flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
