import React from "react";
import { ethers } from "ethers";
import Button from "@mui/material/Button";

const Wallet = () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();

  const connectWallet = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    // await provider.send("eth_requestAccounts", []);
    // const accounts = await provider.listAccounts();
    // console.log(accounts[0]);
  };

  const disconnectWallet = async () => {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
  };

  return (
    <div>
      <Button onClick={() => connectWallet()}>Connect Wallet</Button>
      <Button onClick={() => disconnectWallet()}>Disconnect Wallet</Button>
    </div>
  );
};

export default Wallet;
