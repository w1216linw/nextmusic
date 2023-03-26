import { currentTrackIdState, isPlayState } from "@/atoms/songAtom";
import useSpotify from "@/hooks/useSpotify";
import { formatTime } from "@/utilities/formatTime";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";

const Song = ({ song, idx }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayState);

  const handlePlay = () => {
    setCurrentTrackId(song.track.id);
    setIsPlaying(true);
    // spotifyApi
    //   .play({
    //     uris: [song.track.uri],
    //   })
    //   .catch((e) => console.error("Error: ", e));
  };

  const handleAdd = async () => {
    const playQueue = await spotifyApi.getMyCurrentPlaybackState();
    await spotifyApi.addToQueue(song.track.uri, {
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
            src={song.track.album.images[2].url}
            alt="album cover"
          />
          <div>
            <p className="truncate ">{song.track.name}</p>
            <p className="text-gray-400">{song.track.artists[0].name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="hidden lg:inline-flex">{song.track.album.name}</p>
          <p className="ml-auto">{formatTime(song.track.duration_ms)}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
