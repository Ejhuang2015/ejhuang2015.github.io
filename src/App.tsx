import React from 'react';
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import AboutMe from "./components/AboutMe";
import WebPortfolio from "./components/WebPortfolio";
import ArtPortfolio from "./components/ArtPortfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Billboard />
      <AboutMe />
      <WebPortfolio />
      <ArtPortfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
