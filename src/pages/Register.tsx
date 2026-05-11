import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [gst, setGst] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (gst) {
        setIsFetching(true);
        setTimeout(() => {
          setIsFetching(false);
          setStep(3);
        }, 1500); // Simulate AI/Government API fetch
      } else {
        setStep(3);
      }
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 pb-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`h-2.5 w-2.5 rounded-full transition-colors ${s === step ? 'bg-blue-600' : s < step ? 'bg-blue-300' : 'bg-slate-200'}`} />
        ))}
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-900">Owner Name</label>
              <Input required placeholder="Enter full name" className="mt-1.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Mobile Number</label>
              <Input type="tel" required placeholder="For OTP verification" className="mt-1.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Email <span className="text-slate-400 font-normal">(Optional)</span></label>
              <Input type="email" placeholder="example@gmail.com" className="mt-1.5" />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 text-center mb-4">Business Details</h3>
            <div>
              <label className="block text-sm font-medium text-slate-900">GST Number</label>
              <Input value={gst} onChange={e => setGst(e.target.value)} required placeholder="e.g. 22AAAAA0000A1Z5" className="mt-1.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Pharmacy License Number</label>
              <Input required placeholder="Enter license number" className="mt-1.5" />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="rounded-md bg-emerald-50/50 p-4 border border-emerald-200 mb-4 shadow-sm">
              <p className="text-sm text-emerald-700 font-medium text-center">
                Autofetched successfully via GST API ✓
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Shop Name</label>
              <Input defaultValue="Apollo Pharmacy (Simulated)" className="mt-1.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Shop Address</label>
              <Input defaultValue="123 Health Street, New Delhi" className="mt-1.5" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-900">Store Type</label>
                <Input defaultValue="Retail" className="mt-1.5 bg-slate-50 text-slate-500" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900">Location GPS</label>
                <Input defaultValue="Fetched GPS" className="mt-1.5 bg-slate-50 text-slate-500" readOnly />
              </div>
            </div>
          </motion.div>
        )}

        <div>
          <Button type="submit" className="w-full text-base" disabled={isFetching}>
            {isFetching ? "Fetching from GST API..." : (step === 3 ? "Complete Registration" : "Next")}
          </Button>
        </div>

        {step === 1 && (
          <div className="mt-4 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
              Login
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}
