import React from "react";
import News from "./News";


const NewsList = () => {
  const newses = [
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
    {
      typeSport: "Футбол",
      event: "Кто то забил гол.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
    },
  ];// Тестовые данные

  return (
    <>
      {newses.map((news) => (
        <News news={news} />
      ))}
    </>
  );
};

export default NewsList;
