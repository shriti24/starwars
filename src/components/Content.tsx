import { Box, Card, Container } from '@mui/material';
import React from 'react'
import {createBrowserRouter} from "react-router";

const Content = () => {

 const outlet=  createBrowserRouter([
          {
            path: "/",
            element:<></>}
 ])
  
  
  
  return (
    <div className='body'>
      <Container sx={{ bgcolor: 'black', height: '100vh' }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex',justifyContent:'center',flexWrap:'wrap' }} >
        <Card sx={{ width: 200,height: 200 , margin: 1, padding: 2, }}>
            <h1>Welcome to the Content Page</h1>  </Card>
           <Card sx={{ width: 200,height: 200 , margin: 1, padding: 2, }}>
          <h1>Welcome to the Content Page</h1>  </Card>
           <Card sx={{ width: 200,height: 200 , margin: 1, padding: 2, }}>
          <h1>Welcome to the Content Page</h1>  </Card>
           <Card sx={{ width: 200,height: 200 , margin: 1, padding: 2, }}>
          <h1>Welcome to the Content Page</h1>  </Card>
        </Box>
      </Container>

    </div>
  )
}

export default Content