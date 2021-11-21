import './Dash.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashboardTemplate = () => {
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
                        <h4>Notifications</h4>
                        <h4>Settings</h4>
                        <h4>Logout</h4>
                    </Col>
                </Row>

            </Container>

            <Container className='CenterContentContainer' fluid>
                <Row >
                    <Col className='CenterCol'>
                        <div className='CenterLeftNav'></div>
                    </Col>
                    <Col className='CenterCol-7'xs={7}>
                        <div className='CenterContent'></div>
                    </Col>
                    <Col className='CenterCol'>
                    <div className='CenterRightNav'></div>
                    </Col>
                </Row>
            </Container>

            <Container className='FooterContainer' fluid>

            </Container>
        </div>
    );
}

export default DashboardTemplate;