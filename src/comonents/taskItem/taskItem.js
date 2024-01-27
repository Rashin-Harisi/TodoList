import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './taskItem.css';

const TaskItem =({task,deleteTask,handelChangeStatus})=>{
    return(
            <li className='tasksItem'>
                    <input type='checkbox' onChange={()=>handelChangeStatus(task.id)} checked={task.status}/>
                    <p>{task.title}</p>
                    <Button onClick={()=>{deleteTask(task.id)}} className='deleteButton' variant="light" size='sm'><FaTrashAlt/></Button>
            </li>
    )
};

export default TaskItem;
