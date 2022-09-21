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
`;

export const ActionPanel = styled.div`
 
  margin-top: 20%;
  

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
    margin-top: 10%;
  } 

`;

export const ServicesWrapper = styled.div`

  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
  grid-gap: 16px;
  position: fixed;

  @media screen and (min-width:480px) and (max-width: 768px) {
    height:120vh;
    margin-top: 50%;
    margin-left:10%;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width:1024px) and (max-width:1500px) {
    // height:120vh;
    grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
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
  justify-content: flex-start;
  align-items: left;
  text-align:left;
  border-radius: 10px;
  max-height: 60vh;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  // &:hover {
  //   transform: scale(1.02);
  //   transition: all 0.2s ease-in-out;
  //   cursor: pointer;
  // }
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

export const NavBtnLink = styled(LinkR)`
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

export const NavBtnLink1 = styled(LinkR)`
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
  font-size: 1.5rem;
  text-align: left;
  color: black;
  font-family: 'Droid Sans', serif;
`;
