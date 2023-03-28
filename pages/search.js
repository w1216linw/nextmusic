import Song from "@/components/center/Song";
import useSpotify from "@/hooks/useSpotify";
import { useEffect, useState } from "react";

const Search = () => {
  const spotify = useSpotify();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!search) return;
    const delay = setTimeout(() => {
      spotify.searchTracks(search, { limit: 10 }).then((res) => {
        console.log(res);
        setSearchResult(res.body.tracks.items);
      });
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);
  return (
    <div className="flex-grow overflow-y-scroll scrollbar-hide">
      <div className="grid place-items-center bg-gradient-to-b to-black from-slate-500 h-80">
        <input
          type="text"
          className="h-10 w-3/5 max-w-md p-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="text-white">
        {searchResult.length >= 1 &&
          searchResult.map((item) => <Song key={item.id} song={item} />)}
      </div>
    </div>
  );
};

export default Search;
