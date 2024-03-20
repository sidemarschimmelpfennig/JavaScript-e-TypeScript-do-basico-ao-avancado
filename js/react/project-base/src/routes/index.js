import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login/index';
import Page404 from '../pages/Page404';

export default function RoutesMenu(){
  return(
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

