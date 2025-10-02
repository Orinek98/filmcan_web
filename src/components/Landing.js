export default function Landing() {
  const landing = document.createElement("main");
  landing.className = "hero";

  const videoContainer = document.createElement("div");
  videoContainer.className = "landing-video";

  const video = document.createElement("video");
  video.src = "./assets/video3.mp4";
  video.width = "100%"; // Nota: queste proprietà vanno di solito in CSS, ma le lascio per fedeltà all'HTML
  video.height = "100%";
  video.autoplay = true;
  video.muted = true;

  videoContainer.appendChild(video);
  landing.appendChild(videoContainer);

  return landing;
}
