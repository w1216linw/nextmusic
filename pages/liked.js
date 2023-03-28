import Song from "@/components/center/Song";
import useSpotify from "@/hooks/useSpotify";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Like = () => {
  const spotify = useSpotify();
  const [likedSong, setLikedSong] = useState([]);
  useEffect(() => {
    if (!spotify) return;
    spotify.getMySavedTracks().then((res) => setLikedSong(res.body.items));
  }, [spotify]);
  return (
    <div className="flex-grow ">
      <header className="flex gap-2 items-center h-80 p-5 bg-gradient-to-b from-slate-500 to-black">
        <HeartIcon className="h-20 text-green-500" />
        <h1
          className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-red-400 bg-clip-text"
          style={{ lineHeight: "3rem" }}
        >
          Liked Songs
        </h1>
      </header>
      <div className="text-white">
        {likedSong.length >= 1 &&
          likedSong.map((item) => (
            <Song key={item.track.id} song={item.track} />
          ))}
      </div>
    </div>
  );
};

export default Like;
