import Axios from "axios";
import React, { useState,useEffect } from 'react';
import { Form,FormControl,Button,Container,Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

   
export default function View_cart()
{
  
   const [mylist,setList]= useState([]);
   const getData = useSelector((vijay)=>vijay.data);


// this is called repeatedly when ever u render
useEffect(() => {
  
   Axios.get("http://localhost:4200/showproduct").then(
        res=> setList(res.data));

    
    console.log("once");
    
  },[]);

  function onAddcart(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    Axios.get(`http://localhost:4200/addcart/${id}`).then(res => {
      if(res.data.message == "Item already added"){
      alert(res.data.message);
    }
    else{
      alert("Product added to cart")
    }
     });
  };


  return (

            <div>

              <a href="/viewcart">View Cart Details</a>
                 <h3 align="center"><u> Select Products</u> </h3>


                 <Container>


            
<Table striped bordered hover>
<thead>
<th>Image</th> <th>Id </th> <th> Name</th><th> Price </th><th>Delete</th> <th>Edit</th>
</thead>
<tbody>
                        {getData.map((item,index)=>{
                            
                            return(
                                <tr key={index}>
                                    <td><img src={item.image.name} width="200" height="200" alt="image" /></td>
                                    <td>{item.Product_name}</td>
                                    <td>{item.Product_price}</td>
                                    <td>{item.Quantity}</td>

                                <td>
                                <Button variant="danger"
                      id={item.product_id}
                      onClick={onAddcart}
                    >
                      Add To Cart
                    </Button>
</td>




                                    </tr>
                            );
                        })}

                        
                    </tbody>
 </Table>

</Container>
            </div>
             );
     

}

