import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
const Land = (isConnected: any, setIsConnected: any) => {
  
  return (
    <>
      <Dashboard isConnected={isConnected} setIsConnected={setIsConnected}/>
    </>
  );
};

export default Land;
