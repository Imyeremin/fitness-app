import React from "react";
import { Card, Button } from "react-bootstrap";

const TodoItem = ({todo}) => {


  return (
<> <Card  className="mb-1 bg-dark text-light">
        <Card.Body>
          <Card.Title>{todo.task}</Card.Title>
          <Card.Subtitle className="mb-3 ">{todo.date}</Card.Subtitle>
          <Card.Text>{todo.desc}
          </Card.Text>
          <Button variant="outline-success me-1">Выполнено</Button>
          <Button variant="outline-danger">Закончить</Button>
        </Card.Body>
      </Card> </>
  );
};

export default TodoItem;
