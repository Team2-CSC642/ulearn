import './Dash.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import starslide from './checkup.jpg';
import Accordion from 'react-bootstrap/Accordion';
import logo from './sfStateLogo.png';
import { PencilSquare, CircleFill, FileEarmarkPdf, X, FileEarmarkPlay } from 'react-bootstrap-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import BigTaskListGrading from './BigTaskListGrading'

const datesToAddAssignmentsTo = [new Date(2021, 11, 25), new Date(2021, 11, 24), new Date(2021, 11, 15)];
const datesToAddQuizzesTo = [new Date(2021, 11, 10)];
const datesToAddEventsTo = [new Date(2021, 11, 29)];

function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
}

const InstructorCalendarClass = () => {
    const [taskType, setTaskType] = React.useState('Select Item Type')
    const [createAssignmentModalShow, setCreateAssignmentModalShow] = React.useState(false);
    const [assignmentModalShow, setAssignmentModalShow] = React.useState(false);
    const [quizModalShow, setQuizModalShow] = React.useState(false);
    const [eventModalShow, setEventModalShow] = React.useState(false);
    const [welcomeCard, setWelcomeCard] = React.useState(false);
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
        <div className='Backdrop overflow-hidden'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1><a href="/ulearn/#/iTaskList" style={{ textDecoration: 'none', color: 'white' }}>uLearn</a></h1>
                    </Col>

                    <Col className='DashTitle'>
                        <h1> Instructor Dashboard</h1>
                    </Col>

                    <Col className='DashOptions'>
                        <h5 name='logout'><a href='/ulearn/#/' style={{ color: 'white', textDecoration: 'none' }}>Logout</a></h5>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary' active>CSC 123</Button></Accordion.Header>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary'>CSC 256</Button></Accordion.Header>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary'>CSC 420</Button></Accordion.Header>
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
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>

                    {/* Center column content */}
                    <Col className='CenterCol-7' xs={7}>
                        <div className='CenterContent'>
                            <Container className='overflow-auto' style={{ height: '100%' }}>
                                <Modal
                                    size='lg'
                                    aria-labelledby='contained-modal-title-vcenter'
                                    centered
                                    show={welcomeCard}
                                    onHide={() => setWelcomeCard(false)}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ flexGrow: '4' }}>
                                            <Container>
                                                <Row style={{ textAlign: 'center' }}>
                                                    <Col>
                                                        Edit Class Description
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row style={{ alignItems: 'center' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Title:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)' }}>Welcome to the class!</textarea>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                                                </Col>
                                                <hr />
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>

                                                <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                    <Button onClick={() => setWelcomeCard(false)}>Save</Button>
                                                </Col>
                                            </Row>

                                        </Container>
                                    </Modal.Body>
                                </Modal>
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
                                                        <Dropdown.Item as='button' onClick={() => setTaskType('Material')}>Material</Dropdown.Item>
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
                                                    <Card body><input type='file' multiple style={{ marginLeft: '150px' }}></input></Card>
                                                </Col>
                                            </Row>
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)' }}></textarea>
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
                                                    <Button onClick={() => setAssignmentModalShow(false)}>Submit</Button>
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
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
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
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
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
                                            <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                <Col>
                                                    <h4 style={{ alignSelf: 'end' }}>Description:</h4>
                                                </Col>
                                                <Col style={{ flexGrow: '4' }}>
                                                    <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
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
                                    </Col>
                                    <Col className='CenterHeader' style={{ flexGrow: '4' }}>
                                        <h1>CSC 123</h1>
                                    </Col>
                                    <Col style={{ alignSelf: 'center' }}>
                                        <Button onClick={() => setCreateAssignmentModalShow(true)}>New Item</Button>
                                    </Col>
                                    <hr />
                                </Row>
                                <Row style={{ padding: '10px' }}>
                                    <Card>
                                        <Card.Title style={{ padding: '10px' }}><p style={{ display: 'inline', marginRight: '10px' }}>Welcome to the class!</p><PencilSquare style={{ alignSelf: 'end' }} cursor='pointer' onClick={() => setWelcomeCard(true)} /></Card.Title>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row class='overflow-auto'>
                                    <Accordion>
                                        <Accordion.Item eventKey='0' style={{ textAlign: 'center' }}>
                                            <Accordion.Header>Materials</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li style={{ paddingBottom: '10px' }}><FileEarmarkPdf size={36} />Syllabus.pdf<PencilSquare style={{ marginLeft: '5px' }} cursor='pointer' /> <X size={36} cursor='pointer' /></li>
                                                    <li style={{ paddingBottom: '10px' }}><FileEarmarkPlay size={36} />Lecture1.pdf <PencilSquare style={{ alignSelf: 'end' }} cursor='pointer' /> <X size={36} cursor='pointer' /></li>
                                                    <li><FileEarmarkPlay size={36} />Lecture2.pdf <PencilSquare style={{ alignSelf: 'end' }} cursor='pointer' /> <X size={36} cursor='pointer' /></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>Assignments</Accordion.Header>
                                            <Accordion.Body>
                                                <BigTaskListGrading setModal={setAssignmentModalShow} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>Tests</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <Card>
                                                        <Container style={{ backgroundColor: '#484848' }}><Card.Title style={{ marginTop: '10px', color: 'white' }}>Quiz 1<PencilSquare style={{ marginLeft: '10px' }} color='white' /></Card.Title></Container>
                                                        <Card.Body>
                                                            <Container>
                                                                <Row style={{ alignItems: 'center' }}>
                                                                    <Col>
                                                                        <h5 style={{ alignSelf: 'end' }}>Due Date:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4' }}>
                                                                        <Card body style={{ textAlign: 'center' }}>
                                                                            12/15/2021 11:59pm
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                    <Col>
                                                                        <h5 style={{ alignSelf: 'end' }}>Description:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4' }}>
                                                                        <Card body style={{ textAlign: 'center' }}>
                                                                            Lorem Ipsum
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                    <Col>
                                                                        <h5>Materials:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                        <Card body><FileEarmarkPdf size={36} />Provided PDF Information.pdf</Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                    <Col>
                                                                        <h5>Status:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                        <Card body>
                                                                            0/45 Submission
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                    <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                        <Button href='/ulearn/#/createQuiz' style={{ marginLeft: '5%' }}>Edit Quiz</Button>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion style={{ paddingBottom: '4%' }}>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>Events</Accordion.Header>
                                            <Accordion.Body>
                                            <ul>
                                                    <Card>
                                                        <Container style={{ backgroundColor: '#484848' }}><Card.Title onClick={()=>setEventModalShow(true)} style={{ marginTop: '10px', color: 'white' }}>Event 1<PencilSquare style={{ marginLeft: '10px' }} color='white' /></Card.Title></Container>
                                                        <Card.Body>
                                                            <Container>
                                                                <Row style={{ alignItems: 'center' }}>
                                                                    <Col>
                                                                        <h5 style={{ alignSelf: 'end' }}>Date:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4' }}>
                                                                        <Card body style={{ textAlign: 'center' }}>
                                                                            12/15/2021 11:59pm
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                    <Col>
                                                                        <h5 style={{ alignSelf: 'end' }}>Description:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4' }}>
                                                                        <Card body style={{ textAlign: 'center' }}>
                                                                            Lorem Ipsum
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                    <Col>
                                                                        <h5>Materials:</h5>
                                                                    </Col>
                                                                    <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                        <Card body><FileEarmarkPdf size={36} />Provided PDF Information.pdf</Card>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Row>
                            </Container>
                        </div>
                    </Col>

                    {/* Right nav bar stuff */}
                    <Col className='CenterCol' style={{ maxWidth: '20%' }}>
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
                            <Container>
                                <Row>
                                    <Col>
                                        <Calendar prev2Label={null} next2Label={null} className='SideCalendar' tileContent={tileContent} />
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

export default InstructorCalendarClass;