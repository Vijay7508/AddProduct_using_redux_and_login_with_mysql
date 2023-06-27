import React,{useContext} from 'react'


import {Link, useNavigate} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap';
import NoteContext from './NoteContext/NoteContext';
function NavBar() {
    const valueContext=useContext(NoteContext);
    console.log(valueContext);
    const Navigate = useNavigate()

    let Added=()=>{
      Navigate("/viewcart");

    }

  return (
<>
{valueContext.type === "admin"?
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap Admin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link onClick={Added}>See Your Cart</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
       <Nav.Link eventKey={2} href="#memes">
       <img src={valueContext.image} height="40px" width="50px"/>

       <h6>{valueContext.user}</h6>

       

         
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
:valueContext.type==="customer"?(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap Customer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link onClick={Added}>See Your Cart</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
       <Nav.Link eventKey={2} href="#memes">
      <img src={valueContext.image} height="40px" width="50px"/>
       <h6>{valueContext.user}</h6>

       

         
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

  ):(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap FrontPage</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
       <Nav.Link eventKey={2} href="#memes">
       <h4>{valueContext.user}</h4>

       

         
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

  )

</>


  )
}

export default NavBar