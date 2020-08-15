//import "node_modules/video-react/dist/video-react.css"; // import css
import React from 'react';
import { Player } from 'video-react';
import '../Styling/Video.css';

export default props => {
  return (
    <div className="video-div">
      <link
      rel="stylesheet"
      href="https://video-react.github.io/assets/video-react.css"
    />
      <Player
        className="video-player"
        playsInline
        poster="video_intro.jpeg"
        src="Demo_Project.mp4"
        alt="NCDI Demo"
      />
    </div>
  );
};
