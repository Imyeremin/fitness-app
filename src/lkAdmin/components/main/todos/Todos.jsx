import React from "react";
import TodoItem from "./TodoItem";

import { Card, Button } from "react-bootstrap";
import styled from "styled-components";



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
  ];// Временные условные данные.

  return (
    <div>
  
      {todos.map((todo =>
  <TodoItem todo={todo}/>
      ))}
  
    </div>
  );
};

export default TodoList;
