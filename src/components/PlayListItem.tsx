interface PlaylistItem {
  title: string;
  artist: string;
  duration: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function PlayListItem({
  title,
  artist,
  duration,
  isSelected,
  onClick,
}: PlaylistItem) {
  return (
    <div
      className={`flex flex-col w-full ${isSelected ? "bg-gray-300" : ""}`}
      onClick={onClick}
    >
      <p>{title}</p>
      <div className="flex justify-between w-full">
        <p className="text-gray-500">{artist}</p>
        <p className="text-gray-500">{formatDuration(duration)}</p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
