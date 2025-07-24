import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { MobileGallery } from "./MobileGallery";

const Gallery = ({ id }) => {
  return (
    <section id={id}>
      <section className="w-full flex flex-col items-center justify-center bg-black md:py-14 mt-24 mb-24">
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-white z-20">
          Event Gallery
        </h1>

        <div className="w-full flex flex-col items-center mt-10">
          <div data-aos="zoom-in" className="flex justify-center items-center w-full">
            <div className="w-[60%] md:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
        </div>
      </section>
      <div className="h-full w-full block lg:hidden">
        <MobileGallery />
      </div>
      <div className="book hidden lg:flex flex-col absolute justify-center items-center">
        
        <Canvas
          className="mt-32"
          shadows
          camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: 30,
          }}
        >
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
        <div>
          <UI />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
