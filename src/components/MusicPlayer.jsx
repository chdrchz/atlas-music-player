import CurrentlyPlaying from "../components/CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:space-x-6 p-4">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </div>
  );
}
