import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBeers } from "./actions";
import Beers from "../../components/Beers/Beers";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);

  return (
    <>
      <Beers />
    </>
  );
};

export default Home;
