import Componies from "./components/Componies/Componies";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Footer from "./components/Footer/Footer";
import "./App.css"
function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Hero/>
      </div>
      <Componies/>
      <Residencies/>
      <Values/>
      <GetStarted/>
      <Footer/>

    </div>
  );
}

export default App;