import { useState } from "react";
import { AudioLines } from "lucide-react";

export default function VolumeControls() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex items-center gap-2">
      <AudioLines className="text-[#8EE3EF]" />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#FCEFF9] accent-gray-600"
        style={{
          background: `linear-gradient(to right, rgb(229, 231, 235) ${value}%, rgb(75, 85, 99) ${value}%)`,
        }}
      />
    </div>
  );
}
