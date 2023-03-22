import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RssIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="text-sm p-5 border-r border-gray-700 text-gray-300">
      <div className="space-y-2">
        <button className="flex space-x-2 items-center hover:text-yellow-400">
          <HomeIcon className="h-6 w-6" />
          <p>Home</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-yellow-400">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <p>Search</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-yellow-400">
          <BuildingLibraryIcon className="h-6 w-6" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-700" />
        <button className="flex space-x-2 items-center hover:text-yellow-400">
          <PlusCircleIcon className="h-6 w-6" />
          <p>Create Playlist</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-yellow-400">
          <HeartIcon className="h-6 w-6" />
          <p>Liked Songs</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-yellow-400">
          <RssIcon className="h-6 w-6" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-700" />
      </div>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
    </div>
  );
};

export default Sidebar;
