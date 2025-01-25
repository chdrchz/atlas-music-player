import MusicPlayer from "./MusicPlayer.tsx";
import Footer from "./Footer.tsx";

import { CurrentSongProvider } from './CurrentSongContext';

function App() {
  return (
    <div className="flex sm:h-full md:h-screen flex-col items-center justify-around">
      <div className="w-full">
      <CurrentSongProvider>
        <MusicPlayer />
      </CurrentSongProvider>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
