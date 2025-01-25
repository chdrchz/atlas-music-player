import { useEffect, useRef } from "react";
import SongTitle from "./SongTitle";

interface AudioProps {
  playing: boolean;
  volume: number;
  speed: 0.5 | 1.0 | 2.0;
  song: string;
}

export default function AudioPlayer(props: AudioProps) {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (props.playing) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [props.playing]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = props.volume / 100;
  }, [props.volume]);

  useEffect(() => {
      if (!ref.current) return null;
      ref.current.playbackRate = props.speed;
  }, [props.speed]);

  return (
    <audio ref={ref}>
      <source
        src={props.song}
        type="audio/mpeg"
      />
    </audio>
  );
}
