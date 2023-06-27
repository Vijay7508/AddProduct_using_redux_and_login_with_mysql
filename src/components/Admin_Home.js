import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import { insertData } from '../Redux/Action';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Admin_Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('')
  console.log(name);
  const [price, setPrice] = useState('')
  const [Qty, setQty] = useState('')
  const [file, setFile] = useState(null)
  console.log(file)
  const getData = useSelector((vijay)=>vijay.data);
  const p_name =(e)=>{
    setName(e.target.value);
  }
  const p_price =(e)=>{
    setPrice(e.target.value);
  }


  const p_qty =(e)=>{
    setQty(e.target.value);
  }
  const p_file =(e)=>{
    setFile(e.target.files[0]);
  }



 const insetData =()=>{
  const data ={Product_name: name, Product_price:price, Quantity:Qty, image:file}
  const toSee = JSON.stringify(data);
  console.log(toSee)
  dispatch(insertData(data));

 }


  return (
    <>
      <h1><u>ADD DATA USING REDUX</u></h1>
    Product_Name<input type='text' placeholder='Enter Product_Name' onChange={p_name}/><br/>
    Product_Price<input type='text' placeholder='Enter Product_Price' onChange={p_price}/><br/>
    Product_Qty<input type='text' placeholder='Enter Product_Quantity' onChange={p_qty}/><br/>
    Profile Image<input type='file' placeholder='Enter Product_Image' onChange={p_file}/><br/>
    
    <button type="Submit" onClick={insetData} ><h3>Submit</h3></button>


<table>
<thead>
<th>Image</th>  <th> Name</th><th> Price </th><th>Delete</th> 
</thead>
<tbody>
{getData.map((data, index)=>{
  return(
    <tr key={index}>
    <td><img src={data.image.name} width="100px" height="100px"/></td>

    <td>{data.Product_name}</td>
    <td>{data.Product_price}</td>
    <td>{data.Quantity}</td>


    </tr>
  )
})}
         
</tbody>
</table>

    </>
  )
}

export default Admin_Home
