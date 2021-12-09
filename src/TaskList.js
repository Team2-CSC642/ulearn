import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import TaskListData from 'TaskListData.json';
let taskListData = require('./TaskListData.json');

const TaskList = ({setModal}) => {
    return (
        <Container className='overflow-auto' style={{ padding: '0%' }}>
            <Row>
                {taskListData.map((task) => (
                    <Col>
                        <Card key={task.name}>
                            <Card.Header onClick={() => setModal(true)} style={{cursor:'pointer'}}><h6>{task.class} {task.name}</h6></Card.Header>
                            <Card.Body className="card">
                                <Card.Text inline>{task.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TaskList;