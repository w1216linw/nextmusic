import useSongInfo from "@/hooks/useSongInfo";
import { useSession } from "next-auth/react";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = () => {
  const { data: session } = useSession();
  const songInfo = useSongInfo();

  return (
    <div className="bg-gradient-to-b from-black to-slate-800 ">
      <SpotifyPlayer
        styles={{
          bgColor: "#1e293b",
          color: "gray",
          trackArtistColor: "gray",
          trackNameColor: "white",
        }}
        token={session?.user?.accessToken}
        uris={songInfo?.uri ? [songInfo.uri] : []}
      />
    </div>
  );
};

export default Player;
