import React from "react";
import { DivContainer, FooterList, HeaderList } from "./Main";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import NutritionList from "../components/nutrition/NutritionList";
import FormNewNutrition from "../components/nutrition/FormNewNutrition";
import { deleteDish } from "../../store/nutritionSlise";

const DivContainerNutritions = styled.div`
  width: 65%;
`;

const DivAddNutrition = styled.div`
  width: 30%;
`;

const Nutrition = () => {
  const nutritions = useSelector((state) => state.nutritions.nutritions);
  const dispatch = useDispatch();

  const deleteNutrition = (id) => {
    dispatch(deleteDish(id));
  };
  return (
    <div className="d-flex justify-content-between ">
      <DivContainerNutritions>
        <HeaderList>Список блюд</HeaderList>
        <DivContainer>
          <NutritionList onDeleteDish={deleteNutrition} nutritions={nutritions} />
        </DivContainer>
        <FooterList></FooterList>
      </DivContainerNutritions>
      <DivAddNutrition>
        <HeaderList>Добавить блюдо</HeaderList>

        <DivContainer>
          <FormNewNutrition />
        </DivContainer>
        <FooterList></FooterList>
      </DivAddNutrition>
    </div>
  );
};

export default Nutrition;
