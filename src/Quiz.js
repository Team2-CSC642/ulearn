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

const Quiz = () => {
    return (
        <div className='Backdrop'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1><a href="/ulearn/#/iTaskList" style={{ textDecoration: 'none', color: 'white' }}>uLearn</a></h1>
                    </Col>

                    <Col className='DashOptions'>
                        <h5><a href='/ulearn/#/' style={{color:'white', textDecoration:'none'}}>Logout</a></h5>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary' active>CSC 123</Button></Accordion.Header>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary'>CSC 256</Button></Accordion.Header>
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
                                                <Accordion.Header><Button href="/ulearn/#/iCalendarClass" variant='outline-primary'>CSC 420</Button></Accordion.Header>
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
                                        <h1>CSC 420</h1>
                                    </Col>
                                    <hr />
                                    <Row>
                                        <Card>
                                            <Row>
                                                <Col></Col>
                                                <Col>
                                                    <Card.Title style={{ padding: '10px' }}><p style={{ display: 'inline', marginLeft: '16px' }}>Creating Quiz 1</p></Card.Title>
                                                </Col>
                                                <Col>
                                                    <Button variant="primary" className="AddQuestion">+ Add Question</Button>{' '}
                                                </Col>
                                            </Row>
                                        </Card>
                                        <Card>
                                            <Card.Body>
                                                <DropdownButton className="mb-5 mt-3 w-25 mx-auto" title='Multiple Choice' variant='outline-primary'>
                                                    <Dropdown.Item as='button' >Multiple Choice</Dropdown.Item>
                                                    <Dropdown.Item as='button' >Short Response</Dropdown.Item>
                                                </DropdownButton>
                                                <InputGroup className="mb-5 mt-3 w-75 mx-auto">
                                                    <FormControl className="text-center"
                                                        placeholder="Enter Description"
                                                    />
                                                </InputGroup>
                                                <Form.Text className="text-muted">
                                                    Select your desired answer.
                                                </Form.Text>
                                                <InputGroup className="mb-2 w-50 mx-auto">
                                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                                    <FormControl aria-label="Text input with radio button" placeholder="Answer 1" />
                                                </InputGroup>
                                                <InputGroup className="mb-2 w-50 mx-auto">
                                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                                    <FormControl aria-label="Text input with radio button" placeholder="Answer 2" />
                                                </InputGroup>
                                                <InputGroup className="mb-2 w-50 mx-auto">
                                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                                    <FormControl aria-label="Text input with radio button" placeholder="Answer 3" />
                                                </InputGroup>
                                                <InputGroup className="w-50  mx-auto">
                                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                                    <FormControl aria-label="Text input with radio button" placeholder="Answer 4" />
                                                </InputGroup>
                                            </Card.Body>
                                        </Card>
                                        <Card className="mt-3 w-50 mx-auto QuizOptions">
                                            <Row>
                                                <Col>
                                                    <Button variant="primary" href="/ulearn/#/iCalendarClass" className="CancelQuiz">Cancel</Button>{' '}
                                                </Col>
                                                <Col>
                                                    <Form className="mt-3">
                                                        {['radio'].map((type) => (
                                                            <div key={`default-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    type={type}
                                                                    id={`default-${type}`}
                                                                    label={`Notify Students`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </Col>
                                                <Col>
                                                    <Button variant="primary" className="SubmitQuiz">Submit</Button>{' '}
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Row>
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

export default Quiz;