import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Boxes from "../Components/Boxes";
import Card from "../Components/Card";
import Sample from "../Components/sample";
import Delivery from "../Components/Delivery";
const Home = () => {
 
  return (
    <div>
    <Navbar />  
     <Banner/>
     <Boxes />
     <Delivery/>
     <Card/>
     <Sample/>
    </div>

  );
};

export default Home;
