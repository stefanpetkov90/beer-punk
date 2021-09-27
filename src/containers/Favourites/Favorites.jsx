import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Beer from "../../components/Beers/Beer/Beer";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../containers/Favourites/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const { beers } = useSelector((state) => state.getBeers);

  const favoriteData = beers.filter((beer) => favorites.includes(beer.id));

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

  return (
    <>
      {favoriteData.length > 0 ? (
        <div>
          <Grid
            style={{ marginTop: 20 }}
            container
            spacing={3}
            columns={{ xs: 6, md: 4 }}
          >
            {favoriteData.map((beer) => (
              <Grid item xs={3} key={beer.id}>
                <Beer
                  toggleFavourite={toggleFavourite}
                  favourites={favorites}
                  beer={beer}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 250,
            fontSize: 30,
          }}
        >
          The list is empty, you can add your favorite drinks from the Home
          screen!
        </Typography>
      )}
    </>
  );
};

export default Favorites;
