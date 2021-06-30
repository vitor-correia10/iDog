import React from "react";
import { Link } from "react-router-dom";

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
      { myListArray.length ? (
        <DogsImages 
          dogsData={myListArray}
        />) : (
          <div className="empty-list-message">
            <p>You do not have any image in your list yet!</p>
            <p> Click <Link className="styled-link" to="/">here</Link> to return home.</p>
          </div>
        )
      }
    </main>
  );
};

export default MyDogList;
