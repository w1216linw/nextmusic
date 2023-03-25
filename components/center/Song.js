import { currentTrackIdState, isPlayState } from "@/atoms/songAtom";
import useSpotify from "@/hooks/useSpotify";
import { formatTime } from "@/utilities/formatTime";
import { useRecoilState } from "recoil";

const Song = ({ song, idx }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayState);

  const handlePlay = () => {
    console.log(song);
    setCurrentTrackId(song.track.id);
    setIsPlaying(true);
    spotifyApi
      .play({
        uris: [song.track.uri],
      })
      .catch((e) => console.error("Error: ", e));
  };

  return (
    <div
      onClick={handlePlay}
      className="flex justify-between lg:grid lg:grid-cols-2 px-5 my-2 hover:bg-slate-600 py-2 cursor-pointer"
    >
      <div className="flex gap-5 items-center">
        <span className="w-6">{idx + 1}</span>
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
        <p className="hidden lg:inline-flex ">{song.track.album.name}</p>
        <p className="ml-auto">{formatTime(song.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
