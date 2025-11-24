import About from "./components/about";
import Blog from "./components/blog";
import Casestudy from "./components/casestudy";
import Content from "./components/content";
import ReadersCord from "./components/readerscord";
import Services from "./components/services";
import Testmonial from "./components/testmonial";


import Header from "./navigations/header";

function App() {
  return (
    <div className="justify-items-center-">
      <Header />
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

export default App;
