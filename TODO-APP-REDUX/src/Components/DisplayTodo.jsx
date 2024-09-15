import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'

const DisplayTodo = () => {
 const[todo ,setTodo]=   useState([
    {
        title :'first title' ,
        description :'first desc'
    },
    {
        title:'second title' ,
        description :'second description'
    }
 ]

    )
  return (
    <Container>
        <Row>
            <Col>
            <Card className='mt-3 shadow-sm'>
                <Card.Body>
                 <h3>All todos are here</h3>
                 <DisplayCount/>
                 <ListGroup>
                    {
                        todo.map((item , index) =>{
                        return  <ListGroup.Item>
                              <h4 key={index}>{item.title}</h4>
                            <p key={index}>{item.description}</p>
                          
                          </ListGroup.Item>
                        })
                    }
                 </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default DisplayTodo