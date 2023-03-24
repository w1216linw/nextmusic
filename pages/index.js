import Center from "@/components/center/Center";
import Sidebar from "@/components/sidebar/Sidebar";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <main className="bg-black h-screen overflow-hidden flex">
        <Sidebar />
        <Center />
      </main>
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
