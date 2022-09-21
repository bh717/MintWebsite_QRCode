
import React,{ useState , useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ImageUploading , { ImageListType } from 'react-images-uploading';

import Video from '../../videos/video.mp4';

import CloseImageIcon from '../../icons/Close.png';
import UploadImageIcon from '../../icons/UploadImage.png';
import './UploadPanelStyle.css';

import { AvatarImg, CloseDiv, CaptionDiv, DropImageDiv, RealImageDiv, ImageDiv, Imagetag, CoverBtnWrapper,NavBtnLink,NavBtnLink1, SingleMintP, SingleMintDiv, WalletAddressDiv, VideoBg,   ActionPanel,   ServicesCard ,ServicesWrapper ,CoverBg, ServicesH2,  CoverContainer} from './UploadElements';
import { useAppDispatch} from "../../hooks";
import { addMetadata } from "../../store/actions/Auth";
import { id } from 'ethers/lib/utils';



const UploadComponent = () => {

  const dispatch = useAppDispatch();
  const [images, setImages] = useState([]);
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


  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
    dispatch(addMetadata("","","",String(imageList[0].dataURL)));
    // dispatch(addMetadata("asdf","asdfdas","123213"));
  };

  const setID = () => {
    localStorage.setItem("id","1");
  }

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} />
      </CoverBg>
      <ActionPanel>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesH2>UPLOAD YOUR NFT FILE</ServicesH2>
            <SingleMintDiv>
                <SingleMintP>Drag and drop your NFT file</SingleMintP>
                <ImageUploading 
                    
                  value={images}
                  onChange={onChange}
                  maxNumber={10}
                >
                  {({
                      imageList,
                      onImageUpload,
                      onImageRemove,
                      isDragging,
                      dragProps
                      })  => (
                        <DropImageDiv onClick={onImageUpload} {...dragProps}>
                            {isDragging === false && dragProps && (
                                <div>
                                    <img src={UploadImageIcon} />
                                    <p>
                                        <span>Max file size 100MB</span>
                                        <br />
                                        (JPG, PNG, JPEG, GIF, SVG, MP4, WEBM, WEBP, MP3, WAV, OGG, GLTF, GLB)
                                    </p>
                                </div>
                            )}
                            {isDragging === true && (
                                <div>
                                    <p>
                                        Drop file here.
                                    </p>
                                </div>
                            )}
        
                            {imageList.map((image, index) => (
                              <RealImageDiv key={index}>
                                  <CaptionDiv>
                                      <p>{image.file?.name}</p>
                                      <CloseDiv onClick={() => onImageRemove(index)}>
                                          <img src={CloseImageIcon}></img>
                                      </CloseDiv>
                                  </CaptionDiv>
                                  <ImageDiv>
                                      <Imagetag src={image.dataURL} />
                                  </ImageDiv>
                              </RealImageDiv>
                            ))}
                        </DropImageDiv>
                  )}
                </ImageUploading>
            </SingleMintDiv>
            <CoverBtnWrapper>
              <NavBtnLink onClick={setID}to="/build-nft">Edit My NFT</NavBtnLink>
              <NavBtnLink1 to="/">Cancel</NavBtnLink1>
            </CoverBtnWrapper>
          </ServicesCard>
        </ServicesWrapper>
      </ActionPanel>
      <WalletAddressDiv>
        <p>{walletAddress}</p>
        <AvatarImg src='https://avatars.dicebear.com/api/bottts/3348Fe.svg'/>
      </WalletAddressDiv>

      <>
        
      </>
    </CoverContainer>
  );
};

export default UploadComponent;
