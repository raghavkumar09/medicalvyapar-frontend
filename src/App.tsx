/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Splash from "./pages/Splash";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import DashboardHome from "./pages/DashboardHome";
import SetupShop from "./pages/SetupShop";
import NewSale from "./pages/NewSale";
import Inventory from "./pages/Inventory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        
        {/* Auth Flow */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard Flow */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="setup" element={<SetupShop />} />
          <Route path="sales" element={<NewSale />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
