//import './App.css';
import Navbar from '../Navbar';
import {useState} from 'react'

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="App">
        
        Runtimed home page..
    </div>
  );
}

export default Home;