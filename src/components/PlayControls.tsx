import { Play, Pause, FastForward, Rewind, Shuffle } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onShuffle?: () => void;
  speed: 0.5 | 1.0 | 2.0;
  onSpeedChange?: (speed: number) => void;
}

export default function PlayControls({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  onShuffle,
  speed = 1,
  onSpeedChange,
}: PlayControlsProps) {
  return (
    <div className="flex items-center justify-between mr-3 ml-3">
      <button
        onClick={() => onSpeedChange?.(speed === 2 ? 0.5 : speed + 0.5)}
        className="text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-[#8EE3EF] hover:outline-offset-8 rounded-md w-7 flex justify-center"
      >
        {speed}x
      </button>
      <button onClick={onPrevious} className="text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-[#8EE3EF] hover:outline-offset-8 rounded-md w-7 flex justify-center">
        <Rewind />
      </button>
      <button onClick={onPlayPause} className="text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-[#8EE3EF] hover:outline-offset-8 rounded-md w-7 flex justify-center">
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button onClick={onNext} className="text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-[#8EE3EF] hover:outline-offset-8 rounded-md w-7 flex justify-center">
        <FastForward />
      </button>
      <button onClick={onShuffle} className="text-[#8EE3EF] hover:outline hover:outline-2 hover:outline-[#8EE3EF] hover:outline-offset-8 rounded-md w-7 flex justify-center">
        <Shuffle />
      </button>
    </div>
  );
}
