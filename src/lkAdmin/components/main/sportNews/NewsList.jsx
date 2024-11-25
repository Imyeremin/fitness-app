import React from "react";

import News from "./News";

import { useSelector } from "react-redux";

const NewsList = () => {
  const newses = useSelector((state) => state.news.news);

  return (
    <>
      {newses.map((news) => (
        <News news={news} />
      ))}
    </>
  );
};

export default NewsList;
