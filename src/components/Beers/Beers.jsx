import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Beer from "./Beer/Beer";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../containers/Favourites/actions";
import Search from "../Search/Search";

const Beers = () => {
  const dispatch = useDispatch();
  const [allBeers, setBeers] = useState();
  const [data, setData] = useState();
  const { beers } = useSelector((state) => state.getBeers);
  const { favorites } = useSelector((state) => state.favorites);
  const { searchResult } = useSelector((state) => state.search);

  const toggleFavourite = (id) => {
    if (favorites.indexOf(id) !== -1) {
      handleFavoriteRemove(id);
    } else {
      handleFavouriteAdd(id);
    }
  };

  const handleFavouriteAdd = (id) => {
    dispatch(setFavorites([...favorites, id]));
  };

  const handleFavoriteRemove = (id) => {
    const removeById = favorites.filter((favorite) => id !== favorite);
    dispatch(setFavorites(removeById));
  };

  useEffect(() => {
    setBeers(beers);
  }, [beers]);

  useEffect(() => {
    if (searchResult) {
      setData(searchResult);
    } else {
      setData(beers);
    }
  }, [searchResult, allBeers, beers]);

  return (
    <>
      <Search />
      <div>
        <Grid
          style={{ marginTop: 20 }}
          container
          spacing={3}
          columns={{ xs: 6, md: 4 }}
        >
          {data
            ? data.map((beer) => (
                <Grid item xs={3} key={beer.id}>
                  <Beer
                    favourites={favorites}
                    toggleFavourite={toggleFavourite}
                    beer={beer}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </div>
    </>
  );
};

export default Beers;