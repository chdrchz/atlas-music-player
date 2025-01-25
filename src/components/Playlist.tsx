import PlayListItem from "./PlayListItem.tsx";
import { useApi } from "./UseApi.tsx";
import { useCurrentSong } from "./CurrentSongContext";

export default function Playlist() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const data = useApi();
  console.log("What is the data:", data);

  return (
    <div className="flex w-full flex-1 flex-col md:w-1/2">
      <p className="mb-6 text-2xl font-bold text-[#FCEFF9]">Playlist</p>
      <div className="flex flex-1 flex-col gap-4">
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
