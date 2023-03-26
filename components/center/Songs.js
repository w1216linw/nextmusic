import { playlistState } from "@/atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div>
      {playlist?.tracks?.items.map((song) => (
        <Song key={song.track.id} song={song} />
      ))}
    </div>
  );
};

export default Songs;
