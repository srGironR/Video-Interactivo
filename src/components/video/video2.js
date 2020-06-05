import React from "react";
import vd2 from "../Assets/Nivel_2.mp4"
import {withRouter} from 'react-router-dom';
import "../video/video.css";

class video2 extends React.Component {
  
  changeThis () {
    window.location = "/page9";
    /*<Link to="/page4"></Link>*/
    console.log("Ended");
  }

  render() {
    return (
        <div className="o-vid-container">
          <video className="o-vid" src={vd2} onEnded={this.changeThis.bind(this)} autoPlay controls></video>
          
        </div>
        );
      }
      }
      
      export default withRouter(video2);