const SidebarListBtn = ({ list, setPlaylistId }) => {
  return (
    <button
      onClick={() => setPlaylistId(list.id)}
      className="flex space-x-2 items-center hover:text-yellow-400"
    >
      <img
        className="h-5 w-5"
        src={
          list.images[2] ? list.images[2].url : "https://via.placeholder.com/64"
        }
      />
      <p>{list.name}</p>
    </button>
  );
};

export default SidebarListBtn;
