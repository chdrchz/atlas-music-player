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
      className={`flex w-full flex-col rounded-lg cursor-pointer${
        isSelected
          ? "bg-[#8EE3EF] bg-opacity-20 shadow-lg backdrop-blur-md backdrop-brightness-125 drop-shadow-md cursor-pointer"
          : ""
      }`}
      onClick={onClick}
    >
      <p className="ml-2 mr-2 font-bold text-[#FCEFF9]">{title}</p>
      <div className="flex w-full justify-between">
        <p className="ml-2 mr-2 text-[#FCEFF9]">{artist}</p>
        <p className="ml-2 mr-2 text-[#FCEFF9]">{formatDuration(duration)}</p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
