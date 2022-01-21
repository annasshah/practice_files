import { Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeData } from '../config/redux/action/action';

export const About = () => {

  const dispatch = useDispatch()


  useEffect(() => {

    writeData(dispatch,'lorem ipsum1')

  }, []);
  

  

  const reduxData = useSelector(a => a)

  const [globalData, setGlobalData] = useState(useSelector(a => a));

  console.log(reduxData)


  useEffect(() => {

    setGlobalData(reduxData)

  }, [reduxData]);



  return <Typography variant='h1' align='center'>{globalData.name}</Typography>
};
