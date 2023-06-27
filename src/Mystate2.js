import React, { useState } from "react";

function Mystate2() {
  const [color, setColor] = useState("red");

  function show1()
   {
    setColor("blue");
   }
  function show2()
   {
    setColor("red");
   }

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"   onClick={show1}
        
      >Blue</button>
      <button
        type="button" onClick={show2}
      
      >Red</button>
      
    </>
  );
}

export default Mystate2;