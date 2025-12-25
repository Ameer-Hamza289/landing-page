import { useState } from 'react';
import logo from '../assets/logo.svg';
import usLogo from '../assets/us_logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 md:px-8 py-4 md:py-3">
      <div className="flex items-center">
        <img src={logo} alt="Setapp Logo" className="h-6 w-6 md:h-8 md:w-8" />
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">How it works</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">All apps</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">For Teams</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Podcast</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="h-4 w-px bg-gray-600"></div>
          <img src={usLogo} alt="US Flag" className="h-4 w-6 opacity-0.5" />
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</a>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
            Try free
          </button>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden bg-gray-200 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#2B2D32] border-t border-gray-700 md:hidden z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors py-2">How it works</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors py-2">All apps</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors py-2">For Teams</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors py-2">Blog</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors py-2">Podcast</a>
            <div className="h-px bg-gray-600 my-2"></div>
            <div className="flex items-center gap-3 py-2">
              <img src={usLogo} alt="US Flag" className="h-4 w-6 opacity-0.5" />
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="bg-gray-200 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors w-full text-left">
              Try free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

