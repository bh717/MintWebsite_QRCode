import React,{ useState , useEffect } from 'react';

import Video from '../../videos/video.mp4';
import './DashboardStyle.css';
import { VideoBg, NavBtnLink, ActionPanel, NavBtnLink1, CoverBtnWrapper, ServicesCard ,ServicesWrapper ,CoverBg, ServicesH2, ServicesP, CoverContainer} from './DashboardElements';


const Dashboard = ({ isConnected, setIsConnected}:any) => {

  const [walletAddress, setWalletAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);

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
    //Loading.standard();

      //alert("adf");
      const {ethereum}:any = window;
      //alert("d");
      if(!ethereum) {
        alert("Please install Metamask!");
      }
      try {
        const accounts =  await ethereum.request({method: 'eth_requestAccounts'});

        ethereum.on('accountsChanged', handleAccountsChanged);
        console.log("Found an account! Address: ", accounts[0]);
        setCurrentAccount(accounts[0]);

        var str = accounts[0].substring(0,5) + "...";
        var str1 = accounts[0].toString().split('').reverse().join('').substring(0,4);
        str += str1.split('').reverse().join('');
        //console.log(str);
        setWalletAddress(str);
        setIsConnected(true); 
        console.log(currentAccount);
        
      } catch(err) {
        console.log(err);
      }
  }

  function handleAccountsChanged(accounts: any ) {
    if(accounts.length === 0) {
      console.log("Please connect to Metamask.");
      // setIsConnected(false);
    } else if(accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
    }
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
            <ServicesH2>Mint NFT</ServicesH2>
            <ServicesP>Mint NFT is the world's simplest NFT creation service out there. Period.</ServicesP>
            <CoverBtnWrapper>
              <NavBtnLink to="/Connect">Mint Your NFT</NavBtnLink>
              <NavBtnLink1 to="/login">Get API Key</NavBtnLink1>
            </CoverBtnWrapper>
          </ServicesCard>
        </ServicesWrapper>
      </ActionPanel>
    </CoverContainer>
  );
};

export default Dashboard;
