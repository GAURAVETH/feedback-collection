import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import FeedbackForms from "./Components/FeedbackForms/FeedbackForms";
import ProductReview from "./Components/ProductReview/ProductReview";
import ClientReview from "./Components/ClientReview/ClientReview";
import WebsiteReview from "./Components/WebsiteReview/WebsiteReview";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AdminSignup from "./Components/AdminSignup/AdminSignup";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import User from "./Components/Feedback/User";
import Website from "./Components/Feedback/Website";
import Client from "./Components/Feedback/Client";
import Product from "./Components/Feedback/Product";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/feedbackforms' element={<FeedbackForms />} />
          <Route path='/productreview' element={<ProductReview />} />
          <Route path='/clientreview' element={<ClientReview />} />
          <Route path='/websitereview' element={<WebsiteReview />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/adminsignup' element={<AdminSignup />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/user" element={<User/>}/>
          <Route path="/website" element={<Website/>}/>
          <Route path="/client" element={<Client/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
