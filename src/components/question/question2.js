import React from "react";
import {Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import "../question/question.css"

class question2 extends React.Component {
     
    render() {
      return (
        <div>           
        <img className="o-question-img" src={"https://hoolite.be/wp-content/uploads/2015/03/vector_island_1366x768.png"} alt=""></img>
        <div className="o-title-q">
            <p>Nivel 2</p> 
            <div className="o-desc">
            <p>¿Cuántos caramelos hay de cada sabor?</p>
            </div>             
            <div>            
            <Link to="/page10"><button className="o-button-q2"><p>56 de menta, 125 de limón y 131 de naranja</p></button></Link>
            <Link to="/page10"><button className="o-button-q2"><p>102 de menta, 26 de limón y 181 de naranja</p></button></Link>
            <Link to="/page5"><button className="o-button-q2"><p>52 de menta, 26 de limón y 234 de naranja</p></button></Link>
            </div>            
        </div>
        </div>
          
        );
    }
    }
    
    export default withRouter(question2);