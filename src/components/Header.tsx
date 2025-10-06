import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    'Water Treatment'
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img
              src="/DUALSCOPE-LOGO-REVISED.png"
              alt="Dual Scope Engineering"
              className="h-10 sm:h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
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
              About
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

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-2">
              <a
                href="#about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>

              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProductsOpen && (
                  <div className="bg-gray-50 py-2">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#team"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#careers"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </a>

              <a
                href="#contact"
                className="block mx-4 mt-4 text-center bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talk to Our Team
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
