import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const CoverContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width:100%; 



`;

export const CoverBtnWrapper = styled.div`
  margin-top: 1%;
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
  @media screen and (min-width:0px) and (max-width: 480px) {
    height:1000px;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
  }
  @media screen and (min-width:768px) and (max-width:1024px) {

  }
  @media screen and (min-width:1024px) and (max-width:1200px) {
    // width:1100px;
    height:1000px;
  } 
  @media screen and (min-width:1200px) and (max-width:1500px) {
    height:900px;
  } 
  @media screen and (min-width:1500px) {
  } 
`;



export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
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
  background: #ed08f1;
  white-space: nowrap;
  padding: 10px 22px;
  margin-top:5px;
  font-family:Roboto;
  color: #FCFCFD;
  font-size: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width:100%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;

export const NavBtnLink1 = styled.button`
  border-radius: 24px;
  background: black;
  white-space: nowrap;
  padding: 10px 22px;
  margin-top:5px;
  font-family:Roboto;
  color: #FCFCFD;
  font-size: 30px;
  outline: none;

  width:100%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 1%;
  color: black;
  text-aligh:left;
  font-family: 'Droid Sans', serif;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: left;
  color: white;
  font-family: 'Droid Sans', serif;
`;

export const NFTImage = styled.img`
  width:300px;
  height:200px;
  object-position:center;
  opject-fit:contain;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255/var(--tw-border-opacity));
  border-style: solid;
  border-width: 4px;
  border-radius: 0.75rem;
  vertical-align: middle;
`;


export const SuccessDiv = styled.div`
  padding:20px;
  display: flex;
  position:relative;
  flex-direction: column;
  --tw-border-opacity: 1;
  align-items: center;
  border-color: rgb(255 255 255/var(--tw-border-opacity));
  border-style: solid;
  border-width: 2px;
  border-radius: 0.75rem;
  height:800px;
  margin-top:5%;
  margin-left:40%;
  vertical-align: middle;
  background-color:#121224;
  @media screen and (min-width:0px) and (max-width: 480px) {
    margin-top:5%;
    margin-left:5%;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
  }
  @media screen and (min-width:1024px) and (max-width:1200px) {
    height:750px;
    margin-top:5%;
    margin-left:15%;
  } 
  @media screen and (min-width:1200px) and (max-width:1500px) {
    height:750px;
    margin-top:5%;
    margin-left:15%;
  } 
  @media screen and (min-width:1500px) {
    height:800px;
    margin-top:5%;
    margin-left:5%;
  } 
`;

export const ImageDiv = styled.div`
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const DescriptionDiv = styled.div`
  // justify-content: space-between;
`;

export const WalletAddressDiv = styled.div`
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  align-items:right;
  text-align: right;
  justify-content: space-between;
  display: flex;
  width:300px;
`;
export const ContractAddressDiv = styled.div`
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  align-items:right;
  text-align: right;
  justify-content: space-between;
  display: flex;
`;
export const TokenIDDiv = styled.div`
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  align-items:right;
  text-align: right;
  justify-content: space-between;
  display: flex;
`;
export const NetworkDiv = styled.div`
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  align-items:right;
  text-align: right;
  justify-content: space-between;
  display: flex;
`;

export const TitleDiv = styled.div`

`;

export const ConceptDiv = styled.div`

`;

export const BarCodeDiv = styled.div`

`;

export const VerifyDiv = styled.div`
  margin-top:20px;
`;
