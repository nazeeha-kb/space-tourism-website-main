import React from "react";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <div className="min-h-screen home-bg bg-main flex flex-col">
      <Navbar />
      <main className="flex justify-center flex-1">
        <article className="gap-12 flex flex-col xl:flex-row xl:items-end items-center w-6xl xl:px-0 md:px-10 p-6 xl:py-32  md:py-32">
          <div className="flex flex-col items-center justify-center gap-6 xl:max-w-lg md:max-w-md max-w-sm">
            <div className="flex flex-col gap-6 text-center xl:text-start xl:items-start xl:w-full">
              <p className="small-heading">So, you want to travel to</p>
              <h1 className="large-heading">Space</h1>
              <p className="text-cust-light md:text-cust-300 text-cust-200 ">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="flex items-center xl:justify-end justify-center flex-1">
            <button className="large-button">Explore</button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default home;
