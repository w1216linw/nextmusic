const SidebarBtn = ({ Icon, name }) => {
  return (
    <button className="flex space-x-2 items-center hover:text-yellow-400">
      <Icon className="h-6 w-6" />
      <p>{name}</p>
    </button>
  );
};

export default SidebarBtn;
