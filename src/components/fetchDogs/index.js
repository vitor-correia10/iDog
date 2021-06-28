import React from "react";
import { useDispatch } from "react-redux";

//components
import Loading from "../loading";
import { selectedBreed } from "../../Actions";
import "./FetchDogs.css";

const FetchDogs = () => {
  const [loading, setLoading] = React.useState(true);
  const [breedList, setBreedList] = React.useState([]);
  const dispatch = useDispatch();
  const numOfImages = 12;

  React.useEffect(() => {
    //fetch all breeds from the Dog API 
    const fetchBreeds = async () => {
      try{
        const url = (`https://dog.ceo/api/breeds/list/all`);
        const res = await fetch(url);
        const dogBreeds = await res.json();
        
        if (dogBreeds.status === "success"){
          await makeBreedList(dogBreeds.message);
          setLoading(false);
        }

      } catch (err) {
        console.log(err);
      }
    }
    
    fetchBreeds();
    
    //update a array of breeds 
    const makeBreedList = (breeds) => {
      setBreedList(Object.keys(breeds));
    }

  }, []);
  
  //fetch images by breed
  const handleBreed = async (breed) => {
    let breedSelected = breed.target.value.toLowerCase();
    let dogImagesArr = [];
    
    if (breedSelected !== "choose a dog breed"){
      //update redux with breed name
      dispatch(selectedBreed(breedSelected, "breed"));
      
      const url = (`https://dog.ceo/api/breed/${breedSelected}/images`);
      const res = await fetch(url);
      const dogBreed = await res.json();

      //push 12 images by breed to an empty array
      for (let i = 0; i < numOfImages; i++) {
        if (dogBreed.message[i]){
          dogImagesArr.push(dogBreed.message[i]);
        }
      }
    }
    //update redux with breed images
    dispatch(selectedBreed(dogImagesArr, "images"));
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="breedList">
      <select className="breedSelector" onChange={e => handleBreed(e)}>
        <option selected disabled value="Choose a dog breed">Choose a dog breed</option>
        {
          breedList.map((breed,i) => {
            return (
              <option value={breed} key={i}>{breed}</option>
            )
          })
        }
      </select>
    </div>
  );
};

export default FetchDogs;