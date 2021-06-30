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
      disabled={isAddedToList}
      className="add-to-list" 
      type="button"
    >
      {isAddedToList
        ? "Remove to List"
        : "Add to List"
      }
    </button>
  );
};

export default AddToListButton;