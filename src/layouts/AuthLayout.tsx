import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center flex-col items-center">
          <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-600/20">
            M
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">
            MediVyapar
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Smart Solution For Every Pharmacy
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-slate-100 glass">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
