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
      className={`flex flex-col w-full rounded-lg ${isSelected ? "bg-gray-300" : ""}`}
      onClick={onClick}
    >
      <p className="mr-2 ml-2 font-bold text-[#FCEFF9]">{title}</p>
      <div className="flex justify-between w-full">
        <p className="mr-2 ml-2 text-[#FCEFF9]">{artist}</p>
        <p className="mr-2 ml-2 text-[#FCEFF9]">{formatDuration(duration)}</p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
