import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Store, ShoppingCart, PackageSearch } from "lucide-react";

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/dashboard", icon: LayoutDashboard },
    { name: "New Sale", href: "/dashboard/sales", icon: ShoppingCart },
    { name: "Inventory", href: "/dashboard/inventory", icon: PackageSearch },
    { name: "Setup Shop", href: "/dashboard/setup", icon: Store },
  ];

  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col md:flex-row overflow-hidden text-slate-900">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200">
        <div className="p-6 flex items-center space-x-3 border-b md:border-b-0 border-slate-200 h-16 md:h-auto">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">MediVyapar</span>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Workspace</div>
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2.5 text-sm rounded-md transition-colors border-l-[3px] ${
                  isActive 
                    ? "bg-slate-100 text-slate-900 font-semibold border-blue-500" 
                    : "text-slate-600 hover:bg-slate-50 border-transparent"
                }`}
              >
                <item.icon className={`h-5 w-5 mr-3 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 mt-auto border-t border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium border border-slate-300">OP</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">Owner Profile</p>
              <p className="text-[10px] text-slate-500 truncate">Apollo Pharmacy</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 flex items-center justify-between z-10">
          <div className="flex items-center md:hidden">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">M</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">MediVyapar</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-slate-400">Workspace /</span>
            <span className="font-medium text-slate-900">
              {navItems.find(i => i.href === location.pathname)?.name || "Dashboard"}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Optional header actions can go here */}
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 pb-safe z-50">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center justify-center py-3 px-2 ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-500 font-medium"
                }`}
              >
                <item.icon className={`h-6 w-6 mb-1 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                <span className="text-[10px]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
