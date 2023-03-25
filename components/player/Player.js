import useSongInfo from "@/hooks/useSongInfo";
import PlayStateController from "./PlayStateController";
import VolumeController from "./VolumeController";

const Player = () => {
  const songInfo = useSongInfo();

  return (
    <div className="grid grid-cols-3 bg-gradient-to-b from-black to-slate-800 p-4 text-white">
      <div className="flex items-center gap-5">
        <img
          className=" h-12 w-12 hidden md:inline-flex"
          src={
            songInfo?.album
              ? songInfo.album.images[2].url
              : "https://via.placeholder.com/64"
          }
          alt="album cover"
        />
        <div>
          <h3 className="truncate w-40 sm:w-64">{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>
      <PlayStateController />
      <VolumeController />
    </div>
  );
};

export default Player;
