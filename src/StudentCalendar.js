import './Dash.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import starslide from './checkup.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import logo from './sfStateLogo.png';
import {List} from 'react-bootstrap-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const StudentCalendar = () => {
    return (
        <div className='Backdrop'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1>uLearn</h1>
                    </Col>

                    <Col className='DashTitle'>
                        <h1> Student Dashboard</h1>
                    </Col>

                    <Col className='DashOptions'>
                        <h5>Logout</h5>
                        <h5>Settings</h5>
                        <h5>Notifications</h5>
                    </Col>
                </Row>
            </Container>

            <Container className='CenterContentContainer' fluid>
                <Row >
                    {/* Left nav bar stuff */}
                    <Col className='CenterCol'>
                        <div className='CenterLeftNav'>
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
                                                <Accordion.Header>CSC 123</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Homework 1</li>
                                                        <li>Quiz 1</li>
                                                        <li>Discussion Post</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header>CSC 256</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Homework 1</li>
                                                        <li>Quiz 1</li>
                                                        <li>Discussion Post</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header>CSC 420</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
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

                    {/* Center column content */}
                    <Col className='CenterCol-7' xs={7}>
                            <Container style={{height:'100%'}}>
                                <Row>
                                    <Col></Col>
                                    <Col className='CenterHeader' style={{flexGrow:'4'}}>
                                        <h1>Calendar View</h1>
                                    </Col>
                                    <Col style={{alignSelf:'center'}}>
                                        <List size={48}/>
                                    </Col>
                                    <hr/>
                                </Row>
                                <Row className='CalendarRow'style={{height:'85%', fontSize:'24px', textDecoration:'none'}}>
                                    <Calendar style={{textDecoration:'none'}}/>
                                </Row>
                            </Container>
                    </Col>

                    {/* Right nav bar stuff */}
                    <Col className='CenterCol'>
                        <div className='CenterRightNav'>
                            <Container className='CarouselContainer'>
                                <Row>
                                    <Col>
                                        <h5>Announcements</h5>
                                        <Carousel className='Carousel'>
                                            <Carousel.Item>
                                                <img alt="Announcement Slide" className='d-block w-100' src={starslide} />
                                                <Carousel.Caption>
                                                    <h6>Student Center Checkups</h6>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img alt="Announcement Slide" className='d-block w-100' src={starslide} />
                                                <Carousel.Caption>
                                                    <h6>Student Center Checkups</h6>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img alt="Announcement Slide" className='d-block w-100' src={starslide} />
                                                <Carousel.Caption>
                                                    <h6>Student Center Checkups</h6>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                        <hr></hr>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className='TaskListContainer' fluid>
                                <Row>
                                    <Col>
                                        <div className='TaskListBackground'>
                                            <h6>TaskList</h6>
                                            <ListGroup className='TaskListGroup'>
                                                <ListGroup.Item>
                                                    <p>Task 1</p>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </Col>
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

export default StudentCalendar;