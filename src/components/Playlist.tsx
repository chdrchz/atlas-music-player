import PlayListItem from "./PlayListItem.tsx";
import { useApi } from "./UseApi.tsx";
import { useCurrentSong } from "./CurrentSongContext";

export default function Playlist() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const data = useApi();
  /* console.log("What is the data:", data); */

  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="w-full rounded-lg bg-[#2d3447] p-4 text-2xl font-bold text-[#FCEFF9] drop-shadow-md">
        Playlist
      </p>
      <div className="flex flex-1 flex-col justify-between gap-2 rounded-lg bg-[#2d3547] p-4 drop-shadow-md">
        {data?.map((track) => (
          <PlayListItem
            key={track.id}
            title={track.title}
            artist={track.artist}
            duration={track.duration}
            isSelected={currentSong?.id === track.id}
            onClick={() => setCurrentSong(track)}
          />
        ))}
      </div>
    </div>
  );
}
