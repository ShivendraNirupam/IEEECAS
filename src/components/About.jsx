import { lazy, Suspense } from 'react';

const Grid = lazy(() => import('./Grid'));

const About = ({ id }) => {
  return (
    <main id={id} className="mt-5 relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
      {/* Blobby "About" Heading */}
      <div
        className="relative m-12 sm:m-8 md:m-12 lg:m-16 w-32 h-32 md:w-80 md:h-80 lg:w-48 lg:h-48 flex items-center justify-center 
        animate-gobble rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
        bg-gradient-to-br from-[#0b2810] via-[#1f4e1a] to-[#6aff94] 
        shadow-[0_0_50px_10px_rgba(74,145,43,0.4)] transition-all duration-700 ease-in-out -z-10 overflow-hidden"
      >
        {/* Halftone background blob */}
        <div className="absolute inset-0 bg-[url('/assets/green_halftone_border_background-removebg-preview.png')] bg-no-repeat bg-cover rotate-90 rounded-full pointer-events-none h-64 w-64" />

        {/* Glassmorphism Circle */}
        <div className="z-10 flex items-center justify-center size-32 sm:size-36 md:size-40 
          bg-white/10 rounded-full backdrop-blur-xl 
          shadow-[0_0_40px_10px_rgba(255,255,255,0.2)] border border-white/20"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
            About
          </h1>
        </div>
      </div>

      {/* Decorative Left Image */}
      <div className="absolute top-0 left-[-10rem] -rotate-90 opacity-50 pointer-events-none -z-20 rounded-full">
        <img
          src="/assets/aboutgreen.png"
          alt="decor left"
          loading="lazy"
          className="h-48 w-96 object-cover rounded-full"
        />
      </div>

      {/* Decorative Right Image */}
      <div className="absolute top-0 right-[-8rem] rotate-0 opacity-50 pointer-events-none -z-20 rounded-full">
        <img
          src="/assets/aboutgreen.png"
          alt="decor right"
          loading="lazy"
          className="h-48 w-96 object-cover"
        />
      </div>

      {/* Lazy Loaded Grid Section */}
      <Suspense fallback={<div className="text-white text-lg mt-10">Loading grid...</div>}>
        <Grid />
      </Suspense>
    </main>
  );
};

export default About;
