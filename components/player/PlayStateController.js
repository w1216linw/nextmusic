import { isPlayState } from "@/atoms/songAtom";
import useSpotify from "@/hooks/useSpotify";
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
const PlayStateController = () => {
  const spotifyApi = useSpotify();
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayState);

  const handlePlayPause = async () => {
    const response = await spotifyApi.getMyCurrentPlaybackState();
    if (response.body.is_playing) {
      spotifyApi.pause();
      setIsPlaying(false);
    } else {
      spotifyApi.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex items-center justify-evenly">
      {/* <button>
          <BackwardIcon className="button" />
        </button> */}
      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseCircleIcon className="button h-10 w-10" />
        ) : (
          <PlayCircleIcon className="button h-10 w-10" />
        )}
      </button>
      {/* <button>
          <ForwardIcon className="button" />
        </button> */}
    </div>
  );
};

export default PlayStateController;
