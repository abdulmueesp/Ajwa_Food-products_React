import React from "react";
import Banner from "../Components/Banner";
import Boxes from "../Components/Boxes";
import Delivery from "../Components/Delivery";
import Feature from "../Components/Feature";
import Manifacture from "../Components/Manifacture";
import Whatsapp from "../Components/Whatsapp";
import Layout from "../Components/Layout";
const Home = () => {
  return (
    <div>
      <Layout>
      <Banner />
      <Boxes />
      <Delivery/>
      <Manifacture/>
      <Feature />
      <Whatsapp />
      </Layout>
    </div>
  );
};

export default Home;
