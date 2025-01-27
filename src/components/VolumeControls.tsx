import { AudioLines } from "lucide-react";

interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function VolumeControls({
  volume,
  onVolumeChange,
}: VolumeControlsProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-surface p-6 shadow-lg drop-shadow-md">
      <AudioLines className="text-secondary" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(parseInt(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-primary"
        style={{
          background: `linear-gradient(to right, rgb(99, 102, 241) ${volume}%, rgb(15, 23, 42) ${volume}%)`,
        }}
      />
    </div>
  );
}
