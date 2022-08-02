import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Types() {

    const [Types, setTypes] = useState([]);
    let params = useParams();

    const getTypes = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULARAPIKEY}&type=${name}`);
        const recipes = await data.json();
        setTypes(recipes.results);
    }

    useEffect(() => {
        getTypes(params.type);
        console.log(params.type);
    }, [params.type]);

    return (
        <Grid 
        animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 1}}>
            {Types.map((item) => {
                return (
                    <Option key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <p>{item.title}</p>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </Option>
                );
            })}
        </Grid>)
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
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
    font-size: 1.2rem;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 2rem;
    opacity: 0;
    transition: 0.2s;
  }

  p:hover{
    bottom: 30%;
    opacity: 1;
  }
  `

export default Types