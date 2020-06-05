import React from "react";
import vd1 from "../Assets/Video1_RealMath.mp4"
import {withRouter} from 'react-router-dom';
import "../video/video.css";

class video1 extends React.Component {
  
  changeThis () {
    window.location = "/page4";
    /*<Link to="/page4"></Link>*/
    console.log("Ended");
  }

  render() {
    return (
        <div className="o-vid-container">
          <video className="o-vid" src={vd1} onEnded={this.changeThis.bind(this)} autoPlay controls></video>
          
        </div>
        );
      }
      }
      
      export default withRouter(video1);;