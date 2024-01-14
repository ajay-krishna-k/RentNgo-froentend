import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutSection() {
 

  return (
    <Container className="my-5" >
      <Row className="align-items-center">
        {/* Image on the left side */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <Image style={{}}
            src="https://www.icegif.com/wp-content/uploads/car-icegif.gif"
            alt="About RentNGo"
            fluid
          />
        </Col>

        {/* Text on the right side */}
        <Col xs={12} md={6}>
          <h2 className='text-primary abtt'>About <span className='abt' >RentNGo</span></h2>
          <p>
            RentNGo is your gateway to seamless car rentals, designed to empower your journeys. 
            We believe in providing a hassle-free experience, allowing you to focus on the road 
            and the adventures ahead.
          </p>
          <p>
            Our commitment is to offer a diverse fleet of vehicles, transparent pricing, and 
            exceptional customer service. Whether it's a weekend getaway or a cross-country 
            road trip, RentNGo is here to make every drive a memorable experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection
