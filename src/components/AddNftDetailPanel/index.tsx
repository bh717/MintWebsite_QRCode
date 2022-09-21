import React, { useState, useEffect } from "react";

import Video from "../../videos/video.mp4";
import "./AddNftDetailPanelStyle.css";
import {
  VideoBg,
  NavBtnLink,
  SourceImg,
  NameInput,
  INameDiv,
  LinkInput,
  IDescriptionDiv,
  DescriptionInput,
  ILinkDiv,
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
} from "./AddNftDetailPanelElements";


import { useAppDispatch, useAppSelector } from "../../hooks";
import { addMetadata } from "../../store/actions/Auth";
import { url } from "inspector";
import { useNavigate } from "react-router-dom";

const AddNftDetailPanel = ({ isConnected, setIsConnected }: any) => {
  const dispatch = useAppDispatch();
  const img_url = useAppSelector((store) => store.auth.url);
  const [walletAddress, setWalletAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [linkstring, setLinkString] = useState("Link Here");
  const [descriptionstring, setDescriptionString] = useState(
    "A short description"
  );
  const [namestring, setNameString] = useState("Name");
  const [imgURL, setURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (img_url) setURL(img_url);
  }, [img_url]);

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
      setWalletAddress(str);
      setIsConnected(true);
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

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const saveData = () => {
    dispatch(addMetadata(namestring, descriptionstring, linkstring, imgURL));
    console.log("description:", descriptionstring);
    localStorage.setItem("Completed Metadata", "true");
  };
  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === "title") {
      setNameString(e.currentTarget.value);
    }

    if (e.currentTarget.id === "description") {
      setDescriptionString(e.currentTarget.value);
    }

    if (e.currentTarget.id === "url") {
      setLinkString(e.currentTarget.value);
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
              <SourceImg src={imgURL} />
            </ImageDiv>
            <DescriptionDiv>
              <ServicesP>{namestring}</ServicesP>
              <ServicesP>{descriptionstring}</ServicesP>
              <Descriptionp>
                <DescriptionImage src="https://mintnft.today/static/media/linkIcon.8f1d8284e99bb7528b1a15115c43632f.svg" />
                {linkstring}
              </Descriptionp>
            </DescriptionDiv>
          </FirstDiv>
          <SecondDiv>
            <ServicesH2>ADD NFT DETAILS*</ServicesH2>
            <DetailDiv>
              <INameDiv>
                <ServicesP>Name*</ServicesP>
                <NameInput
                  id="title"
                  onChange={handleArticleData}
                  placeholder="ItemName"
                />
              </INameDiv>
              <IDescriptionDiv>
                <ServicesP>Description*</ServicesP>
                <DescriptionInput
                  id="description"
                  onChange={handleArticleData}
                  placeholder="Fill in the detailed description of your NFT"
                ></DescriptionInput>
              </IDescriptionDiv>
              <ILinkDiv>
                <ServicesP>External Link</ServicesP>
                <LinkInput
                  id="url"
                  onChange={handleArticleData}
                  placeholder="Ex: https://www.opensea.com"
                />
              </ILinkDiv>
            </DetailDiv>
            <CoverBtnWrapper>
              <NavBtnLink onClick={saveData} to="/build-nft">Confirm Edits</NavBtnLink>
              <NavBtnLink1 to="/build-nft">Back</NavBtnLink1>
            </CoverBtnWrapper>
          </SecondDiv>
        </ServicesCard>
    </CoverContainer>
  );
};

export default AddNftDetailPanel;
