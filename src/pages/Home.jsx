import Meat from "../elements/Meat";
import Vegetarian from "../elements/Vegetarian";
import Trending from "../elements/Trending";
import {motion} from 'framer-motion';


import React from 'react'

function Home() {
  return (
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 1}}>
        <Vegetarian/>
        <Meat/>
        <Trending/>
    </motion.div>
  )
}

export default Home