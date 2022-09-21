import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const CoverContainer = styled.div`

  background: #0045ea;
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 0 30px;
  height: 100vh;
  width:100%;
  position: relative;

  @media screen and (min-width:0px) and (max-width: 480px) {
    height:120vh;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    height:120vh;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    height:120vh;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    height:120vh;
  } 

`;

export const CoverBtnWrapper = styled.div`
  margin-top: 42px;
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ActionPanel = styled.div`
 
  margin-top: 15%;
  height:10vh;

  @media screen and (min-width:0px) and (max-width: 480px) {
    height:120vh;
    margin-top: 40%;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    height:120vh;
    margin-top: 10%;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    height:120vh;
    margin-top: 10%;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    height:120vh;
    margin-top: 10;
  } 
`;

export const ServicesWrapper = styled.div`

  max-width: 1200px;
  display: grid;
  // grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
  grid-gap: 16px;
  position: fixed;

  @media screen and (min-width:0px) and (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width:480px) and (max-width: 768px) {
    grid-template-columns: 3fr;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    grid-template-columns: 6fr;
    // width:min-width;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    grid-template-columns: 3fr ;
  } 

`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ServicesCard = styled.div`
  background: #aec7c7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  text-align:left;
  border-radius: 10px;
  height: 450px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  bottom :10px;
  
  @media screen and (min-width:0px) and (max-width: 480px) {
    height:450px;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    height:450px;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    height:550px;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    height:450px;
  } 
`;

export const ServicesH1 = styled.h1`
  font-size: 5rem;
  color: black;
  margin-bottom: 64px;
  font-family: 'Droid Sans', serif;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom:32px;
  }
  @media screen and (max-width: 960px) {
    font-size: 2rem;
    margin-bottom:10px;
  }
  
`;

export const NavBtnLink = styled.button`
  
  border-radius: 24px;
  background: #3772FF;
  padding: 10px 22px;
  margin-top:5px;
  font-family:Roboto;
  color: #FCFCFD;
  font-size: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  display:flex;
  width:100%;
  justify-content: center;
  align-items:center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;

export const NavBtnLink1 = styled.button`
  
  border-radius: 24px;
  background: #3772FF;
  padding: 10px 22px;
  margin-top:5px;
  font-family:Roboto;
  color: #FCFCFD;
  font-size: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  display:flex;
  width:100%;
  justify-content: center;
  align-items:center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 2rem;
  color: black;
  text-aligh:left;
  font-family: 'Droid Sans', serif;
  @media screen and (min-width:0px) and (max-width: 480px) {
    height:120vh;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    height:120vh;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    font-size: 2rem;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    font-size: 2rem;
  } 
`;

export const ServicesP = styled.p`
  font-size: 2rem;
  text-align: left;
  color: black;
  font-family: 'Droid Sans', serif;
`;

export const IconImg = styled.img`
  width:30px;
  height:30px;
  margin-right:0.5rem;
`;

export const TextPanel = styled.span`
  font-family: Roboto;
  color: #FCFCFD;
  font-size: 20px;
`;

export const WalletAddressDiv = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  border-radius: 0.5rem;
  align-items: center;
  cursor: pointer;
  display:flex;
  top:5%;
  right:100px;
  position:absolute;

  @media screen and (min-width:0px) and (max-width: 480px) {
    right:100px;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    right:200px;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    right:100px;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    right:100px;
  } 
`;

export const AvatarImg = styled.img`
  height: 2rem;
  max-width:100%;
  display:block;
  vertical-align:middle;

`;

export const SingleMintDiv = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(238 238 238/var(--tw-bg-opacity));
  cursor: pointer;
  margin-bottom: 0.75rem;
  // margin-top: 0.15rem;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  // height:100%;
`;

export const SingleMintP = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  cursor: pointer;
`;

export const ExtendedDiv = styled.div`
  animation: autoHeight .2s linear;
  overflow: hidden;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
`;

export const BatchMintDiv = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(238 238 238/var(--tw-bg-opacity));
    cursor: pointer;
    margin-bottom: 0.75rem;
    // margin-top: 0.15rem;
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    // height:100%;
`;


export const ContinueButton = styled.button`
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity));
  font-weight: 600;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border:none;
  -tw-bg-opacity: 1;
  background-color: rgb(131 56 227/var(--tw-bg-opacity));
  border-radius: 9999px;
  width: 100%;
  margin-top: 0.75rem;
  font-size: 20px;
  transition: filter .2s ease-in-out;
  cursor: pointer;
`;


export const SliderDiv = styled.div`
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    align-items:right;
    text-align: right;
`;

