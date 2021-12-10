import './Dash.css';
import React from 'react';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import logo from './sfStateLogo.png';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { render } from '@testing-library/react';

const Grading = () => {
    return (
        <div className='Backdrop'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1>uLearn</h1>
                    </Col>

                    <Col className='DashOptions'>
                        <h5>Logout</h5>
                        <h5>Settings</h5>
                        <h5>Notifications</h5>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row >
                    <Col className='CenterCol' xs lg="2">
                        <div className='CenterLeftNav overflow-auto'>
                            <Container className='CourseContainer'>
                                <Row>
                                    <Col>
                                        <h5>My Courses</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Accordion>
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header><Button href="/iCalendarClass" variant='outline-primary' active>CSC 123</Button></Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Button variant='outline-primary' size='sm'>Quick Create</Button></li>
                                                        <li>Homework 1</li>
                                                        <li>Quiz 1</li>
                                                        <li>Discussion Post</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header><Button href="/iCalendarClass" variant='outline-primary'>CSC 256</Button></Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Button variant='outline-primary' size='sm'>Quick Create</Button></li>
                                                        <li>Homework 1</li>
                                                        <li>Quiz 1</li>
                                                        <li>Discussion Post</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header><Button href="/iCalendarClass" variant='outline-primary'>CSC 420</Button></Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Button variant='outline-primary' size='sm'>Quick Create</Button></li>
                                                        <li>Homework 1</li>
                                                        <li>Quiz 1</li>
                                                        <li>Discussion Post</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>

                    <Col className='CenterCol-7'>
                        <div className='CenterContent overflow-auto'>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>Grading Assignment 1</h1>
                                    </Col>
                                    <hr />
                                    
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className='FooterContainer' fluid>
                <Row className='FooterRow'>
                    <Col className='FooterFAQ'>
                        <h3>FAQ</h3>
                    </Col>

                    <Col className='SFSUContact'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'end' }}>
                            <img alt="SFSU Logo" src={logo} style={{ width: '32px', height: '32px', marginRight: '10px' }} />
                            <h3> SFSU Contact</h3>
                        </div>
                    </Col>

                    <Col className='uLearnContact'>
                        <h3> uLearn Contact</h3>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Grading;