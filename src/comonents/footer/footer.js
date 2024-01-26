import React from 'react';
import './footer.css';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div className='footer'>
            <Row className='footerFilter'style={{ width:'100%', marginTop:'10px', marginLeft:'0'}}>
                <Col className='footerFilter__countItems' >
                    <div>1 item</div>
                </Col>
                <Col className='footerFilter__buttonFilter' >
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-primary" size="sm">All</Button>
                        <Button variant="outline-danger" size="sm">Active</Button>
                        <Button variant="outline-success" size="sm">Completed</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;