import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Smart Eating Plan
        <span className="bg-gradient-to-r from-green-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          for Wellness
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        DiaMeals offers a smart eating plan tailored to your needs & provides
        personalized food options to support wellness and manage diabetes
        effectively. Discover how simple and enjoyable managing your diet can be
        with DiaMeals.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>

        <a href="#" className="py-3 px-4 mx-3 rounded-md border ">
          Documentation
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        {/* Video 01 */}
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-green-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" /> Your browser does not support
          the video tag.
        </video>

        {/* Video 2 */}

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-green-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" /> Your browser does not support
          the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
