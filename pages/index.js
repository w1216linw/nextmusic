import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-black">
      hello world
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
