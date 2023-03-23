import { playlistIdState } from "@/atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RssIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
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
    console.log(playlistId);
  }, [playlistId]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((res) => {
        setPlaylist(res.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-sm p-5 border-r border-gray-700 text-gray-300 overflow-y-scroll h-screen scrollbar-hide">
      <div className="space-y-2">
        <button onClick={signOut}>Logout</button>
        <SidebarBtn name="Home" Icon={HomeIcon} />
        <SidebarBtn name="Search" Icon={MagnifyingGlassIcon} />
        <SidebarBtn name="Your Library" Icon={BuildingLibraryIcon} />
        <hr className="border-t-[0.1px] border-gray-700" />
        <SidebarBtn name="Create Playlist" Icon={PlusCircleIcon} />
        <SidebarBtn name="Liked Songs" Icon={HeartIcon} />
        <SidebarBtn name="Your Episodes" Icon={RssIcon} />
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
