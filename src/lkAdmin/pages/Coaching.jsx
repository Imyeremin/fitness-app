import React from "react";
import { DivContainer, FooterList, HeaderList } from "./Main";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { deleteExercise } from "../../store/coachingSlise";
import ListExercise from "../components/coaching/ListExercise";
import FormAddExercise from "../components/coaching/FormAddExercise";

const DivContainerExercise = styled.div`
  width: 65%;
`;

const DivAddExercise = styled.div`
  width: 30%;
`;

const Coaching = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();

  const deleteExercises = (id) => {
    dispatch(deleteExercise(id));
  };

  return (
    <div className="d-flex justify-content-between ">
      <DivContainerExercise>
        <HeaderList>Упражнения</HeaderList>
        <DivContainer>
          <ListExercise  exercises={exercises} onDeleteExercise={deleteExercises}  />
        </DivContainer>
        <FooterList></FooterList>
      </DivContainerExercise>
      <DivAddExercise>
        <HeaderList>Добавить упражнение</HeaderList>

        <DivContainer>
          <FormAddExercise />
        </DivContainer>
        <FooterList></FooterList>
      </DivAddExercise>
    </div>
  );
};

export default Coaching;
