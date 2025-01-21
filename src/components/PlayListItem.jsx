export default function PlayListItem({ song, artist, duration }) {
  return (
    <div>
      <p>{song}</p>
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{artist}</p>
        <p className="text-gray-500">{duration}</p>
      </div>
    </div>
  );
}
