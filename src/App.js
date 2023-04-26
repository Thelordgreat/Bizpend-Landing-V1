import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Stats />
      <Features />
      <Testimonials />
      <Faq />
      <Pricing />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
