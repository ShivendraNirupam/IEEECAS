import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function MobileGallery() {
  const testimonials = [
    {
        src:"/textures/one.jpg",
    },
    {
        src:"/textures/two.jpg",
    },
    {
        src:"/textures/three.jpg",
    },
    {
        src:"/textures/four.jpg",
    },
    {
        src:"/textures/five.jpg",
    },
    {
        src:"/textures/six.jpg",
    },
    {
        src:"/textures/seven.jpg",
    },
    {
        src:"/textures/eight.jpg",
    },
    {
        src:"/textures/nine.jpg",
    },
    {
        src:"/textures/ten.jpg",
    },
    {
        src:"/textures/eleven.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
