import { playlistIdState, playlistState } from "@/atoms/playlistAtom";
import AccountHeader from "@/components/center/AccountHeader";
import ListTitle from "@/components/center/ListTitle";
import Songs from "@/components/center/Songs";
import useSpotify from "@/hooks/useSpotify";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Center = () => {
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
      <AccountHeader />
      <ListTitle />
      <Songs />
    </div>
  );
};

export default Center;
