import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

import benchPress from "./img/benchPress.png";
import back from "./img/back.png";
import legs from "./img/legs.png";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  from {
   
      transform:scale(0.99);
  }
  to {
   
      transform:scale(1.01);
  }
`;

const CardContainer = styled.div`
width:27%;
margin: 20px;
  z-index: 99999;
  color: #ffffff; 
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 0 15px #ffffff, 0 0 30px #ffffff,
    0 0 45px #ffffff;
  animation: ${glow} 1.5s ease-in-out infinite alternate;
`;

function CardWork({ dataExercise }) {
  const [picture, setPicture] = useState("");

  const updateImg = (classImg) => {
    if (classImg == "Ноги") {
      setPicture(legs);
    } else if (classImg == "Спина") {
      setPicture(back);
    } else if (classImg == "Руки") {
      setPicture(benchPress);
    }
  };

  useEffect(() => {
    updateImg(dataExercise.img);
  }, [dataExercise]);

  return (
    <CardContainer>
      <Card 
        border="dark"
        style={{ width: "20rem", zIndex: 999 }}
        className=" h-100 d-flex align-content-between justify-content-between "
      >
        <div>
          <Card.Img variant="top" src={picture} />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{dataExercise.exercise}</Card.Title>
            <Card.Text>{dataExercise.desc}</Card.Text>
            <Card.Footer>
              Количество повторений: <b>{dataExercise.repetition}</b> |
              Подходов: <b>{dataExercise.approaches}</b>
            </Card.Footer>
          </Card.Body>
        </div>
      </Card>
    </CardContainer>
  );
}

export default CardWork;
