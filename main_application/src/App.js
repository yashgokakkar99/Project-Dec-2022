import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Aboutus/About';
import Main from './Components/main/Main';
import Contact from './Components/contactus/Contact';
import Footer from './Components/Footer/Footer';
import Suggestion from './Components/Suggestion/Suggestion'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Home/>
      <Main/>
      <About/>
      <Suggestion/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
