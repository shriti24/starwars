// src/utils/constants.tsx

export const API_BASE_URL = 'https://swapi.dev/api/';
export const DEFAULT_TIMEOUT = 5000; // in milliseconds

export const ENDPOINTS = {
 PEOPLE: 'people/',
 PLANETS: 'planets/',
 STARSHIPS: 'starships/',
};

export const ERROR_MESSAGES = {
 NETWORK_ERROR: 'Network error. Please try again later.',
 NOT_FOUND: 'Requested resource not found.',
};

export const LOADING_MESSAGES = {
 DEFAULT: 'Loading...',
 CHARACTERS: 'Loading characters...',
 CHARACTER_DETAILS: 'Loading character details...',
 PLANETS: 'Loading planets...',
 STARSHIPS: 'Loading starships...',
};
export const CHARACTER_DETAILS = {
  name: 'Name',
  height: 'Height',
  mass: 'Mass',
 hair_color: 'Hair Color',
 gender: 'Gender',
 skin_color: 'Skin Color', 
 eye_color: 'Eye Color',
 birth_year: 'Birth Year',
 homeworld: 'Homeworld',
}
export const PLANET_DETAILS = {
  name: 'Name',
  rotation_period: 'Rotation Period',
  orbital_period: 'Orbital Period',
  diameter: 'Diameter',
  climate: 'Climate',
  gravity: 'Gravity',
  terrain: 'Terrain',
  surface_water: 'Surface Water',
  population: 'Population',
};