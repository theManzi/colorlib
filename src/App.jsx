import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./navigations/footer";


import Home from "./home";
import About from "./About";
import Blog from "./Blog";
import Work from "./Work";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Header from "./navigations/header";
import ServicesPage from "./ServicesPage";

function App() {
  return (
    <div className=" scroll-smooth ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          
         
        
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
