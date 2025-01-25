import { Track } from "./UseApi";

export default function SongTitle({ song }: { song: Track }) {
  return (
    <div>
      <p className="text-2xl text-[#FCEFF9]">{song.title}</p>
      <p className="text-[#FCEFF9]">{song.artist}</p>
    </div>
  );
}
