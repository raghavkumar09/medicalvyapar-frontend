import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) setOtpSent(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP for demo. Use 1234.");
    }
  };

  return (
    <form onSubmit={otpSent ? handleLogin : handleSendOtp} className="space-y-6">
      <div>
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">
          Phone Number
        </label>
        <div className="mt-1.5">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={otpSent}
            placeholder="Enter mobile number"
          />
        </div>
      </div>

      {otpSent && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <label htmlFor="otp" className="block text-sm font-medium leading-6 text-slate-900">
            Enter OTP (Use 1234)
          </label>
          <div className="mt-1.5">
            <Input
              id="otp"
              name="otp"
              type="text"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="4-digit OTP"
              maxLength={4}
            />
          </div>
        </motion.div>
      )}

      <div>
        <Button type="submit" className="w-full text-base">
          {otpSent ? "Verify & Login" : "Send OTP"}
        </Button>
      </div>

      <div className="mt-4 text-center text-sm text-slate-500">
        New Owner?{" "}
        <Link to="/register" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
          Register Here
        </Link>
      </div>
    </form>
  );
}
