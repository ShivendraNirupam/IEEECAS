import { atom, useAtom } from "jotai";

const pictures = [
  "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
  "eleven", "one", "two", "three", "four", "five",
];

export const pageAtom = atom(0);

export const pages = [
  { front: "book-cover", back: pictures[0] },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}
pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % (pages.length + 1));
  };

  const getPageLabel = () => {
    if (page === 0) return "Cover";
    if (page === pages.length) return "Back Cover";
    return `Page ${page}`;
  };

  return (
    <main className="hidden m-2 bg-transparentrelative pointer-events-none select-none z-10 inset-0 lg:flex justify-center gap-10 flex-row bg-transparent">
      <a className="pointer-events-auto m-2" href="">
        <img className="w-20" src="/assets/CAS-Logo-White.png" />
      </a>

      <div className="pointer-events-auto flex justify-center mb-10 ">
        <button
          onClick={handleNextPage}
          className="px-8 py-3 mt-8 bg-white/90 text-black rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-lg"
        >
          {getPageLabel()}
        </button>
      </div>
    </main>
  );
};
