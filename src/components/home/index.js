import React from "react";

//components
import FetchDogs from "../dropdownBreedList";
import DogsImages from "../dogsImages";

//style
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="top-menu">
        <FetchDogs />
      </div>
      <DogsImages />
    </>
  )
}

export default Home;