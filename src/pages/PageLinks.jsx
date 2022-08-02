import React from 'react';
import Home from './Home';
import Types from './Types';
import { Route, Routes, useLocation} from 'react-router-dom';
import Results from './Results';
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion';

function PageLinks() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Types/:type" element={<Types />}/>
          <Route path="/Results/:search" element={<Results />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    </AnimatePresence>
  );
}

export default PageLinks