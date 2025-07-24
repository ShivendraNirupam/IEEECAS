import { Mail, MapPin} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-emerald-400">Come Join Us!</h2>
          <p className="text-gray-300 mt-2 max-w-md">
            Be part of the IEEE CAS Society and dive into a world of innovation, circuits, and systems. Explore VLSI, AI hardware, signal processing and beyond—right from your campus.
          </p>
        </div>

        <div className="flex flex-col md:items-end text-gray-400 space-y-2">
          <div className="flex gap-8 mt-2">
            <a href="https://www.instagram.com/ieee_cas_vit?igsh=eWMwYjA1OXUxanN5" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-instagram text-pink-500 text-6xl'></i>
            </a>
            <a href="https://www.linkedin.com/company/ieee-circuits-and-systems-vit/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin text-blue-800 text-6xl'></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IEEE CAS Student Branch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
