import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ContactPage from "./Pages/ContactUs/contact-us.jsx";
import Footer from "./components/Footer/footer";
import Home from "./Pages/Home/home";
import ServiceOffering from "./Pages/ServiceOffering/service-offering.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact-us" element={<ContactPage/>}/>
            <Route path="/service-offering" element={<ServiceOffering/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
