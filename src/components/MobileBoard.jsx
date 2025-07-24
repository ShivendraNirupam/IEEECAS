import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function MobileBoard() {
  const testimonials = [
    {
      name: "Aadya Mohanty",
      designation: "Chairperson",
      src: "/boards/aadya1.jpg",
    },
    {
      name: "Garv Jain",
      designation: "Vice Chairperson",
      src: "/boards/garv.jpg",
    },
    {
      name: "Arun E",
      designation: "Secretary",
      src: "/boards/arun.png",
    },
    {
      name: "Aayush Shah",
      designation: "Co-Secretary",
      src: "/boards/aayush.jpg",
    },
    {
      name: "Prajan Rajendran",
      designation: "Technical Head",
      src: "/boards/prajan.png",
    },
    {
      name: "Saravana Vikas",
      designation: "Events and Publicity Head",
      src: "/boards/vikas.jpg",
    },
    {
      name: "Suhani Das",
      designation: "Editorial Head",
      src: "/boards/suhani.jpg",
    },
    {
      name: "Archita Nath",
      designation: "Management Head",
      src: "/boards/archita.png",
    },
    {
      name: "Tanisha Gupta",
      designation: "Finance Head",
      src: "/boards/tanisha.jpg",
    },
    {
      name: "Bhavini Verma",
      designation: "Design Head",
      src: "/boards/bhaivini.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
