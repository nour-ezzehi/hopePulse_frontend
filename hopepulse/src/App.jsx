import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Render Layout component when the user visits the root URL */}
          <Route path="/" element={<Layout className="bg-fafafa" />} />
          <Route path = "/signup" element={<SignupPage />} />
          <Route path = "/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <SmoothScroll />
    </>
  );
}

export default App
