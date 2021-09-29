import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleFavoriteClick = () => {
    history.push("/favorites");
  };

  const handleRandomClick = () => {
    history.push("/random");
  };

  const handleWalletClick = () => {
    history.push("/wallet");
  };

  return (
    <Box>
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <Typography
            className="title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Beans Love Bears
          </Typography>
          <div className="flex-direction">
            <div className="container">
              <Button
                onClick={handleHomeClick}
                color="inherit"
                className="button-navbar"
              >
                Home
              </Button>
            </div>
            <div className="container">
              <Button
                onClick={handleFavoriteClick}
                color="inherit"
                className="button-navbar"
              >
                Favorites
              </Button>
            </div>
            <div className="container">
              <Button
                onClick={handleRandomClick}
                color="inherit"
                className="button-navbar"
              >
                Random Beer
              </Button>
            </div>
            <div className="container">
              <Button
                onClick={handleWalletClick}
                color="inherit"
                className="button-navbar"
              >
                Wallet
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
