import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import AddNftDetailPanel from '../components/AddNftDetailPanel';
// import { addArticle } from "../redux/actionCreators"
import { Dispatch } from "redux"

const NftDetailPanel = (isConnected: any, setIsConnected: any) => {


  return (
    <>
      <AddNftDetailPanel/>
    </>
  );
};

export default NftDetailPanel;
