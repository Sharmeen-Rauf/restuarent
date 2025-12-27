'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern/Sparkles Effect */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 85% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.05) 0%, transparent 60%)
            `,
          }}
        ></div>
      </div>

      {/* Container with proper alignment matching header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Left Side - Text Content */}
          <div className="text-white order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block font-serif italic text-[#FF6B00] mb-2" style={{ fontFamily: 'serif' }}>
                Exquisite
              </span>
              <span className="block text-white font-sans mt-2">RANGE OF</span>
              <span className="block text-[#FF6B00] mt-1 font-sans">Flavours</span>
            </h1>
          </div>

          {/* Right Side - Food Images */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Food Platter - Kebabs */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-700/50">
                <img
                  src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
                  alt="Grilled Kebabs"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Decorative Bread Basket - Top Right */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-2xl hidden md:block transform rotate-6">
                <img
                  src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=200&h=150&fit=crop&q=80"
                  alt="Fresh Bread"
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                />
              </div>

              {/* Decorative Sauce Bowl - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-[#FF6B00]/90 backdrop-blur-sm rounded-full p-3 shadow-2xl hidden lg:block">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-leaf text-white text-xl md:text-2xl"></i>
                </div>
              </div>

              {/* Star Rating Badge */}
              <div className="absolute top-4 right-4 bg-yellow-400/95 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg">
                <i className="fas fa-star text-yellow-900 text-lg md:text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Logos - Bottom Right */}
      <div className="absolute bottom-4 md:bottom-6 right-4 sm:right-6 lg:right-8 z-10">
        <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-lg px-4 py-3 shadow-xl border border-gray-200/50">
          {/* VISA Logo */}
          <div className="flex items-center justify-center w-12 h-8 bg-blue-900 rounded px-2">
            <span className="text-white font-bold text-xs">VISA</span>
          </div>
          {/* MasterCard Logo */}
          <div className="flex items-center justify-center w-12 h-8 relative">
            <div className="absolute left-0 w-6 h-8 bg-red-600 rounded-l-full"></div>
            <div className="absolute right-0 w-6 h-8 bg-orange-500 rounded-r-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
