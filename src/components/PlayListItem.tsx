import "@fontsource/montserrat";
import "@fontsource/comfortaa";

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
      className={`hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-orange-5 p-1 flex w-full cursor-pointer flex-col rounded-lg ${
        isSelected
          ? "cursor-pointer shadow-lg backdrop-brightness-150"
          : ""
      }`}
      onClick={onClick}
    >
      <p className="font-comfortaa ml-2 mr-2 font-bold text-orange-10">{title}</p>
      <div className="flex w-full justify-between">
        <p className="font-montserrat ml-2 mr-2 text-orange-10">{artist}</p>
        <p className="font-montserrat ml-2 mr-2 text-orange-10">
          {formatDuration(duration)}
        </p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
