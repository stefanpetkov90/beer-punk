import React from "react";
import { Typography, Card, Button, CardHeader } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getRandomBeer } from "./actions";
import openBeerSound from "../../assets/beer-opening.mp3";
import "./RandomBeer.scss";

const RandomBeer = () => {
  const dispatch = useDispatch();
  const { randomBeer } = useSelector((state) => state.randomBeer);
  const beerOpenAdio = new Audio(openBeerSound);

  const handleRandomBeer = () => {
    dispatch(getRandomBeer());
  };

  return (
    <>
      <div className="random-button-wrapper">
        <Button className="random-button" onClick={handleRandomBeer}>
          Random Beer
        </Button>
      </div>
      {randomBeer.length > 0 ? (
        randomBeer.map((beer) => (
          <div className="center-content">
            <Card key={beer.id} raised className="card-wrapper">
              <CardHeader
                title={
                  <Typography className="typography-style">
                    {beer.name}
                  </Typography>
                }
                avatar={
                  <img
                    onClick={() => beerOpenAdio.play()}
                    src={beer.image_url}
                    width="140"
                    height="450"
                    alt={beer.name}
                    className="avatar"
                  />
                }
                subheader={
                  <Typography
                    className="subheader"
                    style={{ marginBottom: 310 }}
                  >
                    {beer.description}
                  </Typography>
                }
              />
            </Card>
          </div>
        ))
      ) : (
        <div>
          <Typography className="center-content">
            Click on the button to view a random beer.
          </Typography>
        </div>
      )}
    </>
  );
};

export default RandomBeer;
