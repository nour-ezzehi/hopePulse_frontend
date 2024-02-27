// App.js
import React from 'react';
import Layout from './pages/Layout';
import SmoothScroll from './components/SmoothScroll';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HowItWorks from './pages/HowItWorks';
import Tutorial from './components/Tutorial';
import PricingPage from './components/PricingPage';
import WhyStartWithUsPage from './pages/WhyStartWithUsPage';
import { AuthProvider } from './contexts/Authcontext';
import CampaignPage from './pages/CampaignPage';
import CampaignRecievedPage from './pages/CampaignRecievedPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout className="bg-white" />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/campaignPage" element={<CampaignPage />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/pricingpage" element={<PricingPage />} />
            <Route path="/why-start-with-us" element={<WhyStartWithUsPage />} /> {/* Add the new route */}
            <Route path='/campaignRecieved' element={<CampaignRecievedPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <SmoothScroll />
    </>
  );
}

export default App;
