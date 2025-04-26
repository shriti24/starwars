export interface CharacterProps {
 name: string;
 uid: string;
  url?: string;
  gender?: string;
  homeworld?: string;
}

export interface  CharacterDetailsProps {
 name: string;
 height: string;
 mass: string;
 hair_color: string;
 skin_color: string;
 eye_color: string;
 birth_year: string;
  gender: string;
  uid: string;
}
export interface SearchedCharacterProps { 
  properties: CharacterProps;
  uid: string;
}
export interface HomeworldDetails {
 name: string;
 climate: string;
 terrain: string;
 population: string;
 [key: string]: any; // Add this if there are additional dynamic properties
}