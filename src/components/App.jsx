import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";

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
