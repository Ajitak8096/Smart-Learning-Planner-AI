import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 flex items-center justify-between px-8">

      {/* Search */}

      <div className="relative w-96">

        <Search
          size={20}
          className="absolute left-4 top-3.5 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border border-slate-800 focus:border-blue-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell size={24} />

          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={40}
            className="text-blue-500"
          />

          <div>

            <h3 className="font-semibold">
              Ajit Kumar
            </h3>

            <p className="text-sm text-gray-400">
              SSC Aspirant
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;