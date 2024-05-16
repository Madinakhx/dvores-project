
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
          <Routes>
              <Route  element={<Navbar/>}>
              <Route path={"/"} element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/sports" element={<Sports/>}/>
              <Route path="/awards" element={<Awards/>}/>
              <Route path="/staff" element={<Staff/>}/>
              <Route path="/contact" element={<Contact/>}/>
              </Route>

          </Routes>

      </div>
  );
}

export default App;
