import React from "react";
import { Typography, Card, Button, CardHeader } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getRandomBeer } from "./actions";
import openBeerSound from "../../assets/beer-opening.mp3";

const RandomBeer = () => {
  const dispatch = useDispatch();
  const { randomBeer } = useSelector((state) => state.randomBeer);
  const beerOpenAdio = new Audio(openBeerSound);

  const handleRandomBeer = () => {
    dispatch(getRandomBeer());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Button
          style={{ backgroundColor: "#2F6AFA", color: "white" }}
          onClick={handleRandomBeer}
        >
          Random Beer
        </Button>
      </div>
      {randomBeer.length > 0 ? (
        randomBeer.map((beer) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              key={beer.id}
              raised
              style={{
                height: "550px",
                width: "550px",
                display: "flex",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <CardHeader
                title={
                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
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
                    style={{ marginLeft: 15 }}
                  />
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
                      marginBottom: 310,
                    }}
                  >
                    {beer.description}
                  </Typography>
                }
              />
            </Card>
          </div>
        ))
      ) : (
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          Click on the button to view a random beer.
        </Typography>
      )}
    </>
  );
};

export default RandomBeer;
