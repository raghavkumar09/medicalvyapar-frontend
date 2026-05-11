import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { TrendingUp, AlertTriangle, PackageOpen, IndianRupee, Timer, Zap } from "lucide-react";

export default function DashboardHome() {
  const stats = [
    {
      title: "Today's Sales",
      value: "₹14,500",
      trend: "+12%",
      icon: IndianRupee,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Monthly Sales",
      value: "₹4.2L",
      trend: "+5%",
      icon: TrendingUp,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Low Stock Alerts",
      value: "42",
      badge: "Action Needed",
      icon: PackageOpen,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Expiry Alerts (30 Days)",
      value: "18",
      badge: "Critical",
      icon: AlertTriangle,
      color: "bg-red-50 text-red-600"
    }
  ];

  const quickActions = [
    { name: "New Sale", desc: "Scan prescription or manual", icon: Zap, color: "text-amber-500" },
    { name: "Add Stock", desc: "Scan supplier invoice", icon: PackageOpen, color: "text-blue-500" },
    { name: "Pending Expiry", desc: "Mark returned or disposed", icon: Timer, color: "text-red-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Overview of your pharmacy's performance today.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow glass">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                {stat.trend && <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.trend}</span>}
                {stat.badge && <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">{stat.badge}</span>}
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions Panel */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-slate-100">
              {quickActions.map((action, i) => (
                <div key={i} className="py-4 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-slate-100 ${action.color}`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{action.name}</p>
                      <p className="text-xs text-slate-500">{action.desc}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="group-hover:bg-blue-50 group-hover:text-blue-700">Go</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Analytics Teaser - Fast/Slow Moving */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>AI Insights</span>
              <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">Powered by AI</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Fast Moving Detected</p>
                  <p className="text-xs text-slate-600 mt-1">Paracetamol tablets are selling 40% faster this week. Consider moving closer to counter.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start">
                <Timer className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Slow Moving Stock</p>
                  <p className="text-xs text-slate-600 mt-1">Vitamin C supplements (Rack 4) have low movement. Consider a promotional discount before expiry.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
