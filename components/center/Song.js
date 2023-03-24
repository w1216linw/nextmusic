const Song = ({ song, idx }) => {
  console.log(song);
  return (
    <div className="flex gap-4 items-center my-2">
      <span className="text-end w-6 ">{idx + 1}</span>
      <img className="w-16 h-16" src={song.track.album.images[2].url} alt="" />
      <div>
        <p>{song.track.name}</p>
        <p className="text-gray-400">{song.track.artists[0].name}</p>
      </div>
    </div>
  );
};

export default Song;
