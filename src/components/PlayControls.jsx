import { Play, FastForward, Rewind, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-between">
      <p>1x</p>
      <Rewind />
      <Play />
      <FastForward />
      <Shuffle />
    </div>
  );
}
