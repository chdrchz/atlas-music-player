import { useEffect, useState } from "react";

export const UseApi = () => {
  const [data, setData] = useState(null);

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
