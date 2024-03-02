import React from 'react'
import { Link } from 'react-router-dom' 
import SCButton from './SCButton'

const WhyChooseHopepulse = () => {
  return (
    <div className='my-20 p-40 bg-third'>
      <h1 className='text-4xl font-bold mb-10 text-fafafa'>🌟 Why Choose hopepulse?</h1>
      <div className="">
        <ol className="flex flex-col space-y-6 text-fafafa">
          <li className='text-3xl font-semibold'>Our team of heart-driven experts stands by your side, ensuring every campaign is infused with empathy and purpose.</li>
          <li className='text-3xl font-semibold'>With our user-friendly interface, donating or fundraising becomes as effortless as a gentle breeze.</li>
          <p className="text-xl">Looking for extra insight? View our <Link className="hover:text-grayish underline underline-offset-1" to="/tutorial">tutorial on writing a moving fundraiser story</Link></p>
        </ol>
        <SCButton textColor="third" heartColor="third" buttonColor="fafafa"/>
      </div>
    </div>
  )
}

export default WhyChooseHopepulse
