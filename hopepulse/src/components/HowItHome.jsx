import React from 'react';
import { Link } from 'react-router-dom';
import SCButton from './SCButton';

const HowItHome = () => {
  const h2Class = "text-md font-medium text-grayish hover:text-primary";
  return (
    <>
      <div className='flex flex-col items-center mt-40 mx-auto bg-fafafa'>
        <h1 className='font-bold text-3xl text-primary text-center mb-4'>How hopePulse Works</h1>
        <p className='text-md mb-16 text-grayish w-5/6'>Welcome to Hopepulse, the ultimate destination for rallying support for what truly matters to you! Hopepulse is the perfect platform to rally support for whatever moves you, whether you're an individual, group, or organization. Launch your fundraising campaign in minutes and watch your community come together to make a difference.</p>
      </div>
      <div className="mx-auto custom-height bg-cover bg-no-repeat mb-8" style={{ backgroundImage: `url('../images/bg-image.png')`,backgroundSize: 'cover', height: '500px', width: '1140px'}}>
          <h1 className="text-3xl font-bold flex text-fafafa text-center w-full p-36 my-2">Ignite Positivity with Hopepulse: Turn Passion Into Purpose💚</h1>
      </div>
      <div>
      <div className='ml-40 mt-20 space-y-5'>
      <h1 className="text-2xl font-bold text-grayish mb-4">Get Started with Hopepulse: Step-by-Step Guide:</h1>
      <h2 className={h2Class}>1. Set Up Your Fundraiser</h2>
      <ol className='list-disc ml-10'>
        <li>Begin by clicking the <Link className='underline underline-offset-2 hover:text-secondary' to='/campaign'> Start Your Campaign</Link> button and enter essential details to kick things off.</li>
        <li>Craft your inspirational story, clearly articulating the reason for your fundraiser. Looking for extra insight? View our <Link className="hover:text-primary underline underline-offset-1" to="/tutorial">tutorial on writing a moving fundraiser story</Link>.</li>
      </ol>
      <h2 className={h2Class}>2. Spread the Word</h2>
      <ol className='list-disc ml-10'>
        <li>Share your campaign link through social media posts, text messages and emails.</li>
        <li>Increase momentum by printing flyers or sending letters to acquaintances.</li>
      </ol>
      
      <h2 className={h2Class}>3. Post Updates and Say Thank You</h2>
      <ol className='list-disc ml-10'>
        <li>Along your fundraising journey, send frequent updates to celebrate milestones, announce important moments, and acknowledge donors.</li>
        <li>Head to our <Link className="hover:text-primary underline underline-offset-1" to="/tutorial"> tutorial </Link> for guides on asking for donations and writing donation thank-you notes.</li>
      </ol>
      
      <h2 className={h2Class}>4. Manage Financials Securely</h2>
      <ol className='list-disc ml-10'>
        <li>Enter banking information to commence receiving funds instantly (no requirement to meet your goal).</li>
        <li>Appoint a designated beneficiary if you're raising funds for somebody else.</li>
        <li>Note that a nominal service charge applies per donation. Refer to our <Link className="hover:text-primary underline underline-offset-3" to="pricingpage">pricing page </Link>for more details.</li>
      </ol>
      </div>
      </div>
      <div className="ml-40 mb-20">
      <SCButton textColor="fafafa" heartColor="fafafa" buttonColor="primary" hoverColor="grayish"/>
      </div>
    </>

  )
}

export default HowItHome
