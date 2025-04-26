import  {Suspense ,useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import { CircularProgress, Grid } from '@mui/material';

const StyledDiv = styled('div')(({ theme }) => ({
 fontFamily: '"DIN Next W01 Medium", Helvetica, Arial, sans-serif',
 padding: theme.spacing(2),
 fontSize: '1.2rem',
}));

export const useSkeleton =({ dataStructure , data }: any) =>{


 if (!dataStructure || !data) { 

  return (
   <Grid container spacing={2} sx={{ padding: 2 }}>
     <CircularProgress />
   </Grid>
  );
 }
  return (<Grid size={5} boxShadow={6} sx={{ background: "#36454F", padding: 2 }} >
       {(Object.keys(dataStructure) as Array<keyof typeof dataStructure>).map((item) => (
        <div style={{ display: 'flex', padding: 2 }} key={`p_${String(item)}`}>
         <StyledDiv key={`p_${String(item)}_1`} >
          {dataStructure[item]} :
         </StyledDiv>
         <StyledDiv key={`p_${String(item)}_2`} >
          {data[item]}
         </StyledDiv>
        </div>
       ))}
      </Grid>
  );
}
export default useSkeleton;
