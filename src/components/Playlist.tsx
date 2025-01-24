import PlayListItem from "./PlayListItem.tsx";
import { UseApi } from "./UseApi.tsx";
import { useCurrentSong } from "./CurrentSongContext";

export default function Playlist() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const data = UseApi();

  return (
    <div className="flex w-full flex-1 flex-col md:w-1/2">
      <p className="mb-6 text-2xl">Playlist</p>
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
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
