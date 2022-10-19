import React from "react";
import { industriesImage } from "../constant";

const Industries = () => {
  return (
    <div className="mt-[-200px]">
      <div className="text-center mx-auto font-bold text-[48px] leading-[58.51px] h-[118px] w-[550px] capitalize text-[#000000]">we serve diverse range of industires</div>
      <div className="text-[#1E1E1E] font-[20px] leading-[30px] font-normal text-center mx-auto w-[891px] h-[60px] mt-8"> our goal Is to match the right candidate to the right job. In order to achieve this goal, we apply rigorous selection process to recruit candidates for various jobs</div>
      <div className="w-full grid grid-cols-4">
        {industriesImage.map((indimg) => (
          <div key={indimg.id} className="mt-4 relative">
            <img src={indimg.img} alt="indimg" className="img-gradient w-[277px] h-[523px]" />
          <div className="text-[24px] text-[#FFFFFF] capitalize font-medium top-[430px] left-3 absolute flex justify-center items-center">
            {indimg.content}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
