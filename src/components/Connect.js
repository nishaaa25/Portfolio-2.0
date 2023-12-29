import React from "react";
import Card from "../utils/Card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import asset7 from "../assets/asset 7.png";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const Connect = () => {
  return (
    <div className="w-[325px] h-[392px] relative">
      <Card>
        <h3 className="heading-text pb-6">Connect</h3>
        <div>
          <div className="flex justify-start items-center gap-4 p-3 text-sm">
            <LinkedInIcon style={{ color: "white", opacity: 0.7 }} />
            <p className="text-white text-opacity-[70.0%]">LinkedIn</p>
          </div>
          <div className="flex justify-start items-center gap-4 p-3 text-sm">
            <MailIcon style={{ color: "white", opacity: 0.7 }} />
            <p className="text-white text-opacity-[70.0%]">Email</p>
          </div>
          <div className="flex justify-start items-center gap-4 p-3 text-sm">
            <GitHubIcon style={{ color: "white", opacity: 0.7 }} />
            <p className="text-white text-opacity-[70.0%]">GitHub</p>
          </div>
          <div className="h-[2px] w-[259px] bg-white bg-opacity-[6.00%] mt-[72px] mb-4"></div>
          <div className="flex justify-start items-center gap-2 ">
            <div className="p-[6px]  bg-white bg-opacity-[6.00%] rounded-md">
              <img src={asset7} alt="hand" className="w-[22px]"/>
            </div>
            <div>
              <p className="info-text pb-1">Let's Work Together!</p>
              <p className="info-text gap-2">
                Send Email <EastRoundedIcon style={{fontSize: "small"}}/>
                <a href="mailto:nishaaa0315@gmail.com" className="text-white text-opacity-[70.0%]"> nishaaa0315@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Connect;
