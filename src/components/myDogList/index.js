import React from "react";

//redux
import { useSelector } from "react-redux";

//components
import "./MyDogList.css";

const MyDogList = () => {
  const myListObject = useSelector((state) => state.myListReducer);
  const myListArray = Object.keys(myListObject)

  return (
    <main className="dogs-list-container">
      testing
    </main>
  );
};

export default MyDogList;
