import { Track } from "./UseApi";
import '@fontsource/comfortaa';
import '@fontsource/montserrat';

export default function SongTitle({ song }: { song: Track }) {
  return (
    <div>
      <p className="font-comfortaa text-2xl text-text">{song.title}</p>
      <p className="font-montserrat text-text">{song.artist}</p>
    </div>
  );
}
