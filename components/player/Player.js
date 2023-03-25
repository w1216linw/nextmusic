import { currentTrackIdState, isPlayState } from "@/atoms/songAtom";
import useSongInfo from "@/hooks/useSongInfo";
import useSpotify from "@/hooks/useSpotify";
import { SpeakerWaveIcon as VolumeDown } from "@heroicons/react/24/outline";
import {
  PauseCircleIcon,
  PlayCircleIcon,
  SpeakerWaveIcon as VolumeUp,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();

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

  useEffect(() => {
    if (volume < 0 || volume > 100) return;

    const timer = setTimeout(() => {
      spotifyApi.setVolume(volume);
    }, 1000);

    return () => clearTimeout(timer);
  }, [volume]);

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
      <div className="flex items-center justify-end gap-3 md:gap-6">
        <VolumeDown
          className="button"
          onClick={() => volume > 0 && setVolume(volume - 5)}
        />
        <input
          className="w-16 md:w-32"
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          name="speakerVolume"
          id="speakerVolume"
        />
        <VolumeUp
          className="button"
          onClick={() => volume < 100 && setVolume(volume + 5)}
        />
      </div>
    </div>
  );
};

export default Player;
