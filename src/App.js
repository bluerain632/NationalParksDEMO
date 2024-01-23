<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Detail from './components/detail';
import About from "./components/about";
import Contact from "./components/contact";
import Parks from './components/parks';
import data from './parks.json';

function App(props){
    return(
        <div className="App">
            <header style={{textAlign:"left",backgroundColor:"lightsalmon"}}>
                <h1><img src={require("./images/logo.jpg")} alt="logo" width="200px" height="100px"/>      National Parks</h1>
            </header>
            <hr/>
            <Routes>
                <Route path="/detail/:id" element={<Detail db={data}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Parks db={data}/>}/>
            </Routes>
            <br/>
            <footer style={{textAlign:"center",backgroundColor:"lightsalmon",borderBottom:"0.5px solid",borderTop:"0.5px solid"}}>
                &copy; Copyright Dec2023-Jan2024 Vie Park
            </footer>
        </div>
    );
}

export default App;
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Detail from './components/detail';
import About from "./components/about";
import Contact from "./components/contact";
import Parks from './components/parks';
import data from './parks.json';

function App(props){
    return(
        <div className="App">
            <header style={{textAlign:"left",backgroundColor:"lightsalmon"}}>
                <h1><img src={require("./images/logo.jpg")} alt="logo" width="200px" height="100px"/>      National Parks</h1>
            </header>
            <hr/>
            <Routes>
                <Route path="/detail/:id" element={<Detail db={data}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Parks db={data}/>}/>
            </Routes>
            <br/>
            <footer style={{textAlign:"center",backgroundColor:"lightsalmon",borderBottom:"0.5px solid",borderTop:"0.5px solid"}}>
                &copy; Copyright Dec2023-Jan2024 Vie Park
            </footer>
        </div>
    );
}

export default App;
>>>>>>> 1857740e91ca857a1d631453db65730aa58f5dcb
