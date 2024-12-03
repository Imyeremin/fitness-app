import { Card } from "react-bootstrap";

function NutriCard({ dataDish }) {
  return (
    <Card text="white" border="dark" bg={dataDish.variant} className=" fs-6  ">
      <Card.Header className=" fs-6 ">{dataDish.class}</Card.Header>
      <Card.Body>
        <Card.Title className=" fs-6 ">{dataDish.dish}</Card.Title>
        <Card.Text className=" fs-6 ">{dataDish.desc}</Card.Text>
        <Card.Footer className=" fs-6 ">
          Б: {dataDish.B}г.| Ж: {dataDish.J}г.| У: {dataDish.U}г.|
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default NutriCard;
