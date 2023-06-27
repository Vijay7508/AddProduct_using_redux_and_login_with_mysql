import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const AddedData = () => {
    const [data ,setData]=useState([]);
    localStorage.setItem("products",JSON.stringify(data));

    console.log(data);

    useEffect(()=>{
    Axios.get("http://localhost:4200/viewcart").then(
        
        
    
    res=> setData(res.data)


    )

    },[])

    const Increment = (e)=>{
        e.preventDefault();
        const id =  e.target.id;
        console.log(id);

        Axios.get(`http://localhost:4200/increment/${id}`).then(res =>{
            if(res.data.message=="Oops! we dont have Stock"){
        alert(res.data.message);
    }
    else{
            res.setData(res.data);
        }
        })

        

    }

    const Decrement = (e)=>{
        e.preventDefault();
        const id =  e.target.id;
        console.log(id);
        Axios.get(`http://localhost:4200/decrement/${id}`).then(res =>{
            res.setData(res.data);
        })

        

    }
    var sum =0;
    console.log(sum)

  return (

    <>
{data.map((item, index)=>{
    {sum +=+item.product_price * item.qty};
    localStorage.setItem('Total',JSON.stringify(sum));


    return(
        
        <div key={index}>

        <div className='App'>
        <div className="d-flex justify-content-start">
    
            <div><img src={item.product_image} width="100" height="100" alt="image" />
            <h4>{item.product_name}</h4>
            <h5>Price ₹{item.product_price}</h5>
            <button variant="danger" id={item.product_id} onClick={Increment}>+</button>
            <h5>Qty:{item.qty}</h5>
            <button variant="danger" id={item.product_id} onClick={Decrement}>-</button>



            
            </div>

        </div>
        </div>
        </div>

    )
})

}
<h1>Subtotal:{sum}</h1>
<a href='/payment'>Payment</a>

    </>
  )
                            
 
}
export default AddedData;
