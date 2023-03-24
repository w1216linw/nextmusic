import { playlistState } from "@/atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div>
      {playlist?.tracks?.items.map((song, idx) => (
        <Song key={song.track.id} song={song} idx={idx} />
      ))}
    </div>
  );
};

export default Songs;
