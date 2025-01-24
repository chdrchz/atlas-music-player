import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

export default function CurrentlyPlaying() {
  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
