import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../../../store/todoSlise";

const InputTodo = () => {
  const [data, setData] = useState({
    task: "",
    date: "",
    desc: "",
  });

  const dispatch = useDispatch();

  const handleChange = (value, key) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const onAddTask = () => {
    dispatch(addTodo(data));
    setData({
      task: "",
      date: "",
      desc: "",
    });
  };

  return (
    <>
      <div>
        <Button
          onClick={onAddTask}
          className="rounded-circle "
          variant="success"
        >
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
            value={data.task}
            onChange={(e) => handleChange(e.target.value, "task")}
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
            value={data.date}
            onChange={(e) => handleChange(e.target.value, "date")}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className="bg-secondary text-light">
            Описание
          </InputGroup.Text>
          <Form.Control
            value={data.desc}
            onChange={(e) => handleChange(e.target.value, "desc")}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
      </div>
    </>
  );
};

export default InputTodo;
