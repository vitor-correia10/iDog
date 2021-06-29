import React from "react";
import { useSelector } from "react-redux";
import "./DogsImages.css";

const DogsImages = () => {
  const breedImages = useSelector((state) => state.BreedData.images);
  return (
    <main className="images-container">
      {
        breedImages.map((dogImage,i) => {
          return (
            <div key={i} className="box-image">
              <div className="background-image" 
                style={{ backgroundImage: `url(${dogImage})`}}>
              </div>
              <button className="add-to-list" type="button">Add to my list</button>
            </div>
          )
        })
      }
    </main>
  );
};

export default DogsImages;