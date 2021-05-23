import React from "react";
import "./Experience.css"
function Experience(props)
{
   return (
    <div className="column">
    <div className="content">
      <img className="imgstyle" src={props.src} alt={props.alt}/>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
     </div>
    </div>
   );
}

export default Experience;