import { isPlayState, songsQueue } from "@/atoms/songAtom";
import useSpotify from "@/hooks/useSpotify";
import { formatTime } from "@/utilities/formatTime";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";

const Song = ({ song }) => {
  const spotifyApi = useSpotify();
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayState);
  const [queue, setQueue] = useRecoilState(songsQueue);
  const handlePlay = () => {
    setQueue([song.uri]);
    setIsPlaying(true);
  };

  const handleAdd = async () => {
    const playQueue = await spotifyApi.getMyCurrentPlaybackState();
    await spotifyApi.addToQueue(song.uri, {
      device_id: playQueue.body.device.id,
    });
  };

  return (
    <div className="flex items-center my-2 pl-5">
      <button
        className="w-6 hover:text-green-300 hover:scale-110 transition-transform duration-100 ease-in-out"
        onClick={handleAdd}
      >
        <PlusIcon />
      </button>
      <div
        onClick={handlePlay}
        className="flex-grow flex justify-between lg:grid lg:grid-cols-2 hover:bg-slate-600  cursor-pointer py-2 px-5"
      >
        <div className="flex gap-5 items-center">
          <img
            className="w-10 h-10"
            src={song.album.images[2].url}
            alt="album cover"
          />
          <div>
            <p className="truncate ">{song.name}</p>
            <p className="text-gray-400">{song.artists[0].name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="hidden lg:inline-flex">{song.album.name}</p>
          <p className="ml-auto">{formatTime(song.duration_ms)}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
