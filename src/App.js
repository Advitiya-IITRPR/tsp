import Hero from "./components/Hero";
import NavbarComp from "./components/Navbar";
import './App.css'
import About from "./components/About";
import Conduction from "./components/Conduction";

function App() {
  return (
    <>
      <div className="overlay moving-background">
        <div className="App">
          <NavbarComp />
          <Hero/>
          <About/>
          <Conduction/>
        </div>
      </div>
    </>
  );
}

export default App;
