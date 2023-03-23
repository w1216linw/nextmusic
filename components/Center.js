import { playlistIdState, playlistState } from "@/atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((res) => setPlaylist(res.body))
      .catch((err) => console.log("Error occur: ", err));
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow flex text-white">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-slate-500 space-x-2 hover:opacity-70 p-1 pr-2 rounded-full">
          <img
            className="rounded-full w-16 h-16"
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
      <section className="flex-grow flex items-end space-x-7 bg-gradient-to-b to-black from-green-300 h-80 text-white p-8">
        <img src="" alt="" />
        <h1>hello world</h1>
      </section>
    </div>
  );
};

export default Center;
