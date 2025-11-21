"use client";

import {
  Activity,
  BarChart3,
  Bell,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", id: "Dashboard" },
    { icon: Users, label: "Pengguna", id: "Pengguna" },
    { icon: BarChart3, label: "Analitik", id: "Analitik" },
    { icon: Bell, label: "Notifikasi", badge: 3, id: "Notifikasi" },
    { icon: Settings, label: "Pengaturan", id: "Pengaturan" },
  ];

  return (
    <div className="h-full w-full bg-white border border-indigo-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between">
      <div>
        <div className="mb-6 px-4 pt-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Menu Utama
          </p>
        </div>
        <nav className="space-y-2 ">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 cursor-pointer rounded-xl text-sm font-medium transition-all duration-200 group ${
                activeMenu === item.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={20}
                  className={
                    activeMenu === item.id
                      ? "text-white"
                      : "text-slate-400 group-hover:text-indigo-600"
                  }
                />
                {item.label}
              </div>
              {item.badge && (
                <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                  {item.badge}
                </span>
              )}
              {!item.badge && activeMenu === item.id && (
                <ChevronRight size={16} />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 bg-slate-900 rounded-xl relative overflow-hidden group cursor-pointer">
        <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex items-center gap-2 mb-1 relative z-10">
          <div className="bg-white/20 p-1 rounded text-white">
            <Activity size={14} />
          </div>
          <p className="text-white text-xs font-semibold">Upgrade Pro</p>
        </div>
        <p className="text-slate-400 text-[10px] relative z-10 leading-tight">
          Dapatkan fitur analitik lebih lengkap sekarang.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
