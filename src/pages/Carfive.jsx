import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Five from '../components/Five'
import Header from '../components/Header'
import Headerc from '../components/Headerc'


function Carfive() {
  return (
    <div>
            <Headerc/>

        <Row>
               <Five/>
        </Row>
    </div>
  )
}

export default Carfive