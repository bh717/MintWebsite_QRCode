import React,{ useState , useEffect } from 'react';
import { BsArrowLeft } from "react-icons/bs";

import ReactSlider from "react-slider";
import Video from '../../videos/video.mp4';
import './TypePanelStyle.css';
import { useNavigate } from 'react-router-dom';

import { AvatarImg,BackDiv, PanelDiv, SliderDiv, BatchMintDiv, ExtendedDiv, ContinueButton, SingleMintP, SingleMintDiv, WalletAddressDiv, VideoBg,   ActionPanel,   ServicesCard ,ServicesWrapper ,CoverBg, ServicesH2,  CoverContainer} from './TypePanelElements';


const TypeComponent = () => {

  const navigate = useNavigate ();
  const [walletAddress, setWalletAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkWalletIsConnected = () => {
    const {ethereum}: any = window;
    if(!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      connectWalletHandler();
      console.log("Wallet exists! We're ready to go!"); 
    }
  }

  const connectWalletHandler = async () => {
      const {ethereum}:any = window; 
      if(!ethereum) {
        alert("Please install Metamask!");
      }
      try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        ethereum.on('accountsChanged', handleAccountsChanged);
        console.log("Found an account! Address: ", accounts[0]);
        setCurrentAccount(accounts[0]);
        var str = accounts[0].substring(0,15) + "...";
        var str1 = accounts[0].toString().split('').reverse().join('').substring(0,4);
        str += str1.split('').reverse().join('');
        setWalletAddress(str);
        setIsConnected(true); 
        setCurrentIndex(1);
      } catch(err) {
        console.log(err);
      }
  }

  function handleAccountsChanged(accounts: any ) {
    if(accounts.length === 0) {
      console.log("Please connect to Metamask.");
      setIsConnected(false);
    } else if(accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
    }
  }

  const onNextHandle = () =>{
    navigate('/option');
  }

  const OnERC721Event = () =>{
    setCurrentIndex(1);
  }

  const OnERC1155Event = () =>{
    setCurrentIndex(2);
  }

  const OnBackEvent = () => {
    navigate('/select');
 }
  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} />
      </CoverBg>
      <ActionPanel>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesH2>CHOOESE YOUR NFT TYPE</ServicesH2>
            <SingleMintDiv onClick={OnERC721Event}>
                <SingleMintP>ERC721</SingleMintP>
                {currentIndex === 1 && (
                    <ExtendedDiv>
                        <p>NFTs minted using this standard are unique and can only be owned by one wallet at a time</p>
                        <ContinueButton onClick={onNextHandle}>Continue</ContinueButton>
                    </ExtendedDiv>
                )}
            </SingleMintDiv>
            <BatchMintDiv onClick={OnERC1155Event}>
                <SingleMintP>ERC1155</SingleMintP>
                {currentIndex === 2 && (
                    <ExtendedDiv>
                        <p>NFTs minted using this standard can have multiple copies and can be owned by multiple wallets</p>
                        <ContinueButton onClick={onNextHandle}>Continue</ContinueButton>
                    </ExtendedDiv>
                )}
            </BatchMintDiv>
            <SliderDiv>
                <PanelDiv>
                    <BackDiv onClick={OnBackEvent}>
                        <BsArrowLeft/><p>Back</p>
                    </BackDiv>
                </PanelDiv>
            </SliderDiv>
          </ServicesCard>
        </ServicesWrapper>
      </ActionPanel>
      <WalletAddressDiv>
        <p>{walletAddress}</p>
        <AvatarImg src='https://avatars.dicebear.com/api/bottts/3348Fe.svg'/>
      </WalletAddressDiv>
    </CoverContainer>
  );
};

export default TypeComponent;
