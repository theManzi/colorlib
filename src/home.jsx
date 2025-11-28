import React from 'react'
import About from "./components/about";
import Blog from "./components/blog-1";
import Casestudy from "./components/casestudy";
import Content from "./components/content";
import ReadersCord from "./components/readerscord";
import Services from "./components/services";
import Testmonial from "./components/testmonial";


const Home = () => {
  return (
    <div>
      <Content />
      <About />
      <Services />
      <Casestudy />
      <ReadersCord />
      <Testmonial />
      <Blog />
      
    </div>
  );
}

export default Home