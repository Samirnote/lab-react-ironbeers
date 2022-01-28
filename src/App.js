import './App.css';
import { useEffect, useState } from 'react'
import Error from "./pages/Error";
import Home from "./pages/Home"
import Listbeers from "./pages/Listbeers"
import Singlebeer from "./pages/Singlebeer"
import Newbeer from "./pages/Newbeer"
import Randombeer from "./pages/Randombeer"
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const [Beers, setBeers] = useState([]);

  useEffect(()=> {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then (response => {
        console.log(response);
        setBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <div className="container">
      <div className="row">
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/beers" element={<Listbeers beers={Beers} />}/>
        <Route path="/beers/:_id" element={<Singlebeer beers={Beers} />}/>
        <Route path="/random-beer" element={<Randombeer />}/> 
        <Route path="/new-beer" element={<Newbeer />}/> 
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      </div> 
    </div>
  );
}

export default App;
