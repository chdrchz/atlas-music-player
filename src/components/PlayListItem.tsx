interface PlaylistItem {
  title: string;
  artist: string;
  duration: number;
}

export default function PlayListItem({
  title,
  artist,
  duration,
}: PlaylistItem) {

  return (
    <div>
      <p>{title}</p>
      <div className="flex flex-row justify-between">
        <p className="text-gray-500">{artist}</p>
        <p className="text-gray-500">{formatDuration(duration)}</p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
