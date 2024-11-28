import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../../store/coachingSlise";
// Вот отсюда продолжать
function FormAddExercise() {
  const dispatch = useDispatch();
  const [newExercise, setNewExercise] = useState({
    img: "",
    exercise: "",
    desc: "",
    repetition: "",
    approaches: "",
  });

  const updateNewExercise = (value, key) => {
    setNewExercise({
      ...newExercise,
      [key]: value,
    });
  };

  const onAddExercise = () => {
    dispatch(addExercise(newExercise));
    setNewExercise({
      img: "",
      exercise: "",
      desc: "",
      repetition: "",
      approaches: "",
    });
  };
  return (
    <>

      <Form.Group>
        <Form.Select
          onChange={(e) => updateNewExercise(e.target.value, "img")}
          aria-label="Default select example"
        >
          <option >Группа мышц...</option>
          <option value="Ноги">Упражнение на руки</option>
          <option value="Руки">Упражнение на ноги</option>
          <option value="Спина">Упражнение на спину</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Название упражнения</Form.Label>
        <Form.Control
          value={newExercise.exercise}
          onChange={(e) => updateNewExercise(e.target.value, "exercise")}
          type="text"
          placeholder="Введите название упражнения"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          value={newExercise.desc}
          onChange={(e) => updateNewExercise(e.target.value, "desc")}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex justify-content-between align-items-center "
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="m-1">Количество повторений: </Form.Label>
        <Form.Control
          value={newExercise.repetition}
          onChange={(e) => updateNewExercise(e.target.value, "repetition")}
          type="text"
          placeholder=""
        />
        <Form.Label className="m-1">Количество подходов: </Form.Label>
        <Form.Control
          value={newExercise.approaches}
          onChange={(e) => updateNewExercise(e.target.value, "approaches")}
          type="text"
          placeholder=""
        />
      </Form.Group>
      <Button onClick={onAddExercise} variant="outline-success">
        Добавить упражнение
      </Button>
    </>
  );
}

export default FormAddExercise;
