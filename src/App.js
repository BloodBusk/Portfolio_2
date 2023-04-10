import './App.css';

import "./fonts/Inter-Regular.ttf";

import Header from "./components/Header"
import Hero from "./components/Hero"
import Mywork from "./components/Mywork"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Mywork />
      <About />
    </div>
  );
}

export default App;
