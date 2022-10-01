import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home.js";
import Info from "./components/Info/Info.js";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;