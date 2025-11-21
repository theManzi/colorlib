import About from "./components/about";
import Casestudy from "./components/casestudy";
import Content from "./components/content";
import Services from "./components/services";

import Header from "./navigations/header";

function App() {
  return (
    <div className="justify-items-center-">
      <Header />
      <Content />
      <About />
      <Services />
      <Casestudy />
    </div>
  );
}

export default App;
