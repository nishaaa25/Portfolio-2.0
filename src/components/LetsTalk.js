import Card from "../utils/Card";
import React from "react";
import asset13 from "../assets/asset13.png";

const LetsTalk = () => {
  return (
    <div className="mt-3 w-full h-full relative">
      <Card>
        <div className="px-2 xl:px-[64px] py-[2px] flex flex-wrap items-center gap-8">
          <div className="m-auto">
            <img
              src={asset13}
              alt="collabrate"
              className="w-[310px] lg:w-[280px] object-cover"
            />
          </div>
          <div className="w-full lg:w-7/12">
            <h1 className="text-[32px] font-semibold tracking-[0.9px] pb-[10px]">
              Ready to kickstart your project with a touch of magic?
            </h1>
            <p className="info-text mb-6">
              <span className="text-white">
                Reach out and let's make it happen ✨.
              </span>
              I'm available for freelance work, Full-time or Part-time
              opportunities, and discussions about the latest in frontend
              development. Whether you have a specific project in mind or just
              want to say hello, I'm looking forward to hearing from you!
            </p>
            <div className="text-base custom-gradient px-4 py-2 rounded-3xl inline-block">
              <a href="mailto:nishaaa0315@gmail.com">
                Let's Talk <span>🤩</span>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LetsTalk;
