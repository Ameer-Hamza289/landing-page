import logo from '../assets/logo.svg';

export default function PromotionalCard() {
  return (
    <div className="pt-6 pb-0 md:pt-6 lg:pt-8 md:pb-0  bg-gradient-to-b from-[#FFFFFF] from-50% to-[#2B2D32] to-50%">
      <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-0">
        <div className="border-b pb-8 border-[#FEFEFE]">
          <div className="bg-[#F5F5F0] rounded-2xl p-6 md:p-8 lg:p-12 max-w-7xl mx-0 md:mx-20 lg:mx-16">
            {/* Logo - Top Left */}
            <div className="mb-6 md:mb-8">
              <img src={logo} alt="Setapp Logo" className="h-16 w-16 md:h-20 md:w-20" />
            </div>

            {/* Headline */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
                Superpowers starting $9.99/month.
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">
                Free for 7 days.
              </h3>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
              <button className="bg-gray-900 text-white px-5 md:px-6 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium hover:bg-gray-800 transition-colors">
                Get started now
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-900 px-5 md:px-6 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium hover:bg-gray-50 transition-colors">
                More about Setapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

