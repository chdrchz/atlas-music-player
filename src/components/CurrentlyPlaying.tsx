import { useState, useEffect } from "react";

import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import AudioPlayer from "./AudioPlayer.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

import { useCurrentSong } from "./CurrentSongContext";

export default function CurrentlyPlaying() {
  const { currentSong } = useCurrentSong();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [speed, setSpeed] = useState<0.5 | 1.0 | 2.0>(1.0);

  useEffect(() => {
    setIsPlaying(false);
  }, [currentSong?.song]);

  if (!currentSong) {
    return <p>No song is currently playing.</p>;
  }

  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      <CoverArt cover={currentSong.cover} />
      <SongTitle song={currentSong} />
      <PlayControls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        speed={speed}
        onSpeedChange={(newSpeed) => setSpeed(newSpeed as 0.5 | 1.0 | 2.0)}
      />
      <VolumeControls volume={volume} onVolumeChange={setVolume} />
      <AudioPlayer
        song={currentSong.song}
        playing={isPlaying}
        volume={volume}
        speed={speed}
      />
    </div>
  );
}
