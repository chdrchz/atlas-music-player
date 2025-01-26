import { useState, useEffect } from "react";

import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import AudioPlayer from "./AudioPlayer.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

import { useCurrentSong } from "./CurrentSongContext";
import { Track, useApi } from "./UseApi.tsx";

export default function CurrentlyPlaying() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [speed, setSpeed] = useState<0.5 | 1.0 | 2.0>(1.0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledPlaylist, setShuffledPlaylist] = useState<Track[]>([]);
  const data = useApi();

  useEffect(() => {
    if (!currentSong) return;

    if (isShuffled) {
      const shuffled = data.filter((track) => track.song !== currentSong.song);
      shuffled.sort(() => Math.random() - 0.5);
      setShuffledPlaylist([currentSong, ...shuffled]);
    } else {
      setShuffledPlaylist(data);
    }
  }, [isShuffled, data, currentSong]);

  if (!currentSong) {
    return <p>No song is currently playing.</p>;
  }

  return (
    <div className="flex w-full flex-col justify-start gap-4 md:w-1/2">
      <div className="flex flex-col gap-6 p-6 rounded-lg bg-[#2d3447] drop-shadow-md">
        <CoverArt cover={currentSong.cover} />
        <SongTitle song={currentSong} />
      </div>
      <PlayControls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        speed={speed}
        currentSong={currentSong.song}
        setCurrentSong={setCurrentSong}
        onSpeedChange={(newSpeed) => setSpeed(newSpeed as 0.5 | 1.0 | 2.0)}
        playlist={isShuffled ? shuffledPlaylist : data}
        onShuffle={() => setIsShuffled((prev) => !prev)}
        isShuffled={isShuffled}
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
