const SidebarListBtn = ({ list }) => {
  return (
    <button className="flex space-x-2 items-center hover:text-yellow-400">
      <img
        src={
          list.images[2] ? list.images[2].url : "https://via.placeholder.com/64"
        }
      />
      <p>{list.name}</p>
    </button>
  );
};

export default SidebarListBtn;
