import React from "react";

//Components
import FetchDogs from "../fetchDogs";
import Header from "../header";


const Home = () => {
  return (
    <>
      <Header />
      <FetchDogs />
    </>
  )
}

export default Home;