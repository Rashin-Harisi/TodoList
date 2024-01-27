import React, { useState } from 'react';
import './footer.css';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = ({tasks,setFilterParent,filteredTasks}) => {
    const [filter,setFilter]=useState('all');
    const handleFilter= (filterName)=>{
        setFilter(filterName)
        setFilterParent(filterName);
    }

    return (
        <div className='footer'>
            <Row className='footerFilter'style={{ width:'100%', marginTop:'10px', marginLeft:'0'}}>
                <Col className='footerFilter__countItems' >
                    <div>{filteredTasks.length} items</div>
                </Col>
                <Col className='footerFilter__buttonFilter' >
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={()=>handleFilter('all')} variant="outline-primary" size="sm" className={filter==='all'? 'active': ''}>All</Button>
                        <Button onClick={()=>handleFilter('active')} variant="outline-danger" size="sm" className={filter==='active'? 'active': ''}>Active</Button>
                        <Button onClick={()=>handleFilter('completed')} variant="outline-success" size="sm" className={filter==='completed'? 'active': ''}>Completed</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;