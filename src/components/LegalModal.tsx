import { motion, AnimatePresence } from "motion/react";
import { type ReactNode } from "react";
import { X, Shield, FileText, Lock, Eye, Building2 } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | "cookies" | "accessibility" | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export default function LegalModal({ docType, onClose }: LegalModalProps) {
  if (!docType) return null;

  const contentMap: Record<
    Exclude<LegalDocType, null>,
    { title: string; subtitle: string; icon: ReactNode; body: ReactNode }
  > = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "Fleet Integra LLC • Last updated: January 2026",
      icon: <Lock className="w-5 h-5 text-sky-400" />,
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>Fleet Integra LLC</strong> ("Company", "we", "us", or "our"), located at 1101 Avenue U, Brooklyn, NY 11235, is committed to safeguarding the privacy and confidentiality of our clients, fleet managers, carriers, and drivers.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">1. Information We Collect</h4>
          <p>
            In order to provide our outsourced safety and FMCSA/DOT regulatory compliance services, we collect information including, but not limited to: company legal names, USDOT and MC numbers, EINs, driver qualification files (DQFs), CDL numbers, medical examiner certificates, motor vehicle records (MVRs), Drug & Alcohol Clearinghouse query consent, hours of service (HOS) logs, and inspection documentation.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">2. How We Use Your Information</h4>
          <p>
            We use collected records solely for facilitating compliance with Title 49 of the Code of Federal Regulations (CFR), filing necessary state and federal permits, coordinating mandatory drug & alcohol testing pools, performing mock safety audits, and preparing audit responses on behalf of your motor carrier operations.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">3. Data Protection & Security</h4>
          <p>
            We enforce strict administrative, technical, and physical security standards to prevent unauthorized access, disclosure, or alteration of sensitive carrier and driver data. We do not sell, rent, or trade your personal or business information to third-party marketers.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">4. Contact Our Privacy Team</h4>
          <p>
            If you have questions regarding this Privacy Policy or data retention practices, please reach us by email at{" "}
            <a href="mailto:support@fleetintegra.com" className="text-sky-400 hover:underline">
              support@fleetintegra.com
            </a>{" "}
            or by phone at{" "}
            <a href="tel:+12012937774" className="text-emerald-400 hover:underline">
              +1 (201) 293-7774
            </a>.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Use & Service Agreement",
      subtitle: "Fleet Integra LLC • Last updated: January 2026",
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            These Terms of Use govern the engagement between <strong>Fleet Integra LLC</strong> ("Fleet Integra") and motor carriers, owner-operators, or logistics companies ("Client") utilizing our consulting, safety management, permit filing, and compliance workflows.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">1. Scope of Services</h4>
          <p>
            Fleet Integra provides administrative and operational support for DOT compliance, driver qualification file (DQF) maintenance, FMCSA registration, Clearinghouse management, and audit preparation. While we apply expert regulatory standards, ultimate legal responsibility for carrier safety and driver operations remains with the motor carrier as defined under federal law.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">2. Accuracy of Client Submissions</h4>
          <p>
            Client agrees to provide truthful, complete, and timely documentation regarding drivers, equipment, inspections, and operating status. Fleet Integra is not liable for regulatory penalties resulting from falsified or withheld client data.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">3. Fees, Billing & Disbursements</h4>
          <p>
            Service fees cover administrative preparation and consultation. Government filing fees (e.g., state permit taxes, HVUT 2290 tax, FMCSA application fees) are pass-through expenses unless expressly stated in written proposals.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">4. Company Information & Legal Venue</h4>
          <p>
            Fleet Integra LLC is legally registered in the State of New York, operating at 1101 Avenue U, Brooklyn, NY 11235. Inquiries may be directed to{" "}
            <a href="mailto:support@fleetintegra.com" className="text-sky-400 hover:underline">
              support@fleetintegra.com
            </a>{" "}
            or{" "}
            <a href="tel:+12012937774" className="text-emerald-400 hover:underline">
              +1 (201) 293-7774
            </a>.
          </p>
        </div>
      ),
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "Fleet Integra LLC • Last updated: January 2026",
      icon: <Eye className="w-5 h-5 text-indigo-400" />,
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>Fleet Integra LLC</strong> uses essential and functional cookies to ensure secure portal operation, preserve user preferences during self-audit assessments, and measure platform performance.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">1. Essential Cookies</h4>
          <p>
            These cookies are necessary for core site navigation, form authentication, and fraud prevention across fleet quote requests and portal sessions.
          </p>
          <h4 className="text-sm font-bold text-white pt-2">2. Managing Preferences</h4>
          <p>
            You can configure your browser settings to decline non-essential cookies at any time without compromising basic informational browsing on our website.
          </p>
        </div>
      ),
    },
    accessibility: {
      title: "Accessibility Statement",
      subtitle: "Fleet Integra LLC • Dedicated to Inclusive Access",
      icon: <Shield className="w-5 h-5 text-teal-400" />,
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>Fleet Integra LLC</strong> is committed to ensuring digital accessibility for all users, including individuals with disabilities. We continually review and improve our web experience in alignment with WCAG 2.1 Level AA guidelines.
          </p>
          <p>
            If you encounter difficulty accessing any content on our website or need assistance with DOT regulatory resources, please contact our support team at{" "}
            <a href="mailto:support@fleetintegra.com" className="text-sky-400 hover:underline">
              support@fleetintegra.com
            </a>{" "}
            or call{" "}
            <a href="tel:+12012937774" className="text-emerald-400 hover:underline">
              +1 (201) 293-7774
            </a>.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[docType];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl border border-blue-900/40 bg-[#071329] p-6 text-white shadow-2xl md:p-8 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-blue-950/60 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                {current.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{current.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content (scrollable) */}
          <div className="overflow-y-auto pr-2 space-y-4 flex-grow">
            {current.body}
          </div>

          {/* Footer bar */}
          <div className="mt-6 pt-4 border-t border-blue-950/60 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Building2 size={13} className="text-sky-400" />
              <span>Fleet Integra LLC • 1101 Avenue U, Brooklyn, NY 11235</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
