import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  let { id } = useParams();
  return <div>{id}s</div>;
};

export default Home;
