import React, { useState } from "react";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import image from "./images/Layout.jpeg";
import MainMenu from "./MainMenu";
import { Outlet } from "react-router-dom";
import FooterChat from "../main/chat/FooterChat";

const BgPage = styled.div`
  background-image: url(${image});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  margin: 80px 50px;
  width: 100%;
`;

const Layout = () => {
  const [header, setHeader] = useState("Главная");

  return (
    <BgPage>
      <HeaderMenu setHeader={setHeader} text={header} />
      <div className="d-flex h-100">
        <MainMenu setHeader={setHeader} />
        <Content>
          <Outlet />
        </Content>
        <FooterChat />
      </div>
    </BgPage>
  );
};

export default Layout;
