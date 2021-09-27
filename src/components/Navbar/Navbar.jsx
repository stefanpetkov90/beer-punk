import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

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

  return (
    <Box>
      <AppBar style={{ backgroundColor: "#00d1b2" }} position="static">
        <Toolbar>
          <Typography
            style={{ color: "white" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Beans Love Bears
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: 10 }}>
              <Button
                onClick={handleHomeClick}
                color="inherit"
                style={{ textTransform: "none", color: "white" }}
              >
                Home
              </Button>
            </div>
            <div style={{ padding: 10 }}>
              <Button
                onClick={handleFavoriteClick}
                color="inherit"
                style={{ textTransform: "none", color: "white" }}
              >
                Favourites
              </Button>
            </div>
            <div style={{ padding: 10 }}>
              <Button
                onClick={handleRandomClick}
                color="inherit"
                style={{ textTransform: "none", color: "white" }}
              >
                Random Beer
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
