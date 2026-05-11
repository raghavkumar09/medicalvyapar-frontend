import { useState } from "react";
import { Camera, Layers, Box, CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { motion } from "framer-motion";

export default function SetupShop() {
  const [step, setStep] = useState<"intro" | "scanning" | "mapping" | "done">("intro");

  const startScan = () => {
    setStep("scanning");
    setTimeout(() => setStep("mapping"), 3000);
  };

  const finishSetup = () => {
    setStep("done");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Setup Shop Structure</h1>
        <p className="text-sm text-slate-500 mt-1">Map your physical racks into the digital system.</p>
      </div>

      {step === "intro" && (
        <Card className="glass">
          <CardContent className="p-8 text-center sm:p-12">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">AI Auto Structure Mapping</h2>
            <p className="text-slate-500 max-w-lg mx-auto mb-8">
              Take photos of all your walls, racks, and pigeon holes. MediVyapar AI will automatically detect columns, rows, and assign smart location names (e.g. Rack1-A1).
            </p>
            <Button size="lg" onClick={startScan} className="w-full sm:w-auto">
              Start Camera Scanner
            </Button>
          </CardContent>
        </Card>
      )}

      {step === "scanning" && (
        <Card className="overflow-hidden glass">
          <CardContent className="p-0 border-b border-slate-100 bg-slate-900 aspect-video flex flex-col items-center justify-center relative">
            <motion.div 
              animate={{ y: ["-40%", "40%"] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
            <Camera className="w-12 h-12 text-slate-600 mb-4 animate-pulse" />
            <p className="text-white font-medium">Scanning racks and boxes...</p>
            <p className="text-slate-400 text-sm mt-1">Please hold camera steady across the wall</p>
          </CardContent>
        </Card>
      )}

      {step === "mapping" && (
        <div className="space-y-6">
          <Card className="border-emerald-200 glass">
            <CardContent className="p-6 bg-emerald-50/50 rounded-xl">
              <div className="flex items-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-emerald-900">AI Structure Generated</h3>
                  <p className="text-sm text-emerald-700">Detected 3 Racks, 12 Columns, 48 Boxes.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h3 className="text-lg font-bold text-slate-900">Review Digital Map</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((rack) => (
              <Card key={rack} className="glass">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center text-slate-900">
                    <Layers className="w-4 h-4 mr-2 text-slate-500" />
                    Rack {rack}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {["A1", "A2", "B1", "B2"].map((box) => (
                      <div key={box} className="border border-slate-200 rounded-lg p-2 text-center bg-white shadow-sm flex flex-col items-center justify-center">
                        <Box className="w-4 h-4 text-slate-400 mb-1" />
                        <span className="text-xs font-medium text-slate-700">R{rack}-{box}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Button size="lg" onClick={finishSetup}>Confirm & Start Adding Medicines</Button>
          </div>
        </div>
      )}

      {step === "done" && (
        <Card className="glass">
          <CardContent className="p-8 text-center sm:p-12">
            <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Structure Setup Complete!</h2>
            <p className="text-slate-500 max-w-lg mx-auto mb-8">
              Your shop is now digitally mapped. Next, scan medicines to place them in specific boxes.
            </p>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Scan Medicines to Locations
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
