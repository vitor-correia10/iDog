import React from "react";

//Components
import Header from "../header";
import FetchDogs from "../fetchDogs";
import DogsImages from "../dogsImages";


const Home = () => {
  return (
    <>
      <Header />
      <FetchDogs />
      <DogsImages />
    </>
  )
}

export default Home;