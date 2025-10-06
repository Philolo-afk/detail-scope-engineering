const Partners = () => {
  const partners = [
    'K.G',
    'Thermodyne',
    'Airtac',
    'Matsusak',
    'Toyo Power',
    'Spirax Sarco'
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-8 lg:pl-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            We collaborate with industry-leading manufacturers to bring you the best
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <p className="text-base sm:text-lg font-semibold text-gray-800">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
