import  {useEffect,useState} from 'react';
import { CircularProgress, Grid } from '@mui/material';
import {  PLANET_DETAILS } from '../utils/constants';
import { fetchHomeworldDetails } from '../utils/services';
import { HomeworldDetails } from '../utils/types';
import SkeletonComponent from './useSkeleton';

export default function HomeWorldPage({ characterDetails }: any) {
const [homeworldDetails, setHomeworldDetails] = useState<HomeworldDetails | null>(null);
 
 useEffect(() => { 
  let isFetched = false;

  if (!isFetched) {
   const fetchData = async () => {
    const data = await fetchHomeworldDetails(characterDetails?.homeworld);
    setHomeworldDetails((prev: any) => ({ ...prev, ...data }));
    console.log('homeworldDetails', data);
   };
  fetchData();
  }

  return () => { 
   isFetched = true;
    setHomeworldDetails(null);
  } 
 }, [characterDetails?.uid]);

 
 return (<SkeletonComponent dataStructure={PLANET_DETAILS} data={homeworldDetails} />)
}
