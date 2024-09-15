import React, { useState } from 'react'
import {Button, Card, Col, Container, Form, Row, TabContainer} from 'react-bootstrap'
import DisplayCount from './DisplayCount'

const AddTodo = () => {

  let [todo ,setTodo] =  useState({
        title:'',
        description :''
    })

    const handleSubmit =(e) =>{
     e.preventDefault();

     //add todo in store
     console.log(todo);

     setTodo({
        title:'',
        description:''
     })
     
    }
  return (
    <Container>
    <Row>
        <Col md={12}>
        <Card className='shadow-sm'>
            <Card.Body>
                <h3>Add Todo Here !!</h3>
                 <DisplayCount/>
              {/* Form */}

              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                    <Form.Label>
                        Todo Title
                    </Form.Label>
                    <Form.Control type='text'
                     placeholder='Enter Here'
                     value={todo.title}
                     onChange={e => setTodo({...todo ,title:e.target.value})}
                     ></Form.Control>
                </Form.Group>

                {/* description */}

                <Form.Group className='mt-3'>
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control as ={'textarea'}
                     type='text' placeholder='Enter Here'
                     value={todo.description}
                     onChange={e => setTodo({...todo ,description:e.target.value})}
                     ></Form.Control>
                     </Form.Group>

                     <Container>
                        <Button variant='primary' className='text-center mt-3' type='submit'>Add Todo</Button>
                     </Container>
              </Form>
            </Card.Body>
            </Card> 
           
        </Col>
    </Row>
    </Container>
  )
}

export default AddTodo