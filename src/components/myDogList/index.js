import React from "react";

//redux
import { useSelector } from "react-redux";

//components
import DogsImages from '../dogsImages';
import "./MyDogList.css";


const MyDogList = () => {
  const myListObject = useSelector((state) => state.myListReducer);
  const myListArray = Object.keys(myListObject)

  return (
    <main className="dogs-list-container">
      <DogsImages 
        dogsData={myListArray}
      />
    </main>
  );
};

export default MyDogList;
