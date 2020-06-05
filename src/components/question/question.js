import React from "react";
import {Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import "../question/question.css"

class question extends React.Component {
  
  
  
    render() {
      return (
        <div>           
        <img className="o-question-img" src={"https://hoolite.be/wp-content/uploads/2015/03/vector_island_1366x768.png"} alt=""></img>
        <div className="o-title-q">
            <p>Nivel 1</p> 
            <div className="o-desc">
            <p>¿Cuantos arboles sembró Nina?</p>
            </div>             
            <div>            
            <Link to="/page5"><button className="o-button-q"><p>6</p></button></Link>
            <Link to="/page6"><button className="o-button-q"><p>8</p></button></Link>
            <Link to="/page6"><button className="o-button-q"><p>1</p></button></Link>
            </div>            
        </div>
        </div>
          
        );
    }
    }
    
    export default withRouter(question);