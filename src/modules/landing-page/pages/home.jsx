import React from 'react'
import VideoPlayer from '../components/video-player'
import Header from '../../../shared/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';

const Home = () => {
  return (<>
  <Header/>
  <VideoPlayer/>
  </>)
}
export default Home;