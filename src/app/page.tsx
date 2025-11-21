import ContentArea from "@/components/ContentArea";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";
import TopBanner from "@/components/TopBaner";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-3 h-40 md:h-48">
          <Logo />
        </div>

        <div className="col-span-12 md:col-span-9 h-40 md:h-48">
          <TopBanner />
        </div>

        <div className="col-span-12 md:col-span-3 min-h-[500px]">
          <Sidebar />
        </div>

        <div className="col-span-12 md:col-span-9">
          <ContentArea />
        </div>

        <div className="col-span-12 mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
