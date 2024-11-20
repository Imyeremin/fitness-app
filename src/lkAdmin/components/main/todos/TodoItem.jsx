import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoComplete } from "../../../../store/todoSlise";

const TodoItem = ({ todo }) => {
  const [comleted, setCompleted] = useState({
    opacity: "1",
  });
  const [desc, setDesc] = useState(todo.desc);

  const onCompleted = () => {
    if (comleted.opacity == "1") {
      setCompleted({
        opacity: "0.5",
        backgroundColor: " rgb(0, 138, 0)",
        transition: "all 0.5s ease-in-out",
      });
      setDesc("");
    } else {
      setCompleted({
        opacity: "1",
        transition: "all 0.5s ease-in-out",
      });
      setDesc(todo.desc);
    }
  };

  const dispatch = useDispatch();

  const onDeleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Card className="mb-1 bg-dark text-light">
        <Card.Body style={comleted}>
          <Card.Title>{todo.task}</Card.Title>
          <Card.Subtitle className="mb-3 ">{todo.date}</Card.Subtitle>
          <Card.Text>{desc}</Card.Text>
          <Button onClick={() => onCompleted()} variant="outline-success me-1">
            Выполнено
          </Button>
          <Button
            onClick={() => onDeleteTask(todo.id)}
            variant="outline-danger"
          >
            Закончить
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default TodoItem;
