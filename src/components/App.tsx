import MusicPlayer from "./MusicPlayer.tsx";
import Footer from "./Footer.tsx";

import { CurrentSongProvider } from './CurrentSongContext';

function App() {
  return (
    <div className="flex sm:h-full md:h-screen flex-col items-center justify-center">
      <div>
      <CurrentSongProvider>
        <MusicPlayer />
      </CurrentSongProvider>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
