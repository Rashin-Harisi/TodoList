import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './taskItem.css';

const TaskItem =()=>{
    return(
            <li className='tasksItem'>
                    <input type='checkbox' />
                    <p> Working on React projects</p>
                    <Button className='deleteButton' variant="light" size='sm'><FaTrashAlt/></Button>
            </li>
    )
};

export default TaskItem;
