import Header from "./components/Header"
import Hero from "./components/Hero"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import About from "./components/About";
import Board from "./components/Board";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Loader from "./components/Loader";



const App = () => {

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // optional small delay for smooth fade
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, [])
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])
  return (

    <>
      {isLoading ? <Loader /> :  <main className="overflow-x-hidden">
      {/* Gradient image */}
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/assets/gradient.png" alt="Gradient" />
      {/* Blur effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_150px_20px_#78C841] -rotate-[60deg] -z-10"></div>

      <Header />
      <Hero id="home" />
      {/* Divider */}
      <div data-aos="zoom-in" className="hidden m-10 md:flex justify-center items-center w-full">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
      <About id="about" />
      {/* Divider */}
            <div data-aos="zoom-in" className="m-10 hidden md:flex justify-center items-center w-full">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
      <Board id="board" />
      {/* Divider */}
            <div data-aos="zoom-in" className="m-10 hidden md:flex justify-center items-center w-full">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
      <Gallery id="gallery" />
      <Footer />
    </main>}
    </>
   
  )
}

export default App