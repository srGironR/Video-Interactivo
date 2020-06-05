import React from "react";
import vd3 from "../Assets/Video_3_Desafio.mp4"
import {withRouter} from 'react-router-dom';
import "../video/video.css";

class video3 extends React.Component {
  
  changeThis () {
    window.location = "/page11";
    /*<Link to="/page4"></Link>*/
    console.log("Ended");
  }

  render() {
    return (
        <div className="o-vid-container">
          <video className="o-vid" src={vd3} onEnded={this.changeThis.bind(this)} autoPlay controls></video>
          
        </div>
        );
      }
      }
      
      export default withRouter(video3);