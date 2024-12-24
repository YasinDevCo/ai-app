import { useRef, useState } from "react";
import audioSrc from "../../assets/audio/intro.mp3"
function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const handleSeek = () => {};
  return (
    <div>
      <audio ref={audioRef} src={"../../assets/audio/intro.mp3"} />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
    </div>
  );
}

export default AudioPlayer;
