import { createContext, useContext, useState, ReactNode } from 'react';
import { Track } from "./UseApi.tsx";

const CurrentSongContext = createContext<{
  currentSong: Track | null;
  setCurrentSong: (track: Track) => void;
} | undefined>(undefined);


export const CurrentSongProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Track | null>(null);

  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  );
};

export const useCurrentSong = () => {
  const context = useContext(CurrentSongContext);
  if (!context) {
    throw new Error('useCurrentSong must be used within a CurrentSongProvider');
  }
  return context;
};