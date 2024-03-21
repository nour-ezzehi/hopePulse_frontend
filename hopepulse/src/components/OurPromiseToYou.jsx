import React from 'react'
import SCButton from './SCButton'

const OurPromiseToYou = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-10 text-fafafa'>🚀 Our Promise to You:</h1>
      <div className="">
        <ol className="flex flex-col space-y-6 text-fafafa">
          <li className='text-3xl font-semibold'>When you raise funds on hopepulse, you’re not just collecting dollars; you’re weaving a tapestry of hope.</li>
          <li className='text-3xl font-semibold'>Together, we’ll create ripples of change that echo across time and touch countless lives.</li>
          <li className="text-3xl font-semibold">Every donation is a brushstroke, painting a brighter future for someone in need.</li>
        </ol>
        <SCButton textColor="third" heartColor="third" buttonColor="fafafa"/>
      </div> 
    </>
  )
}

export default OurPromiseToYou
