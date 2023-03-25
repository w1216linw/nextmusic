import { signOut, useSession } from "next-auth/react";

const AccountHeader = () => {
  const { data: session } = useSession();
  return (
    <header onClick={signOut} className="absolute top-5 right-8 cursor-pointer">
      <div className="flex items-center bg-slate-500 space-x-2 hover:opacity-70 rounded-full">
        <img
          className="rounded-full w-10 h-10"
          src={
            session?.user.image
              ? session.user.image
              : "https://via.placeholder.com/64"
          }
          alt="user"
        />
      </div>
    </header>
  );
};

export default AccountHeader;
