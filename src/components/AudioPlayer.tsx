import { useEffect, useRef } from "react";

interface AudioProps {
  playing: boolean;
  volume: number;
  speed: 0.5 | 1.0 | 2.0;
  song: string;
}

export default function AudioPlayer(props: AudioProps) {
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.src = props.song;
    ref.current.load();
    ref.current.playbackRate = props.speed;
    if (props.playing) {
      ref.current.play();
    }
  }, [props.song, props.playing, props.speed]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = props.volume / 100;
  }, [props.volume]);

  return (
    <audio ref={ref} preload="auto">
      <source src={props.song} type="audio/mpeg" />
    </audio>
  );
}
