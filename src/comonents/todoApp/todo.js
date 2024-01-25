import React from 'react';
import { Form, Row, Col, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const ToDo = () => {
    return (
        <div className='todoApp'>
            <div style={{marginTop: '5px',height:'80px', marginBottom:'10px',}}>
                <Form>
                    <Row className="align-items-center">
                        <Col>
                            <Form.Group className="mb-3" controlId="enterTasks" style={{ display: 'flex', flexDirection: 'column', width: '300px', fontSize:'12px', }}>
                                <Form.Label>What needs to be done?</Form.Label>
                                <Form.Control type='text' placeholder='Write your tasks here' style={{height:'20px', fontSize:'12px'}}></Form.Control>
                                <Form.Text style={{ textAlign: 'left', fontSize: '10px', marginLeft: '30px', }}>e.g purchasing some stuff.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="outline-primary" type='submit' size='sm' >Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

            <ul>
                <li style={{display: 'flex', alignItems: 'center' }}>
                    <input type='checkbox' />
                    <p style={{fontSize:'12px', height:'5px', }}> Working on React projects</p>
                    <span style={{ width: '50px' }}></span>
                    <Button variant="outline-primary" size='sm'>Delete</Button>
                </li>
            </ul>
        </div>
    )
};

export default ToDo;