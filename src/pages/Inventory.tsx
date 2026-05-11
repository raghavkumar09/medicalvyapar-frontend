import { AlertCircle, Plus, Search, ArchiveRestore, Clock } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Badge } from "@/src/components/ui/badge";

export default function Inventory() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Inventory Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage stock, track expiries, and automate orders.</p>
        </div>
        <Button className="flex items-center">
          <Plus className="w-4 h-4 mr-2" /> Add New Stock (Invoice Scan)
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-red-200 bg-red-50/50 glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold text-red-900">Out of Stock & Low Stock</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: "Dolo 650mg", status: "Out of Stock", supplier: "MedLife Dist." },
                { name: "Crocine Advance", status: "2 strips left", supplier: "Alpha Pharma" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-lg border border-red-100 flex justify-between items-center shadow-sm">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-red-600 mt-0.5">{item.status}</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-8">Reorder</Button>
                </div>
              ))}
            </div>
            <Button variant="link" className="text-red-700 p-0 mt-4 h-auto text-sm">View all alerts &rarr;</Button>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/50 glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-amber-900">Expiry Alerts (30 Days)</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: "Azithromycin 500", date: "Expires in 12 days", value: "₹450" },
                { name: "Cetirizine 10mg", date: "Expires in 28 days", value: "₹1,200" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-lg border border-amber-100 flex justify-between items-center shadow-sm">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-amber-600 mt-0.5">{item.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Mark Return</Badge>
                </div>
              ))}
            </div>
            <Button variant="link" className="text-amber-700 p-0 mt-4 h-auto text-sm">View expiry details &rarr;</Button>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50 glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <ArchiveRestore className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">AI Relocation Suggestion</h3>
            </div>
            <p className="text-sm text-blue-800 mb-4">
              Move these items to counter for faster dispensing based on recent sales trends.
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                <p className="text-sm font-medium text-slate-900">Vicks Action 500</p>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-slate-500 line-through">Rack4-B2-01</span>
                  <span className="text-blue-600 font-bold">&rarr; Counter-A</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>All Medicines Master</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input className="pl-10" placeholder="Search inventory..." />
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium">Medicine Name</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Stock</th>
                  <th className="px-4 py-3 font-medium">MRP</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  { name: "Paracetamol 650mg", loc: "Rack2-B1-03", stock: 145, mrp: "₹25", status: "In Stock", sColor: "bg-emerald-100 text-emerald-700" },
                  { name: "Amoxicillin 500mg", loc: "Rack1-A2-01", stock: 12, mrp: "₹110", status: "Low Stock", sColor: "bg-amber-100 text-amber-700" },
                  { name: "Pantoprazole 40mg", loc: "Rack3-C1-02", stock: 0, mrp: "₹85", status: "Out of Stock", sColor: "bg-red-100 text-red-700" },
                  { name: "Vitamin C Chewable", loc: "Counter-A", stock: 320, mrp: "₹40", status: "In Stock", sColor: "bg-emerald-100 text-emerald-700" },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">{item.name}</td>
                    <td className="px-4 py-3 text-slate-500 font-mono text-xs">{item.loc}</td>
                    <td className="px-4 py-3 text-slate-700">{item.stock}</td>
                    <td className="px-4 py-3 text-slate-700">{item.mrp}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${item.sColor}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
