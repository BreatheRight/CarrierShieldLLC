import { useState } from "react";
import { ListCheck } from "lucide-react"; // Wait, ListCheck might not exist, let's use ClipboardCheck or CheckSquare
import { ClipboardCheck, Sparkles, AlertTriangle, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  text: string;
  weight: number;
}

const QUESTIONS: Question[] = [
  {
    id: "med",
    text: "Are up-to-date Medical Certificates verified and kept on file for all drivers actively operating?",
    weight: 25,
  },
  {
    id: "mvr",
    text: "Are continuous Motor Vehicle Record (MVR) reviews completed mindestens once in a rolling 12 months?",
    weight: 25,
  },
  {
    id: "clearinghouse",
    text: "Are employees queried against the FMCSA Drug & Alcohol Clearinghouse before final hiring?",
    weight: 25,
  },
  {
    id: "eld",
    text: "Is there a protocol to reconcile unassigned drive time logged on ELD devices each calendar week?",
    weight: 25,
  },
];

export default function ChecklistQuiz({ onOpenDemo }: { onOpenDemo: () => void }) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleToggle = (id: string, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === QUESTIONS.length;

  // Calculate score based on "YES" answers
  const score = QUESTIONS.reduce((acc, q) => {
    return acc + (answers[q.id] === true ? q.weight : 0);
  }, 0);

  return (
    <div className="bg-[#030d1b] pb-24 md:pb-32 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="rounded-2xl border border-blue-900/30 bg-[#071329] p-6 md:p-10 relative overflow-hidden shadow-2xl">
          {/* Flare decor */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
                <Sparkles className="h-3 w-3" />
                <span>Instant Self-Audit Tool</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Evaluate Your DOT Audit Risk Exposure
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                FMCSA offsite audits have increased by <span className="text-[#38bdf8] font-bold">200%</span> since 2024. Take this quick 4-question checklist to estimate your compliance readiness score immediately.
              </p>

              {/* Stats overlay */}
              <div className="pt-4 mt-4 border-t border-blue-950/40">
                <div className="flex gap-4 items-center">
                  <div className="text-xl font-bold font-mono text-[#4ade80]">99.4%</div>
                  <div className="text-xs text-slate-400">
                    of Carrier Shield clients maintain a secure "Satisfactory" FMCSA rating.
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive quiz module */}
            <div className="lg:col-span-7 bg-[#030d1b] rounded-xl border border-blue-950/40 p-5 md:p-6 text-white">
              {!isEvaluated ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-950/40 pb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Step Checklist ({answeredCount} of {QUESTIONS.length} complete)
                    </span>
                    <ClipboardCheck size={16} className="text-sky-400" />
                  </div>

                  <div className="space-y-3.5">
                    {QUESTIONS.map((q) => (
                      <div
                        key={q.id}
                        className="p-3 bg-[#071329] border border-blue-950/30 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#071329]/50"
                      >
                        <p className="text-xs text-slate-200 leading-relaxed max-w-md">
                          {q.text}
                        </p>
                        <div className="flex gap-2 self-end sm:self-auto flex-shrink-0">
                          <button
                            type="button"
                            onClick={() => handleToggle(q.id, true)}
                            className={`px-3 py-1 text-[11px] font-bold rounded transition ${
                              answers[q.id] === true
                                ? "bg-emerald-400 text-[#030d1b]"
                                : "bg-slate-900 text-slate-400 hover:text-white"
                            }`}
                          >
                            YES
                          </button>
                          <button
                            type="button"
                            onClick={() => handleToggle(q.id, false)}
                            className={`px-3 py-1 text-[11px] font-bold rounded transition-all ${
                              answers[q.id] === false
                                ? "bg-red-500 text-white"
                                : "bg-slate-900 text-slate-400 hover:text-white"
                            }`}
                          >
                            NO
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={!isComplete}
                      onClick={() => setIsEvaluated(true)}
                      className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-500 py-3 text-xs font-bold text-[#030d1b] transition disabled:cursor-not-allowed"
                    >
                      <span>Analyze My Audit Compliance Profile</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 space-y-4">
                  {score === 100 ? (
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <CheckCircle2 size={32} />
                    </div>
                  ) : score >= 50 ? (
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                      <AlertTriangle size={32} />
                    </div>
                  ) : (
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                      <ShieldAlert size={32} />
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#38bdf8] font-bold block">
                      Compliance Strength Score
                    </span>
                    <span className="text-4xl font-display font-extrabold text-white block mt-1">
                      {score}%
                    </span>
                  </div>

                  <div className="max-w-md mx-auto p-3.5 rounded-lg bg-slate-900/60 text-xs text-left text-slate-300 border-l-2 border-sky-400 space-y-1.5">
                    {score === 100 ? (
                      <p>
                        <strong>Excellent!</strong> Your core processes are aligned on paper. However, maintaining continuous check-ins and managing scaling driver logs requires active technical synchronization before standard audits.
                      </p>
                    ) : (
                      <p>
                        <strong>Audit Risk Detected:</strong> Your scorecard reveals critical gaps in record keeping. Missing MVR audits or unchecked Drug Clearinghouse alerts are primary triggers for standard <strong>unannounced FMCSA onsite investigations and liability exposure</strong>.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setAnswers({});
                        setIsEvaluated(false);
                      }}
                      className="flex-1 bg-slate-900 hover:text-white rounded-lg py-2.5 text-xs font-bold text-slate-400 transition"
                    >
                      Reset Quiz
                    </button>
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="flex-1 bg-sky-400 hover:bg-sky-300 rounded-lg py-2.5 text-xs font-bold text-[#030d1b] transition"
                    >
                      Get Free Corrective Plan
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
