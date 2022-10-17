import React, {useState} from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";


function App() {

  
 

  let [colors, setColors] = useState([
   "blue", "lightblue", "green", "greenyellow", "yellow", "orange", "red", "grey"
])

const addColor = (newColor) => {



  setColors([ "blue", "lightblue", "green", "greenyellow", "yellow", "orange", "red", "grey",  newColor])

}



  let colorMap = colors.map((color, i ) => {

    return(

      <ColorBlock color = {color} />

    )

  })
  
  return (
    <div className="root">

{colorMap}
<ColorForm addColor={addColor}/>


      
    </div>
  );
}

export default App;
