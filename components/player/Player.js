import { isPlayState, songsQueue } from "@/atoms/songAtom";
import { useSession } from "next-auth/react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";

const Player = () => {
  const { data: session } = useSession();
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayState);
  const [queue, setQueue] = useRecoilState(songsQueue);
  return (
    <div className="bg-gradient-to-b from-black to-slate-800 ">
      <SpotifyPlayer
        styles={{
          bgColor: "#1e293b",
          color: "gray",
          trackArtistColor: "gray",
          trackNameColor: "white",
        }}
        play={isPlaying}
        callback={(state) => {
          if (!state.isPlaying) setIsPlaying(false);
        }}
        token={session?.user?.accessToken}
        uris={queue}
      />
    </div>
  );
};

export default Player;
