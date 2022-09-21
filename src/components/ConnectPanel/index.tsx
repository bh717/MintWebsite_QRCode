import React, { useState, useEffect } from "react";

import Video from "../../videos/video.mp4";
import MetamaskIcon from "../../icons/metamask.png";
import WalletIcon from "../../icons/wallet.png";
import "./ConnectPanelStyle.css";
import {
  AvatarImg,
  BatchMintDiv,
  ExtendedDiv,
  ContinueButton,
  SingleMintP,
  TextPanel,
  SingleMintDiv,
  WalletAddressDiv,
  VideoBg,
  IconImg,
  NavBtnLink,
  ActionPanel,
  NavBtnLink1,
  CoverBtnWrapper,
  ServicesCard,
  ServicesWrapper,
  CoverBg,
  ServicesH2,
  ServicesP,
  CoverContainer,
} from "./ConnectPanelElements";
import { useNavigate } from "react-router-dom";

const ConnectComponent = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const checkWalletIsConnected = () => {
    const { ethereum }: any = window;
    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      connectWalletHandler();
      console.log("Wallet exists! We're ready to go!");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum }: any = window;
    if (!ethereum) {
      alert("Please install Metamask!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      ethereum.on("accountsChanged", handleAccountsChanged);
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
      var str = accounts[0].substring(0, 15) + "...";
      var str1 = accounts[0]
        .toString()
        .split("")
        .reverse()
        .join("")
        .substring(0, 4);
      str += str1.split("").reverse().join("");
      setWalletAddress(str);
      setIsConnected(true);
      navigate("/select");
    } catch (err) {
      console.log(err);
    }
  };

  function handleAccountsChanged(accounts: any) {
    if (accounts.length === 0) {
      console.log("Please connect to Metamask.");
      setIsConnected(false);
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} />
      </CoverBg>
      <ActionPanel>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesH2>CONNECT YOUR WALLET</ServicesH2>
            <ServicesP>
              Choose a wallet you want to use for the mint experience
            </ServicesP>
            <CoverBtnWrapper>
              <NavBtnLink onClick={connectWalletHandler}>
                <IconImg src={MetamaskIcon} /> <TextPanel>Metamask</TextPanel>{" "}
              </NavBtnLink>
              <NavBtnLink1>
                <IconImg src={WalletIcon} />
                <TextPanel>Wallet Connect</TextPanel>
              </NavBtnLink1>
            </CoverBtnWrapper>
          </ServicesCard>
        </ServicesWrapper>
      </ActionPanel>
    </CoverContainer>
  );
};

export default ConnectComponent;
