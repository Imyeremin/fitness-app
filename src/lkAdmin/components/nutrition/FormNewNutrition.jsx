import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function FormNewNutrition() {
  return (
    <>
      <Form.Group>
        <Form.Select aria-label="Default select example">
          <option disabled>Блюдо на .....</option>
          <option value="1">Блюдо на завтрак</option>
          <option value="2">Блюдо на обед</option>
          <option value="3">Блюдо на ужин</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Название блюда</Form.Label>
        <Form.Control type="text" placeholder="Введите название блюда" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Мини рецепт</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex justify-content-between align-items-center fs-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="m-1">Б: </Form.Label>
        <Form.Control type="text" placeholder="Белки" />
        <Form.Label className="m-1">Ж: </Form.Label>
        <Form.Control type="text" placeholder="Жиры" />
        <Form.Label className="m-1">У: </Form.Label>
        <Form.Control type="text" placeholder="Углеводы" />
      </Form.Group>
      <Button  variant="outline-success">Success</Button>
    </>
  );
}

export default FormNewNutrition;
