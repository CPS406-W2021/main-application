import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class Vote extends Component {
    render() {
        return <DashboarWrapper>
            <div className="rap-body">
                <h1 className="rap-h1">Current Problems in Toronto</h1>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 26h32L18 10z" fill="currentColor"></path> 
                        </svg>
                    </span>
                    <br></br>
                    076        
                    <h4>Tree Collapse at 21 Lorem Ip. blocking cars from getting through.</h4>
            <div class="a">
                <img src="https://www.ctvnews.ca/polopoly_fs/1.1841069.1401235959!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg" alt="ctvnew.ca" width="130" height="70"></img>
            </div>  
                    009
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 10h32L18 26 2 10z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 26h32L18 10z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br></br>
                    021
                    <h4>Pothole at 123 Street St. potential danger</h4>
            <div class="a">
                <img src="https://images.squarespace-cdn.com/content/v1/56569c54e4b06edc0ac0c135/1519847973350-EUBV9HI0LQVGPXFVXEHZ/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/Pothole+4.JPG" alt="images.squarespace-cdn.com" width="130" height="70"></img>
            </div>
                    003
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 10h32L18 26 2 10z " fill="currentColor"></path>
                        </svg>
                    </span>
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 26h32L18 10z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br></br>
                    010
                    <h4>Garbage at 467 Avenue Av. blocking sidewalk</h4>
            <div class="a">
                <img src="https://bramptonist.com/wp-content/uploads/2017/04/peel-garbage-1280x720.png" alt="bramptonist.com" width="130" height="70"></img>
            </div>
                    002
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 10h32L18 26 2 10z " fill="currentColor"></path>
                        </svg>
                    </span>
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 26h32L18 10z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <br></br>
                    054
                    <h4>Vandalism at 102 Jarvis St.</h4>
            <div class="a">
                <img src="https://media.segd.org/s3fs-public/styles/galleryformatter_slide/public/new1_0.jpg?itok=gNMKqBeN" alt="media.segd.org" width="130" height="70"></img>
            </div>
                    023
                    <br></br>
                    <span class="vote">
                        <svg width="36" height="36">
                            <path d="M2 10h32L18 26 2 10z " fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
            </DashboarWrapper>;
    }
}

for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', event => {
      event.currentTarget.classList.toggle('on');
    });
  }