import PlayListItem from "./PlayListItem.tsx";
import { useApi } from "./UseApi.tsx";
import { useCurrentSong } from "./CurrentSongContext";

import "@fontsource/comfortaa";

export default function Playlist() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const data = useApi();
  /* console.log("What is the data:", data); */

  return (
    <div className="flex flex-1 flex-col gap-4">
      <p className="font-comfortaa w-full pl-6 pr-6 pt-4 pb-4 text-3xl font-bold text-orange-10 rounded-lg bg-orange-2 drop-shadow-md shadow-lg">
        Playlist
      </p>
      <div className="flex flex-1 flex-col justify-between gap-2 rounded-lg p-4 bg-orange-2 drop-shadow-md shadow-lg">
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
