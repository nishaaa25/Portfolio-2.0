import React from "react";

const Hero = () => {
  return (
    <div className="w-full py-[75px] px-8 z-10">
      <div>
        <p className="text-base pb-6 text-white text-opacity-[80.0%]">Hey there!</p>
        <h1 className="text-[42px] leading-[63px] pb-6 font-semibold tracking-[0.9px]">
          I'm Nisha, a frontend developer crafting captivating websites, turning
          code into digital masterpieces.
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] bg-green-400 rounded-full"></div>
          <p className="info-text">
            <a href="https://docs.google.com/document/d/1-2UI8KjtDIqJsC9zEE2oyXclVxS694PVTidnlSgwYI8/edit?usp=sharing" target="blank">
              Download My Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
