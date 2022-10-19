import React from 'react'
import { Navbar, Hero, InterSource, Workers, LabourMarket, Industries, Supported, HeadLine, Footer } from './components'

const App = () => {
  return (
    <>
      <div className='bg-img'>
        <div className='max-w-[85%] mx-auto'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className='bg-[#D9D9D9] pt-20 min-h-screen'>
        <div className='max-w-[85%] mx-auto'>
        <InterSource />
        </div>
      </div>
      <div className='pt-8 w-full min-h-screen bg-[#3480F1] '>
        <Workers />
      </div>
      <div className='bg-[#D9D9D9]'>
        <div className='max-w-[85%] mx-auto'>
        <LabourMarket />
        <Industries />
        </div>
      </div>
      <div className='bg-[#D9D9D9] min-h-screen'>
        <Supported />
      </div>
      <div className='bg-[#3480F1] min-h-screen pt-20'>
        <HeadLine />
      </div>
      <div className='bg-[#D9D9D9] min-h-screen'>
        <div className='max-w-[85%] mx-auto'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App