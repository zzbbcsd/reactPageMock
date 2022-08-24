import React from "react";
import Navbar from "./components/Navbar";
import FeaturedSection from "./components/featuredSection";
import AboutAuthor from "./components/AboutAuthor";
import MoreBooks from "./components/MoreBooks";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedSection />
      <AboutAuthor />
      <MoreBooks />
      <Footer />
    </div>
  );
}
