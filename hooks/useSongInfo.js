const { currentTrackIdState } = require("@/atoms/songAtom");
const { useState, useEffect } = require("react");
const { useRecoilState } = require("recoil");
const { default: useSpotify } = require("./useSpotify");

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.spotify.com/v1/tracks/${currentTrackId}`,
        {
          headers: {
            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
          },
        }
      );
      const data = await response.json();
      setSongInfo(data);
    })();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
};

export default useSongInfo;
