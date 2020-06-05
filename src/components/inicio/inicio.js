import React from 'react';
import "../inicio/inicio.css"
import {withRouter} from 'react-router-dom';
import {Link } from "react-router-dom";


class inicio extends React.Component {
  
      render() {
        return (
  
        <div className="o-inicio">
            <img className="o-inicio-img" src={"https://image.freepik.com/free-vector/math-background_23-2148146940.jpg"} alt=""></img>
            <div className="o-play">         
            <div className="o-title-inicio">
            <p>Real Math</p>
            </div>            
            <div>
            <Link to="/page2"><button className='button play'> </button></Link>
            </div>
            </div>
    
        </div>
    
);
}
}

export default withRouter(inicio);;