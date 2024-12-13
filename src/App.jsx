import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Navbar";
import Mytech from "./components/MyTech/Mytech";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Mytech />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
