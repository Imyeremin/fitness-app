import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import { deleteNutrition } from "../../../../../store/castomersSlise";

const DivListNut = styled.div`
  width: 50%;
  margin: 20px;
  border-radius: 18px;
  border: 2px solid black;
  overflow-y: scroll;
  scrollbar-width: none;
  height: 84%;
`;

const BtnNut = styled.button`
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

function AddNutritionList({ castomer }) {
  const dispatch = useDispatch();

  const onDeleteNutrition = (idCast, idNutrition) => {
    dispatch(
      deleteNutrition({
        idCast,
        idNutrition,
      })
    );
  };

  return (
    <DivListNut>
      <ListGroup className="p-3 " as="ol" numbered>
        {castomer.diet.map((diett) => (
          <ListGroup.Item
            variant={diett.variant}
            as="li"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fs-6">{diett.class}</div>
              <div className="fw-bold">{diett.dish}</div>
              <span>
                Б: <b>{diett.B}</b> |
              </span>{" "}
              <span>
                Ж: <b>{diett.J}</b> |
              </span>
              <span>
                У: <b>{diett.U}</b> |
              </span>
            </div>
            <BtnNut onClick={() => onDeleteNutrition(castomer.id, diett.id)}>
              {" "}
              &#8658;
            </BtnNut>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </DivListNut>
  );
}

export default AddNutritionList;
