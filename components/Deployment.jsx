import Image from 'next/image'
import React from 'react'
import Steps from './Steps'

const MarketStories = () => {
  return (
    <div className='z-40 pt-8 px-5'>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image className="w-full" src="/project.svg" width={363}
          height={100} alt="project"/>
  <div className=" ">
    <div className="font-bold text-xl mb-2 ">You are almost done.</div>
    <p className=" text-base">
    Please follow the steps to configure your Project and deploy it.    </p>
  </div>
  <div className='pt-5'>

  <Steps/>
  </div>
</div>
    </div>
  )
}

export default MarketStories