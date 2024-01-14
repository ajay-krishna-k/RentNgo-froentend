import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutSection from '../components/AboutSection';
import Catogory from '../components/Catogory';
import Header from '../components/Header';

function Home() {
  return (
    <div className=''>      <Header/>
    <div className='' style={{height:"",width:"100%"}}>
    <Container>
  <Row className='align-items-center'>
    <Col sm={12} md={6}>
        <h1 className='text-danger' style={{fontSize:"50px",color:""}}>RentNGo</h1>
      <p>
        "More than a rental, it's a roadmap to memories. Start your voyage with RentNGo."

</p>
<a href='#cat'>
<button type="button" class="btn btn-outline-danger">
       Get Started <i class="fa-solid fa-arrow-right"></i>
  </button>
  
</a>    </Col>
    <Col sm={12} md={6}>
        
<img src="https://media.tenor.com/VnX-AlS12GUAAAAi/oroch-renault.gif" alt="" style={{width:"100%",marginTop:"100px"}}/>
    </Col>

  </Row>

</Container>
</div>
<div class="progress " id='about'>
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:" 100%"}}></div>
</div>

<AboutSection/>
<Container className="my-5" id="cat">

<Catogory/>
</Container>
</div>
  )
}

export default Home