import React from "react";
import styled from "styled-components";
import Todos from "../components/main/todos/Todos";
import InputTodo from "../components/main/todos/InputTodo";
import News from "../components/main/sportNews/News";
import NewsList from "../components/main/sportNews/NewsList";

const DivContainer = styled.div`
  color: white;
  overflow-y: scroll;
  height: 65vh;
  padding: 30px;

  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const HeaderList = styled.div`
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
const FooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
`;

const ContainerTodo = styled.div`
  width: 30%;
`

const ContainerNewsList = styled.div`
  width: 70%;
  margin-left:50px;
`


const Main = () => {
  return (
    <div className="d-flex">
      <ContainerTodo>
        <HeaderList>ToDo List</HeaderList>
        <DivContainer>
          <Todos />
        </DivContainer>
        <FooterList>
          <InputTodo />
        </FooterList>
      </ContainerTodo>

      <ContainerNewsList>
        <HeaderList as={}>Sport News</HeaderList>
        <DivContainer>
          < NewsList/>
        </DivContainer>
        <FooterList/>
      </ContainerNewsList>
    </div>
  );
};

export default Main;
