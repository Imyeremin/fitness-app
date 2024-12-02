import React, { useState } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";

import FooterChat from "../main/chat/FooterChat";
import HeaderMenu from "./HeaderMenu";

import image from "./images/fon.jpg";

const BgPage = styled.div`
  background-image: url(${image});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  margin: 90px 30px;
  width: 100%;
  padding: 20px;
  border: 1px solid black;
  background-color: rgba(71, 71, 71, 0.8);
  border-radius: 18px;
  height: 86%;
`;

const Layout = () => {
  const [header, setHeader] = useState("Главная");

  return (
    <BgPage>
      <HeaderMenu setHeader={setHeader} text={header} />
      <div className="d-flex h-100">
        {" "}
        <FooterChat />
        <Content>
          <Outlet />
        </Content>
      </div>
    </BgPage>
  );
};

export default Layout;
