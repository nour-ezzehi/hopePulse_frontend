// App.js
import React from 'react';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Campaign from './components/Campaign';
import HowItWorks from './components/HowItWorks';
import Tutorial from './components/Tutorial';
import PricingPage from './components/PricingPage';
import WhyStartWithUsPage from './pages/WhyStartWithUsPage';
import { AuthProvider } from './contexts/Authcontext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout className="bg-fafafa" />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/pricingpage" element={<PricingPage />} />
            <Route path="/why-start-with-us" element={<WhyStartWithUsPage />} /> {/* Add the new route */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <SmoothScroll />
    </>
  );
}

export default App;
