import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";
// Components
import { Container, Typography, Box, Button } from "@material-ui/core";

// Styles && Images
import "./WalletLogin.scss";

const WalletLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isExtension, setIsExtension] = useState(true);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const account = await signer.getAddress();
      const balance = await signer.getBalance();
      if (signer) {
        dispatch(setUser(account, balance._hex));
        setIsExtension(true);
        history.push("/");
      }
    } else {
      setIsExtension(false);
    }
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright ©    Beer Punk "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <div className="login-wrapper">
      <Container component="main" maxWidth="xs">
        <div className="div-wrapper">
          <div className="paper">
            <Typography className="form-title" component="h1" variant="h5">
              Sign in with Metamask
            </Typography>
            <div>
              <Button
                onClick={() => connectWallet()}
                type="submit"
                fullWidth
                variant="contained"
                className="login-button"
              >
                Connect with Metamask
              </Button>
            </div>
            {isExtension ? null : (
              <Typography className="error-message">
                <div>No Metamask extension detected!</div>
                <div>Please install it to continue!</div>
              </Typography>
            )}
          </div>
          <Box className="box-style" mt={8}>
            <Copyright />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default WalletLogin;
