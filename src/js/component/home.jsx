import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Card />
          </div>
          <div class="col">
            <Card />
          </div>
          <div class="col">
            <Card />
          </div>
          <div class="col">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
