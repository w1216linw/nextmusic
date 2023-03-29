import { useRouter } from "next/router";
import AccountHeader from "../center/AccountHeader";
import Player from "../player/Player";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname === "/login") return <div>{children}</div>;

  return (
    <div className="flex flex-col h-screen bg-black">
      <main className="flex overflow-hidden flex-grow">
        <Sidebar />
        <AccountHeader />
        {children}
      </main>
      <footer>
        <Player />
      </footer>
    </div>
  );
};

export default Layout;
