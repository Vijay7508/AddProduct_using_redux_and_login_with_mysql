import React, { useState } from "react";

export default function Mybank() {
  const [accno, setAccno] = useState(0);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

// when u click on the button its reference comes in e.
  function show1(e)
   {
    setAccno(e.target.value);
   }
   function show2(e)
   {
    setName(e.target.value);
   }
  function show3(e)
   {
    setBalance(e.target.value);
   }
  function showme()
  {
   console.log(accno);
   console.log(name);
console.log(balance);
   document.getElementById("h").innerHTML = "Accno="+accno+"Name="+name+"balance="+balance;
  }

  return (
    <>
      <h1>Bank Details </h1>
    
      Accno <input type="text" name="t1" value={accno} onChange={show1} />
      Name <input type="text" name="t2" value={name} onChange={show2}/>
      Balance <input type="text" name="t3" value={balance} onChange={show3}/>
    <input type="button" value="submit" onClick={showme} />
     <div id="h"> </div>
      
    </>
  );
}

