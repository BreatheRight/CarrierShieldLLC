import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, ShieldCheck, MapPin, AlertTriangle, Play, Pause, ChevronRight, Activity, ArrowRight, User, Compass, ServerCrash } from "lucide-react";

interface TruckFeed {
  id: string;
  driver: string;
  avatar: string;
  score: number;
  speed: number;
  route: string;
  status: "Optimized" | "Flagged" | "Coached" | "Review";
  lastEvent: string;
}

const INITIAL_TRUKS: TruckFeed[] = [
  {
    id: "TRK-2410",
    driver: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    score: 98,
    speed: 62,
    route: "I-80 near Cheyenne, WY",
    status: "Optimized",
    lastEvent: "System automated log compliance updated.",
  },
  {
    id: "TRK-1088",
    driver: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    score: 84,
    speed: 73,
    route: "I-35 near Denton, TX",
    status: "Review",
    lastEvent: "Approaching hours-of-service (HOS) rest cycle.",
  },
  {
    id: "TRK-5812",
    driver: "David Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    score: 95,
    speed: 65,
    route: "I-95 near Savannah, GA",
    status: "Optimized",
    lastEvent: "ELD synced successfully with weigh station bypass.",
  },
  {
    id: "TRK-3030",
    driver: "Robert Garcia",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    score: 79,
    speed: 68,
    route: "I-40 near Flagstaff, AZ",
    status: "Flagged",
    lastEvent: "Speed limit surge (+8 mph over) flagged on decline.",
  },
];

const RANDOM_EVENTS = [
  {
    driver: "Marcus Vance",
    id: "TRK-2410",
    event: "Excessive lane wander registered on turn-pike. Audio warning sent.",
    status: "Coached",
    speed: 55,
    score: 94,
  },
  {
    driver: "Sarah Jenkins",
    id: "TRK-1088",
    event: "Driver checked in at automated rest terminal. HOS logs reset.",
    status: "Optimized",
    speed: 0,
    score: 89,
  },
  {
    driver: "David Chen",
    id: "TRK-5812",
    event: "Sudden deceleration resolved safely. Smart dashcam detected deer.",
    status: "Coached",
    speed: 40,
    score: 94,
  },
  {
    driver: "Robert Garcia",
    id: "TRK-3030",
    event: "Self-coaching alert completed. Speed back to recommended line.",
    status: "Optimized",
    speed: 61,
    score: 83,
  },
];

export default function FleetTelemetrySim() {
  const [trucks, setTrucks] = useState<TruckFeed[]>(INITIAL_TRUKS);
  const [isPlaying, setIsPlaying] = useState(true);
  const [logMessages, setLogMessages] = useState<string[]>([
    "System Initialized: 4 heavy assets connected to national dispatcher grid.",
    "Bypass Clearance pre-approved for TRK-2410 in Cheyenne checkpoint.",
  ]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      // Pick a random truck to update
      const truckIndex = Math.floor(Math.random() * trucks.length);
      const targetTruck = trucks[truckIndex];

      // Pick random event for that truck
      const eventCandidate = RANDOM_EVENTS.find((e) => e.id === targetTruck.id) || RANDOM_EVENTS[0];

      setTrucks((prev) =>
        prev.map((t) =>
          t.id === targetTruck.id
            ? {
                ...t,
                status: eventCandidate.status as any,
                speed: eventCandidate.speed,
                score: eventCandidate.score,
                lastEvent: eventCandidate.event,
              }
            : t
        )
      );

      // Add to dynamic logger (max 4 logs)
      setLogMessages((prev) => [
        `[${new Date().toLocaleTimeString()}] ${targetTruck.id} (${targetTruck.driver}): ${
          eventCandidate.event
        }`,
        ...prev.slice(0, 3),
      ]);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, trucks]);

  return (
    <div id="telemetry" className="relative rounded-2xl border border-blue-900/30 bg-[#071329] overflow-hidden shadow-2xl p-6 md:p-8">
      {/* Simulation title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-950/40 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#38bdf8]">
              Automated Safety Engine
            </span>
          </div>
          <h3 className="font-display text-lg md:text-xl font-bold text-white mt-1">
            Live Compliance & Telemetry Feed
          </h3>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 rounded-md bg-[#020813] border border-blue-900/40 px-3 py-1.5 text-xs text-slate-300 hover:text-white transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause size={12} className="text-amber-400" />
                <span>Pause Stream</span>
              </>
            ) : (
              <>
                <Play size={12} className="text-emerald-400 animate-pulse" />
                <span>Resume Feed</span>
              </>
            )}
          </button>
          
          <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-slate-500 bg-[#020813] px-2.5 py-1.5 rounded-md border border-blue-950/40">
            <Activity className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            <span>ping: 12ms</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Active Grid */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trucks.map((truck) => (
              <div
                key={truck.id}
                className="rounded-xl bg-[#030d1b] border border-blue-950/50 p-4 relative overflow-hidden group hover:border-[#38bdf8]/35 transition-all duration-300"
              >
                {/* Score background circular flare */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold text-sky-400">
                      {truck.id}
                    </span>
                    <h4 className="font-display text-sm font-semibold text-white mt-0.5">
                      {truck.driver}
                    </h4>
                  </div>

                  {/* Safety score */}
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Safety Score
                    </span>
                    <span
                      className={`text-sm font-mono font-bold ${
                        truck.score >= 90
                          ? "text-emerald-400"
                          : truck.score >= 80
                          ? "text-amber-400"
                          : "text-red-400"
                      }`}
                    >
                      {truck.score} / 100
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 space-y-2 text-xs border-t border-slate-900 pt-3">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin size={12} className="text-sky-400" />
                      <span>Route</span>
                    </span>
                    <span className="font-medium text-slate-200">{truck.route}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Compass size={12} className="text-emerald-400" />
                      <span>Telemetry</span>
                    </span>
                    <span className="font-mono text-slate-100">{truck.speed} MPH</span>
                  </div>

                  {/* Status Badges */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-400">Active Guidance</span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        truck.status === "Optimized"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : truck.status === "Coached"
                          ? "bg-sky-500/10 text-[#38bdf8]"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {truck.status === "Optimized" && <ShieldCheck size={10} />}
                      {truck.status === "Coached" && <Eye size={10} />}
                      {truck.status === "Review" && <AlertTriangle size={10} />}
                      <span>{truck.status}</span>
                    </span>
                  </div>
                </div>

                {/* Live Event banner */}
                <div className="mt-3.5 bg-slate-900/60 p-2 rounded-lg text-[11px] text-slate-300 border-l-2 border-[#38bdf8]">
                  <p className="font-medium truncate">{truck.lastEvent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Console logs list */}
        <div className="lg:col-span-4 flex flex-col justify-between rounded-xl bg-[#020712] border border-blue-950/60 p-4">
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Safety Event Stream Logs</span>
            </h4>

            <div className="space-y-3 font-mono text-[11px] text-slate-400 leading-relaxed max-h-56 overflow-y-auto">
              <AnimatePresence>
                {logMessages.map((log, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-2.5 rounded bg-[#030d1b]/80 border border-slate-900 text-slate-300"
                  >
                    {log}
                  </motion.p>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-900 pt-4">
            <div className="rounded-lg bg-indigo-950/15 p-3.5 border border-indigo-900/10">
              <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-sky-400" />
                <span>100% Automatic Logging</span>
              </h5>
              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                Carrier Shield automates the ELD syncing, logs safety check-ins and detects audit gaps. Reduce risk of audit failure by <span className="text-[#4ade80] font-bold">99.4%</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
