import { useEffect, useState } from "react";

export interface Track {
  id: string | number;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
}

export const useApi = () => {
  const [playListData, setPlaylistData] = useState<Track[]>([]);

  const fetchPlaylistData = async () => {
    const response = await fetch("http://127.0.0.1:5173/api/v1/playlist");
    const result = await response.json();

    const fetchCoverData = await Promise.all(
      result.map(async (track: Track) => {
        const response = await fetch(
          `http://127.0.0.1:5173/api/v1/songs/${track.id}`,
        );
        const songData = await response.json();
        /* console.log(songData); */ 
        return { ...track, cover: songData.cover, song: songData.song };
      }),
    );

    setPlaylistData(fetchCoverData);
  };

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return playListData;
};
