import { playlistState } from "@/atoms/playlistAtom";
import { songsQueue } from "@/atoms/songAtom";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { useRecoilState, useRecoilValue } from "recoil";
const ListTitle = () => {
  const [queue, setQueue] = useRecoilState(songsQueue);
  const playlist = useRecoilValue(playlistState);

  const handlePlayAll = () => {
    setQueue([playlist.uri]);
  };

  return (
    <section className="flex-grow flex items-end gap-7 bg-gradient-to-b to-black from-slate-500 h-80 text-white p-5">
      {!playlist ? null : (
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
          <button onClick={handlePlayAll}>
            <PlayCircleIcon className="h-10 text-green-500" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ListTitle;
