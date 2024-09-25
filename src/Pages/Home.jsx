import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Boxes from "../Components/Boxes";
import Delivery from "../Components/Delivery";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import Manifacture from "../Components/Manifacture";
import Whatsapp from "../Components/Whatsapp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Boxes />
      <Delivery/>
      <Manifacture/>
      <Feature />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Home;
