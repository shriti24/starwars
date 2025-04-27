import { Box,  Card, CircularProgress, Container, Grid,  Pagination } from '@mui/material';
import React, { useEffect, useRef, useTransition } from 'react';
import { CharacterProps, SearchedCharacterProps } from '../utils/types';
import { fetchSearchCharacter, getCharacterList } from '../utils/services';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import SearchInput from './SearchInput';

export const CharacterCard = ({ uid, name , gender  }: any) => {
  return <Card  sx={{ width: 160, height: 180, margin: 1, padding: 1, }}>
          <Link to={`character/${uid}`}>
            <h2>{name}</h2>
          </Link>
          <h2>{gender}</h2>
        </Card>
}

export const BackgroundContainer = styled('div')({
    width: '100%',
    height: '80vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1611366326837-84268a033366?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    zIndex: -1,
  });

const Characters: React.FC<{}> = () => {
const [characters, setCharacters] = React.useState<CharacterProps[]>([]);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState<string | null>(null);
const [page, setPage] = React.useState(1);
const [searchResults, setSearchResults] = React.useState<SearchedCharacterProps[]>([]);
const ref = useRef(0);

const fetchCharacters = async () => {
  setLoading(true); 
  setError(null);
  setSearchResults([]);
  try {
     const {results, total_pages} = await getCharacterList(page);

    if (results?.length === 0) {
        setError('No characters found');
        setLoading(false);
        return;
    }   
    setCharacters([...results]);
    ref.current = total_pages;
   } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('An unknown error occurred');
    }
   }
    setLoading(false);
}
  
  const handlePageChange = (e: any, pageNo: number) => {
    console.log(pageNo);
    setPage(pageNo);
  };
  
  useEffect(() => {
      fetchCharacters(); 
  }, []);

  useEffect(() => {
      fetchCharacters();
  }, [page]);

  
  const handleSearch = async (searchTerm: any) => {
    setLoading(true);
    const filteredCharacters = await fetchSearchCharacter(searchTerm);
    if (filteredCharacters?.length === 0) {
        setError('No characters found');
        setLoading(false);
      return;
      
    } 
    console.log(filteredCharacters);
    setSearchResults([...filteredCharacters]);
    setCharacters([]);
   
    setLoading(false);
  };

  
  if(loading) {
    return <CircularProgress />
  }

  return (
    <BackgroundContainer>
    <Container sx={{ height: '85vh'  }} >
        <SearchInput onSearch={handleSearch} onReset={fetchCharacters} />
        {error ? <div style={{ color: 'red', fontSize: 20 }}>{error}</div> :
          <>
          <Box sx={{  height: '80vh', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: 2 }}  >
          {searchResults?.length > 0 ? searchResults.map((character) => (
            <CharacterCard key={character?.uid} uid={character?.uid} name={character?.properties?.name} gender={character?.properties?.gender} />
          )) : characters?.length > 0 && characters?.map((character) => (
            <CharacterCard key={character?.uid} uid={character?.uid} name={character?.name} gender={character?.gender}  />
          ))}
          </Box>
          <Grid container justifyContent="flex-end">
          <Pagination count={ref.current} page={page} onChange={ (e, pageNo)=>{handlePageChange(e, pageNo)}} sx={{marginTop:"-50px" , marginRight:0, position:'absolute'}} />
            </Grid>
          </>}
      </Container>
      </BackgroundContainer>);
};

export default Characters;