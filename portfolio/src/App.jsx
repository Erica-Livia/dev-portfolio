import { useState } from 'react'
import './App.css';
import Navbar from '././components/NavBar.jsx';
import HomePage from "./HomePage.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Navbar />
        <HomePage />
        <Footer />
    </>
  )
}

export default App;
