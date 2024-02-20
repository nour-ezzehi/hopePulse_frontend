import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Campaign from './components/Campaign';
import HowItWorks from './components/HowItWorks';
import Tutorial from './components/Tutorial';
import PricingPage from './components/PricingPage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Render Layout component when the user visits the root URL */}
          <Route path="/" element={<Layout className="bg-fafafa" />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/pricingpage" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
      <SmoothScroll />
    </>
  );
}

export default App
