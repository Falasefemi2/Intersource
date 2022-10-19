import React from 'react'

const HeadLine = () => {
  return (
    <div className='pt-20'>
      <div className='capitalize text-[36px] font-semibold leading-[43.88px] text-[#FFFFFF] w-[516px] h-[48px] text-center mx-auto mt-2'>
      what are you waiting for?
      </div>
      <div className='capitalize text-[#F2F2F2] font-normal text-[24px] text-center mx-auto w-[618px] h-[62px] mt-4'>
      Intersource is ready to help you find the workers your company needs! 
      </div>
      <div>
        <button className='capitalize px-[39px] py-[13px] bg-[#FFFFFF] rounded-[10px] h-[50px] mx-auto mt-10 flex justify-center items-center text-[#3480F1] font-normal text-[14px] leading-[18px]'>request a quote</button>
      </div>
    </div>
  )
}

export default HeadLine