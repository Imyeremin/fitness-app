import React from "react";
import { DivContainer, FooterList, HeaderList } from "./Main";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CardNutrition from "../components/nutrition/NutritionCard";
import NutritionList from "../components/nutrition/NutritionList";
import FormNewNutrition from "../components/nutrition/FormNewNutrition";

const DivContainerNutritions = styled.div`
  width: 65%;
`;

const DivAddNutrition = styled.div`
  width: 30%;
`;

const Nutrition = () => {
  const nutritions = useSelector((state) => state.nutritions.nutritions);

  return (
    <div className="d-flex justify-content-between ">
      <DivContainerNutritions>
        <HeaderList>Список блюд</HeaderList>
        <DivContainer>
          <NutritionList nutritions={nutritions} />
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
