import React, { useState } from "react";

import { DivContainer, FooterList, HeaderList } from "./Main";
import TableCast from "../components/castomers/castList/TableCast";
import styled from "styled-components";
import CardCast from "../components/castomers/cstomerCard/CardCast";
import { useSelector } from "react-redux";

const ContainerTableCast = styled.div`
  width: 60%;
  height: 100%;
`;
const ContainerProfileCard = styled.div`
  width: 30%;
`;
const Castomers = () => {
  const castomers = useSelector((state) => state.castomers.castomers);
  const [dataCard, setDataCard] = useState({
    id: 1,
    tel: "+79100000001",
    name: "Иванова Екатерина",
    age: 18,
    height: 163,
    weight: 65,
    goal: "Похудеть к лету",
    schedule: {
      dayWeek: ["ПН", "ПН", "ПН"],
      time: ["10:00", "12:30", "13:00"],
    },
  });

  const onDataCard = (id) => {
    setDataCard(castomers[--id]);
  };

  return (
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
        <CardCast castomer={dataCard} />
      </ContainerProfileCard>
    </div>
  );
};

export default Castomers;
