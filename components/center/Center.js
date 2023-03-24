import { playlistIdState, playlistState } from "@/atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Songs from "./Songs";

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((res) => {
        setPlaylist(res.body);
      })
      .catch((err) => console.log("Error occur: ", err));
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow text-white overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-slate-500 space-x-2 hover:opacity-70 p-1 pr-2 rounded-full">
          <img
            className="rounded-full w-10 h-10"
            src={
              session?.user.image
                ? session.user.image
                : "https://via.placeholder.com/64"
            }
            alt="user"
          />
          <h2>{session?.user.name}</h2>
        </div>
      </header>
      <section className="flex-grow flex items-end space-x-7 bg-gradient-to-b to-black from-green-300 h-80 text-white p-5">
        <div className="flex items-center gap-4">
          <img
            className="w-32 h-32"
            src={
              playlist?.images[1]
                ? playlist.images[1].url
                : "https://via.placeholder.com/64"
            }
            alt="thumbnail of playlist"
          />
          <h1 className="text-base md:text-lg lg:text-2xl">{playlist?.name}</h1>
        </div>
      </section>
      <Songs />
    </div>
  );
};

export default Center;
