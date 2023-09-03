// import logo from './logo.svg';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
// import Register from './modules/event-registration/components/register';
import { darkTheme } from './shared/theme/theme';
import { EventRegistrationPage } from './modules/event-registration/pages/event-registration-page';
import Home from './modules/landing-page/pages/home';
import VideoPlayer from './modules/landing-page/components/video-player';
import Path from './routes/path';
// import Header from './shared/components/Header';


function App() {
  return (<ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <Path/>
    {/* <Home/> */}
    {/* <VideoPlayer/> */}
</ThemeProvider>
  
  );
}

export default App;
