import Card from "../utils/Card";
import React from "react";
import asset13 from "../assets/asset13.png";

const LetsTalk = () => {
  return (
    <div className="mt-3 w-full h-full relative">
      <Card>
        <div className=" px-[64px] py-[2px] flex items-center gap-8">
          <div>
            <img
              src={asset13}
              alt="collabrate"
              className="w-[280px] object-cover"
            />
          </div>
          <div className="w-7/12">
            <h1 className="text-[32px] font-semibold tracking-[0.9px] pb-[10px]">
              Ready to kickstart your project with a touch of magic?{" "}
            </h1>
            <p className="info-text mb-6">
              <span className="text-white">
                Reach out and let's make it happen ✨.
              </span>
               I'm available for Full-time or Part-time opportunities to
              push the boundaries of mine and deliver exceptional work.
            </p>
            <div className="text-base custom-gradient px-4 py-2 rounded-3xl inline-block">
              Let's Talk <span>🤩</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LetsTalk;
