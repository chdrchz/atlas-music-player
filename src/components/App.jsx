import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <Footer />
    </div>
  );
}

export default App;
