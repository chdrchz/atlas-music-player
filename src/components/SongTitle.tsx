import { Track } from "./UseApi";

export default function SongTitle({ song }: { song: Track }) {
  return (
    <div>
      <p className="text-2xl">{song.title}</p>
      <p className="text-gray-500">{song.artist}</p>
    </div>
  );
}
