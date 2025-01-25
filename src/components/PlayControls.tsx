import { Play, FastForward, Rewind, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[#8EE3EF]">1x</p>
      <Rewind className="text-[#8EE3EF]"/>
      <Play className="text-[#8EE3EF]"/>
      <FastForward className="text-[#8EE3EF]"/>
      <Shuffle className="text-[#8EE3EF]"/>
    </div>
  );
}
