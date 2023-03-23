import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";

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
