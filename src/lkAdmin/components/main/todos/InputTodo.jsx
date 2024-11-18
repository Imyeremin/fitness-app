import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import styled from "styled-components";

const DivInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
`;

const InputTodo = () => {
  return (
    <DivInput>
      <div>
        <Button className="rounded-circle " variant="success">
          +
        </Button>
      </div>
      <div className="d-flex flex-column flex-end">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text
            className="bg-secondary text-light"
            id="inputGroup-sizing-sm"
          >
            Задача
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text
            className="bg-secondary text-light"
            id="inputGroup-sizing-sm"
          >
            Дата
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className="bg-secondary text-light">
            Описание
          </InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </div>
    </DivInput>
  );
};

export default InputTodo;
