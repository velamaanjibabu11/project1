import React from 'react';
import data from'./data.json';
import icon from './clerk.svg';
import Resume1 from './Resume1';
import {BrowserRouter,Route,Link} from 'react-router-dom';


 let Profile=()=>{
     const profiles=data.profiles;
     return(
         <div className="parent">
    <BrowserRouter>
    
    <Route exact path="/resume" component={Resume1}></Route>
    
   </BrowserRouter>
   
    
             {profiles.map((i,j)=>(
                 <div className="child" key={j}>
                     <img src={icon} alt="profile"/>
                     <h2> {i.basics.name} </h2>
                     <hr></hr>
                     <a href={"mail to:"+i.basics.email}className="link">{i.basics.email }</a>
                     
                     <br></br>
             <a href={"tel no:"+i.basics.mobile} className="link">{i.basics.mobile}</a>
             <hr></hr>
             <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn"> View Profile</Link>

                 </div>
             ))}
         </div>
     )
 }
 export default Profile;

 