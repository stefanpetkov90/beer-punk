import React from "react";
import { Typography, Card, CardHeader, IconButton } from "@material-ui/core";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import openBeerSound from "../../../assets/beer-opening.mp3";
import "./Beer.scss";

const Beer = ({ beer, toggleFavourite, favourites }) => {
  const beerOpenAdio = new Audio(openBeerSound);

  return (
    <Card raised style={{ height: "200px" }}>
      <CardHeader
        action={
          <IconButton onClick={() => toggleFavourite(beer.id)}>
            {favourites.indexOf(beer.id) >= 0 ? (
              <StarIcon style={{ color: "#00FFFF" }} />
            ) : (
              <StarBorderIcon style={{ color: "#00FFFF" }} />
            )}
          </IconButton>
        }
        avatar={
          <img
            onClick={() => beerOpenAdio.play()}
            src={beer.image_url}
            width="30"
            height="100"
            alt={beer.name}
            style={{ marginLeft: 15 }}
          />
        }
        title={
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            {beer.name}
          </Typography>
        }
        subheader={
          <Typography
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 6,
              height: "120px",
              color: "grey",
              fontSize: 13,
            }}
          >
            {beer.description}
          </Typography>
        }
      />
    </Card>
  );
};

export default Beer;
