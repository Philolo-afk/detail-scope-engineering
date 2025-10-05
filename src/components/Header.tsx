import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    'Bearings',
    'Pneumatics',
    'Chains and Sprockets',
    'Belts',
    'Pulleys',
    'Seals',
    'Steam Systems',
    'Water'
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/DUALSCOPE-LOGO-REVISED.png"
              alt="Dual Scope Engineering"
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl rounded-lg overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 p-6 min-w-[800px]">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-4 py-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all font-medium rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#team"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Team
            </a>

            <a
              href="#careers"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Careers
            </a>

            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded font-medium transition-colors"
            >
              Talk to Our Team
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
