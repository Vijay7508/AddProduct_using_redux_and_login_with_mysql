import React, { useState } from "react";

function Mystate4() {
  const [color, setColor] = useState("red");

  function show(e)
   {
    setColor(e.target.value);
   }
  function handleDemo(e)
   {
     setColor(e.target.value);
  }

  return (
    <>
      <h1>My favorite color is {color}!</h1>
     <input type="text" value={color} onChange={handleDemo} />
      <button
        type="button" value="red"  onClick={show}
        
      >Blue</button>
      <button
        type="button" value="blue" onClick={show}
      
      >Red</button>
      
    </>
  );
}

export default Mystate4;