import React from "react";
import "./home.scss";
import GoogleMaps from "../../components/google-maps/GoogleMaps";
// import Menu from "../../components/menu/Menu";

const Home = () => {
  return (
    <>
      <section className="map">
        <GoogleMaps />
      </section>
    </>
  );
};

export default Home;
