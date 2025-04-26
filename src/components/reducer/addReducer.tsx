import { createSlice } from "@reduxjs/toolkit";
import { CharacterProps } from "../../utils/types";

interface AddedState { 
 characters: CharacterProps[];
}
const initialState: AddedState = {
  characters: [],
}
const addReducer= createSlice({
    name:"favourite",
    initialState ,
    reducers:{
        add: (state, action) => {
            const existingCharacter = state.characters.find((item) => item?.uid === action?.payload?.uid);
            if (!existingCharacter) {
                state.characters.push(action.payload);
            }
        },
        remove: (state, action) => {
            console.log("remove", action.payload);
            state.characters= state.characters.filter((item)=> item.uid !== action?.payload?.uid);
        }
    }
})

export const {add, remove }= addReducer.actions;
export default addReducer.reducer;