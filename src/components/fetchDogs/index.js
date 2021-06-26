import React from "react";
// import { useParams } from "react-router-dom";
import Loading from '../loading';
// import './fetchDogs.css';

const FetchDogs = () => {
  const [loading, setLoading] = React.useState(true);
  const [breedList, setBreedList] = React.useState([]);
  const [breedImages, setBreedImages] = React.useState([]);

  React.useEffect(() => {
    const fetchBreeds = async () => {
      try{
        //fetch all breeds from Dog API 
        const url = (`https://dog.ceo/api/breeds/list/all`);
        const res = await fetch(url);
        const dogBreeds = await res.json();
        
        if (dogBreeds.status === 'success'){
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
  
  //fetch images by breed
  const handleBreed = async (breed) => {
    let breedSelected = breed.target.value.toLowerCase();

    if (breedSelected !== "choose a dog breed"){
      const url = (`https://dog.ceo/api/breed/${breedSelected}/images`);
      const res = await fetch(url);
      const dogBreed = await res.json();

      for (let i = 0; i <= 12; i++) {
        setBreedImages(breedImages => [...breedImages, dogBreed.message[i]])
      }
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="breedsList">
        <select onChange={e => handleBreed(e)}>
          <option value="Choose a dog breed">Choose a dog breed</option>
          {
            breedList.map((breed,i) => {
              return (
                <option value={breed} key={i}>{breed}</option>
              )
            })
          }
        </select>
      </div>
      <div>
        {
          breedImages.map((dogImage,i) => {
            return (
              <img key={i} src={dogImage} alt={'Image ' + i}/>
            )
          })
        }
      </div>
    </>
  );
};

export default FetchDogs;