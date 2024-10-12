import React from "react";
import { Footer, Header, HeroSection, Navbar } from "./components";
import { Shop } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
