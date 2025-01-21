import CurrentlyPlaying from "../components/CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col gap-6">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
