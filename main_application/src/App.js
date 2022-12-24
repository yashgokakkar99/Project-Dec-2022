import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Aboutus/About';
import Main from './Components/main/Main';
import Contact from './Components/contactus/Contact';
import Footer from './Components/Footer/Footer';
import Suggestion from './Components/Suggestion/Suggestion'
import Navbar from './Components/Navbar/Navbar';
import {useState, useEffect} from 'react';



  return (
    <div className="App">
      {
        
     <>
      <Navbar/>
      <Home/>
      <About/>
      <Suggestion/>
      <Contact/>
      <Footer/>
     </>
      }
      
    </div>
  );
}

export default App;
