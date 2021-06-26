import React from "react";
// import { useParams } from "react-router-dom";
import Loading from '../loading';
// import './fetchDogs.css';

const FetchDogs = () => {
  const [loading, setLoading] = React.useState(true);
  const [breedList, setBreedList] = React.useState([]);

  React.useEffect(() => {
    const fetchBreeds = async () => {
      try{
        //fetch Dog API 
        const url = (`https://dog.ceo/api/breeds/list/all`);
        const res = await fetch(url);
        const dogBreeds = await res.json();
        
        if (dogBreeds.message){
          await makeBreedList(dogBreeds.message);
          setLoading(false);
        }

      } catch (err) {
        console.log(err);
      }
    }
    
    fetchBreeds();
    
    //create a array of breeds 
    const makeBreedList = (breeds) => {
      setBreedList(Object.keys(breeds));
    }

  }, []);
  
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="breedsList">
      <select>
        <option>Choose a dog breed</option>
        {
          breedList.map((breed,i) => {
            return (
              <option key={i}>{breed}</option>
            )
          })
        }
      </select>
    </div>
  );
};

export default FetchDogs;