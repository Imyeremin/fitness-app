import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const DivListNutrition = styled.div`
  width: 50%;
  margin: 20px;
  border-radius: 18px;
  border: 2px solid black;
  overflow-y: scroll;
  scrollbar-width: none;
  height: 84%;
`;

const BtnNutrition = styled.button`
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

function NutritionList({ nutritions, castomer, addNutritionData }) {
  return (
    <DivListNutrition>
      <ListGroup className="p-3 " as="ol" numbered>
        {nutritions.map((diett) => (
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
            <BtnNutrition onClick={() => addNutritionData(castomer.id, diett)}>
              {" "}
              &#8658;
            </BtnNutrition>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </DivListNutrition>
  );
}

export default NutritionList;
