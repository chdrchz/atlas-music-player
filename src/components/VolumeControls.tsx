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
    <div className="flex items-center gap-4 rounded-lg p-6 bg-orange-2 drop-shadow-md shadow-lg">
      <AudioLines className="text-[#EACAAE]" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(parseInt(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#EACAAE] accent-[#EACAAE]"
        style={{
          background: `linear-gradient(to right, #EACAAE ${volume}%, #1f0f00 ${volume}%)`,
        }}
      />
    </div>
  );
}
