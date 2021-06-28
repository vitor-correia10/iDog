import React from "react";
import { useSelector } from "react-redux";
import "./DogsImages.css";

const DogsImages = () => {
  const breedImages = useSelector((state) => state.BreedData.images);
  return (
    <>
      <div>
        {
          breedImages.map((dogImage,i) => {
            return (
              <img key={i} src={dogImage} alt={"Image " + i}/>
            )
          })
        }
      </div>
    </>
  );
};

export default DogsImages;