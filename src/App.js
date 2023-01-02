import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/index.js';
import ErrorPage from './pages/404';

function App() {
  return (
    <Router>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
