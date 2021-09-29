import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../WalletLogin/actions";
import { Container, Typography, Box, Button } from "@material-ui/core";
import "./Wallet.scss";

const Wallet = () => {
  const dispatch = useDispatch();
  const { account, balance, isSignedIn } = useSelector((state) => state.user);

  const disconnectWallet = async () => {
    dispatch(removeUser());
    if (isSignedIn) {
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
    }
  };

  return (
    <div className="wallet-wrapper">
      <Container component="main" maxWidth="xs">
        <div className="wrapper">
          <div className="paper">
            <Typography className="form-title" component="h1" variant="h5">
              Wallet
            </Typography>
            <div>
              <p>
                <b>Account:</b>
              </p>
              <p>{account}</p>
              <p>
                <b>Balance:</b>
              </p>
              <p>{balance}</p>
              <Button
                onClick={() => disconnectWallet()}
                type="submit"
                fullWidth
                variant="contained"
                className="login-button"
              >
                Disconnect Wallet
              </Button>
            </div>
          </div>
          <Box className="box-style" mt={8}></Box>
        </div>
      </Container>
    </div>
  );
};

export default Wallet;
