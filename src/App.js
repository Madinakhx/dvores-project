
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Awards from "./pages/Awards";
import Staff from './pages/Staff';
import Sports from './pages/Sports';
import About from './pages/About'
import React from "react";

function App() {
  return (
      <div>
          <Navbar/>

          <h1>Lorem ipsum.</h1>
          <Routes>

              <Route path={"/"} element={<Home/>}/>
              <Route path={"/"} element={<About/>}/>
              <Route path={"/"} element={<Sports/>}/>
              <Route path={"/"} element={<Awards/>}/>
              <Route path={"/"} element={<Staff/>}/>
              <Route path={"/"} element={<Contact/>}/>

          </Routes>

      </div>
  );
}

export default App;
