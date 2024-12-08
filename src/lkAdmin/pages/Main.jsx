import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import Todos from "../components/main/todos/Todos";
import InputTodo from "../components/main/todos/InputTodo";
import NewsList from "../components/main/sportNews/NewsList";

import addTodo from "../../store/todoSlise";
import { fetchNews } from "../../store/newsSlise";
export const DivContainer = styled.div`
  color: white;
  height: 50vh;
  padding: 30px;

  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
`;
export const HeaderList = styled.div`
  width: 100%;

  color: white;
  font-size: 30px;
  font-weight: bold;
  text-shadow: #000000 1px 0 10px;
  text-align: center;
  padding: 16px;
  position: static;
  background-color: rgba(0, 0, 0, 0.75);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;
export const FooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
`;
export const ContainerTodo = styled.div`
  width: 30%;
`;
export const ContainerNewsList = styled.div`
  width: 70%;
  margin-left: 50px;
`;

const Main = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ todo }));
    setTodo("");
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="d-flex">
      <ContainerTodo>
        <HeaderList>ToDo List</HeaderList>
        <DivContainer>
          <Todos />
        </DivContainer>
        <FooterList>
          <InputTodo todo={todo} handleInput={setTodo} handleSubmit={addTask} />
        </FooterList>
      </ContainerTodo>

      <ContainerNewsList>
        <HeaderList>Training Results</HeaderList>
        <DivContainer>
          <NewsList />
        </DivContainer>
        <FooterList />
      </ContainerNewsList>
    </div>
  );
};

export default Main;
