import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function CardNutrition({ dataDish, onDeleteDish }) {
  const [color, setColor] = useState("");

  const UpdateColor = (classNut) => {
    if (classNut == "Блюдо на завтрак") {
      setColor("success");
    } else if (classNut == "Блюдо на обед") {
      setColor("primary");
    } else if (classNut == "Блюдо на ужин") {
      setColor("danger");
    }
  };

  useEffect(() => {
    UpdateColor(dataDish.class);
  }, [dataDish]);

  return (
    <Card
      text="white"
      border="dark"
      bg={color}
      style={{ width: "18rem" }}
      className="m-2"
    >
      <Card.Header>{dataDish.class}</Card.Header>
      <Card.Body>
        <Card.Title>{dataDish.dish}</Card.Title>
        <Card.Text>{dataDish.desc}</Card.Text>
        <Card.Footer>
          Б: {dataDish.B}г.| Ж: {dataDish.J}г.| У: {dataDish.U}г.|
        </Card.Footer>
      </Card.Body>
      <Button
        onClick={() => onDeleteDish(dataDish.id)}
        className="m-1"
        variant="dark"
      >
        Убрать из рациона
      </Button>
    </Card>
  );
}

export default CardNutrition;
