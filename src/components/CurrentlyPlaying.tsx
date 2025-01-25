import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import AudioPlayer from "./AudioPlayer.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

import { useCurrentSong } from "./CurrentSongContext";

export default function CurrentlyPlaying() {
  const { currentSong } = useCurrentSong();

  if (!currentSong) {
    return <p>No song is currently playing.</p>;
  }

  console.log('Full currentSong:', JSON.stringify(currentSong, null, 2));

  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      <CoverArt cover={currentSong.cover} />
      <SongTitle song={currentSong} />
      <PlayControls />
      <VolumeControls />
      <AudioPlayer song={currentSong} playing={false} volume={50} speed={1.0}/>
    </div>
  );
}
