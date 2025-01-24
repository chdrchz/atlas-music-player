import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

import { useCurrentSong } from './CurrentSongContext';

export default function CurrentlyPlaying() {
  const { currentSong } = useCurrentSong();

  if (!currentSong) {
    return <p>No song is currently playing.</p>;
  }

  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      <CoverArt />
      <SongTitle song={currentSong}/>
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
