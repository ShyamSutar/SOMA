import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import{Route, Routes} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Errorpage from "./components/Errorpage";
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<Errorpage />} />
        </Routes>
      </>
    </Router>
  );
}
