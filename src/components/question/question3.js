import React from "react";
import {Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import "../question/question.css"

class question3 extends React.Component {
  
  
  
    render() {
      return (
        <div>           
        <img className="o-question-img" src={"https://hoolite.be/wp-content/uploads/2015/03/vector_island_1366x768.png"} alt=""></img>
        <div className="o-title-q">
            <p>Desafío</p> 
            <div className="o-desc">
            <p>¿Cuántos kilómetros tiene que recorrer Sara?</p>
            </div>             
            <div>            
            <Link to="/page5"><button className="o-button-q3"><p>
                En tren, 312 kilómetros, en coche 182 kilómetros y 26 kilómetros en moto. 
                Recorre 520 kilómetros.
            </p></button></Link>
            <Link to="/page12"><button className="o-button-q3"><p>
                En tren, 125 kilómetros, en coche 79 kilómetros y 316 kilómetros en moto. 
                Recorre 520 kilómetros.
            </p></button></Link>
            <Link to="/page12"><button className="o-button-q3"><p>
                En tren, 104 kilómetros, en coche 208 kilómetros y 208 kilómetros en moto. 
                Recorre 520 kilómetros.
                </p></button></Link>
            </div>            
        </div>
        </div>
          
        );
    }
    }
    
    export default withRouter(question3);