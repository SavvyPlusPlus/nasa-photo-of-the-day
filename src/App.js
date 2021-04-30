
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Gallery from './components/galleryContainer/gallery';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import "./App.css";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=RaJWuEtyMDTbmmcsWuIehTUDDT92C9XVyXedi3VV&date=2012-03-14`)
    .then(resolve => {
      setData(resolve.data)
      console.log(resolve.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])


  return (
    <div className="App">
      <Header data ={data}/>
      <Gallery data ={data}/>
    </div>
  );
}

export default App;


//STYLES are on gakllery.js