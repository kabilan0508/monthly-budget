import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default Home;
