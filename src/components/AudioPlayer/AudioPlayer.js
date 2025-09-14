// import React, { useRef, useState, useEffect } from "react";
// import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// import songFile from "../../assets/a thousand years - Christina Perri.flac";
// import "./AudioPlayer.css";

// const AudioPlayer = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [volume, setVolume] = useState(1);

//   // Load saved playback time from localStorage
//   useEffect(() => {
//     const audio = audioRef.current;
//     const savedTime = localStorage.getItem("audio-progress");
//     if (savedTime) {
//       audio.currentTime = parseFloat(savedTime);
//     }

//     audio.play()
//       .then(() => setIsPlaying(true))
//       .catch(() => console.log("Autoplay blocked"));
//   }, []);

//   // Update progress bar and save time to localStorage
//   const handleTimeUpdate = () => {
//     const audio = audioRef.current;
//     const currentProgress = (audio.currentTime / audio.duration) * 100;
//     setProgress(currentProgress);

//     localStorage.setItem("audio-progress", audio.currentTime);
//   };

//   const togglePlay = () => {
//     const audio = audioRef.current;
//     if (isPlaying) {
//       audio.pause();
//       setIsPlaying(false);
//     } else {
//       audio.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleVolumeChange = (e) => {
//     const audio = audioRef.current;
//     const vol = e.target.value;
//     audio.volume = vol;
//     setVolume(vol);
//   };

//   return (
//     <div className="floating-audio-player">
//       <audio
//         ref={audioRef}
//         src={songFile}
//         loop
//         onTimeUpdate={handleTimeUpdate}
//       />

//       <button onClick={togglePlay} className="play-pause-btn">
//         {isPlaying ? <FaPause /> : <FaPlay />}
//       </button>

//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//       </div>

//       <div className="volume-container">
//         {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
//         <input
//           type="range"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;
import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import songFile from "../../assets/a thousand years - Christina Perri.flac";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  // Restore saved playback time
  useEffect(() => {
    const audio = audioRef.current;
    const savedTime = localStorage.getItem("audio-progress");
    if (savedTime) audio.currentTime = parseFloat(savedTime);

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => console.log("Autoplay blocked"));
  }, []);

  // Track progress & store playback position
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
    localStorage.setItem("audio-progress", audio.currentTime);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  return (
    <div className="floating-audio-player">
      <audio
        ref={audioRef}
        src={songFile}
        loop
        onTimeUpdate={handleTimeUpdate}
      />

      <button onClick={togglePlay} className="play-pause-btn">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <div className="controls">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="volume-container">
          {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
