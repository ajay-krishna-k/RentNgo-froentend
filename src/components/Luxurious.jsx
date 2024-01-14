import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row ,Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCars } from '../services/allAPI';
import Booking from '../pages/Booking';
import { addDetails } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
function Luxurious() {
  const [eid,setEid] = useState("")
  const [carn,setCarn] = useState("")
  const [carr,setCarr] = useState("")
  // const [dayd,setDayd] = useState("")

  const [allCars, setAllCars]= useState([])
  const[focus,setFocus]=useState({errName:false, errEmail:false, errDays:false})
  const retrieveCars=async()=>{
    const response= await getAllCars();
    const {data}= response
   console.log(data);
   setAllCars(data)
  }
  useEffect(()=>{ retrieveCars()},[])
  const handleShow = (id) =>{ 
    setEid(id)
    setShow(true);
    console.log(eid);
    setCarn(allCars[id-1].carname)
    setCarr(allCars[id-1].price)

  }
  // const dragover=(e)=>{
  //   e.preventDefault()
  // }
    const [show, setShow] = useState(false);

    const navigate= useNavigate();

    const handleClose = () => setShow(false);
  
      const [addDetailsStatus,setAddDetailsStatus]= useState({})
     
      const [Cars, setCars]=useState({ 
        id:"",
        carname:"",
        username:"",
        email:"",
        time:"",
        date:"",
        days:"",
        rate:""
      })
      
      const handleUpload=async()=>{
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const{carname,username, email, time, date, days,rate}=Cars
        setCars({...Cars,rate:carr})
        if(!username||username.length<3||username.length>16||!email||!regex.test(email)||!time||!date||!days||days<1||days>90){
        toast.warning("Please fill the form completely")
      }
      else{
        const response= await addDetails(Cars)
        console.log(response);
        if(response.status>=200&&response.status<300){
          setAddDetailsStatus(response.data)
          toast.success('Booking Successful')
          //close modal
          handleClose()
          navigate("../booking")
        }
        else{
          console.log(response);
          toast.error('Something went wrong. Try again later')
        }
      }
    }
    useEffect(() => {
      // setDayd(Cars.days)
      const prate=carr
      const daydoo=Cars.days
      console.log(prate,daydoo);
      const lastrate=prate*daydoo
      console.log(lastrate);
      if (carn !== "") {
        setCars((prevCars) => ({
          ...prevCars,
          carname: carn,
rate:carr
        }));
      }
    }, [carn]);
  
  
      return (
       <>




{/* <div className='container'> */}
        {
      allCars.filter(car=>car.category=='Luxury').map((car,index)=>(
           
           <Row className="mt-4 align-items-center container">
      <Col md={6} className="mb-4">
           <img className='galleryImg' src={`${car.image}`}style={{width:"100%"}} alt="Compact Cars"  />
          </Col>
          <Col md={6} className="mb-4">
            <h1 className='text-success'>{`${car.carname}`}</h1>
            <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center text-success">
      Category:
        <span class="badge bg-success rounded-pill">{`${car.category}`}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center text-success">
      Seat Capacity:
        <span class="badge bg-success  rounded-pill">{`${car.seat}`}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center text-success">
      Per Day:
        <span class="badge bg-success rounded-pill">₹ {`${car.price}`}</span>
      </li>
    </ul>
    
            
            <button onClick={(e)=>handleShow(car?.id)} type="button" class="btn btn-outline-success mt-3 bg-success" fdprocessedid="rc6d2v">Book Now</button>    
            
  

  <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
            
          </Col>
        </Row>
        ))}
      <Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title><h1 className='ms-5 text-success'>{carn}</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>       
      <Row className=''>
                             <Col lg={12} md={12} sm={12}>
                          
                  <Form className='border shadow bg-light  text-success rounded p-3 container'>
                            <Form.Group className="mb-3" controlId="formBasicnumber">
                            {/* <Form.Control  type="text" value={allCars[eid].carname} placeholder="User Name"  onChange={(e)=>setCars({...Cars,carname:e.target.value})}/> */}
        

                             <Form.Control placeholder="User Name" onBlur={()=>setFocus({...focus, errName:true})} 
                             focus={focus.errName.toString()} required type="type" pattern="^[A-Za-z0-9].{2,15}" onChange={(e)=>setCars({...Cars,username:e.target.value})} />
                        <span>Username should have 3-16 characters</span>
                        </Form.Group>  
                        <Form.Group className="mb-3" controlId="formBasicnumber">
                             <Form.Control onBlur={()=>setFocus({...focus, errEmail:true})} focus={focus.errEmail.toString()} required type="email" placeholder="Email" onChange={(e)=>setCars({...Cars,email:e.target.value})}/>
                             <span>Enter a valid Email ID</span>  
                        </Form.Group>  
                      
                           <Row className='justify-content-inline'>
                            <Col> 
                            
                            <Form.Group className="mb-3" controlId="formBasicdate">
                             <Form.Label className='fw-bolder'>Date</Form.Label>
                             <Form.Control type="date" onChange={(e)=>setCars({...Cars,date:e.target.value})} placeholder="Enter drop-off place" />
                        </Form.Group></Col>
                            <Col> <Form.Group className="mb-3" controlId="formBasictime">
                             <Form.Label className='fw-bolder'>Time</Form.Label>
                             <Form.Control type="time" onChange={(e)=>setCars({...Cars,time:e.target.value})} placeholder="Enter drop-off place" />
                        </Form.Group></Col>
                           </Row> 
                        <Form.Group className="mb-3" controlId="formBasicnumber">
                             <Form.Label className='fw-bolder'>Number Of Days</Form.Label>
                             <Form.Control type="number" min="1" max="90" onBlur={()=>setFocus({...focus, errDays:true})} 
                             focus={focus.errDays.toString()} required  onChange={(e)=>setCars({...Cars,days:e.target.value})} placeholder="Number Of Days" />
                             <span>Days should be in the range of 1-90</span>  
                             </Form.Group>
<Row>
<Col md={6}>
                                 <h4 className="mt-3 text-success ">Rate/Day:<br/>₹ {carr}</h4>
  
</Col>                           
<Col md={6}>
      <Button type='button' onClick={handleUpload} className='btn btn-outline-primary ms-5 mt-3 bg-success'>Book Now</Button>
  
</Col></Row>

                       

                  </Form>

                
                  
            </Col>
           
      </Row>
  </Modal.Body>

</Modal>
      {/* </div> */}
   </>
  )
}

export default Luxurious
