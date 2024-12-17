import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addDish } from "../../../store/nutritionSlise";

function FormNewNutrition() {
  const dispatch = useDispatch();
  const [newDish, setNewDish] = useState({
    dish: "",
    class: "",
    desc: "",
    B: "",
    J: "",
    U: "",
  });

  const updateNewDish = (value, key) => {
    setNewDish({
      ...newDish,
      [key]: value,
    });
  };

  const onAddDish = () => {
    dispatch(addDish(newDish));
    setNewDish({
      dish: "",
      class: "",
      desc: "",
      B: "",
      J: "",
      U: "",
    });
  };
  return (
    <>
      <Form.Group>
        <Form.Select
          onChange={(e) => updateNewDish(e.target.value, "class")}
          aria-label="Default select example"
        >
          <option>Блюдо на .....</option>
          <option value="Блюдо на завтрак">Блюдо на завтрак</option>
          <option value="Блюдо на обед">Блюдо на обед</option>
          <option value="Блюдо на ужин">Блюдо на ужин</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Название блюда</Form.Label>
        <Form.Control
          value={newDish.dish}
          onChange={(e) => updateNewDish(e.target.value, "dish")}
          type="text"
          placeholder="Введите название блюда"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Мини рецепт</Form.Label>
        <Form.Control
          value={newDish.desc}
          onChange={(e) => updateNewDish(e.target.value, "desc")}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex justify-content-between align-items-center fs-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="m-1">Б: </Form.Label>
        <Form.Control
          value={newDish.B}
          onChange={(e) => updateNewDish(e.target.value, "B")}
          type="text"
          placeholder="Белки"
        />
        <Form.Label className="m-1">Ж: </Form.Label>
        <Form.Control
          value={newDish.J}
          onChange={(e) => updateNewDish(e.target.value, "J")}
          type="text"
          placeholder="Жиры"
        />
        <Form.Label className="m-1">У: </Form.Label>
        <Form.Control
          value={newDish.U}
          onChange={(e) => updateNewDish(e.target.value, "U")}
          type="text"
          placeholder="Углеводы"
        />
      </Form.Group>
      <Button onClick={onAddDish} variant="success">
        Добавить блюдо
      </Button>
    </>
  );
}

export default FormNewNutrition;
