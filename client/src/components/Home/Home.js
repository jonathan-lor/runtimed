import './Home.css';
import Navbar from '../Navbar';
import {useState} from 'react'
import Logo from '../images/Logo.png'

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div id="main-container">

        <div id="header_bar_container">
            <div id="logo_image_container">
                <img src={Logo} id="logo_image" />
                <i><b>RunTimed</b></i>
            </div>
            <div>

            </div>
        </div>

        <div id="text_editor_container">
            <button id="text_editor_header">
                RUN
            </button>
            <div id="text_editor_box">

            </div>
        </div>

        <div id="output_container">
            <div class="output_box_container">
                <div class="output_header">
                    OutPut
                </div>
                <div>

                </div>
            </div>
            <div class="output_box_container">
                <div class="output_header">
                    Time Complexity
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;