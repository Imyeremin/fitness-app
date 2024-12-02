import React from "react";

import styled from "styled-components";

const HeadingPage = ({ text }) => {
  const Heading = styled.h1`
    color: white;
    font-size: 38px;
    margin-top: 16px;
    padding: 20px;
    background-color: #089708;
    border-radius: 18px;
    width: 100%;
  `;
  return <Heading>{text}</Heading>;
};

export default HeadingPage;
