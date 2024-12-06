import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteRes } from "../../../../store/resaultSlise";

function News({ res }) {

const dispatch = useDispatch()

const onDeleteRes = (id) => {
  dispatch(deleteRes(id));

};


  return (
    <Card className="bg-dark bg-opacity-75 text-white ">
      <Card.Header>{res.name}</Card.Header>
      <Card.Body>
        <Card.Title>Время выполнения: {res.time}</Card.Title>
        <Card.Text className="d-flex">
          {res.work.map((work) => (
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{work.exercise}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Повторений: {work.repetition} | Подходов: {work.approaches} |
                </Card.Subtitle>
                
               </Card.Body>
            </Card>
          ))}{" "}
        </Card.Text>
        <Button onClick={() => onDeleteRes(res.id)}  variant="primary">
         Проверено
        </Button>
      </Card.Body>
    </Card>
  );
}

export default News;
