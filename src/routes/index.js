import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../component/home';
import Detail from '../component/detail';

function Rute() {
    return (
        <Router>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/detail/:id" element={<Detail/>} />

          </Routes>
        </Router>
    )
}
export default Rute;



