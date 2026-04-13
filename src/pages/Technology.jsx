import { useState, useEffect } from "react";
import data from "./../data/data";

const Technology = () => {
  const [index, setIndex] = useState(0);
  const technology = data[0].technology[index];

  useEffect(() => {
    data[0].technology.forEach((t) => {
      new Image().src = t.images.portrait;
      // new Image().src = t.images.landscape;
    });
  }, []);

  return (
    <main className="technology-bg bg-main min-h-screen xl:max-h-screen xl:overflow-hidden flex flex-col items-center">
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
              alt={`Image of ${technology.name}`}
              className="tech-img h-65 md:h-90 w-screen lg:w-142 lg:h-120 object-cover object-bottom md:object-center"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Indicators */}
            <nav>
              <ul
                role="tablist"
                className="flex flex-row lg:flex-col justify-center number-indicators gap-4"
              >
                <li
                  role="tab"
                  onClick={() => {
                    setIndex(0);
                  }}
                >
                  <button aria-selected={index == 0}>1</button>
                </li>
                <li
                  role="tab"
                  onClick={() => {
                    setIndex(1);
                  }}
                >
                  <button aria-selected={index == 1}>2</button>
                </li>
                <li
                  role="tab"
                  onClick={() => {
                    setIndex(2);
                  }}
                >
                  <button aria-selected={index == 2}>3</button>
                </li>
              </ul>
            </nav>
            {/* Content */}
            <div className="flex flex-col gap-4 xl:text-start" role="tabpanel" aria-labelledby={`tech-tab-${index}`}>
              <div className="uppercase font-cust-serif">
                <h2 className="cap-heading">The terminology...</h2>
                <h3 className="large-heading">{technology.name}</h3>
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
