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
  const breed = useSelector((state) => state.breedReducer.breed);
  return (
    <>
      <div className="top-menu">
        <DropdownBreedList />
      </div>
        {
          breed ? (
            <h1>{breed}</h1>
            ) : ""
        }
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