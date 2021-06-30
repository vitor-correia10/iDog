import React from "react";
import { useSelector } from "react-redux";
import "./AddToListButton.css";

const AddToListButton = ({onClick, url}) => {
  const isAddedToList = useSelector((state) =>
    state.myListReducer[url] ? state.myListReducer[url].isAddedToCart : false
  );

  return (
    <button 
      onClick={onClick}
      className= {isAddedToList
        ? "btn remove-from-list"
        : "btn add-to-list"
      }
      type="button"
    >
      {isAddedToList
        ? "Remove from your List"
        : "Add to your List"
      }
    </button>
  );
};

export default AddToListButton;