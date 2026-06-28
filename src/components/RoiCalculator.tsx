import { useState } from "react";
import { DollarSign, ShieldAlert, Users, TrendingDown, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function RoiCalculator({ onOpenDemo }: { onOpenDemo: () => void }) {
  const [drivers, setDrivers] = useState(25);
  const [fleetType, setFleetType] = useState<"long-haul" | "regional" | "local">("long-haul");
  const [safetyRisk, setSafetyRisk] = useState<"high" | "moderate" | "typical">("moderate");

  // Multipliers based on inputs
  const fleetMultiplier = {
    "long-haul": 1.25,
    regional: 1.0,
    local: 0.8,
  }[fleetType];

  const riskMultiplier = {
    high: 1.4,
    moderate: 1.0,
    typical: 0.7,
  }[safetyRisk];

  // Calculate annual savings
  const auditFinesSaved = Math.round(drivers * 360 * fleetMultiplier * riskMultiplier);
  const fuelMaintenanceSaved = Math.round(drivers * 820 * fleetMultiplier);
  const turnoverSaved = Math.round((drivers * 0.18) * 6500 * riskMultiplier); // 18% average industry turnover minimized
  const insurancePremiumDiscount = Math.round(drivers * 940 * fleetMultiplier * riskMultiplier);
  const totalSavings = auditFinesSaved + fuelMaintenanceSaved + turnoverSaved + insurancePremiumDiscount;

  return (
    <div id="roi" className="relative rounded-2xl border border-blue-900/30 bg-[#071329] overflow-hidden shadow-2xl p-6 md:p-8">
      {/* Background radial highlight */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive panel */}
        <div className="lg:col-span-7">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-[#4ade80] mb-3">
              <TrendingDown className="h-3.5 w-3.5" />
              <span>Tailored Liability Modelling</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight md:text-3xl">
              Calculate Your Carrier Shield ROI
            </h3>
            <p className="mt-2 text-slate-300 text-sm max-w-xl">
              Our customers save an average of <span className="font-semibold text-white">18% on premiums</span> and eliminate FMCSA audit failure. Test your exact fleet characteristics below.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Drivers Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                  Total Active Drivers
                </label>
                <span className="font-mono text-lg font-bold text-sky-400 bg-sky-950/40 px-3 py-0.5 rounded border border-sky-900/40">
                  {drivers} {drivers === 500 ? "500+" : "Drivers"}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={drivers}
                onChange={(e) => setDrivers(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-slate-900 border border-slate-800 appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>5 Drivers</span>
                <span>250 Drivers</span>
                <span>500+ (Enterprise)</span>
              </div>
            </div>

            {/* Specialty & Fleet Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
                  Operating Domain
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["long-haul", "regional", "local"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setFleetType(t)}
                      className={`py-2 px-1 text-center rounded text-xs font-bold border transition-all ${
                        fleetType === t
                          ? "bg-slate-900 text-white border-sky-400 shadow-md shadow-sky-500/5"
                          : "bg-[#030d1b] text-slate-400 border-slate-900 hover:text-white"
                      }`}
                    >
                      {t === "long-haul" ? "Long-Haul" : t === "regional" ? "Regional" : "Local Shift"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
                  Estimated Compliance Risk
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["high", "moderate", "typical"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setSafetyRisk(r)}
                      className={`py-2 px-1 text-center. rounded text-xs font-bold border transition-all ${
                        safetyRisk === r
                          ? "bg-slate-900 text-white border-red-500/60 shadow-md shadow-red-500/5"
                          : "bg-[#030d1b] text-slate-400 border-slate-900 hover:text-white"
                      }`}
                    >
                      {r === "high" ? "High Risk" : r === "moderate" ? "Moderate" : "Secure / Low"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right savings breakdown results */}
        <div className="lg:col-span-5 rounded-xl bg-[#030d1b] border border-blue-950/60 p-5 md:p-6 text-white">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-bold block">
            Annual Asset Optimization Index
          </span>
          <div className="mt-1 flex items-baseline">
            <span className="text-4xl font-display font-extrabold text-[#4ade80] tracking-tight">
              ${totalSavings.toLocaleString()}
            </span>
            <span className="text-xs text-slate-400 font-medium ml-2 uppercase">
              / Projected Savings
            </span>
          </div>

          <p className="mt-3 text-xs text-slate-400 leading-relaxed">
            Estimates represent average customer data reported in FMCSA databases under similar segment characteristics.
          </p>

          <div className="mt-6 space-y-4 border-t border-blue-950 pt-5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-red-400" />
                <span>Audit Penalities Avoided</span>
              </span>
              <span className="font-mono text-slate-200 font-semibold">
                +${auditFinesSaved.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400 flex items-center gap-1.5">
                <DollarSign size={14} className="text-emerald-400" />
                <span>Insurance Premium Reductions</span>
              </span>
              <span className="font-mono text-slate-200 font-semibold">
                +${insurancePremiumDiscount.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Users size={14} className="text-sky-400" />
                <span>Turnover Coaching Savings</span>
              </span>
              <span className="font-mono text-slate-200 font-semibold">
                +${turnoverSaved.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-900/60">
              <span className="text-slate-400">Efficiency / Fuel Saved</span>
              <span className="font-mono text-slate-200">
                +${fuelMaintenanceSaved.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Booking call to action */}
          <button
            onClick={onOpenDemo}
            className="w-full mt-6 rounded-lg bg-sky-400 hover:bg-sky-300 py-3 text-center text-xs font-bold text-[#030d1b] transition duration-150 flex items-center justify-center gap-2"
          >
            <span>Lock In These Compliance Savings</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
