import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";


const HeaderList = styled.h2`
  width: 100%;
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-shadow: #000000 1px 0 10px;
  text-align: center;
  padding: 16px;
  border-radius: 18px;
  position: static;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TodoList = ({}) => {
  const todos = [
    {
      task: "Создать план занятий",
      date: "19.11.2024 10:00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam amet culpa, quos possimus placeat suscipit dolorum pariatur perspiciatis asperiores qui similique, impedit eum ab excepturi consectetur quia iste perferendis.",
    },
    {
      task: "Создать план занятий",
      date: "19.11.2024 10:00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam amet culpa, quos possimus placeat suscipit dolorum pariatur perspiciatis asperiores qui similique, impedit eum ab excepturi consectetur quia iste perferendis.",
    },
    {
      task: "Создать план занятий",
      date: "19.11.2024 10:00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam amet culpa, quos possimus placeat suscipit dolorum pariatur perspiciatis asperiores qui similique, impedit eum ab excepturi consectetur quia iste perferendis.",
    },
    {
      task: "Создать план занятий",
      date: "19.11.2024 10:00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam amet culpa, quos possimus placeat suscipit dolorum pariatur perspiciatis asperiores qui similique, impedit eum ab excepturi consectetur quia iste perferendis.",
    },
    {
      task: "Создать план занятий",
      date: "19.11.2024 10:00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam amet culpa, quos possimus placeat suscipit dolorum pariatur perspiciatis asperiores qui similique, impedit eum ab excepturi consectetur quia iste perferendis.",
    },
  ];

  return (
    <div>
  
      {todos.map((todo =>
       <Card style={{ width: "30rem" }} className="mb-1 bg-dark text-light">
        <Card.Body>
          <Card.Title>{todo.task}</Card.Title>
          <Card.Subtitle className="mb-3 ">{todo.date}</Card.Subtitle>
          <Card.Text>{todo.desc}
          </Card.Text>
          <Button variant="outline-success me-1">Выполнено</Button>
          <Button variant="outline-danger">Закончить</Button>
        </Card.Body>
      </Card> 
      ))}
  
    </div>
  );
};

export default TodoList;
