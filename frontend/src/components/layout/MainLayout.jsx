import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-72">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;