import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

//components
import FetchDogs from "../dropdownBreedList";
import DogsImages from "../dogsImages";

//style
import "./Home.css";

const Home = () => {
  const breedImages = useSelector((state) => state.breedReducer.images);
  return (
    <>
      <div className="top-menu">
        <FetchDogs />
      </div>
      <DogsImages 
        dogsData={breedImages}
      />
    </>
  )
}

export default Home;