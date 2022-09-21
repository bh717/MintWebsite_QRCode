import React , {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Land from './pages/LandPage';
import ConnectPanel from './pages/ConnectPage';
import SelectPanel from './pages/SelectPage';
import TypePanel from './pages/TypePage';
import OptionPanel from './pages/OptionPage';
import UploadPanel from './pages/UploadPage';
import BuildnftPanel from './pages/BuildnftPage';
import NftDetailPanel from './pages/AddNftDetailPage';
import SuccessPanel from './pages/SuccessPage';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Land />}/>
        <Route path='/connect' element={<ConnectPanel />}/>
        <Route path='/select' element={<SelectPanel />}/>
        <Route path='/type' element={<TypePanel />}/>
        <Route path='/option' element={<OptionPanel/>}/>
        <Route path= '/upload' element={<UploadPanel/>}/>
        <Route path='/build-nft' element={<BuildnftPanel/>}/>
        <Route path='/add-nft-details' element={<NftDetailPanel/>}/>
        <Route path='/success' element = {<SuccessPanel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
