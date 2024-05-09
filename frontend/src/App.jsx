import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import AOS from "aos";
import "aos/dist/aos.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import FeedbackForms from "./Components/FeedbackForms/FeedbackForms";
import ProductReview from "./Components/ProductReview/ProductReview";


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
      {/* <switch> */}
        {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/feedbackforms' element={<FeedbackForms />}/>
        <Route path='/productreview' element={<ProductReview />} />
      </Routes>
        
      {/* </switch> */}
    </BrowserRouter>
    </main>
  );
};

export default App;
