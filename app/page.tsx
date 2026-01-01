import Header from "@/components/header";
import Maincontent from "@/components/main-content";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Maincontent />
        </div>
      </div>
    </div>
  );
}
