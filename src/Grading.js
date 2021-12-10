import './Dash.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import logo from './sfStateLogo.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ArrowLeftSquare, FileEarmarkPdf, ArrowRightSquare } from 'react-bootstrap-icons';

const Grading = () => {
    const handleChange = (student, date, color) => {
        setStudentSelect(student);
        setSubmissionDate(date);
        setSubmitColor(color);
    }
    const [submitColor, setSubmitColor] = React.useState('Green')
    const [studentSelect, setStudentSelect] = React.useState('Student 1')
    const [submissionDate, setSubmissionDate] = React.useState('Submitted 2 Days 14 hours and 37 minutes early')
    return (
        <div className='Backdrop'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1>uLearn</h1>
                    </Col>

                    <Col className='DashOptions'>
                        <h5><a href='/' style={{color:'white', textDecoration:'none'}}>Logout</a></h5>
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
                                <Row>
                                    <Container>
                                        <Row>
                                            <Col><ArrowLeftSquare size={32} style={{ cursor: 'pointer' }} onClick={() => handleChange('Student 1','Submitted 2 Days 14 hours and 7 minutes early','Green')} /></Col>
                                            <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                <DropdownButton title={studentSelect} variant='outline-primary'>
                                                    <Dropdown.Item as='button' onClick={() => handleChange('Student 1','Submitted 2 Days 14 hours and 7 minutes early','Green')}>Student 1</Dropdown.Item>
                                                    <Dropdown.Item as='button' onClick={() => handleChange('Student 2','Submitted 1 Days 12 hours and 37 minutes late','Red')}>Student 2</Dropdown.Item>
                                                    <Dropdown.Item as='button' onClick={() => handleChange('Student 3','Submitted 4 Days 9 hours and 3 minutes early','Green')}>Student 3</Dropdown.Item>
                                                    <Dropdown.Item as='button' onClick={() => handleChange('Student 4','Submitted 5 Days 1 hours and 17 minutes late','Red')}>Student 4</Dropdown.Item>
                                                </DropdownButton>
                                            </Col>
                                            <Col><ArrowRightSquare size={32} style={{ cursor: 'pointer' }} onClick={() => handleChange('Student 2','Submitted 1 Days 12 hours and 37 minutes late','Red')} /></Col>
                                        </Row>
                                        <Row>
                                            <Container>
                                                <Row style={{ paddingTop: '2%' }}>
                                                    <Col>
                                                        <Card key='0'>
                                                            <Card.Header style={{ cursor: 'pointer' }}><h6>{studentSelect} Assignment Submission</h6></Card.Header>
                                                            <Card.Body className="card">
                                                                <Container>
                                                                    <Row style={{ alignItems: 'center' }}>
                                                                        <Col>
                                                                            <h5 style={{ alignSelf: 'end' }}>Submission Date:</h5>
                                                                        </Col>
                                                                        <Col style={{ flexGrow: '4' }}>
                                                                            <Card body style={{ textAlign: 'center' }}>
                                                                                <p style={{color:submitColor}}>{submissionDate}</p>
                                                                            </Card>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                        <Col>
                                                                            <h5>Submission:</h5>
                                                                        </Col>
                                                                        <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                            <Card body><FileEarmarkPdf size={36} />{studentSelect} Assignment1.pdf</Card>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <hr style={{marginTop:'5%'}}/>
                                                                    </Row>
                                                                    <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                        <Col>
                                                                            <h5>Feedback:</h5>
                                                                        </Col>
                                                                        <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                            <textarea rows='4' cols='71' style={{ borderColor: 'rgb(223, 223, 223)', width:'100%' }}></textarea>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                        <Col>
                                                                            <h5>Grade:</h5>
                                                                        </Col>
                                                                        <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                            <Card body><input type='number' min='0' max='100'/> /100</Card>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                                                        <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                                                            <Button href='/grading' style={{ marginLeft: '5%' }}>Save Feedback</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Container>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Row>
                                    </Container>
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