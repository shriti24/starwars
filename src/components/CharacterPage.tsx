import React, {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetailsProps, CharacterProps } from '../utils/types';
import { getCharacterDetails } from '../utils/services';
import SkeletonChildren from './useSkeleton';
import { Box, Button, Grid } from '@mui/material';
import { CHARACTER_DETAILS } from '../utils/constants';
import HomeWorldPage from './HomeWorldPge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { add } from './reducer/addReducer';


const CharacterPage = () => {
 const { uid } = useParams<{ uid: string }>() || '1';
 const [characterDetails, setCharacterDetails] = React.useState<CharacterDetailsProps | null>(null);
  const dispatch = useDispatch();
  
 const fetchCharacterDetails = async () => {
  try {
   if (!uid) {
    return "Character ID is missing";
   }
   const response = await getCharacterDetails(uid);
   setCharacterDetails({ ...response?.result.properties , uid: response?.result.uid });
   } catch (error) {
    console.error('Error fetching character details:', error);
   }
  };

 useEffect(() => {
  fetchCharacterDetails(); 
 }, [uid]);


 if (!characterDetails) {
  return <div>Loading...</div>;
 }

    const addToFavorites = (_addedCharacter: CharacterDetailsProps) => {
      console.log('Added to favorites');
      dispatch(add(_addedCharacter));
    };
  
 return (
   <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' , backgroundColor: 'black', color: 'white'}}>
     <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 2 }}>
     <Button variant="contained" sx={{ color: 'red', background: "white", cursor: 'pointer', }} onClick={() => addToFavorites(characterDetails)} >
       <FavoriteIcon fontSize='large' />
       <label style={{ color: 'red', fontSize: 20,cursor: 'pointer' }}>Add to Favorites</label>
      </Button>
     </Box>
      <Grid container spacing={8}>
       {characterDetails !== null && <>
        <SkeletonChildren dataStructure={CHARACTER_DETAILS} data={characterDetails} />
         <HomeWorldPage characterDetails={characterDetails} />
       </>}
      </Grid>
  </div>
 );
};

export default CharacterPage;