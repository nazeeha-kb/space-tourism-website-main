import React from "react";
import { useState } from "react";
import moon from "./../assets/destination/image-moon.webp";

const Destination = () => {
  const [destination, setDestination] = useState("moon");

  return (
    <main className="destination-bg bg-main min-h-screen flex flex-col items-center">
      <div className="space-navbar p-6 md:p-10 max-w-7xl xl:flex-1">
        <div className="flex flex-col gap-6 xl:justify-center xl:items-center xl:flex-1">
          {/* heading */}
          <article className="flex flex-col items-center md:items-start self-start">
            <h1 className="numbered-title text-cust-300 md:text-[20px] xl:text-[26px]">
              <span className="text-white/25">01</span> Pick your Destination
            </h1>
          </article>
          <article className="flex flex-col xl:flex-row gap-8 xl:gap-25 xl:pt-8">
            {/* image */}
            <div className="grid place-items-center py-4 md:py-12 xl:py-0">
              <img src={moon} alt="" className="w-37.5 md:w-75 xl:w-120 aspect-1" />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-6 xl:gap-10 items-center md:items-start text-center md:text-start">
              <nav>
                <ul className="flex gap-8 numbered-title items-start justify-center underline-indicators plain h-8 text-cust-300">
                  <li aria-selected="true">Moon</li>
                  <li>Mars</li>
                  <li>Europa</li>
                  <li>Titan</li>
                </ul>
              </nav>
              <div className="flex flex-col gap-4 max-w-md md:max-w-lg">
                <h2 className="uppercase font-cust-serif text-7xl xl:text-cust-800">Moon</h2>
                <p className="para">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
              </div>
              <hr className="text-white/25  w-full" />
              {/* Time */}
              <div className="flex flex-col md:flex-row gap-6 uppercase w-full">
                <div className="flex flex-col gap-3 flex-1">
                  <div className=" text-cust-200 text-cust-light">
                    Avg. distance
                  </div>
                  <div className="text-cust-500 font-cust-serif">
                    384,400 km
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="text-cust-200 text-cust-light">
                    Est. travel time
                  </div>
                  <div className="text-cust-500 font-cust-serif">3 days</div>
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
