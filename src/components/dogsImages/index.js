import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "../../Actions";

//components
import AddToListButton from "../addToListButton";
import "./DogsImages.css";

const DogsImages = ({dogsData}) => {
  const dispatch = useDispatch();
  const myListObject = useSelector((state) => state.myListReducer);
  const myListArray = Object.keys(myListObject)
  
  //update images' list with URLs
  const addToList = (url) =>{
    let findUrl = myListArray.find(element => element === url);

    if (findUrl){
      dispatch(
        removeImage( url )
      );
    } else {
      dispatch(
        addImage( url )
      );
    }
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