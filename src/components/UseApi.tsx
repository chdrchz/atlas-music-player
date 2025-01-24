import { useEffect, useState } from "react";

export interface Track {
  id: string | number;
  title: string;
  artist: string;
  duration: number;
}

export const UseApi = (): Track[] => {
  const [data, setData] = useState<Track[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5173/api/v1/playlist");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
