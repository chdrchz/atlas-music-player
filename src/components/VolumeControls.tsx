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
    <div className="flex items-center gap-4">
      <AudioLines className="text-[#8EE3EF]" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(parseInt(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#FCEFF9] accent-gray-600"
        style={{
          background: `linear-gradient(to right, rgb(229, 231, 235) ${volume}%, rgb(75, 85, 99) ${volume}%)`,
        }}
      />
    </div>
  );
}
