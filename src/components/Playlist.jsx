const playlistSongs = [
  {
    song: "Painted In Blue",
    artist: "Soul Canvas",
    duration: "5:55",
  },
  {
    song: "Tidal Drift",
    artist: "Echoes of the Sea",
    duration: "8:02",
  },
  {
    song: "Fading Shadows",
    artist: "The Emberlight",
    duration: "3:01",
  },
  {
    song: "Cosmic Drift",
    artist: "Solar Flare",
    duration: "5:01",
  },
  {
    song: "Urban Serenade",
    artist: "Midnight Groove",
    duration: "4:54",
  },
  {
    song: "Whispers in the Wind",
    artist: "Rust & Ruin",
    duration: "6:13",
  },
  {
    song: "Electric Fever",
    artist: "Neon Jungle",
    duration: "8:41",
  },
  {
    song: "Edge of the Abyss",
    artist: "Steel Horizon",
    duration: "2:27",
  },
  {
    song: "Golden Haze",
    artist: "Velvet Waves",
    duration: "3:15",
  },
  {
    song: "Shatter the Silence",
    artist: "Thunderclap Echo",
    duration: "8:22",
  },
];

export default function Playlist() {
  return (
    <div className="flex w-full flex-1 flex-col md:w-1/2">
      <p className="text-2xl">Playlist</p>
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        {playlistSongs.map((track, index) => (
          <div key={index} className="flex flex-col">
            <span>{track.song}</span>
            <div className="flex flex-row justify-between">
              <span>{track.artist}</span>
              <span>{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
