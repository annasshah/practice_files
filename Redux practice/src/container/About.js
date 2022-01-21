import { Container, Grid, Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../assets/Spinner';
import ProductCard from '../components/Card';
import { writeData } from '../config/redux/action/action';

export const About = () => {

  const dispatch = useDispatch()


  useEffect(() => {

    writeData(dispatch)

  }, []);
  

  

  const reduxData = useSelector(a => a)

  const [globalData, setGlobalData] = useState(useSelector(a => a));

  console.log(reduxData)


  useEffect(() => {

    setGlobalData(reduxData)

  }, [reduxData]);



  return <>
{
  globalData.isLoading ? <Spinner /> :<Container>
  <Grid container spacing={4}>

    {globalData.data.map((e,i)=><ProductCard key={i} data={e} />)}

  </Grid>

</Container>
}
  
  
  </>
};
