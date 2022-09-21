import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const CoverContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
width:100%;

`;

export const CoverBtnWrapper = styled.div`
//   margin-top: 10px;
  padding:20px;
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

  @media screen and (min-width:0px) and (max-width: 480px) {
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
  }
  @media screen and (min-width:768px) and (max-width:1024px) {

  }
  @media screen and (min-width:1024px) and (max-width:1200px) {
    width:1100px;
    height:700px;
  } 
  @media screen and (min-width:1200px) and (max-width:1500px) {
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

export const ServicesCard = styled.div`
  background: #aec7c7;
  justify-content: flex-start;
  align-items: left;
  text-align:left;
  border-radius: 10px;
  width:1200px;
  height:100%;
  padding: 10px;
  display:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position:relative;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width:0px) and (max-width: 480px) {
    display:initial;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    display:initial;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    // display:initial;
  }
  @media screen and (min-width:1024px) and (max-width:1200px) {
    margin-top:50px;
    margin-left:40px;
    width:1100px;
    height: 620px;
  } 
  @media screen and (min-width:1200px) and (max-width:1500px) {
    margin-top:50px;
    margin-left:25px;
  } 
  @media screen and (min-width:1500px) {
    margin-top:150px;
    margin-left:150px;
    width:1200px;
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
  text-align:center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width:100%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3772FF;
  }
`;

export const NavBtnLink2 = styled(LinkR)`
  border-radius: 24px;
  background: black;
  white-space: nowrap;
  // padding: 10px 22px;
  margin-top:5px;
  font-family:Roboto;
  text-align: center;
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

export const NavBtnLink1 = styled(LinkR)`
  border-radius: 24px;
  background: black;
  white-space: nowrap;
  padding: 10px 22px;
  margin-top:5px;
  font-family:Roboto;
  text-align: center;
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
  margin-bottom: 10px;
  color: black;
  text-aligh:left;
  font-family: 'Droid Sans', serif;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-left:0.3rem;
  color: black;
  font-family: 'Droid Sans', serif;
  justify-items:center;

  @media screen and (min-width:0px) and (max-width: 480px) {
    font-size: 1rem;
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    font-size: 1rem;
  }
  @media screen and (min-width:1024px) and (max-width:1200px) {;
    font-size: 1rem;
  } 
  @media screen and (min-width:1200px) and (max-width:1500px) {
    font-size: 1rem;
  } 
`;

export const FirstDiv = styled.div`
    background-image: url(background-1.png);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40%;
    height: 100%;
    padding: 1rem;
    border-radius: 1rem;
    max-width:400px;
    height:650px;
    flex-direction:column;

    @media screen and (min-width:0px) and (max-width: 480px) {
      width:370px;
      height:400px;
    }
    @media screen and (min-width:480px) and (max-width: 768px) {
      height:100%;
      width:500px;
      margin-left:50px;
    }
    @media screen and (min-width:768px) and (max-width:1024px) {
    }
    @media screen and (min-width:1024px) and (max-width:1200px) {
      height:580px;
    } 
    @media screen and (min-width:1200px) and (max-width:1500px) {
      height:650px;
    } 
    @media screen and (min-width:1500px) {
    } 
`;

export const SecondDiv = styled.div`
  // width:55%;
  height:100%;
  padding:1rem;
  justify-content: space-between;
  flex-direction: column;
  display:flex;

  @media screen and (min-width:0px) and (max-width: 480px) {
    
  }
  @media screen and (min-width:480px) and (max-width: 768px) {
    
  }
  @media screen and (min-width:768px) and (max-width:1024px) {
    
  }
  @media screen and (min-width:1024px) and (max-width:1200px) {;
    height:500px;
  } 
  @media screen and (min-width:1200px) and (max-width:1500px) {
    height:650px;
    width:55%;
  } 
  @media screen and (min-width:1500px){
    height:650px;
    width:60%;
  } 
`;

export const ImageDiv = styled.div`
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const DescriptionDiv = styled.div`
    box-shadow: -45px 311px 126px rgb(0 0 0 / 1%), -26px 175px 106px rgb(0 0 0 / 5%), -11px 78px 79px rgb(0 0 0 / 9%), -3px 19px 43px rgb(0 0 0 / 10%), 0 0 0 rgb(0 0 0 / 10%);
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    padding-bottom: 1.25rem;
    padding-top: 1.25rem;
    border-radius: 0.5rem;
    max-width: 100%;
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
    margin-left: auto;
    margin-right: auto;
}
`;

export const DescriptionImage = styled.img`
    height: 1.5rem;
    margin-right:0.5rem;
    max-width:100%;
    display:block;
    vertical-align:middle;
`;
export const Descriptionp = styled.p`
    opacity:.7;
    margin-left:0.3rem;
    font-wieight:500;
    align-items:center;
    display:fles;
    margin:0;
`;

export const SourceImg = styled.img`
    width:360px;
    height:360px;
    object-position:center;
    opject-fit:contain;
    --tw-border-opacity: 1;
    border-color: rgb(255 255 255/var(--tw-border-opacity));
    border-style: solid;
    border-width: 4px;
    border-radius: 0.75rem;
    vertical-align: middle;
    @media screen and (min-width:0px) and (max-width: 480px) {
      height:200px;
      width:200px;
    }
    @media screen and (min-width:480px) and (max-width: 768px) {
      height:360px;
    }
    @media screen and (min-width:768px) and (max-width:1024px) {
      height:360px;
    }
    @media screen and (min-width:1024px) and (max-width:1200px) {;
      height:280px;
    } 
    @media screen and (min-width:1200px) and (max-width:1500px) {
      height:360px;
    } 
`;


export const DetailDiv = styled.div`
    padding:1.25rem;
    --tw-bg-opacity: 1;
    background-color: rgb(238 238 238/var(--tw-bg-opacity));
    border-radius: 0.75rem;
    margin-top: 1rem;
    margin-left:0.5rem;
    margin-right:0.5rem;
    // align-items: center;
    // text-align:left;
    flex-direction:column;
    display:flex;
    position: relative;
`;

export const SliderDiv = styled.div`
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    margin-bottom: 30px;
    align-items:right;
    text-align: rightl
`;

export const INameDiv = styled.div`
    width: 100%;
    // margin-top: 0.75rem;
`;
export const IDescriptionDiv = styled.div`
    width: 100%;
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
`;
export const ILinkDiv = styled.div`
    width: 100%;
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
`;

export const NameInput = styled.input`
    --tw-border-opacity: 1;
    border-color: rgb(204 204 204/var(--tw-border-opacity));
    border-style:solid;
    border-width:2px;
    border-radius:0.375rem;
    width:100%;
    height:2.5rem;
    margin-top: -15px;
    margin-right:0.5rem;
    color:inherit;
    font-family:inherit;
    font-size:100%;
    line-height:inherit;
    placeholder:ItemName;
`;

export const DescriptionInput = styled.input`
    --tw-border-opacity: 1;
    border-color: rgb(204 204 204/var(--tw-border-opacity));
    border-style:solid;
    border-width:2px;
    border-radius:0.375rem;
    width:100%;
    height:2.5rem;
    margin-right:0.5rem;
    color:inherit;
    font-family:inherit;
    font-size:100%;
    line-height:inherit;
    margin-top: -15px;
`;

export const LinkInput = styled.input`
    --tw-border-opacity: 1;
    border-color: rgb(204 204 204/var(--tw-border-opacity));
    border-style:solid;
    border-width:2px;
    border-radius:0.375rem;
    width:100%;
    height:2.5rem;
    margin-right:0.5rem;
    color:inherit;
    font-family:inherit;
    font-size:100%;
    line-height:inherit;
    margin-top: -15px;
`;
