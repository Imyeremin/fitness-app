import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../components/main/ProfileCard";

const MainPage = () => {
  const customer = useSelector((state) => state.castomers.castomers);

  return <ProfileCard data={customer[0]} />;
};

export default MainPage;
