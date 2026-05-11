import * as React from "react"
import { cn } from "@/src/lib/utils"

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" }>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
      secondary: "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200",
      destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
      success: "border-transparent bg-emerald-500 text-white hover:bg-emerald-600",
      warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
      outline: "text-slate-800 border-slate-200",
    }
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
