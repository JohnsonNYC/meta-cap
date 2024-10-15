import React from "react";
import Banner from "./Banner";
import Specials from "./Specials";
import Header from "./Header";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import About from "./About";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Specials />
        <Testimonials />
        {/* <About /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
