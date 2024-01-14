import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { updatebook } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Update({ history,index }) {

  const [show, setShow] = useState(false);
 const  [update,setUpdate] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setUpdate(history[id]);
  };
  // console.log(update);

  // console.log(history);

  const updateBook = async(uid)=>{
    console.log(uid);
    handleClose()
    const response = await  updatebook(uid,update)
    setTimeout(()=>window.location.reload(), 1000)
    toast.success('Update Successful')

  }
  

  return (
    <>
      <span class="badge rounded-pill bg-primary" style={{cursor:'pointer'}} onClick={()=>handleShow(index)}>Update</span>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title><h1 className='text-center text-primary'>UPDATE</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border shadow bg-light text-primary rounded p-3'>


          <Row className='justify-content-inline'>
            
            <Col>

              <Form.Group className="mb-3" controlId="formBasicdate">
                <Form.Label className='fw-bolder'>Date</Form.Label>
                <Form.Control type="date" value={update.date} onChange={(e)=>setUpdate({...update,date:e.target.value})} placeholder="Enter drop-off place" />
              </Form.Group></Col>
            <Col> <Form.Group className="mb-3" controlId="formBasictime">
              <Form.Label className='fw-bolder'>Time</Form.Label>
              <Form.Control type="time" value={update.time}  onChange={(e)=>setUpdate({...update,time:e.target.value})} placeholder="Enter drop-off place" />
            </Form.Group></Col>
          </Row>
          {/* <Form.Group className="mb-3" controlId="formBasicnumber">
            <Form.Label className='fw-bolder'>Hours</Form.Label>
            <Form.Control type="number" placeholder="1" />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicnumber">
            <Form.Label className='fw-bolder'>Number Of Days</Form.Label>
            <Form.Control type="text" value={update.days} onChange={(e)=>setUpdate({...update,days:e.target.value})} placeholder="1" />
          </Form.Group>
          <button type="button" class="btn btn-primary mx-auto bg-primary text-light d-block"  onClick={()=>updateBook(update?.id)} fdprocessedid="bqpep">Save Changes</button>
</Form>
        </Modal.Body>
        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  );
}



export default Update