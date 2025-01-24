import PlayListItem from "./PlayListItem.tsx";
import { UseApi } from "./UseApi.tsx";

interface Track {
  id: string | number;
  title: string;
  artist: string;
  duration: number;
}

export default function Playlist() {
  const data = UseApi<Track[]>();

  return (
    <div className="flex w-full flex-1 flex-col md:w-1/2">
      <p className="text-2xl mb-6">Playlist</p>
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        {data?.map((track: Track) => (
          <PlayListItem
            key={track.id}
            title={track.title}
            artist={track.artist}
            duration={track.duration}
          />
        ))}
      </div>
    </div>
  );
}
