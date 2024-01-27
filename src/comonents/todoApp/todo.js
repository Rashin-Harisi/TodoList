import React, { useState } from 'react';
import { Form, Row, Col, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.css';
import TaskItem from '../taskItem/taskItem';



const ToDo = ({tasks, addTask,deleteTask}) => {
    const [value,setValue]=useState("")
    
    const handleChange= (event)=>{
        if(event) event.preventDefault();
        setValue(event.target.value)    
    }
    const handleSubmit= (event)=>{
        if(event) event.preventDefault();
        if(!value || value === ""){
            return
        }
        addTask(value)
    }

    
    return (
        <div className='todoApp'>
            <div style={{ marginTop: '5px', height: '80px', marginBottom: '10px', }}>
                <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <Col>
                            <Form.Group className="mb-3" controlId="enterTasks" style={{ display: 'flex', flexDirection: 'column', width: '320px', fontSize: '12px', }}>
                                <Form.Label>What needs to be done?</Form.Label>
                                <input  onChange={handleChange} className='form-control inputTasks' type='text' placeholder='Write your tasks here' style={{ height: '20px', fontSize: '12px' }}></input>
                                <Form.Text style={{ textAlign: 'left', fontSize: '10px', marginLeft: '30px', }}>e.g purchasing some stuff.</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button className='addButton' variant="outline-primary" type='submit' size='sm' >Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div>
                <ul className='tasksList'>
                    {tasks.map(task => <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>)}                    
                </ul>
            </div>

        </div>
    )
};

export default ToDo;