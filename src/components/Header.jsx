import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      {/* Logo */}
      <img
        className="size-8 md:size-14 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-500 hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
        src="/assets/CAS-Logo-White.png"
        alt="cas logo"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />

      {/* Desktop Navigation */}
      <nav
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="hidden absolute left-[35%] md:flex items-center gap-10 shadow-[0_0_15px_rgba(255,255,255,0.4)] px-4 py-3 rounded-full hover:shadow-[0_0_15px_rgba(255,255,255,0.9)]"
      >
        <a href="#home" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Home</a>
        <a href="#about" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">About</a>
        <a href="#board" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Board</a>
        <a href="#gallery" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">Gallery</a>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        id="mobileButton"
        className={`md:hidden z-[1001] text-3xl p-2 transition-all duration-300 ${
          isMenuOpen ? 'fixed right-2' : ''
        }`}
        onClick={toggleMobileMenu}
      >
        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} bx-md`}></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobileMenu"
          className="fixed top-0 bottom-0 right-0 left-0 p-5 md:hidden z-[1000] bg-black bg-opacity-70 backdrop-blur-md"
        >
          <nav className="flex flex-col gap-6 items-center mt-12">
            <a href="#home" className="flex items-center gap-2 text-base tracking-wider transition-colors hover:text-gray-300 z-50">
              <i className="bx bx-home bx-sm"></i> Home
            </a>
            <a href="#about" className="flex items-center gap-2 text-base tracking-wider transition-colors hover:text-gray-300 z-50">
              <i className="bx bx-grid-alt bx-sm"></i> About
            </a>
            <a href="#board" className="flex items-center gap-2 text-base tracking-wider transition-colors hover:text-gray-300 z-50">
              <i className="bx bx-chess bx-sm"></i> Board
            </a>
            <a href="#gallery" className="flex items-center gap-2 text-base tracking-wider transition-colors hover:text-gray-300 z-50">
              <i className="bx bx-images bx-sm"></i> Gallery
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
