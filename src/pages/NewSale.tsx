import { useState } from "react";
import { Camera, FileText, Search, PlusCircle, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Badge } from "@/src/components/ui/badge";

export default function NewSale() {
  const [activeTab, setActiveTab] = useState<"prescription" | "manual">("prescription");
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setTimeout(() => setScanned(true), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">New Sale</h1>
        <p className="text-sm text-slate-500 mt-1">Process a new sale with AI prescription reader or manual entry.</p>
      </div>

      <div className="flex space-x-1 p-1 bg-slate-100 rounded-lg max-w-sm">
        <button
          onClick={() => setActiveTab("prescription")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === "prescription" ? "bg-white shadow-sm text-blue-600" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          AI Prescription
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === "manual" ? "bg-white shadow-sm text-blue-600" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Manual Search
        </button>
      </div>

      {activeTab === "prescription" && !scanned && (
        <Card className="glass">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Scan Doctor's Prescription</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
              Use your camera to scan a handwritten prescription. Our AI will automatically detect medicines in milliseconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button onClick={handleScan} className="flex items-center">
                <Camera className="w-4 h-4 mr-2" /> Open Camera
              </Button>
              <Button variant="outline" onClick={handleScan}>
                Upload Image
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "prescription" && scanned && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>AI Detected Medicines</CardTitle>
                <Badge variant="success">Read Confident</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Paracetamol 650mg", loc: "Rack2-B1-03", qty: 10, price: 25 },
                    { name: "Amoxicillin 500mg", loc: "Rack1-A2-01", qty: 5, price: 110, alt: true },
                  ].map((med, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                      <div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                          <p className="font-semibold text-slate-900">{med.name}</p>
                        </div>
                        <div className="flex items-center mt-2 space-x-3 text-xs">
                          <span className="bg-slate-100 text-slate-700 font-medium px-2 py-1 rounded">Loc: {med.loc}</span>
                          <span className="text-slate-500">Qty: {med.qty}</span>
                        </div>
                        {med.alt && (
                          <p className="text-xs text-amber-600 mt-2 flex items-center font-medium">
                            Original out of stock. Suggested alternative (same salt).
                          </p>
                        )}
                      </div>
                      <div className="mt-4 sm:mt-0 flex items-center justify-between w-full sm:w-auto sm:space-x-4">
                        <p className="font-bold text-slate-900 text-lg">₹{med.price}</p>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="glass">
              <CardHeader>
                <CardTitle>Bill Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Items (2)</span>
                  <span className="text-slate-900 font-medium">₹135.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">CGST (9%)</span>
                  <span className="text-slate-900 font-medium">₹12.15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">SGST (9%)</span>
                  <span className="text-slate-900 font-medium">₹12.15</span>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="font-bold text-emerald-600 text-2xl">₹159.30</span>
                </div>
                
                <div className="pt-4 space-y-3 w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Generate Bill & Reduce Stock</Button>
                  <Button variant="outline" className="w-full text-emerald-600 border-emerald-200 hover:bg-emerald-50">Share via WhatsApp</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "manual" && (
        <Card className="glass">
          <CardHeader>
            <CardTitle>Search Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input className="pl-10 h-11" placeholder="Search by brand name, salt name, or scan barcode..." />
            </div>
            
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
              <p className="text-slate-500 text-sm font-medium">Search to add items to the cart.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
