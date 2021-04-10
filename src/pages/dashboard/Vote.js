import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class Vote extends Component {
    render() {
        return <DashboarWrapper>
            <div className="vot">
                <div className="header">
                    <h1>Current Problems in Toronto</h1>
                    <div className ="header-icons">
                        <span className="horn"><i class="large bullhorn icon"></i><strong>Most Relevant</strong></span>
                        <span className="clock"><i class="large black clock outline icon" ></i><strong>Most Recent</strong> </span>
                    </div>
                </div>

                <div className="container">
                    <div className = "item-arrow">
                        <i class="arrow up icon"></i>
                            <div>76</div>
                        <i class="arrow down icon"></i>
                    </div>
        
                    <div className="map"></div>
        
                    <div className = "item-desc">
                        <span className="title">Tree Collapse blocking cars from getting through.</span><br></br>
                        <span className="info">Posted by <span className ="usr">alyannasantos</span> 13 hours ago</span>

                        <div className="report-icons">
                            <span className = "open"><i class="grey folder open outline icon"></i>View Full Report</span> 
                            <span className = "share"><i class="grey share square outline icon"></i>Share</span>    
                        </div>
                    </div>
                </div>
                <div class="ui divider"></div>   
            </div>
            </DashboarWrapper>;
    }
}

for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', event => {
      event.currentTarget.classList.toggle('on');
    });
  }
