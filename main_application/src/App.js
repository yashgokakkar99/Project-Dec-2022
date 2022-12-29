import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/Aboutus/About";
import Main from "./Components/main/Main";
import Contact from "./Components/contactus/Contact";
import Footer from "./Components/Footer/Footer";
import Suggestion from "./Components/Suggestion/Suggestion";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="App">
      {loading ? (
        <HashLoader
          color={"#FF00FF"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={style}
          
        />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Suggestion />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;