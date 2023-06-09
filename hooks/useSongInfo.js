const { currentTrackIdState } = require("@/atoms/songAtom");
const { useState, useEffect } = require("react");
const { useRecoilState, useRecoilValue } = require("recoil");
const { default: useSpotify } = require("./useSpotify");

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const currentTrackId = useRecoilValue(currentTrackIdState);
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

  // useEffect(() => {
  //   spotifyApi
  //     .getMyCurrentPlayingTrack()
  //     .then((res) => {
  //       const remain = res.duration_ms - res.progress_ms;
  //       const timer = setTimeout(() => {

  //       }, remain)
  //     });
  // }, []);

  return songInfo;
};

export default useSongInfo;
