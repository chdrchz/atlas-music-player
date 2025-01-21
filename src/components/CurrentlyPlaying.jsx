import CoverArt from "../components/CoverArt";
import SongTitle from "../components/SongTitle";
import PlayControls from "../components/PlayControls";
import VolumeControls from "../components/VolumeControls";

export default function CurrentlyPlaying() {
    return (
        <div className="flex flex-col gap-6">
            <CoverArt />
            <SongTitle />
            <PlayControls />
            <VolumeControls />
        </div>
    )
}