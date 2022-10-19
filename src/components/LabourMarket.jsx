import React from "react";
import { marketImage } from "../constant";

const LabourMarket = () => {
  return (
    <div className="pt-20">
      <div className="font-bold text-[40px] leading-[48.76px] w-[953px] text-[#102544] text-center mx-auto">
        We have Excellent Knowledge of Foreign Labour Markets
      </div>
      <div className="pt-24 grid grid-cols-3 gap-4 grid-rows-3 justify-center items-center">
        {marketImage.map((market) => (
            <img key={market.id} src={market.img} alt="" className="rounded-[16.208px] first:w-[380px] first:h-[303.61px] [&:nth-child(2)]:w-[258.18px] [&:nth-child(2)]:h-[202.77px] [&:nth-child(3)]:w-[418.84px] [&:nth-child(3)]:ml-[-70px] [&:nth-child(3)]:h-[303.61px] [&:nth-child(2)]:ml-[10px] last:w-[336px] last:h-[420px] last:rounded-[17px] [&:nth-child(4)]:w-[274px] [&:nth-child(4)]:rounded-[17px] [&:nth-child(4)]:h-[380px] [&:nth-child(4)]:ml-[50px] [&:nth-child(5)]:w-[380.06px] [&:nth-child(5)]:h-[354.58px] [&:nth-child(5)]:ml-[-20px]" />
        ))}
      </div>
    </div>
  );
};

export default LabourMarket;
