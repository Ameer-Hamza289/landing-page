import logo from '../assets/logo.svg';
import usLogo from '../assets/us_logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#2B2D32] px-4 sm:px-6 md:px-6 pt-6 md:pt-8 lg:pt-12 md:pb-4 lg:mx-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8 md:mb-12">
          {/* Left Side - Logo and Newsletter */}
          <div className="flex-1 text-center md:text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
              <img src={logo} alt="Setapp Logo" className="h-7 w-7 md:h-8 md:w-8" />
              <span className="text-lg md:text-xl font-bold text-[#FFFFFF]">SETAPP</span>
            </div>
            <div className="mb-4 md:mb-6">
              <p className="text-[#FFFFFF] mb-3 md:mb-4 text-sm md:text-base">Updates from our team, written with love 🧡</p>
              <div className="flex max-w-md mx-auto lg:mx-0 border rounded border-[#404547]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 md:px-4 py-2 bg-[#404547] text-white placeholder-gray-500 focus:outline-none text-sm md:text-base"
                />
                <button className="bg-white text-[#2B2D32] px-3 md:px-4 py-2 rounded-r hover:bg-white/80 transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-center md:text-center lg:text-left">
            {/* Column 1 - Home */}
            <div>
              <h4 className="text-white font-semibold mb-4">Home</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">All Apps</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Setapp for Teams</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Podcast</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            {/* Column 2 - About */}
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Education Discount</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Family Plan</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">For Developers</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Gift Cards</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Redeem Card or Code</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Setapp Reviews</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Mac Developer Survey 2023</a></li>
              </ul>
            </div>

            {/* Column 3 - Getting started with Setapp */}
            <div>
              <h4 className="text-white font-semibold mb-4">Getting started with Setapp</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white hover:text-white transition-colors">Getting started with Setapp</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Remote access to other Mac</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Fix macOS Ventura problems</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Best productivity apps</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Best YouTube downloaders</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Uninstall apps</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* DMCA Bar */}
        <div className="bg-transparent py-3 px-2 md:px-4 rounded-lg flex flex-col sm:flex-row justify-center md:justify-center lg:justify-between items-center gap-3 md:gap-4 mb-6 md:mb-8">
          {/* Left Side - DMCA Buttons */}
          <div className="flex items-center gap-0">
            <button className="bg-[#969799] text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium">
              DMCA
            </button>
            <button className="bg-[#404547] text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium">
              PROTECTED
            </button>
          </div>

          {/* Right Side - Language Selector */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white">
            <img src={usLogo} alt="US Flag" className="h-3 w-4 md:h-4 md:w-4" />
            <span>English</span>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E5E5] pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-center lg:justify-between items-center gap-4">
            {/* Left - Copyright and Links */}
            <div className="flex flex-col md:flex-col lg:flex-row items-center gap-3 md:gap-4 text-xs md:text-sm text-[#FFFFFF]">
              <p className="text-center md:text-center lg:text-left">
                © 2023 Setapp Limited, 9 Tellow Street, Youghal, Co. Cork, P59YE14, Ireland. Reg. 584166. VAT ID: IE34250018H.
              </p>
            </div>

            {/* Right - Language Selector and Social Icons */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-2 md:gap-3">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 md:mt-4 flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-center lg:items-start gap-3 md:gap-4 font-AvenirNextLTPro-Regular text-xs md:text-sm">
            <a href="#" className="text-[#969799] transition-colors font-AvenirNextLTPro-Regular text-center">Terms of Use</a>
            <a href="#" className="text-[#969799] transition-colors font-AvenirNextLTPro-Regular text-center">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

