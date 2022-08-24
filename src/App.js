import React from "react";
import Navbar from "./components/Navbar";
import FeaturedSection from "./components/featuredSection";
// import ShortStories from "./components/shortStories";
// import WhatIsMore from "./components/whatIsMore";
import AboutAuthor from "./components/AboutAuthor";
import MoreBooks from "./components/MoreBooks";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedSection />
      {/* <ShortStories /> */}
      {/* <WhatIsMore /> */}
      <AboutAuthor />
      <MoreBooks />
      <Footer />
    </div>
  );
}
