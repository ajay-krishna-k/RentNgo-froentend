import React from 'react'

    import { useState } from 'react';
    import Collapse from 'react-bootstrap/Collapse';
    function Location() {
        const [open, setOpen] = useState(false);
        return (
            <div class="accordion mt-4 mb-2" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" onClick={() => setOpen(!open)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" fdprocessedid="wx53o">
                <i class="fa-solid fa-location-crosshairs me-4"></i> Find Us
                </button> </h2>
          
      
          </div>
          <Collapse in={open}><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

          <div className='row justify-content-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7754.844450753908!2d76.34348290027181!3d10.016238372385294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700895746312!5m2!1sen!2sin"  style={{border:"0",width:"100%",height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
      </div></div>
              </Collapse>
          </div>         

        )
      }
      

export default Location