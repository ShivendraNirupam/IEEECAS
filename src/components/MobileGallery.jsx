"use client";

import { Carousel } from "./ui/carousel";

const CarouselGallery = () => {
  const slideData = [
    {
        src:"/textures/one.jpg"
    },
    {
        src:"/textures/two.jpg"
    },
    {
        src:"/textures/three.jpg"
    },
    {
        src:"/textures/four.jpg"
    },
    {
        src:"/textures/five.jpg"
    },
    {
        src:"/textures/six.jpg"
    },
    {
        src:"/textures/seven.jpg"
    },
    {
        src:"/textures/eight.jpg"
    },
    {
        src:"/textures/nine.jpg"
    },
    {
        src:"/textures/ten.jpg"
    },
    {
        src:"/textures/eleven.jpg"
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 z-100">
      <Carousel slides={slideData} />
    </div>
  );
}

export default CarouselGallery;
