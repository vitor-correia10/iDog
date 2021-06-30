import React from "react";

//components
import Loading from "../loading";
import "./RandomImage.css";

const RandomImage = () => {
  const [loading, setLoading] = React.useState(true);
  const [img, setImg] = React.useState("");

  React.useEffect(() => {
    //fetch random images from the Dog API 
    const fetchRandomImage = async () => {
      try{
        const url = (`https://dog.ceo/api/breeds/image/random`);
        const res = await fetch(url);
        const randomPic = await res.json();
        
        if (randomPic.status === "success"){
          setImg(randomPic.message);
          setLoading(false);
        }

      } catch (err) {
        console.log(err);
      }
    }
    
    fetchRandomImage();
  }, []);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <div className="random-image-container">
      <h1>Random Image</h1>
      <div className="background-random-image" 
        style={{ backgroundImage: `url(${img})`}}>
      </div>
    </div>
  );
};

export default RandomImage;