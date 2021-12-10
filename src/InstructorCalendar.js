import './Dash.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import starslide from './checkup.jpg';
import Accordion from 'react-bootstrap/Accordion';
import logo from './sfStateLogo.png';
import { List, CircleFill, FileEarmarkPdf, X } from 'react-bootstrap-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import TaskList from './TaskList.js';

const datesToAddAssignmentsTo = [new Date(2021, 11, 25), new Date(2021, 11, 24), new Date(2021, 11, 15)];
const datesToAddQuizzesTo = [new Date(2021, 11, 10)];
const datesToAddEventsTo = [new Date(2021, 11, 29)];

function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
}

const InstructorCalendar = () => {
    const [taskType, setTaskType] = React.useState('Select Item Type')
    const [createAssignmentModalShow, setCreateAssignmentModalShow] = React.useState(false);
    const [assignmentModalShow, setAssignmentModalShow] = React.useState(false);
    const [quizModalShow, setQuizModalShow] = React.useState(false);
    const [eventModalShow, setEventModalShow] = React.useState(false);
    function tileContent({ date, view }) {
        if (view === 'month') {
            if (datesToAddAssignmentsTo.find(dDate => isSameDay(dDate, date))) {
                return <CircleFill size={12} color='#0D6EFD' style={{ marginLeft: '5px' }} onClick={() => setAssignmentModalShow(true)} />;
            }
            if (datesToAddQuizzesTo.find(dDate => isSameDay(dDate, date))) {
                return <CircleFill size={12} color='#DD3544' style={{ marginLeft: '5px' }} onClick={() => setQuizModalShow(true)} />;
            }
            if (datesToAddEventsTo.find(dDate => isSameDay(dDate, date))) {
                return <CircleFill size={12} color='#198754' style={{ marginLeft: '5px' }} onClick={() => setEventModalShow(true)} />;
            }
        }
    }

    return (
        <div className='Backdrop'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1><a href="/ulearn/#/" style={{ textDecoration: 'none', color: 'white' }}>uLearn</a></h1>
                    </Col>

                    <Col className='DashTitle'>
                        <h1> Instructor Dashboard</h1>
                    </Col>

                    <Col className='DashOptions'>
                        <h5 name='logout'><a href='/ulearn/#/' style={{color:'white', textDecoration:'none'}}>Logout</a></h5>
                        <h5>Settings</h5>
                        <h5>Notifications</h5>
                    </Col>
                </Row>
            </Container>

            <Container className='CenterContentContainer' fluid>
                <Row >
                    {/* Left nav bar stuff */}
                    <Col className='CenterCol'>
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
                                                <Accordion.Header> <Button href="/ulearn/#/iCalendarClass" variant='outline-primary' >CSC 123</Button></Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Button variant='outline-primary' size='sm' onClick={() => setCreateAssignmentModalShow(true)}>Quick Create</Button></li>
                                                        <li>Homework 1</li>
                                                        <li>Quiz 1</li>
                                                        <li>Discussion Post</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary' >CSC 256</Button></Accordion.Header>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary' >CSC 420</Button></Accordion.Header>
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

                    {/* Center column content */}
                    <Col className='CenterCol-7' xs={7}>
                        <div className='CenterContent'>
                            <Container style={{ height: '100%' }}>
                                <Modal
                                    size='lg'
                                    aria-labelledby='contained-modal-title-vcenter'
                                    centered
                                    show={createAssignmentModalShow}
                                    onHide={() => setCreateAssignmentModalShow(false)}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ flexGrow: '4' }}>
                                            <Container>
                                                <Row style={{ textAlign: 'center' }}>
                                                    <Col>
                                                        Create Item
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row style={{ alignItems: 'center' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Task Type:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <DropdownButton title={taskType} variant='outline-primary'>
                                                        <Dropdown.Item as='button' onClick={() => setTaskType('Assignment')}>Assignment</Dropdown.Item>
                                                        <Dropdown.Item as='button' onClick={() => setTaskType('Quiz')}>Quiz</Dropdown.Item>
                                                        <Dropdown.Item as='button' onClick={() => setTaskType('Event')}>Event</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4>Due Date:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Card body><input type='datetime-local' /></Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4>Materials:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Card style={{textAlign: 'center'}}body><input type='file' multiple style={{ marginLeft: '150px' }}></input></Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)', width:'100%' }}></textarea>
                                                </Col>
                                                <hr />
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <input type='checkbox' style={{ height: '20px', width: '20px' }} />
                                                    <label style={{ marginLeft: '10px', marginBottom: '10px' }}>Visible to Students</label>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>

                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Button onClick={() => setCreateAssignmentModalShow(false)}>Submit</Button>
                                                </Col>
                                            </Row>

                                        </Container>
                                    </Modal.Body>
                                </Modal>
                                <Modal
                                    size='lg'
                                    aria-labelledby='contained-modal-title-vcenter'
                                    centered
                                    show={assignmentModalShow}
                                    onHide={() => setAssignmentModalShow(false)}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ flexGrow: '4' }}>
                                            <Container>
                                                <Row style={{ textAlign: 'center' }}>
                                                    <Col>
                                                        Assignment 1
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row style={{ alignItems: 'center' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Due Date:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <Card body style={{ textAlign: 'center' }}>
                                                        <input type='datetime-local' value='2021-12-15T23:59' />
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)', width:'100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4>Materials:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Card body><FileEarmarkPdf size={36} />Provided PDF Information.pdf <X size={36} /><input type='file' multiple style={{ marginLeft: '100px', marginTop: '25px' }} /></Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <hr />
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <input type='checkbox' style={{ height: '20px', width: '20px' }} checked />
                                                    <label style={{ marginLeft: '10px', marginBottom: '10px' }}>Visible to Students</label>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Button onClick={() => setAssignmentModalShow(false)}>Save Changes</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                </Modal>
                                <Modal
                                    size='lg'
                                    aria-labelledby='contained-modal-title-vcenter'
                                    centered
                                    show={quizModalShow}
                                    onHide={() => setQuizModalShow(false)}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ flexGrow: '4' }}>
                                            <Container>
                                                <Row style={{ textAlign: 'center' }}>
                                                    <Col>
                                                        Quiz 1
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row style={{ alignItems: 'center' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Due Date:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <Card body style={{ textAlign: 'center' }}>
                                                        <input type='datetime-local' value='2021-12-10T23:59' />
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)', width:'100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4>Materials:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Card body><FileEarmarkPdf size={36} />Provided PDF Information.pdf <X size={36} /><input type='file' multiple style={{ marginLeft: '100px', marginTop: '25px' }} /></Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <hr />
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <input type='checkbox' style={{ height: '20px', width: '20px' }} checked />
                                                    <label style={{ marginLeft: '10px', marginBottom: '10px' }}>Visible to Students</label>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Button style={{ marginRight: '10px' }}>Edit Questions</Button>
                                                    <Button onClick={() => setAssignmentModalShow(false)}>Save Changes</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                </Modal>
                                <Modal
                                    size='lg'
                                    aria-labelledby='contained-modal-title-vcenter'
                                    centered
                                    show={eventModalShow}
                                    onHide={() => setEventModalShow(false)}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ flexGrow: '4' }}>
                                            <Container>
                                                <Row style={{ textAlign: 'center' }}>
                                                    <Col>
                                                        Event 1
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row style={{ alignItems: 'center' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Date:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <Card body style={{ textAlign: 'center' }}>
                                                        <input type='datetime-local' value='2021-12-29T23:59' />
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px'}}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)', width:'100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4>Materials:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Card body><FileEarmarkPdf size={36} />Provided PDF Information.pdf <X size={36} /><input type='file' multiple style={{ marginLeft: '100px', marginTop: '25px' }} /></Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <hr />
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <input type='checkbox' style={{ height: '20px', width: '20px' }} checked />
                                                    <label style={{ marginLeft: '10px', marginBottom: '10px' }}>Visible to Students</label>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Button onClick={() => setEventModalShow(false)}>Save Changes</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                </Modal>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <p style={{ margin: '0px', fontSize: '12px', display: 'inline' }}>Assignment</p>
                                                <CircleFill size={10} color='#0D6EFD' style={{ marginLeft: '5px' }} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p style={{ margin: '0px', fontSize: '12px', display: 'inline' }}>Quiz/Test</p>
                                                <CircleFill size={10} color='#DD3544' style={{ marginLeft: '5px' }} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p style={{ margin: '0px', fontSize: '12px', display: 'inline' }}>Event</p>
                                                <CircleFill size={10} color='#198754' style={{ marginLeft: '5px' }} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='CenterHeader' style={{ flexGrow: '4' }}>
                                        <h1>Calendar View</h1>
                                    </Col>
                                    <Col style={{ alignSelf: 'center' }}>
                                        <a style={{color:'#6C757D'}} href='/ulearn/#/iTaskList'>
                                            <List size={48} />
                                        </a>
                                    </Col>
                                    <hr />
                                </Row>
                                <Row className='CalendarRow' style={{ maxHeight: '85%', height: '85%', fontSize: '3vh', textDecoration: 'none', }}>
                                    <Calendar tileContent={tileContent} style={{ textDecoration: 'none' }} />
                                </Row>
                            </Container>
                        </div>
                    </Col>

                    {/* Right nav bar stuff */}
                    <Col className='CenterCol'>
                        <div className='CenterRightNav'>
                            <Container className='CarouselContainer'>
                                <Row>
                                    <Col>
                                        <h5 style={{textAlign:'center'}}>Announcements</h5>
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
                            <Container className='TaskListContainer overflow-auto' style={{height:'60%', padding:'6%'}}>
                                        <h5 style={{textAlign:'center'}}>Task List</h5>
                                        <TaskList setModal={setAssignmentModalShow}/>
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

export default InstructorCalendar;