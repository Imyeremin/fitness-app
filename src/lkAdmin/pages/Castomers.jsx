import React, { useState } from "react";

import { DivContainer, FooterList, HeaderList } from "./Main";
import TableCast from "../components/castomers/castList/TableCast";
import styled from "styled-components";
import CardCast from "../components/castomers/cstomerCard/CardCast";
import { useSelector } from "react-redux";
import AddWorkout from "../components/castomers/windowsAdd/windowWorkout/AddWorkout";

const ContainerTableCast = styled.div`
  width: 60%;
`;
const ContainerProfileCard = styled.div`
  width: 35%;
`;
const Castomers = () => {
  const castomers = useSelector((state) => state.castomers.castomers);
  const [dataCard, setDataCard] = useState(castomers[0]);

  const [openClose, setOpenClose] = useState('none')

  const onDataCard = (id) => {
    let castomer = castomers.find((x) => x.id === id);
    setDataCard(castomer);
  };

  const onOpenClose = () =>{
    if(openClose === 'block'){
      setOpenClose('none')
    }else if(openClose === 'none'){
      setOpenClose('block')
    }
  }

  return (
    <>
      <AddWorkout castomer={dataCard} stateWind={openClose} openClose={onOpenClose}></AddWorkout>
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
          <CardCast  openClose={onOpenClose} castomer={dataCard} />
        </ContainerProfileCard>
      </div>
    </>
  );
};

export default Castomers;
