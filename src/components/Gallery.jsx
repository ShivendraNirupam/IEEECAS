import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import CarouselGallery from "./MobileGallery";

const Gallery = ({ id }) => {
  return (
    <section id={id}>
      <div id={id} className="lg:hidden">
        <div className="lg:hidden flex flex-col justify-center items-center">
          <h1 className="text-3xl italic">Event Gallery</h1>
        </div>
        <CarouselGallery />
      </div>
      <div className="book hidden xl:flex flex-col absolute justify-center items-center">
        <Loader />
        <div className="m-2 p-4 w-full flex items-center justify-center">
          <h1 className="text-6xl font-bold">Event Gallery</h1>
        </div>
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
