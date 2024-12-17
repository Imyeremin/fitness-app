import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const DivListWorks = styled.div`
  width: 60%;
  margin: 20px;
  border-radius: 18px;
  border: 2px solid black;
  overflow-y: scroll;
  scrollbar-width: none;
  height: 75%;
`;

const BtnWorks = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  background-color: #b7f8b7;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #54ff54;
    transform: scaleX(2);
  }
  &:active {
    translate: 50% 0%;
    transition: all 0.1ms ease-in-out;
  }
`;

function WorksList({ exercises, castomer, addWorkData }) {
  return (
    <DivListWorks>
      <ListGroup className="p-3 " as="ol" numbered>
        {exercises.map((exercise) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{exercise.exercise}</div>
              <span>
                Повторений: <b>{exercise.repetition}</b> |
              </span>{" "}
              <span>
                Подходов: <b>{exercise.approaches}</b> |
              </span>
            </div>
            <BtnWorks onClick={() => addWorkData(castomer.id, exercise)}>
              {" "}
              &#8658;
            </BtnWorks>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </DivListWorks>
  );
}

export default WorksList;
