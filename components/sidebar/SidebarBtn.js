import Link from "next/link";

const SidebarBtn = ({ Icon, name, to }) => {
  return (
    <Link href={to} className="flex gap-2 items-center hover:text-yellow-400">
      <Icon className="h-6 w-6" />
      <p>{name}</p>
    </Link>
  );
};

export default SidebarBtn;
