import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonesDetalle from "./views/PokemonesDetalle";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/pokemones" element={<Pokemones />} />        
            <Route path="/pokemones/:name" element={<PokemonesDetalle />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
