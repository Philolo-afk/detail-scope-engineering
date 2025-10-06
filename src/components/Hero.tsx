const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/bgbearing.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:pl-20 w-full">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Engineering
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-2">
            Reliability in
          </h2>
           <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-2">
            Every Revolution
          </h3>

          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="text-center bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all hover:shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="text-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
