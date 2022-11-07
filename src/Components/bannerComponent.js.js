
import React from "react";
import './Component.css'


function Banner(){
 
    return (
        <div
            class="shadow-lg" id="banner"
            style={{
            height: '600px'}}
            >
                <div className="position-absolute"  id='whiteCard'>
                </div>
                <div className="position-absolute" id="winterRev">
                    <img src="winterRev.png" alt="winterRev" width={'250px'} />
                </div>
                <div className="position-absolute" id='main-content'>
                    Get ready for the<br></br>
                    <p id="largeText">Winter</p>
                    <p id="largeText">Revolution</p>
                    <p>events,Workshops,Hackathons and many more enticing events waiting your way!!</p>
                </div>
                

        </div>
    );
}

export default Banner;
