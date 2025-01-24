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
        <p className="text-gray-500">{duration}</p>
      </div>
    </div>
  );
}
