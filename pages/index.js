import Center from "@/components/center/Center";
import Player from "@/components/player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-black">
      <main className="flex overflow-hidden">
        <Sidebar />
        <Center />
      </main>
      <footer>
        <Player />
      </footer>
    </div>
  );
}

export async function getServerSIdeProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
