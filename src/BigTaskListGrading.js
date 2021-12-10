import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FileEarmarkPdf, PencilSquare} from 'react-bootstrap-icons';
//import TaskListData from 'TaskListData.json';
let taskListData = require('./TaskListData.json');

const BigTaskListGrading = ({setModal}) => {
    return (
        <Container className='overflow-auto'>
            {taskListData.map((task) => (
                <Row style={{ paddingBottom: '2%' }}>
                    <Col>
                        <Card key={task.name}>
                            <Card.Header onClick={() => setModal(true)} style={{ cursor: 'pointer' }}><h6>{task.class} {task.name} <PencilSquare style={{marginLeft:'.5%'}}/></h6></Card.Header>
                            <Card.Body className="card">
                                <Container>
                                    <Row style={{ alignItems: 'center' }}>
                                        <Col>
                                            <h5 style={{ alignSelf: 'end' }}>Due Date:</h5>
                                        </Col>
                                        <Col style={{ flexGrow: '4' }}>
                                            <Card body style={{ textAlign: 'center' }}>
                                                {task.dueDate}
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
                                                {task.istatus}
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: 'center', marginTop: '10px' }}>
                                        <Col style={{ flexGrow: '4', textAlign: 'center' }}>
                                            <Button href='/grading' style={{marginLeft:'5%'}}>View Submissions</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default BigTaskListGrading;