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
import CategoryPageWrapper from './pages/CategoryPageWrapper';
import ActivationPage from './pages/ActivationPage';
import PendingActivationPage from './pages/PendingActivationPage';
import { UserInformationsProvider } from './contexts/UserInformationsContext';
import CompleteProfilePage from './pages/CompleteProfilePage';
import ProfilePage from './pages/ProfilePage';
import MyCampaignsPage from  './pages/MyCampaignsPage';
import UpdateCampaignPage from  './pages/UpdateCampaignPage'
import './fontawesome'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <UserInformationsProvider>
            <Routes>
              <Route path="/" element={<Layout />} />
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
              <Route path="category/:category" element={<CategoryPageWrapper/>} />
              <Route path="/activate/:uid/:token" element={<ActivationPage />} />
              <Route path="/pending-activation" element={<PendingActivationPage />} />
              <Route path="/completeProfile" element={<CompleteProfilePage />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/MyCampaigns" element={<MyCampaignsPage />} />
              <Route path="/updateCampaignPage/:id" element={<UpdateCampaignPage />} />
            </Routes>
          </UserInformationsProvider>
        </AuthProvider>
      </BrowserRouter>
      <SmoothScroll />
    </>
  );
}

export default App;
