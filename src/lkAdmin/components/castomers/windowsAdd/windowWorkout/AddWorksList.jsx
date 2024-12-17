import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { deleteWork } from "../../../../../store/castomersSlise";

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
  background-color: #f8b7b7;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #ff5454;
    transform: scaleX(-2);
  }
  &:active {
    translate: -50% 0%;
    transition: all 0.1ms ease-in-out;
  }
`;

function AddWorksList({ castomer }) {
  const dispatch = useDispatch();

  const onDeleteWork = (idCast, idWork) => {
    dispatch(
      deleteWork({
        idCast,
        idWork,
      })
    );
  };

  return (
    <DivListWorks>
      <ListGroup className="p-3 " as="ol" numbered>
        {castomer.workout.map((workout) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{workout.exercise}</div>
              <span>
                Повторений: <b>{workout.repetition}</b> |
              </span>{" "}
              <span>
                Подходов: <b>{workout.approaches}</b> |
              </span>
            </div>
            <BtnWorks onClick={() => onDeleteWork(castomer.id, workout.id)}>
              {" "}
              &#8658;
            </BtnWorks>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </DivListWorks>
  );
}

export default AddWorksList;
