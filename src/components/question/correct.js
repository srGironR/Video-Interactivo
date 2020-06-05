import React from "react";
import {Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import "../question/question.css"

class correct extends React.Component {  

render() {
    return (
    <div>         
        <img className="o-question-img" src={"https://hoolite.be/wp-content/uploads/2015/03/vector_island_1366x768.png"} alt=""></img>
        <div className="o-title-q">
            <p>Ecuaciones de primer grado</p> 
            <div className="o-desc-r">
            <p>Felicidades has acertado</p>
            </div>
            <Link to="/page2"><button className="o-button-r"><p>Regresar al Menu</p></button></Link>
        </div>
           
    </div>
        
        );
    }
    }
 
export default withRouter(correct); 