import React, { useState, useEffect } from "react";
import { writeJsonFile } from "write-json-file";

import Video from "../../videos/video.mp4";
import "./BuildnftPanelStyle.css";
import { Loading } from "notiflix";
import {
  VideoBg,
  NavBtnLink,
  SourceImg,
  NavBtnLink2,
  DetailDiv,
  FirstDiv,
  DescriptionImage,
  Descriptionp,
  DescriptionDiv,
  SecondDiv,
  ImageDiv,
  NavBtnLink1,
  CoverBtnWrapper,
  ServicesCard,
  CoverBg,
  ServicesH2,
  ServicesP,
  CoverContainer,
} from "./BuildnftPanelElements";
import { useAppSelector } from "../../hooks";
import { saveMetadata } from "../../services/SaveMetadata";
import { ethers } from "ethers";
import contract from "../../contractABI.json";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

const contractAddress = "0x59A90785eB64e07d265b171cdD46B1F741DD0202";
const abi = contract;

const Buildnft = ({ isConnected, setIsConnected }: any) => {
  const img_url = useAppSelector((store) => store.auth.url);
  const title = useAppSelector((store) => store.auth.title);
  const descrip = useAppSelector((store) => store.auth.description);
  const getlink = useAppSelector((store) => store.auth.external);

  const navigate = useNavigate();
  const [tokenID, setTokenId] = useState(0);
  const [IMGURL, setURL] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [flag, setflag] = useState(0);
  const [name, setName] = useState("Name");
  const [description, setDescription] = useState("A Short Description");
  const [link, setLink] = useState("Link Here");
  const [popupflag, setPopFlag] = useState(false);

  useEffect(() => {
    if (img_url) setURL(img_url);
    if (localStorage.getItem("Completed Metadata") === "true") {
      console.log("drscrip:", descrip);
      setName(title);
      setDescription(descrip);
      setLink(getlink);
      setflag(1);
    }
  }, []);

  const handleClose = () => setPopFlag(false);
  const handleShow = () => setPopFlag(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    //Loading.standard();

    //alert("adf");
    const { ethereum }: any = window;
    //alert("d");
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

  const onCanclEvent = () => {
    localStorage.setItem("Completed Metadata", "false");
    navigate('/upload');
  };
  useEffect(() => {
    checkWalletIsConnected();
  }, [checkWalletIsConnected]);

  const sleep = (ms: number | undefined) => {
    // alert(ms);
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const saveJson = async () => {
    // saveMetadata(1, name, IMGURL, description, link);
    if (localStorage.getItem("Completed Metadata") === "true") {
      const { ethereum }: any = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");

        console.log(nftContract);

        const token_id = Number(await nftContract.getTokenId());
        console.log(token_id);

        let matadata_url;
        let saveFlag = 0;

        saveMetadata(token_id+1, name, IMGURL, description, link).then(
          (response) => {
            matadata_url = response.data;
            console.log("asdfasdfadfs", response.data);
            saveFlag = 1;
          }
        );

        Loading.standard();
        await sleep(5000);

        if (saveFlag === 1) {
          let url = "https://gateway.pinata.cloud/ipfs/" + matadata_url;

          let nftTxn = await nftContract.mint(url);

          console.log("Minting... please wait!");

          await nftTxn.wait();

          console.log(
            `Mined, see transaction: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`
          );

          Loading.remove();

          navigate("/success");
        }
      } else {
        console.log("Ethereum objuct does not exist");
      }
      localStorage.setItem("Completed Metadata", "false");
    }
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} />
      </CoverBg>
      <ServicesCard>
        <FirstDiv>
          <ImageDiv>
            <SourceImg src={IMGURL} />
          </ImageDiv>
          <DescriptionDiv>
            <ServicesP>{name}</ServicesP>
            <ServicesP>{description}</ServicesP>
            <Descriptionp>
              <DescriptionImage src="https://mintnft.today/static/media/linkIcon.8f1d8284e99bb7528b1a15115c43632f.svg" />
              {link}
            </Descriptionp>
          </DescriptionDiv>
        </FirstDiv>
        <SecondDiv>
          <ServicesH2>LET’S BUILD YOUR NFT</ServicesH2>
          <DetailDiv>
            <ServicesP>
              {flag === 1 && (
                <img src="https://mintnft.today/static/media/checkCircle.1987bfd21062bb3fce48f6c8723f4136.svg" />
              )}
              Add NFT details
            </ServicesP>
            <ServicesP>Add a name and description for your NFT</ServicesP>
            <NavBtnLink2 to="/add-nft-details">Edit Details</NavBtnLink2>
          </DetailDiv>
          <CoverBtnWrapper>
            <NavBtnLink onClick={saveJson}>Mint My NFT</NavBtnLink>
            <NavBtnLink1 onClick={onCanclEvent}> Cancel Mint</NavBtnLink1>
          </CoverBtnWrapper>
        </SecondDiv>
      </ServicesCard>
    </CoverContainer>
  );
};

export default Buildnft;
