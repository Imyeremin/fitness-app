import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

import benchPress from "./img/benchPress.png";
import back from "./img/back.png";
import legs from "./img/legs.png";

function CardExercise({ dataExercise, onDeleteExercise }) {
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
    <Card
      border="dark"
      style={{ width: "18rem" }}
      className="m-2 d-flex align-content-between justify-content-between "
    >
      <div>
        <Card.Img variant="top" src={picture} />
      </div>
      <div>
        <Card.Body>
          <Card.Title>{dataExercise.exercise}</Card.Title>
          <Card.Text>{dataExercise.desc}</Card.Text>
          <Card.Footer>
            Количество повторений: <b>{dataExercise.repetition}</b> | Подходов:
            <b>{dataExercise.approaches}</b>
          </Card.Footer>
          <Button
            className="m-2"
            onClick={() => onDeleteExercise(dataExercise.id)}
            variant="primary"
          >
            Убрать упражнение
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CardExercise;
