import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import styled from "styled-components";



const InputTodo = () => {
  return (
 <>
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
  </>
  );
};

export default InputTodo;
