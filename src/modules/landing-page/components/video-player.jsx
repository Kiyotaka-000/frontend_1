// import * as React from 'react';

// const VideoPlayer = ()=> {
//   const cloudinaryRef = React.useRef();
//   const videoRef = React.useRef();

//   React.useEffect(() => {
//     if ( cloudinaryRef.current ) return;

//     cloudinaryRef.current = window.cloudinary;
//     cloudinaryRef.current.videoPlayer(videoRef.current, {
//       cloud_name: 'colbycloud-examples'
//     })
//   }, []);

//   return (
//       <video
//         ref={videoRef}
//         data-cld-public-id="videos/waterfall"
//         width="100"
//         height="100"
//         controls
//       />
//   );
// }
// export default VideoPlayer;










import { Container } from "@mui/material";
import * as React from "react";

const VideoPlayer = ()=>{
  return (<>
  <Container maxWidth="md">
  {/* <div className="ratio ratio-16x9"> */}
  <iframe width="850" height="400" src="https://www.youtube.com/embed/xNRJwmlRBNU" 
  title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" 
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
{/* </div> */}
  {/* <VideoPlayer/> */}
  </Container>
  </>)
}
export default VideoPlayer;