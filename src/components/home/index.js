import React from "react";

//components
import Header from "../header";
import FetchDogs from "../fetchDogs";
import DogsImages from "../dogsImages";

//style
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="top-menu">
        <Header />
        <FetchDogs />
      </div>
      <DogsImages />
    </>
  )
}

export default Home;