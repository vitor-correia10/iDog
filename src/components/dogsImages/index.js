import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../../Actions";

//components
import AddToListButton from "../addToListButton";
import "./DogsImages.css";

const DogsImages = () => {
  const dispatch = useDispatch();
  const breedImages = useSelector((state) => state.breedReducer.images);
  
  //update images' list with URLs
  const addToList = (url) =>{
    dispatch(
      addImage( url )
      );
    }
  
  return (
    <main className="images-container">
      {
        breedImages.map((dogImage,i) => {
          return (
            <div key={i} className="box-image">
              <div className="background-image" 
                style={{ backgroundImage: `url(${dogImage})`}}>
              </div>
              <AddToListButton 
                url={dogImage} 
                addToList={addToList} 
                onClick={() => addToList(dogImage)}
              />
            </div>
          )
        })
      }
    </main>
  );
};

export default DogsImages;