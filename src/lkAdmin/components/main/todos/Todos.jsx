import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = ({}) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo}  />
      ))}
    </div>
  );
};

export default TodoList;
