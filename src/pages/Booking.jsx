import {Container} from 'react-bootstrap';
import React from 'react'
import Bookd from '../components/Bookd';
import Headerr from '../components/Headerr';


function Booking() {
 

  return (
   <>
         <Headerr/>

      <Container className='mt-5'>
          <Bookd/>
      </Container>
   </>
  );
}

export default Booking
