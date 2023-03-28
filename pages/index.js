import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="grid place-items-center flex-grow h-screen bg-gradient-to-b from-slate-500 to-slate-900">
      <h1 className="text-6xl m-auto">Welcome</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
