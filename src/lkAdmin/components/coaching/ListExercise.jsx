import React from "react";
import CardExercise from "./CardExercise";
import styled from "styled-components";

const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListExercise = ({ exercises, onDeleteExercise }) => {
  return (
    <DivCardContainer>
      {exercises.map((exercise) => (
        <CardExercise
          onDeleteExercise={onDeleteExercise}
          dataExercise={exercise}
        />
      ))}
    </DivCardContainer>
  );
};
 export default ListExercise;