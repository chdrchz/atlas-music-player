import { Play, Pause, FastForward, Rewind, Shuffle } from "lucide-react";
import { Track } from "./UseApi";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onShuffle?: () => void;
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
    <div className="ml-3 mr-3 flex items-center justify-between">
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
        className="flex w-7 justify-center rounded-md text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-[#8EE3EF]"
      >
        <Shuffle />
      </button>
    </div>
  );
}
