import CurrentlyPlaying from "./CurrentlyPlaying.tsx";
import Playlist from "./Playlist.tsx";

export default function MusicPlayer() {
  return (
    <div className="flex flex-row mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:space-x-6 p-10">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </div>
  );
}
