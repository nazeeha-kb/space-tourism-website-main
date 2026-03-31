import { useState } from "react";
import data from "./../data/data";

const Technology = () => {
  const [index, setIndex] = useState(0);
  const technology = data[0].technology[index];

  return (
    <main className="technology-bg bg-main min-h-screen flex flex-col items-center">
      <div className="space-navbar p-6 pb-12 max-w-7xl lg:flex-1 md:w-full">
        <article className="flex flex-col items-center md:items-start self-start w-full">
          {/* heading */}
          <h1 className="numbered-title text-cust-300 md:text-[20px] lg:text-[26px]">
            <span className="text-white/25">03</span> Space Launch 101
          </h1>
        </article>
        <article className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-14 w-auto justify-center lg:justify-between items-center text-center">
          {/* Image */}
          <div className="tech-img-parent pt-16 -mx-6 lg:-mr-20">
            <img
              src={technology.images.portrait}
              alt=""
              className="tech-img h-65 md:h-90 w-screen lg:w-142 lg:h-120 object-cover object-bottom md:object-center"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Indicators */}
            <div>
              <ul className="flex flex-row lg:flex-col justify-center number-indicators gap-4">
                <li
                  onClick={() => {
                    setIndex(0);
                  }}
                  aria-selected={index == 0}
                >
                  1
                </li>
                <li
                  onClick={() => {
                    setIndex(1);
                  }}
                  aria-selected={index == 1}
                >
                  2
                </li>
                <li
                  onClick={() => {
                    setIndex(2);
                  }}
                  aria-selected={index == 2}
                >
                  3
                </li>
              </ul>
            </div>
            {/* Content */}
            <div className="flex flex-col gap-4 xl:text-start">
              <div className="uppercase font-cust-serif">
                <h2 className="cap-heading">The terminology...</h2>
                <h1 className="large-heading">{technology.name}</h1>
              </div>
              <p className="para max-w-lg">{technology.description}</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Technology;
