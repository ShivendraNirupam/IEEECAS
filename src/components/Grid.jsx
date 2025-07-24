import { Globe } from "../components/magicui/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Animation from "./Animation";

const Grid = ({ id }) => {
  return (
    <section
      id={id}
      data-aos="zoom-in-up"
      className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(18rem,_1fr)] gap-6 w-full">

        {/* Grid 1 */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-4 p-6 flex flex-col justify-end bg-black/50 rounded-xl overflow-hidden transition duration-300 hover:scale-[1.02] border border-white/30">
          <img
            src="assets/coding-pov.png"
            alt="Coding POV"
            className="-rotate-45 opacity-30 absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md:-translate-x-1/2 md:top-8 lg:scale-[2.5] pointer-events-none"
          />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Our mission</p>
            <p className="text-white text-sm md:text-base">
              Our mission is to empower students to explore the vast frontiers of technology, from the tiniest transistor to the grandest intelligent systems.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-indigo-900 pointer-events-none" />
        </div>

        {/* Grid 2 */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 p-6 bg-gray-700/20 rounded-xl overflow-hidden transition duration-300 hover:rotate-1 shadow-[0_0_20px_5px_rgba(255,255,255,0.1)] border border-white/30">
          <div className="relative z-10">
            <p className="text-sm md:text-md mb-1">Rooted in VIT Vellore...</p>
            <p className="text-lg md:text-xl font-semibold">
              IEEE CAS | Think Global, Design Local
            </p>
          </div>
          <figure className="absolute left-1/2 top-[10%] transform -translate-x-1/2 z-0">
            <Globe />
          </figure>
        </div>

        {/* Grid 3 */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 p-6 bg-gray-700/20 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_0_20px_5px_rgba(255,255,255,0.1)] border border-white/30 transition duration-300 hover:-rotate-1">
          <Animation />
          <div className='absolute bottom-4  flex gap-4 mt-12 justify-center md:justify-start z-10'>
            <a className='w-30 flex gap-2 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-ls text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="https://www.linkedin.com/company/ieee-circuits-and-systems-vit/" target="_blank"
              rel="noopener noreferrer"><i className='bx bxl-linkedin text-blue-800 text-3xl'></i> LinkedIn</a>

          </div>
        </div>

        {/* Grid 4 */}
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-4 p-6 bg-gray-800/30 rounded-xl overflow-hidden shadow-[0_0_20px_5px_rgba(255,255,255,0.1)] border border-white/30 transition duration-300 hover:scale-[1.02]">
          <img
            src="assets/event.jpg"
            alt="Our Events"
            className="rotate-90 opacity-40 absolute scale-[1.55] -right-[5rem] -top-[2rem] md:scale-[2] md:left-1/2 md:-translate-x-1/2 md:top-8 lg:scale-[1.5] pointer-events-none -z-10"
          />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2">📅 Our Events</p>
            <p className="text-white text-sm md:text-base">
              At IEEE CAS, we ignite innovation and creativity through powerful initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
