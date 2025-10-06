import homeVideo from '../../assets/video3.mp4'
import canLogo from './Logo.js'
import Navbar from './Navbar.js';

export default function Landing() {
  const landing = document.createElement("main");
  landing.className = "col-12 h-100 m-0 p-0 position-relative";

  const videoContainer = document.createElement("div");
  videoContainer.className = "landing-video p-0";

  const video = document.createElement('video');
  video.className = "position-absolute w-100 h-100 top-0";
  video.src = homeVideo;
  video.autoplay = true;
  video.muted = true;

  videoContainer.appendChild(video);
  landing.appendChild(videoContainer);
  landing.appendChild(canLogo());
  landing.appendChild(Navbar());
  
  

  return landing;
}
