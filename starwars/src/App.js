import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Characters from "./Components/Characters.js";
import Card from "./Components/Cards";
import './App.css';
import axios from "axios";


const App = () => {

  return (
    <div className="App">
    <h1 className="Header">React Wars</h1>
           <Characters/>
     </div>
  );
}

export default App;




    