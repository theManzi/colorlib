import About from "./components/about";
import Blog from "./components/blog";
import Casestudy from "./components/casestudy";
import Content from "./components/content";
import ReadersCord from "./components/readerscord";
import Services from "./components/services";
import Testmonial from "./components/testmonial";
import Footer from "./navigations/footer";


import Header from "./navigations/header";

function App() {
  return (
    <div className=" scroll-smooth">
      <Header />
      <Content />
      <About />
      <Services />
      <Casestudy />
      <ReadersCord />
      <Testmonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
