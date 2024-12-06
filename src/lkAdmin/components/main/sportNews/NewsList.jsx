import React from "react";

import News from "./News";

import { useSelector } from "react-redux";

const NewsList = () => {
  const resault = useSelector((state) => state.resault.resault);

  return (
    <>
      {resault.map((res) => (
        <News res={res} />
      ))}
    </>
  );
};

export default NewsList;
