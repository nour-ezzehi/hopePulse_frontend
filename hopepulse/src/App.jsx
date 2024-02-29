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
import CampaignPage from './pages/CampaignsPage';
import CampaignRecievedPage from './pages/CampaignRecievedPage';
import SingleCampaignPage from './pages/SingleCampaignPage';
import ForIndividualsPage from './pages/ForIndividualsPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout className="bg-white" />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/campaignsPage" element={<CampaignPage />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/pricingpage" element={<PricingPage />} />
            <Route path="/why-start-with-us" element={<WhyStartWithUsPage />} /> {/* Add the new route */}
            <Route path='/campaignRecieved' element={<CampaignRecievedPage />} />
            <Route path="/campaign/:id" element={<SingleCampaignPage />} />
            <Route path="/forIndividualsPage" element={<ForIndividualsPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <SmoothScroll />
    </>
  );
}

export default App;
