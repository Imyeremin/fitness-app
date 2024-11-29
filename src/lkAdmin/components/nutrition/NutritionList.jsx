import React from "react";

import CardNutrition from "./NutritionCard";

import styled from "styled-components";

const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NutritionList = ({ nutritions, onDeleteDish }) => {
  return (
    <DivCardContainer>
      {nutritions.map((nutrition) => (
        <CardNutrition onDeleteDish={onDeleteDish} dataDish={nutrition} />
      ))}
    </DivCardContainer>
  );
};

export default NutritionList;
