import React from "react";
import Banner from "../components/Banner";
import Specials from "../components/Specials";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
