import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Location from './Location'
function Footer() {
  return (
   <>
   <Container>
     <img className='' style={{width:"100%",position:"relative"}} src="https://www.animatedimages.org/data/media/67/animated-car-image-0369.gif
     " alt="" />
   </Container>
   {/* <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated w-100 bg-dark" role="progressbar" aria-valuenow="100" aria-valuemin="1" aria-valuemax="100"></div>
</div> */}
        <div className='footer' id='contact'> 
    <Container className="my-5">
        
          {/* One Row with Two Columns */}
          <Row>
            {/* First Column with Image */}            <Col xs={12} md={4}>
           <div className='ms-5'>
               <h2 className='text-warning'>Pages</h2>
               <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated w-75 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
               <ul className="list-unstyled text-warning fs-5">
                <li className='mt-3'>
                  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </li>
                <li className='mt-3'>
                  <Link to="/compact" style={{ textDecoration: 'none', color: 'inherit' }}>Compact Cars</Link>
                </li>
                <li className='mt-3'>
                  <Link to="/suv" style={{ textDecoration: 'none', color: 'inherit' }}>SUVs</Link>
                </li>
                <li className='mt-3'>
                  <Link to="/luxurious" style={{ textDecoration: 'none', color: 'inherit' }}>Luxurious Cars</Link>
                </li>
                <li className='mt-3'>
                  <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>Booking Details</Link>
                </li>
                <li className='mt-3'>
<a href="#navb"> <span class="badge bg-warning"><i class="fa-regular fa-circle-up fs-2"></i></span>
</a>                </li>
              </ul>
               
           </div> </Col>
            <Col xs={12} md={4}>

            
          <Row><Location/></Row>
          <Row className="  mt-4 ms-5 w-75">
              <Col className='mt-3' xs={12} md={4}>  
              <button type="button" class="btn btn-outline-light bth" fdprocessedid="gm6d1q"><i class="fa-brands fa-facebook-f "></i></button></Col>        
                <Col className='mt-3' xs={12} md={4}>      
                <button type="button" class="btn btn-outline-light bth" fdprocessedid="gm6d1q"><i class="fa-brands fa-instagram "></i></button></Col>
              <Col className='mt-3' xs={12} md={4}>      
              <button type="button" class="btn btn-outline-light bth" fdprocessedid="gm6d1q"><i class="fa-brands fa-x-twitter "></i></button></Col>
    
          </Row>
          </Col>
            {/* Second Column with Contact Information */}
            <Col xs={12} md={4}>
              <h2 className='text-info'>Contact</h2>
              <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              <ul className='text-info fs-5 ' style={{ listStyle: 'none', padding: 0 }}>
                <li className='mt-3'><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Address: Seaport - Airport road ,Kochi</a></li>
                <li className='mt-3'><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Phone: +91 9455537337</a></li>
                <li className='mt-3'><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Email: rentngo@gmail.com</a></li>
              </ul>
                </Col>
          </Row>
    
          {/* Buttons in a Flex Container */}
          
    
          {/* Copyright Paragraph */}
          <Row className="mt-4">
            <Col className="text-center">
              <p>&copy; 2023 RentNGo. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
    
    </div>
   </>
  )
}

export default Footer