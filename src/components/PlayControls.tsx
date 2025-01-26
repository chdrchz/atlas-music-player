import { Play, Pause, FastForward, Rewind, Shuffle } from "lucide-react";
import { Track } from "./UseApi";
import '@fontsource/comfortaa';

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onShuffle?: () => void;
  isShuffled: boolean;
  speed: 0.5 | 1.0 | 2.0;
  onSpeedChange?: (speed: number) => void;
  currentSong: string;
  setCurrentSong: (track: Track) => void;
  playlist: Track[];
}

export default function PlayControls({
  isPlaying,
  onPlayPause,
  onShuffle,
  isShuffled,
  speed = 1,
  onSpeedChange,
  currentSong,
  setCurrentSong,
  playlist,
}: PlayControlsProps) {
  const onNext = () => {
    if (!currentSong || playlist.length <= 1) return;
    const currentIndex = playlist.findIndex(
      (track) => track.song === currentSong,
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentSong(playlist[nextIndex]);
  };

  const onPrevious = () => {
    if (!currentSong || playlist.length <= 1) return;
    const currentIndex = playlist.findIndex(
      (track) => track.song === currentSong,
    );
    if (currentIndex === -1) return;
    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentSong(playlist[prevIndex]);
  };

  return (
    <div className="font-comfortaa flex items-center justify-between p-6 rounded-lg bg-[#2d3447] drop-shadow-md">
      <button
        onClick={() => onSpeedChange?.(speed === 2 ? 0.5 : speed + 0.5)}
        className="flex w-7 justify-center rounded-md text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-[#8EE3EF]"
      >
        {speed}x
      </button>
      <button
        onClick={onPrevious}
        className="flex w-7 justify-center rounded-md text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-[#8EE3EF]"
      >
        <Rewind />
      </button>
      <button
        onClick={onPlayPause}
        className="flex w-7 justify-center rounded-md text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-[#8EE3EF]"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        onClick={onNext}
        className="flex w-7 justify-center rounded-md text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-[#8EE3EF]"
      >
        <FastForward />
      </button>
      <button
        onClick={onShuffle}
        className={`flex w-7 justify-center rounded-md hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-[#8EE3EF] ${
          isShuffled ? "text-[#8EE3EF]" : "text-gray-400"
        }`}
      >
        <Shuffle />
      </button>
    </div>
  );
}
