import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './taskItem.css';

const TaskItem =()=>{
    return(
        <div className='tasksItem'>
            <li>
                    <input type='checkbox' />
                    <p style={{fontSize:'12px', height:'5px', }}> Working on React projects</p>
                    <Button className='deleteButton' variant="light" size='sm'><FaTrashAlt/></Button>
            </li>
        </div>
    )
};

export default TaskItem;
