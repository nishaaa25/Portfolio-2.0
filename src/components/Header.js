import React from "react";
import asset1 from "../assets/asset 1.png";
import asset53 from "../assets/asset 53.svg";
import asset54 from "../assets/asset 54.svg";
import asset55 from "../assets/asset 55.svg";
import asset56 from "../assets/asset 56.svg";

const Header = () => {
  return (
    <div className="w-full pb-7 h-[158px]">
      <div className="w-[420px] m-auto bg-black bg-opacity-[6.00%] p-[6px] rounded-[55px] custom-border backdrop-blur-md">
        <div className="flex-short bg-black-600 bg-opacity-[90.0%] rounded-[55px] p-3 custom-border custom-shadow">
          <div className="w-full flex justify-between items-center">
            <div className="w-10 h-10 flex-short rounded-full custom-border box-shadow bg-white overflow-hidden group">
              <div className="scale-[1.4] transition group-hover:scale-[1]">
                <img src={asset1} alt="logo" className="w-full" />
              </div>
            </div>
            <div className="w-10 h-10 flex-short rounded-full custom-border box-shadow">
              <img src={asset53} alt="logo" className="w-[22]" />
            </div>
            <div className="w-10 h-10 flex-short rounded-full custom-border box-shadow">
              <img src={asset54} alt="logo" className="w-[22]" />
            </div>
            <div className="w-10 h-10 flex-short rounded-full custom-border box-shadow">
              <img src={asset55} alt="logo" className="w-[22]" />
            </div>
            <div className="w-10 h-10 flex-short rounded-full custom-border box-shadow ">
              <img src={asset56} alt="logo" className="w-[22]" />
            </div>
            <div className="w-[1px] h-8 bg-white bg-opacity-10"></div>
            <div className="text-base custom-gradient px-4 py-2 rounded-3xl ">
              Say Hello! <span>👋</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
