import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";

const Gallery = ({ id }) => {
  return (
    <section id={id}>
      <div id={id} className="lg:hidden">
        <div className="lg:hidden flex flex-col justify-center items-center">
          <h1 className="text-3xl italic">Event Gallery</h1>
        </div>
      </div>
      <div className="book hidden xl:flex flex-col absolute justify-center items-center">
        
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
