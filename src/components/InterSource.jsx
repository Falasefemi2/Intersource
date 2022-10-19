import React from "react";
import { interSource } from "../constant";

const InterSource = () => {
  return (
    <>
      <div className="font-bold text-[40px] leading-[56px] uppercase linear-text">
        why intersource
      </div>
      <div className="mt-20">
        {interSource.map((source) => (
          <div
            key={source.id}
            className="flex even:flex-row-reverse justify-between items-center mt-12 pb-40"
          >
            <div className="flex flex-col justify-start items-start">
              <p className="text-[24px] leading-[33.6px] text-[#102544] font-semibold capitalize w-[352px] mb-1">
                {source.heading}
              </p>
              <p className="mt-4 mb-4 font-normal text-[14px] text-[#585858] leading-[150%] capitalize w-[517px] h-[135px]">
                {source.content}
              </p>
            </div>
            <img
              src={source.img}
              alt="img"
              className="w-[550px] h-[384px] rounded-[31px]"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InterSource;
