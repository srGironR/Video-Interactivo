import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page1 from "./components/inicio/inicio";
import Page2 from "./components/menu/menu";
import Page3 from "./components/video/video"
import Page4 from "./components/question/question"
import Page5 from "./components/question/correct"
import Page6 from "./components/question/wrong"
import Page7 from "./components/video/video2"
import Page8 from "./components/video/video3"
import page9 from "./components/question/question2"
import Page10 from "./components/question/wrong2"
import Page11 from "./components/question/question3"
import Page12 from "./components/question/wrong3"

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
    <Route path="/page4" component={Page4} />
    <Route path="/page5" component={Page5} />
    <Route path="/page6" component={Page6} />
    <Route path="/page7" component={Page7} />
    <Route path="/page8" component={Page8} />
    <Route path="/page9" component={page9} />
    <Route path="/page10" component={Page10} />
    <Route path="/page11" component={Page11} />
    <Route path="/page12" component={Page12} />
    </Switch>   
      </div>  
        
    </BrowserRouter>
  );
}
}

export default App;