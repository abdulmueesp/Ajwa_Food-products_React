import React from "react";
import Banner from "../Components/Banner";
import Boxes from "../Components/Boxes";
import Delivery from "../Components/Delivery";
import Feature from "../Components/Feature";
import Manifacture from "../Components/Manifacture";
import Whatsapp from "../Components/Whatsapp";

const Home = () => {
  return (
    <div>
      <Banner />
      <Boxes />
      <Delivery/>
      <Manifacture/>
      <Feature />
      <Whatsapp />
    </div>
  );
};

export default Home;
