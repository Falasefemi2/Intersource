import React from 'react'
import { support } from '../constant'

const Supported = () => {
  return (
    <div className='pt-40'>
      <div className='text-[40px] font-bold leading-[49px] text-[#000000] flex justify-center items-center'>
      Trusted and supported by
      </div>
      <div className='mx-4 px-4 pt-14 grid grid-cols-5 space-x-4  justify-center items-center'>
        {support.map((supp) => (
          <div key={supp.id}>
            <img src={supp.img} alt="img" className='mt-4 w-[250px] h-[75px]' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Supported