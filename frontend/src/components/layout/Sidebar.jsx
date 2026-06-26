import {
  LayoutDashboard,
  CalendarDays,
  Bot,
  FileText,
  ClipboardList,
  BarChart3,
  ChartColumn,
  TimerReset,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
  localStorage.clear();
  sessionStorage.clear();

  navigate("/login", { replace: true });

  window.location.reload();
};

  const menuGroups = [
    {
      title: "MAIN",
      items: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/dashboard",
        },
        {
          name: "Planner",
          icon: CalendarDays,
          path: "/planner",
        },
        {
          name: "Progress",
          icon: BarChart3,
          path: "/progress",
        },
      ],
    },
    {
      title: "AI TOOLS",
      items: [
        {
          name: "AI Assistant",
          icon: Bot,
          path: "/assistant",
        },
        {
          name: "AI Notes",
          icon: FileText,
          path: "/notes",
        },
        {
          name: "AI Quiz",
          icon: ClipboardList,
          path: "/quiz",
        },
      ],
    },
    {
      title: "PRODUCTIVITY",
      items: [
        {
          name: "Analytics",
          icon: ChartColumn,
          path: "/analytics",
        },
        {
          name: "Pomodoro",
          icon: TimerReset,
          path: "/pomodoro",
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        {
          name: "Profile",
          icon: User,
          path: "/profile",
        },
        {
          name: "Settings",
          icon: Settings,
          path: "/settings",
        },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-blue-500">
          Smart Planner AI
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          AI Powered Learning
        </p>

      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">

        {menuGroups.map((group) => (

          <div key={group.title} className="mb-8">

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 px-2">
              {group.title}
            </p>

            <div className="space-y-2">

              {group.items.map((menu) => {

                const Icon = menu.icon;

                return (
                  <NavLink
                    key={menu.path}
                    to={menu.path}
                    className={({ isActive }) =>
                      `flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={20} />

                    <span>{menu.name}</span>
                  </NavLink>
                );
              })}

            </div>

          </div>

        ))}

      </div>

      <div className="p-4 border-t border-slate-800">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-xl py-3 font-semibold transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;