import { ArrowUpRight } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="h-full w-full rounded-2xl overflow-hidden relative shadow-lg group">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-pulse"></div>

      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 h-full flex flex-col justify-center px-5 py-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
          <div>
            <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-[10px] md:text-xs font-medium border border-white/10 inline-block mb-2">
              New v2.0
            </span>

            <h2 className="text-xl md:text-3xl font-bold mb-1 leading-snug">
              Selamat Datang Hauzan!
            </h2>

            <p className="text-indigo-100 max-w-xs md:max-w-lg text-xs md:text-sm leading-relaxed">
              Statistik performa Anda meningkat 24% minggu ini.
            </p>
          </div>

          <button className="bg-white text-indigo-600 px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 transform hover:-translate-y-1 text-sm md:text-base">
            Lihat Report <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
