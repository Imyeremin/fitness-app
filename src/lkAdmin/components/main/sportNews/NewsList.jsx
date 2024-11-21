import React from "react";
import News from "./News";
import { useSelector } from "react-redux";

//https://newsapi.org/v2/top-headlines?country=us&apiKey=65f2e472dae349d7ba33233371dbfe15

const NewsList = () => {
  const newses = useSelector((state) => state.todos.news);

  return (
    <>
      {newses.map((news) => (
        <News news={news} />
      ))}
    </>
  );
};

export default NewsList;
