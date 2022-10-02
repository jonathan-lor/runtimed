import Navbar from "../Navbar";
import { useState, useEffect } from "react"

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <header className="App-header">
                <p>{!data ? "Loading..." : data}</p>
            </header>
        </div>
    );
}

export default Home;
