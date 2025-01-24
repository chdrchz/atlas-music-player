import MusicPlayer from "./MusicPlayer.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <div className="flex sm:h-full md:h-screen flex-col items-center justify-center">
      <div>
        <MusicPlayer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;