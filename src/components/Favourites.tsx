import React from 'react';
import { CharacterProps } from '../utils/types';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar,  List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from './reducer/addReducer';
import CloseIcon from '@mui/icons-material/Close';

interface FavouritesProps {
  close: (event: any) => void;
}

const Favourites: React.FC<FavouritesProps> = ({ close }) => {
const favourites = useSelector((state: any) => state.favourite.characters);
const dispatch = useDispatch();

 const onRemoveFavourite = (item: CharacterProps) => {
  dispatch(remove(item ));
 }

 return (
   <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', top: '72px', position: 'fixed', right: 0, maxHeight: 500, overflowY: 'auto', zIndex: 1000 ,}}>
     <CloseIcon sx={{ position: 'absolute', right: 2, color: 'black' ,top:0}} onClick={(event)=> close(event)} />
      {(!favourites || favourites.length === 0) ?
            <div style={{ color: 'black', fontSize: 20, padding: 20 }}>No Favourites</div> :
     favourites?.map((item: CharacterProps) => (<>
        <ListItem key={item.uid} sx={{ padding: 1, margin: 2, backgroundColor: 'white', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ListItemAvatar>
          <Avatar sx={{ cursor: 'pointer' }}>
             <DeleteIcon onClick={() => onRemoveFavourite(item)} />
          </Avatar>
        </ListItemAvatar>
         <ListItemText sx={{color:'black'}} primary={item.name} secondary={item.gender} />
       </ListItem>
      </>
     ))}
    </List>
  );
};

export default Favourites;