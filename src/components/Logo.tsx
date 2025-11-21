import { Zap } from "lucide-react";

const Logo = () => {
  return (
    <div className="h-full w-full bg-white border border-indigo-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="bg-indigo-50 p-3 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
        <Zap className="w-8 h-8 text-indigo-600" />
      </div>
      <h1 className="font-bold text-xl text-slate-800 tracking-tight">
        Hauzan<span className="text-indigo-600">UI</span>
      </h1>
      <p className="text-xs text-slate-400 mt-1">Admin System</p>
    </div>
  );
};

export default Logo;
