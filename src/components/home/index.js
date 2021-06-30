import React from "react";

//redux
import { useSelector } from "react-redux";

//components
import DropdownBreedList from "../dropdownBreedList";
import RandomImage from "../randomImage";
import DogsImages from "../dogsImages";

//style
import "./Home.css";

const Home = () => {
  const breedImages = useSelector((state) => state.breedReducer.images);
  return (
    <>
      <div className="top-menu">
        <DropdownBreedList />
      </div>
      {
        breedImages.length ?
          <DogsImages 
            dogsData={breedImages}
          /> : 
          <RandomImage />
      }
    </>
  )
}

export default Home;