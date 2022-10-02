import "./info-style.css"
import BigOgif from "../images/BigO.gif"

function Home() {
    return (
        <div id="main_container">
            <div id="header_container">
                Information
            </div>
            <div id="body_container">
                <div id="info_container">
                    <div id="introduction_container">
                        <div id="introduction_header_container">
                            What is this program about ?
                        </div>
                        This program will calculate the time complesity of the input
                        alogirthm in order to determin the big O asymptotic notation of the alogirthm.
                        <br></br>
                        <br></br>
                        C++ is used inorder to determine the run time of the function and regression testing
                        will be used in order to determine the big O asymptotic notation.
                    </div>
                </div>
                <div id="bigO_container">
                    <div id="BigO_gif_container">
                        <img src={BigOgif} id="BigOgif" alt="" />
                    </div>
                    <div id="BigO_text_container">
                        <div id="BigO_heaerTxt_container">
                            What is Big O asymptotic notation ?
                        </div>
                        Big O asymptotic notation describes how an alogirthm behave toward large or infitive
                        input. In other word, it is a way of showcasing the time complesity of an alogirthm.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
