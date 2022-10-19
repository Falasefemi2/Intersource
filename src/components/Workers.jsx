import React from "react";
import { workers } from "../constant";

const Workers = () => {
  return (
    <>
      <div className="font-bold text-[40px] leading-[48.76px] text-white w-[350px] text-center mx-auto">
        Choose Our Foreign Workers
      </div>
      <div className="mt-10 max-w-[75%] mx-auto grid grid-cols-2">
        {workers.map((work) => (
          <div className="p-6 m-6" key={work.id}>
            <p className="text-white font-semibold capitalize text-[28px] leading-[150%] mb-2 flex justify-center items-center">{work.mainTitle}</p>
            <p className="text-[#D8D8D8] text-[16px] leading-[150%] capitalize font-normal text-center pt-2">{work.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Workers;
