import React from 'react';
import Header from './components/Header';
import { Box, Container } from '@mui/material';
import './index.css';
import Content from './components/Content';

function App(){
const img_url ="https://img.freepik.com/free-vector/gradient-abstract-constellation-background_23-2148282485.jpg?t=st=1745267402~exp=1745271002~hmac=4ac47210baf3126d5bc13ff957c8bd28a91b6f99860de982ce199d3908546640&w=2000"
   return (

    <React.Fragment>
      <div className="app">
          <Header />
          <Content/>
          </div>
      </React.Fragment>);
}


export default App;