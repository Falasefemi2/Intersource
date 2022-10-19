import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full text-white mx-6 mt-[70px] flex flex-col items-start'>
      <div className='font-extrabold text-[80px] leading-[112px] w-[667px] h-[336px]'>
        Get the best <span className='text-[#3480F1]'>foreign staff</span> on your team
      </div>
      <div className='w-[617px] h-[120px] text-[20px] leading-[150%] mt-2 text-[#D8D8D8]'>
      At Intersource Global Inc., we apply the most highly developed and advanced methodologies that strive and recruit qualified candidates that meet the staffing need of companies
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <input type="text" placeholder='search for jobs or companies...' className="rounded-[10px] border-[0.67px] outline-none h-[46px] bg-transparent px-[12.6667px] py-[17px] w-[319px] placeholder:text-white placeholder:text-[14px] placeholder:font-normal placeholder:leading-[18px]" />
        <button className='bg-white rounded-[10px] w-[119px] h-[46px]  text-[#102544] flex justify-center items-center ml-2 font-normal text-[14px] leading-[18px]'>Explore</button>
      </div>
    </div>
  )
}

export default Hero