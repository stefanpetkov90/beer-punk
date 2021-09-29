import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Beer from "./Beer/Beer";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../containers/Favourites/actions";
import Search from "../Search/Search";
import { getSearch } from "../Search/actions";
import "./Beers.scss";

const Beers = () => {
  const dispatch = useDispatch();
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

  const handleSearchData = (searchCallback) => {
    if (searchCallback) {
      dispatch(getSearch(searchCallback));
      setData(searchResult);
    } else {
      setData(beers);
    }
  };

  useEffect(() => {
    setData(beers);
  }, [beers]);

  useEffect(() => {
    setData(searchResult);
  }, [searchResult]);

  return (
    <>
      <Search handleSearchData={handleSearchData} />
      <div className="grid-wrapper">
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data
            ? data.map((beer) => (
                <Grid item xs={12} sm={6} md={3} key={beer.id}>
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
