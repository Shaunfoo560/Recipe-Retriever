import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    retrieveVegetarian();
  },[]);

  const retrieveVegetarian = async () => {

    const check = localStorage.getItem('Vegetarian');

    if(check){
      setVegetarian(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULARAPIKEY}&number=20&tags=vegetarian`);
      const data = await api.json();

      localStorage.setItem('Vegetarian', JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
        <Wrap>
          <h1>Veggie Delights</h1>
          <Splide options={{
            perPage: 3,
            pagination: false,
            drag: 'free',
            gap: "5rem",
          }}>
            {vegetarian.map((recipe) => {
              return(
                <SplideSlide key={recipe.id}>
                  <Option>
                    <Link to={"/recipe/" + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                    </Link>
                  </Option>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrap>
    </div>
  );
}


const Wrap = styled.div`
  margin: 4rem 0rem;
`

const Option = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: grab;
  text-align: center;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: solid;
    border-width: 8px;
    border-color: black;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%
    text-align: center;
    font-weight: 600;
    font-size: 1.4rem;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 3rem;
    opacity: 0;
    transition: 0.2s;
  }

  p:hover{
    bottom: 30%;
    opacity: 1;
  }
  
`

export default Vegetarian