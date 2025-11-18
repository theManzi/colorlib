import About from "./components/about";
import Content from "./components/content";
import Services from "./components/services";

import Header from "./navigations/header";

function App() {
  return (
    <div className="items-center justify-center">
      <Header />
      <Content />
      <About />
      <Services/>
    </div>
  );
}

export default App;
