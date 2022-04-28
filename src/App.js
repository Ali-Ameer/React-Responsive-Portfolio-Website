import About from "./components/About";
import Contact from "./components/Conact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio />
      <Testimonial/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
