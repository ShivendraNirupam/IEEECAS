import { Suspense, lazy } from 'react';
import cardData from "../data/boardData.js";

const CardContainer = lazy(() => import("./ui/3d-card.jsx").then(mod => ({ default: mod.CardContainer })));
const CardBody = lazy(() => import("./ui/3d-card.jsx").then(mod => ({ default: mod.CardBody })));
const CardItem = lazy(() => import("./ui/3d-card.jsx").then(mod => ({ default: mod.CardItem })));

const Board = ({ id }) => {
  return (
    <main id={id} className="relative flex flex-col items-center justify-start min-h-screen w-full overflow-x-hidden bg-black mt-12 overflow-hidden">

      {/* Background bubbles */}
      <div className="hidden lg:block absolute rounded-full bg-[url(/assets/BoardBg.png)] bg-no-repeat  md:h-[32rem] md:w-full h-48 w-48 text-white md:top-[35rem] bottom-96 right-4" />
      <div className="hidden lg:block absolute rounded-full bg-[url(/assets/BoardBg.png)] bg-no-repeat  md:h-[32rem] md:w-full h-48 w-48 text-white rotate-180 md:top-[47rem] bottom-96 right-32" />
      <div className="hidden lg:block opacity-50 absolute rounded-full bg-[url(/assets/BoardBg.png)] bg-no-repeat  md:h-[32rem] md:w-full h-48 w-48 text-white md:bottom-96 bottom-96 left-18 rotate-90" />

      {/* Heading */}
      <section className="w-full flex flex-col items-center justify-center bg-black md:py-14 mt-24">
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-white z-20">
          Meet our Board
        </h1>

        <div className="w-full flex flex-col items-center mt-10">
          <div data-aos="zoom-in" className="flex justify-center items-center w-full">
            <div className="w-[60%] md:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full px-4 md:px-12 py-2 md:py-10 flex flex-wrap gap-2 md:gap-8 justify-center items-start">
        <Suspense fallback={<div className="text-white">Loading board...</div>}>
          {cardData.map((card, index) => (
            <CardContainer key={index} className="inter-var w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem]">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">

                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4 flex justify-center"
                >
                  <img
                    src={card.image}
                    loading="lazy"
                    height="200"
                    width="200"
                    className="h-48 w-48 object-cover rounded-full group-hover/card:shadow-xl"
                    alt={`Card ${index + 1}`}
                  />
                </CardItem>

                <CardItem
                  translateZ="50"
                  className="text-xl text-center font-bold text-neutral-600 dark:text-white mt-4"
                >
                  {card.title}
                </CardItem>

                <CardItem
                  translateZ="60"
                  as="p"
                  className="text-neutral-500 text-sm text-center max-w-sm mt-2 dark:text-neutral-300"
                >
                  {card.description}
                </CardItem>

                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 hover:bg-blue-500 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <a href={card.LinkedIn} target="_blank" rel="noopener noreferrer">
                      {card.secondaryAction}
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </Suspense>
      </section>
    </main>
  );
};

export default Board;
