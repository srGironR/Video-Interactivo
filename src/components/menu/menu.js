import React from 'react';
import {withRouter} from 'react-router-dom';
/*import {Link } from "react-router-dom";*/
/*import Mod from "../module/module"*/
import "../menu/menu.css"

import {Link } from "react-router-dom";


class menu extends React.Component { 
  
    render() {      
     
      return (
       
          <div>
           
              <img className="o-mod-img" src={"https://hoolite.be/wp-content/uploads/2015/08/vector_island_space_640x480.png"} alt=""></img>
              
              <div className="o-title-m">
              <p>¿Listo para la aventura?</p>
              <div>
            <Link to="/page3"><button className="o-button-mod"><p>Nivel 1</p></button></Link>
            <Link to="/page7"><button className="o-button-mod2" id="btn2"   
            ><p>Nivel 2</p></button></Link>
            <Link to="/page8"><button className="o-button-mod3" id="btn3" ><p>Desafio 1</p></button></Link>
            </div>
            
          </div>
          </div>
          
        );
      }    
     } 
        
    export default withRouter(menu);
    
    
    
    
    