import React from "react";
import {Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import "../question/question.css"

class wrong2 extends React.Component {  

render() {
    
    return (
    <div>         
        <img className="o-question-img" src={"https://hoolite.be/wp-content/uploads/2015/03/vector_island_1366x768.png"} alt=""></img>
        <div className="o-title-q">
            <p>Forestación</p> 
            <div className="o-desc-w">
            <p>¡Intentalo de nuevo!</p>
            </div>
            <Link to="/page9"><button className="o-button-r"><p>Intentar</p></button></Link>
        </div>           
    </div>
        
        );
    }
    }
      
export default withRouter(wrong2);