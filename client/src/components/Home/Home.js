import './Home.css';
import Navbar from '../Navbar';
import { useState } from 'react'
import Logo from '../images/Logo.png'
import git from '../images/GithubIcon.png'
import yt from '../images/YTicon.png'

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
          <span id="runtime_txt"><i><b>Runtimed</b></i></span>
          <button id="Info_button" href=""> More Information</button>
        </div>
      </div>


      <div id="text_editor_container">
        <button id="run_button">
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

      <div id="footer">
        <div id="footer_col1">
        <span class="bigger_Font">Developers:</span>
          <ul>
            <br></br>
            <li>Christopher Colling</li>
            <br></br>
            <li>Hunter Finch</li>
            <br></br>
            <li>Jonathan Lor</li>
            <br></br>
            <li>Minh Dao Nguyen</li>
          </ul>
        </div>

        <div id="footer_col2">
        <a href='https://github.com/jonathan-lor/runtimed'><img src={git} id="git_image"/></a>
        </div>
        
        <div id="footer_col3">
        <a href='https://www.youtube.com/watch?v=a3Z7zEc7AXQ'><img src={yt} id="yt_icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
