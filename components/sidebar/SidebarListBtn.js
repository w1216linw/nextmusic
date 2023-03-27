import { useRouter } from "next/router";

const SidebarListBtn = ({ list, setPlaylistId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        setPlaylistId(list.id);
        router.push("/playlist");
      }}
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
