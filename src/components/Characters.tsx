import { Box, Button, Card, CircularProgress, Container, Grid, IconButton, Pagination } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { CharacterProps, SearchedCharacterProps } from '../utils/types';
import { fetchSearchCharacter, getCharacterList } from '../utils/services';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../components/reducer/addReducer';
import { Search, SearchIconWrapper, StyledInputBase } from '../style';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';


export const CharacterCard = ({ uid, name , gender  }: any) => {
  return <Card  sx={{ width: 160, height: 180, margin: 1, padding: 1, }}>
          <Link to={`character/${uid}`}>
            <h2>{name}</h2>
          </Link>
          <h2>{gender}</h2>
        </Card>
}

const Characters: React.FC<{}> = () => {
const [characters, setCharacters] = React.useState<CharacterProps[]>([]);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState<string | null>(null);
const [page, setPage] = React.useState(1);
const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchedCharacterProps[]>([]);
  const ref = useRef(0);

const fetchCharacters = async () => {
  setLoading(true);
  setError(null);
  try {
     const {results, total_pages} = await getCharacterList(page);

    if (results?.length === 0) {
        setError('No characters found');
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

  return () => {
    setCharacters([]);
    setLoading(false);
    setError(null);
  }
 }
  const handlePageChange = (e: any, pageNo: number) => {
    console.log(pageNo);
    setPage(pageNo);
  };
  
  useEffect(() => {
    if (!searchTerm) {
      fetchCharacters(); 
      setSearchResults([]);
    }
  }, [searchTerm, page]);
    useEffect(() => {
      fetchCharacters();
    }, [page]);

  if(loading) {
    return <CircularProgress />
  }

  if (error) {
    return <div>{error}</div>;
  }


  const handleSearch = async (searchTerm: string) => {
    const filteredCharacters = await fetchSearchCharacter(searchTerm);
    console.log(filteredCharacters);
    setSearchResults([...filteredCharacters]);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };
  const BackgroundContainer = styled('div')({
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://media.istockphoto.com/id/177247796/photo/night-sky-filled-with-stars-and-nebulae.jpg?s=1024x1024&w=is&k=20&c=iKWp9X2wvjXd5kb0xIV5K_tLzrOSL6FGZggDwDpFXOI=")`,
    backgroundRepeat: 'repeat',
  });
  
  return (
    <BackgroundContainer>
    <Container sx={{ height: '80vh'  }} >
       <Search>
        <SearchIconWrapper>
          <SearchIcon onClick={() => handleSearch(searchTerm)}/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => { setSearchTerm(e.target.value) }}
          onKeyDown={handleKeyPress}
        />
      </Search>

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
      </Container>
      </BackgroundContainer>);
};

export default Characters;