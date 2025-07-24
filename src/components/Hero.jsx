import { useEffect, useState, lazy, Suspense } from 'react';

const LazySpline = lazy(() => import('@splinetool/react-spline'));

const Hero = ({ id }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id={id}
      className='flex p-5 lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] '
    >
      <div
        data-aos='fade-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
        className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'
      >
        <div className='relative w-[90%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#2f620b] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
            <i className='bx bx-diamond'></i>
            WELCOME TO
          </div>
        </div>

        <h1 className='bg-black/10 p-2 text-center md:text-start text-md sm:text-4xl md:text2xl lg:text-3xl font-semibold tracking-wider'>
          IEEE
          <br />
          CIRCUITS AND SYSTEMS SOCIETY
        </h1>

        <p className='p-10 bg-black text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
          Fueling tomorrow’s tech with the power of circuits, systems, and
          imagination. IEEE CAS is where creators meet circuits and the future
          begins.
        </p>

        <div className='flex gap-4 mt-12 justify-center md:justify-start'>
          <a
            className='w-30 flex gap-2 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-ls text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'
            href='https://www.instagram.com/ieee_cas_vit?igsh=eWMwYjA1OXUxanN5'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-instagram text-pink-500 text-3xl'></i> Instagram
          </a>

          <a
            className='w-30 flex gap-2 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-ls text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'
            href='#about'
          >
            <i className='bx  bx-grid-search bx-sm'></i> Let's explore
          </a>
        </div>
      </div>

      {/* 3D Robot Section */}
      {loaded && (
        <Suspense fallback={<div className="text-white animate-pulse">Loading 3D...</div>}>
          <LazySpline
            className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left[-2%]'
            scene='https://prod.spline.design/FsQl7Ixnty0zphIX/scene.splinecode'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-in-back'
            data-aos-delay='500'
            data-aos-offset='0'
            data-aos-duration='1000'
          />
        </Suspense>
      )}
    </main>
  );
};

export default Hero;
