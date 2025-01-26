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
    <div className="font-comfortaa flex items-center justify-between p-6">
      <button
        onClick={() => onSpeedChange?.(speed === 2 ? 0.5 : speed + 0.5)}
        className="text-orange-10 flex w-7 justify-center rounded-md font-bold hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-orange-5"
      >
        {speed}x
      </button>
      <button
        onClick={onPrevious}
        className="text-orange-10 flex w-7 justify-center rounded-md text-accent-green hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-orange-5"
      >
        <Rewind />
      </button>
      <button
        onClick={onPlayPause}
        className="text-orange-10 flex w-7 justify-center rounded-md text-accent-green hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-orange-5"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        onClick={onNext}
        className="text-orange-10 flex w-7 justify-center rounded-md text-accent-green hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-orange-5"
      >
        <FastForward />
      </button>
      <button
        onClick={onShuffle}
        className={`text-orange-10 flex w-7 justify-center rounded-md hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-orange-5 ${
          isShuffled ? "text-orange-10" : "text-[#1f0f00]"
        }`}
      >
        <Shuffle />
      </button>
    </div>
  );
}
