import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import com from "../compact.png";
import suv from "../suv.png";
import luxury from "../luxury.png";
import { Link } from 'react-router-dom';

function Catogory() {
  return (
    <div>    
    <h1>Explore Our Car Categories</h1>
    <div class="progress ">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:" 75%"}}></div>
</div>
    {/* Row 1: Compact Cars */}
    <Row className="mt-4 align-items-center">
      <Col md={6} className="mb-4 cardcontainer">
        <img className='galleryImg' src={com} style={{width:"100%"}} alt="Compact Cars" fluid />
      </Col>
      <Col md={6} className="mb-4">
        <h1 className='text-info'>Compact Cars</h1>
        <p>
          Discover fuel-efficient and easy-to-manage compact cars, perfect for navigating city streets with style and comfort.
        </p>
        <p>Starting Price: ₹2500</p>
        <p>Seat Capacity: 4</p>
        <Link to="/compact" style={{ textDecoration: 'none', color: 'inherit' }}><button type="button" class="btn btn-outline-info" fdprocessedid="rc6d2v">SELECT</button>
</Link>

      </Col>
    </Row>
    <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated w-50 bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="1" aria-valuemax="100"></div>
</div>
    {/* Row 2: SUVs */}
    <Row className="mt-4 align-items-center">
      
      <Col md={6} className="mb-4 ">
        <h1 className='text-warning'>SUVs</h1>
        <p>
          Experience the spacious comfort and versatility of our SUVs, perfect for family trips or outdoor excursions, with advanced safety features for peace of mind.
        </p>
        <p>Starting Price: ₹7000</p>
        <p>Seat Capacity: 5-7</p>
        <Link to="/suv" style={{ textDecoration: 'none', color: 'inherit' }}><button type="button" class="btn btn-outline-warning" fdprocessedid="r0yj8k">SELECT</button>
</Link>
      </Col>
      <Col md={6} className="mb-4 cardcontainer">
        <img className='galleryImg' src={suv} alt="SUVs" style={{width:"100%"}} fluid />
      </Col>
    </Row>
    <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated w-25 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="1" aria-valuemax="100"></div>
</div>
    {/* Row 3: Luxury Cars */}
    <Row className="mt-4 align-items-center">
      <Col md={6} className="mb-4 cardcontainer">
        <img className='galleryImg' src={luxury} style={{width:"100%"}} alt="Luxury Cars" fluid />
      </Col>
      <Col md={6} className="mb-4">
        <h1 className='text-success'>Luxury Cars</h1>
        <p>
          Indulge in the ultimate driving experience with our premium selection of luxury cars, where cutting-edge technology meets opulent design for a journey beyond the ordinary.
        </p>
        <p>Starting Price: ₹15,000</p>
        <p>Seat Capacity: 2-5</p>
        <Link to="/luxurious" style={{ textDecoration: 'none', color: 'inherit' }}><button type="button" class="btn btn-outline-success" fdprocessedid="8ms8">SELECT</button>
</Link>

      </Col>
    </Row>
</div>
  )
}

export default Catogory