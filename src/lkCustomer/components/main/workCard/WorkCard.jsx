import React from "react";
import { Card } from "react-bootstrap";

const WorkCard = ({ dataWork }) => {
  return (
    <div className="border-bottom">
      <Card.Header className="fs-6 p-0">{dataWork.img}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0 fs-6">
          <p>
            <b>{dataWork.exercise}</b> - {dataWork.desc}
          </p>
          <footer className="blockquote-footer">
            Повторний:
            <cite title="Source Title">{dataWork.repetition} | </cite>
            Подходов: <cite title="Source Title">{dataWork.approaches}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </div>
  );
};

export default WorkCard;
