import React from 'react'
import { Link } from 'react-router-dom'
import SCButton from './SCButton';

const WhyStartWithUs = () => {
  const h2Class = "text-md font-medium text-grayish hover:text-primary";
  return (
    <>
      <div className='flex flex-col items-center mt-20 mx-auto'>
        <h1 className='font-bold text-2xl text-primary text-center mb-4'>Why Start Your Campaign with Us?</h1>
        <p className='text-md mb-6 text-grayish w-5/6'><span className="text-xl">Welcome to Hopepulse, </span>, where every heartbeat fuels change and every step transforms lives. Your journey begins here, where passion meets purpose, and dreams take flight. Together, let's paint a canvas of hope, compassion, and boundless possibilities.</p>
      </div>
      <div className="mx-auto custom-height bg-cover bg-no-repeat mb-8" style={{ backgroundImage: `url('../images/bg-image.png')`,backgroundSize: 'cover', height: '500px', width: '1140px'}}>
        <h1 className="text-3xl font-bold flex text-fafafa text-center w-full p-36 my-2">Ignite Positivity with Hopepulse: Turn Passion Into Purpose💚</h1>
      </div>
      <div>
      <div className='ml-40 mt-12 space-y-5'>
      <h1 className="text-2xl font-bold text-grayish mb-4">Start your Campaign, Let me tell you why!</h1>
      <h2 className={h2Class}>Heartfelt Guidance for Your Journey</h2>
      <ol className='list-disc ml-10'>
        <li>Begin by clicking the <Link className='underline underline-offset-2 hover:text-secondary' to='/campaign'> Start Your Campaign</Link> button and enter essential details to kick things off.</li>
      </ol>
      <h2 className={h2Class}>Join the Movement: Connect, Inspire, Transform</h2>
      <ol className='list-disc ml-10'>
        <li>Share your campaign link through social media posts, text messages and emails.</li>
        <li>Increase momentum by printing flyers or sending letters to acquaintances.</li>
      </ol>
      <h2 className={h2Class}>Unleash Your Potential with Transformation Tools</h2>
      <ol className='list-disc ml-10'>
        <li>Along your fundraising journey, send frequent updates to celebrate milestones, announce important moments, and acknowledge donors.</li>
        <li>Head to our <Link className="hover:text-primary underline underline-offset-1" to="/tutorial"> tutorial </Link> for guides on asking for donations and writing donation thank-you notes.</li>
      </ol>
      <h2 className={h2Class}>U Ready to Shine? Start Your Journey Today</h2>
      <ol className='list-disc ml-10'>
        <li>Enter banking information to commence receiving funds instantly (no requirement to meet your goal).</li>
        <li>Appoint a designated beneficiary if you're raising funds for somebody else.</li>
        <li>Note that a nominal service charge applies per donation. Refer to our <Link className="hover:text-primary underline underline-offset-3" to="pricingpage">pricing page </Link>for more details.</li>
      </ol>
      </div>
      </div>
      <div className="ml-40 mb-20 hover:bg-white">
      <SCButton textColor="fafafa" heartColor="fafafa" buttonColor="primary"/>
      </div>
    </>
  )
}

export default WhyStartWithUs;
