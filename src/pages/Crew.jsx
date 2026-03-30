import { useState } from "react";
import data from "./../data/data";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const crew = data[0].crew[index];

  return (
    <main className="crew-bg bg-main min-h-screen flex flex-col items-center">
      <div className="space-navbar p-6 md:p-10 max-w-7xl xl:flex-1 md:w-full">
        <div className="flex flex-col gap-6 items-center xl:flex-1">
          <article className="flex flex-col items-center md:items-start self-start w-full">
            {/* heading */}
            <h1 className="numbered-title text-cust-300 md:text-[20px] xl:text-[26px]">
              <span className="text-white/25">02</span> Meet your Crew
            </h1>
          </article>
          <div className="flex flex-col xl:flex-row gap-6">
            <article className="flex flex-col items-center text-center gap-10 xl:pt-0 pt-10 max-w-lg md:max-w-xl xl:text-start xl:items-start">
              {/* Content */}
              <div className="flex flex-col gap-6 xl:flex-1 xl:justify-center">
                <div className="uppercase font-cust-serif">
                  <h2 className=" text-white/50 text-cust-400 md:text-[24px] xl:text-cust-600">
                    {crew.role}
                  </h2>
                  <h1 className="text-white text-cust-500 md:text-[40px] xl:text-cust-700">
                    {crew.name}
                  </h1>
                </div>
                <p className="text-cust-light text-cust-300">{crew.bio}</p>
              </div>
              {/* Dot Indicators */}
              <div>
                <ul className="dot-indicators flex-row flex gap-4 h-2.5">
                  <li
                    onClick={() => {
                      setIndex(0);
                    }}
                    aria-selected={index == 0}
                  ></li>
                  <li
                    onClick={() => {
                      setIndex(1);
                    }}
                    aria-selected={index == 1}
                  ></li>
                  <li
                    onClick={() => {
                      setIndex(2);
                    }}
                    aria-selected={index == 2}
                  ></li>
                  <li
                    onClick={() => {
                      setIndex(3);
                    }}
                    aria-selected={index == 3}
                  ></li>
                </ul>
              </div>
            </article>
            {/* Image */}
            <div className="grid place-items-center pt-4 xl:pt-0">
              <img
                src={crew.images.webp}
                alt=""
                className="h-85 md:h-140 xl:max-h-169 aspect-1 bg-cover mask-b-from-80%"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
