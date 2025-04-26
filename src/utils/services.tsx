import { CharacterProps } from "./types";

 export async function getCharacterDetails(characterId: string): Promise<any> {
 try {
  const response = await fetch(`https://swapi.tech/api/people/${characterId}`);
  if (!response.ok) {
   throw new Error('Network response was not ok');
  }
  const characterDetails = await response.json();
  return characterDetails;
 } catch (error) {
  console.error('Error fetching character details:', error);
  throw error;
 }
};

export async function getCharacterList (page: number): Promise<any> {
  try {
    const response = await fetch(`https://swapi.tech/api/people?page=${page}&limit=10`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching character list:', error);
    throw error;
  }
}
export const fetchHomeworldDetails = async (homeworldUrl: string): Promise<any> => {
  try {
    const response = await fetch(homeworldUrl);
    const data = await response.json();
    return data?.result?.properties;
  } catch (error) {
    console.error('Error fetching homeworld details:', error);
  }
}
export const fetchSearchCharacter = async (name: string): Promise<any> => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/?name=${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); 
    return data?.result;
  } catch (error) {
    console.error('Error fetching homeworld details:', error);
  }
}