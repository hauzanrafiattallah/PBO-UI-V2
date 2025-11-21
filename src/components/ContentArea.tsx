import { BarChart3, Calendar, MoreHorizontal, Search } from "lucide-react";

const ContentArea = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 h-full">
      <div className="bg-white p-6 rounded-2xl border border-indigo-50 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Ringkasan Aktivitas
            </h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
              <Calendar size={14} />
              <span>21 Nov 2024</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 rounded-lg transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 rounded-lg transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-slate-700">
                System Update v2.0.1 berhasil di-deploy
              </span>
            </div>
            <span className="text-xs text-slate-400">10:00 AM</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-slate-700">
                Backup database harian selesai
              </span>
            </div>
            <span className="text-xs text-slate-400">09:30 AM</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="text-sm font-medium text-slate-700">
                3 Pengguna baru mendaftar
              </span>
            </div>
            <span className="text-xs text-slate-400">09:15 AM</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1">
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-indigo-50 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-indigo-500 rounded-full"></span>
              Laporan Harian
            </h4>
            <button className="text-xs text-indigo-600 font-medium hover:underline">
              Lihat Semua
            </button>
          </div>

          <div className="space-y-3 flex-1 overflow-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-3 hover:bg-indigo-50/50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-indigo-100"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                  0{i}
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold text-sm text-slate-700 group-hover:text-indigo-700">
                      Meeting Evaluasi Q4
                    </h5>
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                      20 Nov
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    Diskusi mengenai target pencapaian tim marketing dan sales
                    bulan depan.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 flex">
          <div className="w-full bg-slate-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-lg">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4 text-indigo-300 border border-white/5">
                <BarChart3 size={24} />
              </div>
              <h4 className="text-white font-bold text-lg">Target Bulanan</h4>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Pencapaian tim Anda hampir mencapai target maksimum bulan ini.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <div className="flex justify-between text-sm text-white mb-2 font-medium">
                <span>85%</span>
                <span className="text-indigo-300">Selesai</span>
              </div>
              <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              </div>
              <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-900/20 active:scale-95">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
