import React from 'react';
import './App.css';
import {BrowserRouter,Route,link} from 'react-router-dom';
import Resume1 from './Resume1';
import Profile from './Profile';


/*let App=()=>{
  return(
    <div>
    <h1>sri</h1>
    <h1>venkateswara</h1>
    <C name="anji" role="web designer"> </C>
    <C name="nageswar" role=" farmer "></C>

    <R></R>
    <D></D>
    </div>
  )
}*/

let App=()=>{
  return(
    <BrowserRouter>
    
     <Route exact path="/" component={Profile}/>
     <Route exact path="/resume" component={Resume1}/>
     
    </BrowserRouter>
    
 
    

  )
}

export default App;