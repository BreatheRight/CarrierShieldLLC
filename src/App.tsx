/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopUtilityBar from "./components/TopUtilityBar";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";
import LandingPage from "./pages/LandingPage";
import RemoteSafetyCompliancePage from "./pages/RemoteSafetyCompliancePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
// import PricingPage from "./archive/PricingPage"; // Shelved per stakeholder requirement - preserved in src/archive/PricingPage.tsx
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FeedbackPage from "./pages/FeedbackPage";
import CookieConsentBanner from "./components/CookieConsentBanner";

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#030d1b] text-slate-100 flex flex-col font-sans select-none antialiased selection:bg-sky-500/30">
        <TopUtilityBar onOpenDemo={openDemo} />
        <MainNavbar onOpenDemo={openDemo} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage onOpenDemo={openDemo} />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* Shelved Pricing Route - preserved in src/archive/PricingPage.tsx
            <Route path="/pricing" element={<PricingPage />} />
            */}
            <Route path="/remote-safety-compliance" element={<RemoteSafetyCompliancePage onOpenDemo={openDemo} />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
          </Routes>
        </div>

        <Footer onOpenDemo={openDemo} />
        <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
        <CookieConsentBanner />
      </div>
    </Router>
  );
}
