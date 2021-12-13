import './Dash.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import starslide from './checkup.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'
import logo from './sfStateLogo.png';
import banner from './banner.svg';
import cardimg1 from './organize.svg'
import cardimg2 from './track.svg'
import cardimg3 from './teacher.svg'
import {List} from 'react-bootstrap-icons'
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='HomeBackdrop'>
            <Container className='TopNavContainer' fluid>
                <Row className='TopNavRow'>
                    <Col className='Logo' >
                        <h1>uLearn</h1>
                    </Col>

                    <Col xs={6} style={{textAlign:'center', color:'white'}}>
                        <h5>HCI Class CSC 642 SFSU CS Department Fall 2021 Team 02</h5>
                    </Col>

                    <Col className='DashOptions'>
                        <h5><a style={{color:'white',textDecoration:'none'}} name='login' href="/ulearn/#/login">Login</a></h5>
                        <h5>Forgot Password?</h5>
                    </Col>
                </Row>
            </Container>

            <Container className='CenterContentContainer' fluid>
                <Container>
                    <Row className='Banner mt-5'>
                        <Col>
                            <h1> uLearn </h1>
                            <h3> What will uLearn today? </h3>
                            <h2 className="mt-5"> A new and improved way to keep college students on track in their studies </h2>
                            <button type="button" class="btn btn-dark mt-5"><a style={{color:'white', textDecoration:'none'}}href='/ulearn/#/login'>Get Organized</a></button>
                        </Col>
                        <Col>
                            <Image className="homeBanner"src={banner} fluid/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='Cards mb-5 mt-5'>
                        <Col>
                            <h2 class="text-center"> Get Organized </h2>
                            <Card className="homeCards">
                                <Card.Img variant="top" className="cardimg1" src={cardimg1}/>
                                <div class="card-body">
                                    <p> Have your tasks sorted by course and viewable with our calendar </p>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <h2 class="text-center"> Stay On Track </h2>
                            <Card className="homeCards">
                                <Card.Img variant="top" className="cardimg2" src={cardimg2}/>
                                <div class="card-body">
                                    <p> Have your tasks sorted by course and viewable with our calendar </p>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <h2 class="text-center"> Take Control </h2>
                            <Card className="homeCards">
                                <Card.Img variant="top" className="cardimg3" src={cardimg3}/>
                                <div class="card-body">
                                    <p> Have your tasks sorted by course and viewable with our calendar </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
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

export default Home;