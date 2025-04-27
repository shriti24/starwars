import React, { useTransition } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../style';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
}

const SearchInput = ({onSearch , onReset}: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      startTransition(() => {
        onSearch(searchTerm);
      });
    }
  };
 
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '90%' }}>
      <Search >
        <SearchIconWrapper>
            <SearchIcon onClick={() => { onSearch(searchTerm) }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          disabled={isPending}
        />
      </Search></div>
      <Button
        variant="contained"
        onClick={() => {
          startTransition(() => {
            onReset();
          });
        }}
        disabled={isPending}
        sx={{ marginLeft: 2, backgroundColor: 'white', color: 'black' }}>
        Reset</Button></Box>
   
  );
}
export default SearchInput;