import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Headerl() {
  return (
<div>
        <Navbar id="navb" expand="lg" className="bg-warning nav" >
        <Navbar.Brand className='text-light ms-5 fs-3'  href="#home"> <Link className='text-light' style={{textDecoration:"none"}} to={"/"}>
          <img style={{width:"70px"}} className='me-2' src="http://clipart-library.com/images_k/car-transparent-background/car-transparent-background-22.png" alt="" />
          RentNGo</Link> 
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-4">
            {/* <Nav.Link href="#home">
              </Nav.Link> */}
            <Nav.Link href="#contact" className='NavLink '>Contacts</Nav.Link>

            <Nav.Link href="#about" className='NavLink '> <Link to="/compact"  style={{ textDecoration: 'none', color: 'inherit' }}>Compact</Link></Nav.Link>
            <Nav.Link href="#about" className='NavLink '>  <Link to="/suv" style={{ textDecoration: 'none', color: 'inherit' }}>SUVs</Link></Nav.Link>
            <Nav.Link href="#about" className='NavLink '> <Link to="/luxurious" style={{ textDecoration: 'none', color: 'inherit' }}>Luxury</Link></Nav.Link>
            <Nav.Link href="#about" className='NavLink'> <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>Booking Details</Link></Nav.Link>

                      </Nav>
        </Navbar.Collapse>
    </Navbar></div>  )
}

export default Headerl