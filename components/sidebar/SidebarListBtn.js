const SidebarListBtn = ({ list, setPlaylistId }) => {
  return (
    <button
      onClick={() => setPlaylistId(list.id)}
      className="flex gap-2 items-center hover:text-yellow-400"
    >
      <img
        className="h-6 w-6"
        src={
          list.images[2] ? list.images[2].url : "https://via.placeholder.com/64"
        }
      />
      <p>{list.name}</p>
    </button>
  );
};

export default SidebarListBtn;
