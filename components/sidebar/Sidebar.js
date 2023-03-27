import { playlistIdState } from "@/atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SidebarBtn from "./SidebarBtn";
import SidebarListBtn from "./SidebarListBtn";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const [playlist, setPlaylist] = useState();
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((res) => {
        setPlaylist(res.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-sm lg:text-base p-5 border-r border-gray-700 text-gray-300 overflow-y-scroll scrollbar-hide min-w-max hidden md:inline-flex">
      <div className="space-y-2 w-36">
        <SidebarBtn name="Home" Icon={HomeIcon} to={"/"} />
        <SidebarBtn name="Search" Icon={MagnifyingGlassIcon} to={"/search"} />
        <SidebarBtn name="Liked Songs" Icon={HeartIcon} to={"/liked"} />
        <hr className="border-t-[0.1px] border-gray-700" />

        {!playlist < 1 &&
          playlist.map((list) => (
            <SidebarListBtn
              key={list.id}
              list={list}
              setPlaylistId={setPlaylistId}
            />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
