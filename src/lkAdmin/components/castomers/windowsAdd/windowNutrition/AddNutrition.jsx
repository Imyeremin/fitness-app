import React from "react";

import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import NutritionList from "./NutritionList";
import AddNutritionList from "./AddNutritionList";

import { addNutrition } from "../../../../../store/castomersSlise";
import { HeaderList } from "../../../../pages/Main";

const DivAdd = styled.div`
  display: ${(props) => props.stateWind};
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 1;
`;

const DivContentAdd = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  translate: 0% 20%;
  background-color: rgba(255, 255, 255, 0.9);
  width: 50%;
  height: 70%;
  border-radius: 20px;
  border: 1px solid black;
`;

const AddNutrition = ({ stateWind, openClose, castomer }) => {
  const nutritions = useSelector((state) => state.nutritions.nutritions);

  const dispatch = useDispatch();

  const addNutritionInCast = (idCast, dataNutrition) => {
    dispatch(
      addNutrition({
        idCast,
        dataNutrition,
      })
    );
  };

  return (
    <DivAdd stateWind={stateWind}>
      <DivContentAdd>
        <div>
          <HeaderList className="d-flex justify-content-between">
            <h3>Добавьте упражнения</h3>
            <Button onClick={openClose} variant="light">
              &#9989;
            </Button>
          </HeaderList>
        </div>
        <div className="d-flex h-100">
          <NutritionList
            castomer={castomer}
            nutritions={nutritions}
            addNutritionData={addNutritionInCast}
          />
          <AddNutritionList castomer={castomer} />
        </div>
      </DivContentAdd>
    </DivAdd>
  );
};

export default AddNutrition;
