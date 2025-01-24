import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
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
