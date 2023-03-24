import { formatTime } from "@/utilities/formatTime";

const Song = ({ song, idx }) => {
  console.log(song);
  return (
    <div className="grid grid-cols-2 px-5 my-2">
      <div className="flex gap-4 items-center">
        <span className="w-6">{idx + 1}</span>
        <img
          className="w-10 h-10"
          src={song.track.album.images[2].url}
          alt=""
        />
        <div>
          <p>{song.track.name}</p>
          <p className="text-gray-400">{song.track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex">
        <p className="hidden lg:inline-flex">{song.track.album.name}</p>
        <p className="ml-auto">{formatTime(song.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
