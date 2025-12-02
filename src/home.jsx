import React from 'react'
import About from "./components/about";
import Blog from "./components/blog-1";
import Casestudy from "./components/casestudy";
import Content from "./components/content";
import ReadersCord from "./components/readerscord";
import Services from "./components/services";
import Testmonial from "./components/testmonial";
import ScrollFade from './components/scrollFade';


const Home = () => {
  return (
    <div>
      <ScrollFade>
        <Content />
      </ScrollFade>
      <ScrollFade>
        <About />
      </ScrollFade>
      <ScrollFade>
        <Services />
      </ScrollFade>
      <ScrollFade>
        <Casestudy />
      </ScrollFade>
      <ScrollFade>
        <ReadersCord />
      </ScrollFade>
      <ScrollFade>
        <Testmonial />
      </ScrollFade>
      <ScrollFade>
        <Blog />
      </ScrollFade>
    </div>
  );
}

export default Home