import React, { useState }  from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Favourites from './Favourites';
 
const Header = () => {
  const[showFavourites, setShowFavourites] = useState(false);
  const favorites = useSelector((state: any) => state?.favourite?.characters);
  const favoritesCount = favorites?.length || 0; 
  const navigate = useNavigate();

  const handleNavigate = (location:string) => {
    navigate(location);
  }
  const handleClose = (_event: any) => {
    _event.stopPropagation();
    _event.preventDefault();
  setShowFavourites(false);
}
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ backgroundColor: 'black', padding: 2}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          ><label onClick={() => handleNavigate('/')} style={{ cursor: 'pointer', margin: 4 }}>
            <img data-testid="logo" id="local-nav-logo-desktop" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Star Wars Logo" width="200px"></img>
            </label>
          </Typography>
          <div >
          <Button variant="outlined"  color="info" onClick={()=> setShowFavourites(true)} data-testid="favourites"> 
            <FavoriteIcon sx={{ color: 'white', marginRight: 2 , padding:1}} />
            <label style={{ color: 'red', fontSize:'25px',fontWeight:'bold'}}>{favoritesCount} </label>
          </Button>
            {showFavourites && (<Favourites close={handleClose} />)}</div>
        </Toolbar>
      </AppBar></Box>
  )
}

export default Header