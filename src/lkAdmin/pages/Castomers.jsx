import React, { useState } from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";
import { DivContainer, FooterList, HeaderList } from "./Main";

import TableCast from "../components/castomers/castList/TableCast";
import CardCast from "../components/castomers/cstomerCard/CardCast";
import AddWorkout from "../components/castomers/windowsAdd/windowWorkout/AddWorkout";
import AddNutrition from "../components/castomers/windowsAdd/windowNutrition/AddNutrition";

const ContainerTableCast = styled.div`
  width: 60%;
`;
const ContainerProfileCard = styled.div`
  width: 35%;
`;
const Castomers = () => {
  const castomers = useSelector((state) => state.castomers.castomers);
  const [selectedCustomer, setSelectedCustomer] = useState(0);
  const [openClose, setOpenClose] = useState("none");
  const [openCloseNutrition, setOpenCloseNutrition] = useState("none");
  const onDataCard = (id) => {
    let castomerNum = castomers.findIndex((x) => x.id === id);
    setSelectedCustomer(castomerNum);
  };

  const onOpenClose = () => {
    if (openClose === "block") {
      setOpenClose("none");
    } else if (openClose === "none") {
      setOpenClose("block");
    }
  };
  const onOpenCloseNutrition = () => {
    if (openCloseNutrition === "block") {
      setOpenCloseNutrition("none");
    } else if (openCloseNutrition === "none") {
      setOpenCloseNutrition("block");
    }
  };

  return (
    <>
      <AddNutrition
        castomer={castomers[selectedCustomer]}
        stateWind={openCloseNutrition}
        openClose={onOpenCloseNutrition}
      ></AddNutrition>
      <AddWorkout
        castomer={castomers[selectedCustomer]}
        stateWind={openClose}
        openClose={onOpenClose}
      ></AddWorkout>
      <div className="d-flex justify-content-between ">
        <ContainerTableCast>
          <HeaderList>Список клиентов</HeaderList>
          <DivContainer>
            <TableCast castomers={castomers} onDataCard={onDataCard} />
          </DivContainer>
          <FooterList></FooterList>
        </ContainerTableCast>
        <ContainerProfileCard>
          <HeaderList>Profile</HeaderList>
          <CardCast
            openCloseWork={onOpenClose}
            openCloseNutriion={onOpenCloseNutrition}
            castomer={castomers[selectedCustomer]}
          />
        </ContainerProfileCard>
      </div>
    </>
  );
};

export default Castomers;
