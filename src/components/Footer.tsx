const Footer = () => {
  return (
    <div className="mt-2 w-full py-4">
      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-full bg-slate-200"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1/3 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full shadow-sm"></div>
      </div>
      <div className="flex justify-center mt-3 gap-4 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
        <span>Privacy</span>
        <span>•</span>
        <span>Hauzan System © 2024</span>
        <span>•</span>
        <span>Terms</span>
      </div>
    </div>
  );
};

export default Footer;
