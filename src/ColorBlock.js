import React from "react";
import './App.css';

function ColorBlock(props){

return(

<div className="colorBock" style={{"backgroundColor" : props.color}}>
<p>{props.color}</p>

</div>


)

}

export default ColorBlock