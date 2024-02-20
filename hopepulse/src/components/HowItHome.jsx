import React from 'react';
import { Link } from 'react-router-dom';

const HowItHome = () => {
  const h2Class = "text-md font-medium text-grayish";
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
      <div className='ml-40 mt-20 mb-20 space-y-2'>
      <h1 className="text-2xl font-bold text-grayish mb-4">Get Started with Hopepulse: Step-by-Step Guide:</h1>
      <h2 className={h2Class}>1. Set Up Your Fundraiser</h2>
      <ol>
        <li>Begin by clicking the <Link className='underline underline-offset-2' to='/campaign'> Start Your Campaign</Link> button and enter essential details to kick things off.</li>
        <li>Craft your inspirational story in 1–3 paragraphs, clearly articulating the reason for your fundraiser. Looking for extra insight? View our tutorial on writing a moving fundraiser story.</li>
      </ol>
      <h2 className={h2Class}>2. Spread the Word</h2>
      <ol>
        <li>Share your campaign link with your circle through text messages, emails, and social media posts.</li>
        <li>Increase momentum by printing flyers or sending letters to acquaintances.</li>
        <li>Invite trusted associates to join your campaign as Team Members to multiply your reach. Visit our fundraiser awareness video for helpful tips.</li>
      </ol>
      
      <h2 className={h2Class}>3. Post Updates and Say Thank You</h2>
      <ol>
        <li>Along your fundraising journey, send frequent updates to celebrate milestones, announce important moments, and acknowledge donors.</li>
        <li>Head to our blog for guides on asking for donations and writing donation thank-you notes.</li>
      </ol>
      
      <h2 className={h2Class}>4. Manage Financials Securely</h2>
      <ol>
        <li>Enter banking information to commence receiving funds instantly (no requirement to meet your goal).</li>
        <li>Appoint a designated beneficiary if you're raising funds for somebody else.</li>
        <li>Note that a nominal service charge applies per donation. Refer to our pricing page for more details.</li>
      </ol>
      </div>
      
      </div>

    </>

  )
}

export default HowItHome
