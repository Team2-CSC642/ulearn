import React from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
//import TaskListData from 'TaskListData.json';
let taskListData = require('./TaskListData.json');

const TaskList = () => {
    return(
        <div className='TaskListBackground'>
        {taskListData.map((task) => (
        <Card key={task.name}>
            <Card.Body className="card">
                <Card.Title>{task.class} {task.name}
                <Form.Check inline className="cardCheckBox" type="checkbox" checked={task.completed} />
                </Card.Title>
                <Card.Text inline>{task.description}</Card.Text>
            </Card.Body>
        </Card>
        ))}
        </div>
    )
}

export default TaskList;