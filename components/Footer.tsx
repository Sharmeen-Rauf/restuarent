'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px),
              repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)
            `,
          }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white text-3xl md:text-4xl font-bold">GoldenApple</span>
              <i className="fas fa-apple text-red-600 text-2xl md:text-3xl"></i>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Fast, Fresh, and Flavorful food delivered to your door.
            </p>
            {/* Search Icon Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <i className="fas fa-search text-lg"></i>
            </button>
          </div>

          {/* Information Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Information</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Submit Your Complaint
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="tel:021111666111" 
                className="text-white text-lg font-semibold hover:text-red-600 transition-colors duration-300"
              >
                021111666111
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Opening Hours</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">11:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">12:00 PM - 11:00 PM</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Follow us for updates</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="flex flex-wrap justify-center gap-4">
              <span>Powered by GoldenApple</span>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors duration-300">FAQs</a>
            </div>
            <div className="text-gray-500">
              © {new Date().getFullYear()} GoldenApple. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl z-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up text-lg md:text-xl"></i>
      </button>
    </footer>
  );
}
