import React, {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import { CharacterDetailsProps } from '../utils/types';
import { getCharacterDetails, getCharacterDetailsPromise, getOtherDetails } from '../utils/services';
import SkeletonChildren from './useSkeleton';
import { Box, Button, Grid } from '@mui/material';
import { CHARACTER_DETAILS } from '../utils/constants';
import HomeWorldPage from './HomeWorldPge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { add } from './reducer/addReducer';
import { BackgroundContainer } from './Characters';


const CharacterPage = () => {
 const { uid } = useParams<{ uid: string }>() || '1';
 const [characterDetails, setCharacterDetails] = React.useState<CharacterDetailsProps | null>(null);
  const dispatch = useDispatch();
  
const { data, isLoading , error} = useQuery({
    queryKey: [uid],
    queryFn: async () => {
      const res = await getCharacterDetailsPromise(uid || '0');
      const { properties } = res?.result;
      if (properties) { 
        setCharacterDetails({ ...properties , uid: uid });
      }
      return properties;
    }
});
  
 const fetchCharacterDetails = async () => {
  try {
    if (!uid) {
      return "Character ID is missing";
    }
    const response = await getCharacterDetails(uid);
    const { result } = response;

    if (result?.properties) {
      const { films } = result?.properties;
      console.log('films', films);
      if (films?.length > 0) {
        await getOtherDetails(films);
      }
    }
    setCharacterDetails({ ...response?.result.properties , uid: response?.result.uid });
   } catch (error) {
    console.error('Error fetching character details:', error);
   }
  };

//  useEffect(() => {
//   fetchCharacterDetails(); 
//  }, [uid]);


 if (isLoading) {
  return <div>Loading...</div>;
 }
if(error) {
  return <div>Error: {error.message}</div>;
}
  const addToFavorites = (_addedCharacter: CharacterDetailsProps) => {
    if (_addedCharacter !== null) {
      console.log('Added to favorites');
      dispatch(add(_addedCharacter));
    }
    };
  if (characterDetails !== null) {
    return (
      <BackgroundContainer>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 2 }}>
            <Button variant="contained" sx={{ color: 'red', background: "white", cursor: 'pointer', }} onClick={() => addToFavorites(characterDetails)} >
              <FavoriteIcon fontSize='large' />
              <label style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}>Add to Favorites</label>
            </Button>
          </Box>
          <Grid container spacing={8}>
            {characterDetails !== null && <>
              <SkeletonChildren dataStructure={CHARACTER_DETAILS} data={characterDetails} />
              <HomeWorldPage characterDetails={characterDetails} />
            </>}
          </Grid>
        </div></BackgroundContainer>
    );
  }
};

export default CharacterPage;