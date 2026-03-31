import { useState, useEffect } from "react";
import data from "../data/data";

const Destination = () => {
  const [index, setIndex] = useState(0);
  let destination = data[0].destinations[index];

  useEffect(() => {
    data[0].destinations.forEach((d) => {
      new Image().src = d.images.portrait;
    });
  }, []);

  return (
    <main className="destination-bg bg-main min-h-screen flex flex-col items-center">
      <div className="space-navbar p-6 md:p-10 max-w-7xl xl:flex-1 md:w-full">
        <div className="flex flex-col gap-6 xl:justify-center items-center xl:flex-1">
          {/* heading */}
          <article className="flex flex-col items-center md:items-start self-start w-full">
            <h1 className="numbered-title text-cust-300 md:text-[20px] xl:text-[26px]">
              <span className="text-white/25">01</span> Pick your Destination
            </h1>
          </article>
          <article className="flex flex-col xl:flex-row gap-8 xl:gap-25 xl:pt-8 md:max-w-2xl xl:max-w-none">
            {/* image */}
            <div className="grid place-items-center py-4 md:py-12 xl:py-0">
              <img
                src={destination.images.webp}
                alt=""
                className="w-37.5 md:w-75 xl:w-120 aspect-1"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-6 xl:gap-10 items-center xl:items-start text-center xl:text-start">
              <nav>
                <ul className="flex gap-8 numbered-title items-start justify-center underline-indicators plain h-8 text-cust-300">
                  {/* set index to index selected below */}
                  <li onClick={() => setIndex(0)} aria-selected={index == 0}>
                    Moon
                  </li>
                  <li onClick={() => setIndex(1)} aria-selected={index == 1}>
                    Mars
                  </li>
                  <li onClick={() => setIndex(2)} aria-selected={index == 2}>
                    Europa
                  </li>
                  <li onClick={() => setIndex(3)} aria-selected={index == 3}>
                    Titan
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col gap-4 max-w-md md:max-w-lg">
                <h2 className="uppercase font-cust-serif text-7xl xl:text-cust-800">
                  {destination.name}
                </h2>
                <p className="para">{destination.description}</p>
              </div>
              <hr className="text-white/25  w-full" />
              {/* Time */}
              <div className="flex flex-col sm:flex-row gap-6 uppercase w-full">
                <div className="flex flex-col gap-3 flex-1">
                  <div className=" text-cust-200 text-cust-light">
                    Avg. distance
                  </div>
                  <div className="text-cust-500 font-cust-serif">
                    {destination.distance}
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-cust-200 text-cust-light">
                    Est. travel time
                  </div>
                  <div className="text-cust-500 font-cust-serif">
                    {destination.travel}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Destination;
