import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import Video from "../../videos/video.mp4";
import "./SuccessStyle.css";
import {
  VideoBg,
  SuccessDiv,
  CoverBg,
  CoverContainer,
  ImageDiv,
  ServicesP,
  NFTImage,
  DescriptionDiv,
  WalletAddressDiv,
  BarCodeDiv,
  VerifyDiv,
  TitleDiv,
  ConceptDiv,
  ContractAddressDiv,
  TokenIDDiv,
  NetworkDiv,
  NavBtnLink1,
  NavBtnLink,
} from "./SuccessElements";

import { useAppSelector } from "../../hooks";
import { saveMetadata } from "../../services/SaveMetadata";
import QRCode from "react-qr-code";
import contract from "../../contractABI.json";
import { useNavigate } from "react-router-dom";

const abi = contract;
const contractAddress = "0x59A90785eB64e07d265b171cdD46B1F741DD0202";

const SuccessComponent = ({ isConnected, setIsConnected }: any) => {
  let img_url = useAppSelector((store) => store.auth.url);
  let title = useAppSelector((store) => store.auth.title);
  let descrip = useAppSelector((store) => store.auth.description);
  let getlink = useAppSelector((store) => store.auth.external);
  const navigate = useNavigate();

  const [walletAddress, setWalletAddress] = useState("");
  const [saveContractAddress, setContractAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [IMGURL, setURL] = useState("");
  const [tokenID, setTokenId] = useState(0);
  const [qrData, setqrData] = useState("");
  useEffect(() => {
    if (img_url) {
      setURL(img_url);
      let Data = String(title + descrip + getlink);
      setqrData(Data);
    }
  }, []);

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

      var str = accounts[0].substring(0, 5) + "...";
      var str1 = accounts[0]
        .toString()
        .split("")
        .reverse()
        .join("")
        .substring(0, 4);
      str += str1.split("").reverse().join("");
      //console.log(str);
      setWalletAddress(str);

      var str2 = contractAddress.substring(0, 5) + "...";
      var str3 = contractAddress
        .toString()
        .split("")
        .reverse()
        .join("")
        .substring(0, 4);
      str2 += str3.split("").reverse().join("");
      //console.log(str);
      setContractAddress(str2);

      setIsConnected(true);
      console.log(currentAccount);
    } catch (err) {
      console.log(err);
    }
  };

  function handleAccountsChanged(accounts: any) {
    if (accounts.length === 0) {
      console.log("Please connect to Metamask.");
      // setIsConnected(false);
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
    }
  }

  const saveJson = async () => {
    const { ethereum }: any = window;
    if (ethereum) {
      console.log("Connect metadata");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);
      const token_id = Number(await nftContract.getTokenId());
      console.log(token_id);
      setTokenId(token_id + 1);

    }
  };

  useEffect(() => {
    checkWalletIsConnected();
    saveJson();
  }, []);

  const backStatus = () => {
    navigate("/");
  }
  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} />
      </CoverBg>
      <SuccessDiv>
        <ImageDiv>
          <NFTImage src={IMGURL} />
        </ImageDiv>
        <DescriptionDiv>
          <WalletAddressDiv>
            <TitleDiv>
              <ServicesP>Wallet Address:</ServicesP>
            </TitleDiv>
            <ConceptDiv>
              <ServicesP>{walletAddress}</ServicesP>
            </ConceptDiv>
          </WalletAddressDiv>
          <ContractAddressDiv>
            <ServicesP>Contract Address:</ServicesP>
            <ServicesP>{saveContractAddress}</ServicesP>
          </ContractAddressDiv>
          <TokenIDDiv>
            <ServicesP>TokenID:</ServicesP>
            <ServicesP>{tokenID}</ServicesP>
          </TokenIDDiv>
          <NetworkDiv>
            <ServicesP>Network:</ServicesP>
            <ServicesP>TestNet</ServicesP>
          </NetworkDiv>
        </DescriptionDiv>
        <BarCodeDiv>
          <QRCode value={qrData} level="H" />
        </BarCodeDiv>
        <VerifyDiv>
          <NavBtnLink onClick={saveJson}>Scan To Verify</NavBtnLink>
          <NavBtnLink1 onClick = {backStatus}>Back</NavBtnLink1>
        </VerifyDiv>
      </SuccessDiv>
    </CoverContainer>
  );
};

export default SuccessComponent;
