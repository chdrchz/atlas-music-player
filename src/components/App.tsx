import MusicPlayer from "./MusicPlayer.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-full md:h-screen">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
