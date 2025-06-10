import React from "react";
import Carousel from "../components/Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Junction Function PT</h1>
        <p>Your trusted partner in physical recovery and wellness.</p>
      </section>

      <section className="gallery">
        <h2>Our Clinic</h2>
        <Carousel />
      </section>
    </div>
  );
}

export default Home;
