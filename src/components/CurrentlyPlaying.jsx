import CoverArt from "../components/CoverArt";
import SongTitle from "../components/SongTitle";
import PlayControls from "../components/PlayControls";
import VolumeControls from "../components/VolumeControls";

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
