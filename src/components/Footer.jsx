import React from "react";
import footerLogo from "../assets/image 1.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/Vector.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="pt-28 flex-1">
      <div>
        <img src={footerLogo} alt="footerlogo" className="w-[159px] h-[40px]" />
      </div>
      <div className="flex justify-end my-4 space-x-8 cursor-pointer">
        <div className="flex flex-col space-y-4 tracking-tighter">
          <p className="leading-[24px] font-normal text-[#73758C] text-[14px]">
            Privacy & Terms
          </p>
          <p className="leading-[24px] font-normal text-[#73758C] text-[14px]">
            Feedbacks
          </p>
          <p className="leading-[24px] font-normal text-[#73758C] text-[14px]">
            Contact us
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="leading-[24px] font-normal text-[#73758C] text-[14px]">
            Help & Support
          </p>
          <p className="leading-[24px] font-normal text-[#73758C] text-[14px]">
            Feedbacks
          </p>
          <p className="leading-[24px] font-normal text-[#73758C] text-[14px]">
            Contact us
          </p>
        </div>
        <div className="flex flex-col">
          <p className="capitalize text-[#73758C] font-normal leading-[18px] w-[245px] h-[36px] text-[14px] t">
            Subscribe now to get updates about new job openings.
          </p>
          <input
            type="text"
            placeholder="Enter email"
            className="border-[#3480F1] border-[1px] rounded-[9px] h-[44px] w-[236px] mt-4 placeholder-[#3480F1] text-xs leading-4 font-normal bg-[#D9D9D9] p-2 outline-none"
          />
          <button className="bg-[#3480F1] w-[236px] h-11 px-[85px] py-[13px] rounded-[9px] mt-4 flex justify-center items-center text-white capitalize leading-[18px] text-sm font-normal">
            subscribe
          </button>
        </div>
      </div>
      <hr className="border-[1px] mt-10 border-[#D3D4DE] border-solid w-[1080px]" />
      <div className="relative mt-20 flex justify-end items-center space-x-4">
        <div className="bg-[#3480F1] w-10 h-10 rounded-3xl relative flex justify-center items-center">
          <img
            src={facebook}
            alt="facebook"
            className="h-5 rounded-[50%] inline-block absolute"
          />
        </div>
        <div className="bg-[#3480F1] w-10 h-10 rounded-3xl relative flex justify-center items-center">
          <img
            src={instagram}
            alt="facebook"
            className="h-5 rounded-[50%] inline-block absolute"
          />
        </div>
        <div className="bg-[#3480F1] w-10 h-10 rounded-3xl relative flex justify-center items-center">
          <img
            src={twitter}
            alt="facebook"
            className="h-5 rounded-[50%] inline-block absolute"
          />
        </div>
        <div className="bg-[#3480F1] w-10 h-10 rounded-3xl relative flex justify-center items-center">
          <img
            src={whatsapp}
            alt="facebook"
            className="h-5 rounded-[50%] inline-block absolute"
          />
        </div>
        <div className="bg-[#3480F1] w-10 h-10 rounded-3xl relative flex justify-center items-center">
          <img
            src={youtube}
            alt="facebook"
            className="h-5 rounded-[50%] inline-block absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
