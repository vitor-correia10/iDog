import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../../Actions";

//components
import AddToListButton from "../addToListButton";
import "./DogsImages.css";

const DogsImages = ({dogsData}) => {
  const dispatch = useDispatch();
  
  //update images' list with URLs
  const addToList = (url) =>{
    dispatch(
      addImage( url )
      );
    }
  
  return (
    <main className="images-container">
      {
        dogsData.map((dogImage,i) => {
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