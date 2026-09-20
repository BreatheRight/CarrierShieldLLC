import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#030d1b] text-slate-200 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-10">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold mb-3">
            <Shield size={14} />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="font-semibold text-slate-300">Fleet Integra LLC</span>
            <span className="inline-block w-1 h-1 rounded-full bg-slate-600" />
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              <span>Last Updated: August 21, 2026</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Fleet Integra LLC website at <span className="text-white font-medium">fleetintegra.com</span> (the &quot;Site&quot;), including any features, forms, portals, links, resources, or other functionality made available through or in connection with the Site.
          </p>

          <p>
            The Site is operated by Fleet Integra LLC (&quot;Fleet Integra,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>

          <p>
            By accessing or using the Site, you agree to these Terms. If you do not agree to these Terms, please do not use the Site.
          </p>

          {/* Section 1 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">1. About Fleet Integra and the Site</h2>
            <p className="mb-3">
              Fleet Integra provides safety, compliance, risk-management, administrative, registration, permit, and related support services primarily for commercial motor carriers and other businesses operating in the transportation industry.
            </p>
            <p className="mb-2">Our services may include, depending on the applicable engagement:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>FMCSA and DOT compliance support;</li>
              <li>Driver Qualification File administration and monitoring;</li>
              <li>driver qualification and document monitoring;</li>
              <li>medical certification tracking;</li>
              <li>Clearinghouse-related administrative support;</li>
              <li>Drug &amp; Alcohol Program administrative support;</li>
              <li>MVR and driver-record monitoring;</li>
              <li>CSA and safety-performance monitoring;</li>
              <li>audit preparation and compliance reviews;</li>
              <li>permit and registration assistance;</li>
              <li>compliance calendar and documentation management;</li>
              <li>Remote Safety Manager and outsourced safety and compliance support; and</li>
              <li>other transportation-related compliance and administrative services.</li>
            </ul>
            <p>
              The Site provides information about Fleet Integra and its services and may provide access to contact forms, consultation requests, payment functionality, client or driver portals, third-party systems, and other business resources.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">2. Website Use Does Not Create a Client Relationship</h2>
            <p className="mb-3">
              Your use of the Site, submission of a contact form, request for information, or communication with Fleet Integra does not by itself create a client, consulting, agency, fiduciary, or other professional relationship.
            </p>
            <p className="mb-3">
              A service relationship is established only when Fleet Integra agrees to provide services under an applicable service agreement, statement of work, service order, written authorization, accepted proposal, or other agreement.
            </p>
            <p>
              Descriptions of services, pricing examples, timelines, results, or other information appearing on the Site are provided for general informational purposes and do not constitute a binding offer unless expressly stated otherwise.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">3. Separate Service Agreements</h2>
            <p className="mb-3">
              Specific Fleet Integra services may be governed by separate agreements or authorizations.
            </p>
            <p className="mb-2">Such documents may establish, among other matters:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>scope of services;</li>
              <li>fees and billing arrangements;</li>
              <li>client responsibilities;</li>
              <li>Fleet Integra&apos;s authority to perform specific activities;</li>
              <li>document and information requirements;</li>
              <li>service limitations;</li>
              <li>recurring services;</li>
              <li>cancellation and termination;</li>
              <li>confidentiality;</li>
              <li>data handling;</li>
              <li>third-party services;</li>
              <li>limitations of liability; and</li>
              <li>other terms applicable to the engagement.</li>
            </ul>
            <p>
              If there is a conflict between these Website Terms and a separately executed service agreement concerning the services covered by that agreement, the applicable service agreement will control with respect to those services.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">4. No Legal, Tax, Insurance, or Other Professional Advice</h2>
            <p className="mb-3">
              Information available through the Site is provided for general informational purposes.
            </p>
            <p className="mb-3">
              Unless expressly agreed otherwise in writing, information provided through the Site does not constitute legal, tax, accounting, insurance, medical, or other licensed professional advice.
            </p>
            <p className="mb-3">
              Fleet Integra is not a law firm and does not provide legal representation.
            </p>
            <p className="mb-3">
              Transportation laws, regulations, agency policies, filing requirements, fees, deadlines, interpretations, and procedures may change and may vary based on jurisdiction, carrier operations, vehicle type, fleet characteristics, driver status, and other circumstances.
            </p>
            <p>
              Users and clients remain responsible for obtaining appropriate legal, tax, insurance, accounting, or other professional advice when necessary.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">5. No Guarantee of Regulatory or Business Results</h2>
            <p className="mb-3">
              Fleet Integra may assist clients with compliance management, regulatory filings, registrations, permits, audit preparation, safety-management processes, and related activities.
            </p>
            <p className="mb-3">
              However, Fleet Integra does not control FMCSA, DOT, state agencies, courts, insurance companies, testing providers, licensing authorities, financial institutions, or other third parties.
            </p>
            <p className="mb-2">Accordingly, unless expressly stated in a separate written agreement, Fleet Integra does not guarantee:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li>approval of an application, permit, registration, or filing;</li>
              <li>government or agency processing times;</li>
              <li>successful completion or outcome of an audit or investigation;</li>
              <li>removal or modification of violations or regulatory records;</li>
              <li>any particular CSA or SMS score or percentile;</li>
              <li>reduction of insurance premiums;</li>
              <li>availability of insurance coverage;</li>
              <li>prevention of accidents, violations, citations, penalties, or enforcement actions;</li>
              <li>any specific regulatory, financial, operational, or business result.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">6. Client and User Responsibility for Information</h2>
            <p className="mb-3">
              You are responsible for ensuring that information and documents you provide to Fleet Integra are accurate, complete, current, and lawfully provided.
            </p>
            <p className="mb-2">This includes, where applicable, information concerning:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>the motor carrier;</li>
              <li>company ownership;</li>
              <li>vehicles and equipment;</li>
              <li>drivers;</li>
              <li>licenses and endorsements;</li>
              <li>registrations and permits;</li>
              <li>insurance;</li>
              <li>employment and qualification records;</li>
              <li>regulatory history;</li>
              <li>mileage and operational information; and</li>
              <li>other information necessary to perform requested services.</li>
            </ul>
            <p className="mb-3">
              Fleet Integra may rely on information provided by clients, drivers, authorized representatives, government agencies, and third-party sources when performing services.
            </p>
            <p>
              Fleet Integra is not responsible for delays, rejected filings, incorrect submissions, compliance deficiencies, penalties, or other consequences caused by materially inaccurate, incomplete, outdated, misleading, or untimely information supplied by a client, user, driver, or other third party, subject to applicable law and any separate written agreement.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">7. Client and Driver Portal</h2>
            <p className="mb-3">
              Fleet Integra may provide clients, drivers, or authorized users with access to a portal or other secure technology platform.
            </p>
            <p className="mb-3">
              Portal functionality may be provided directly by Fleet Integra or through a third-party software provider.
            </p>
            <p className="mb-2">Users are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>maintaining the confidentiality of their login credentials;</li>
              <li>using strong and appropriate passwords;</li>
              <li>restricting account access to authorized persons;</li>
              <li>providing accurate information;</li>
              <li>promptly updating information when necessary; and</li>
              <li>promptly notifying Fleet Integra of suspected unauthorized account access or security incidents.</li>
            </ul>
            <p className="mb-3">
              You may not attempt to access another person&apos;s account, circumvent security controls, interfere with the portal, obtain information without authorization, or use the portal for unlawful purposes.
            </p>
            <p>
              Fleet Integra may suspend or restrict portal access when reasonably necessary for security, maintenance, suspected misuse, contractual reasons, or protection of Fleet Integra, its clients, drivers, systems, or service providers.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">8. Sensitive Information and Secure Submission</h2>
            <p className="mb-3">
              Certain Fleet Integra services may require processing sensitive or confidential information, including driver&apos;s-license information, Social Security numbers, medical qualification information, Driver Qualification File documentation, and other regulatory or employment-related information.
            </p>
            <p className="mb-3">
              Users should submit sensitive documents only through secure or otherwise authorized methods designated by Fleet Integra.
            </p>
            <p className="mb-3">
              Unless specifically instructed by Fleet Integra, you should not submit Social Security numbers, complete payment-card information, driver&apos;s-license copies, medical qualification documents, Drug &amp; Alcohol Program records, account passwords, or other highly sensitive information through general website contact forms or unsecured email.
            </p>
            <p>
              Our collection, use, disclosure, and protection of personal information is further described in our <Link to="/privacy-policy" className="text-sky-400 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 9 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">9. Payments and Payment Processing</h2>
            <p className="mb-3">
              Fleet Integra may accept payment for services through third-party payment service providers, including Corepay.
            </p>
            <p className="mb-3">
              Depending on the applicable service arrangement, customers may make payments through electronic invoices or payment links or may authorize payment by telephone.
            </p>
            <p className="mb-3">
              When a customer makes a payment through an electronic payment page, payment-card information may be entered directly into a payment system operated or supported by a third-party payment service provider.
            </p>
            <p className="mb-3">
              When a customer elects to make a payment by telephone, an authorized Fleet Integra representative may receive payment-card information verbally for the purpose of entering the information into an authorized payment processing system.
            </p>
            <p className="mb-3">
              Additional payment terms, including service fees, invoice due dates, billing schedules, recurring charges, authorization requirements, refunds, cancellations, declined payments, past-due balances, and other payment obligations, may be established in the applicable service agreement, invoice, payment authorization, proposal, service order, or other agreement.
            </p>
            <p>
              Fleet Integra&apos;s handling of payment-related personal information is further described in our <Link to="/privacy-policy" className="text-sky-400 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 10 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">10. Government and Regulatory Systems</h2>
            <p className="mb-3">
              Fleet Integra&apos;s services may require interaction with government agencies, regulatory databases, state systems, licensing authorities, or other external systems.
            </p>
            <p className="mb-3">
              These may include systems administered by FMCSA, DOT, state agencies, and other governmental or regulatory entities.
            </p>
            <p className="mb-2">Fleet Integra does not own or control these systems and cannot guarantee their:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>availability;</li>
              <li>accuracy;</li>
              <li>processing speed;</li>
              <li>cybersecurity;</li>
              <li>functionality;</li>
              <li>response time;</li>
              <li>policies; or</li>
              <li>decisions.</li>
            </ul>
            <p>
              Temporary outages, maintenance, government shutdowns, system errors, agency delays, policy changes, and other circumstances outside Fleet Integra&apos;s control may affect the performance or timing of services.
            </p>
          </section>

          {/* Section 11 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">11. Third-Party Service Providers</h2>
            <p className="mb-2">Fleet Integra may use third-party service providers in connection with its Site and services, including providers of:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>payment processing;</li>
              <li>client portals and compliance software;</li>
              <li>website hosting;</li>
              <li>email and communications;</li>
              <li>analytics;</li>
              <li>customer relationship management;</li>
              <li>document management;</li>
              <li>MVR and screening services;</li>
              <li>drug and alcohol testing administration;</li>
              <li>laboratories and testing networks;</li>
              <li>government or regulatory information services; and</li>
              <li>other operational or technology services.</li>
            </ul>
            <p className="mb-3">
              Use of third-party services may also be subject to the applicable provider&apos;s terms, privacy policy, and security practices.
            </p>
            <p>
              Fleet Integra is not responsible for the independent acts, omissions, policies, or systems of third parties except to the extent responsibility cannot lawfully be excluded or has been expressly assumed under a separate written agreement.
            </p>
          </section>

          {/* Section 12 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">12. Third-Party Links</h2>
            <p className="mb-3">
              The Site may contain links to government websites, social-media platforms, service providers, business partners, or other third-party websites.
            </p>
            <p className="mb-3">
              Links are provided for convenience and informational purposes.
            </p>
            <p className="mb-3">
              Unless expressly stated otherwise, the presence of a link does not mean Fleet Integra owns, operates, controls, sponsors, or endorses the third-party website or its content.
            </p>
            <p>
              Your use of third-party websites is subject to their respective terms and privacy practices.
            </p>
          </section>

          {/* Section 13 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">13. Electronic Communications</h2>
            <p className="mb-3">
              When you communicate with Fleet Integra electronically, including through the Site, email, portal, or other electronic methods, you consent to receiving communications from us electronically where permitted by law.
            </p>
            <p className="mb-3">
              Electronic communications may include service-related messages, invoices, receipts, account notifications, compliance notifications, document requests, and other communications related to your relationship with Fleet Integra.
            </p>
            <p>
              Marketing communications are subject to applicable law and any consent requirements described in our <Link to="/privacy-policy" className="text-sky-400 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 14 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">14. Privacy and Data Security</h2>
            <p className="mb-3">
              Your use of the Site and our handling of personal information are subject to our <Link to="/privacy-policy" className="text-sky-400 hover:underline">Privacy Policy</Link>.
            </p>
            <p className="mb-3">
              Fleet Integra uses reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, use, alteration, loss, or disclosure.
            </p>
            <p className="mb-3">
              However, no website, portal, network, electronic communication, or data-storage system can be guaranteed to be completely secure.
            </p>
            <p>
              Users are responsible for using appropriate security practices when communicating with Fleet Integra and accessing Fleet Integra-related systems.
            </p>
          </section>

          {/* Section 15 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">15. Intellectual Property</h2>
            <p className="mb-3">
              Unless otherwise indicated, the Site and its original content, including text, graphics, logos, trademarks, service marks, photographs, videos, layouts, software elements, downloadable materials, and other content, are owned by Fleet Integra or used under authorization from their respective owners.
            </p>
            <p className="mb-3">
              You may use the Site for legitimate informational and business purposes.
            </p>
            <p>
              Except as permitted by law or expressly authorized in writing by Fleet Integra, you may not copy, reproduce, modify, distribute, sell, license, publish, scrape, republish, create derivative works from, or commercially exploit Fleet Integra&apos;s proprietary Site content.
            </p>
          </section>

          {/* Section 16 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">16. Acceptable Use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>use the Site for unlawful, fraudulent, deceptive, or abusive purposes;</li>
              <li>attempt unauthorized access to the Site, portal, accounts, servers, databases, or networks;</li>
              <li>interfere with the operation or security of the Site;</li>
              <li>introduce malware, malicious code, or harmful technologies;</li>
              <li>impersonate another person or organization;</li>
              <li>submit information you are not authorized to provide;</li>
              <li>attempt to bypass access controls or authentication mechanisms;</li>
              <li>use automated systems to excessively scrape, extract, or interfere with Site content or functionality; or</li>
              <li>use the Site in a manner that violates applicable law or the rights of Fleet Integra or others.</li>
            </ul>
            <p>
              Fleet Integra may restrict access to the Site or related systems where reasonably necessary to prevent abuse, fraud, security threats, or violations of these Terms.
            </p>
          </section>

          {/* Section 17 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">17. Site Availability and Modifications</h2>
            <p className="mb-3">
              Fleet Integra may modify, update, suspend, discontinue, or restrict any portion of the Site at any time.
            </p>
            <p className="mb-3">
              We do not guarantee that the Site, portal, or any particular functionality will always be available, uninterrupted, current, or error-free.
            </p>
            <p>
              Maintenance, upgrades, cybersecurity measures, third-party outages, technical failures, and circumstances outside our reasonable control may temporarily affect availability.
            </p>
          </section>

          {/* Section 18 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">18. Disclaimer of Warranties</h2>
            <p className="font-semibold text-slate-200 uppercase tracking-wide text-xs mb-2">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SITE AND ITS CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
            </p>
            <p className="font-semibold text-slate-200 uppercase tracking-wide text-xs mb-2">
              FLEET INTEGRA DISCLAIMS WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p className="font-semibold text-slate-200 uppercase tracking-wide text-xs mb-2">
              FLEET INTEGRA DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, COMPLETELY SECURE, OR FREE OF HARMFUL COMPONENTS.
            </p>
            <p className="text-xs">
              Nothing in these Terms excludes warranties or rights that cannot lawfully be excluded.
            </p>
          </section>

          {/* Section 19 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">19. Limitation of Liability</h2>
            <p className="font-semibold text-slate-200 uppercase tracking-wide text-xs mb-2">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FLEET INTEGRA LLC AND ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, CONTRACTORS, AND AGENTS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SITE.
            </p>
            <p className="font-semibold text-slate-200 uppercase tracking-wide text-xs mb-2">
              THIS INCLUDES, TO THE EXTENT PERMITTED BY LAW, LOSS OF PROFITS, REVENUE, BUSINESS OPPORTUNITIES, GOODWILL, OR DATA ARISING FROM USE OF THE SITE.
            </p>
            <p className="text-xs mb-2">
              Any liability arising from separately contracted Fleet Integra services may be governed by the applicable service agreement rather than this Section.
            </p>
            <p className="text-xs">
              Nothing in these Terms limits liability to the extent such limitation is prohibited by applicable law.
            </p>
          </section>

          {/* Section 20 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">20. Indemnification</h2>
            <p className="mb-2">
              To the fullest extent permitted by applicable law, you agree to indemnify and hold harmless Fleet Integra LLC and its members, managers, officers, employees, contractors, and agents from claims, liabilities, damages, losses, and reasonable expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>your unlawful or unauthorized use of the Site;</li>
              <li>your material violation of these Terms;</li>
              <li>information or materials you submit without lawful authority; or</li>
              <li>your infringement of the rights of another person or entity.</li>
            </ul>
            <p>
              This Section does not alter indemnification provisions contained in any separate service agreement.
            </p>
          </section>

          {/* Section 21 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">21. Suspension and Termination of Website or Portal Access</h2>
            <p className="mb-2">
              Fleet Integra may suspend or terminate access to the Site, portal, or related systems when reasonably necessary because of:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>violation of these Terms;</li>
              <li>suspected fraud;</li>
              <li>unauthorized access;</li>
              <li>cybersecurity concerns;</li>
              <li>unlawful activity;</li>
              <li>misuse of Fleet Integra systems;</li>
              <li>contractual termination; or</li>
              <li>other circumstances reasonably requiring restriction of access.</li>
            </ul>
            <p>
              Termination of Site or portal access does not automatically eliminate payment, confidentiality, record-retention, or other obligations arising under a separate service agreement.
            </p>
          </section>

          {/* Section 22 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">22. Changes to These Terms</h2>
            <p className="mb-3">
              Fleet Integra may update these Terms from time to time to reflect changes in our Site, technology, services, business practices, or legal and regulatory requirements.
            </p>
            <p className="mb-3">
              The revised Terms will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
            <p>
              Where required by applicable law or contract, we may provide additional notice of material changes.
            </p>
          </section>

          {/* Section 23 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">23. Governing Law and Venue</h2>
            <p className="mb-3">
              These Terms are governed by the laws of the State of New York, without regard to its conflict-of-laws principles, except where applicable federal law or another mandatory law controls.
            </p>
            <p className="mb-3">
              Any dispute arising solely from the use of the Site will be subject to the jurisdiction and venue specified by applicable law and, where enforceable, the courts designated by Fleet Integra&apos;s applicable contractual arrangements.
            </p>
            <p>
              Specific disputes arising from Fleet Integra&apos;s professional services may instead be governed by the dispute-resolution, governing-law, arbitration, or venue provisions contained in the applicable service agreement.
            </p>
          </section>

          {/* Section 24 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">24. Severability</h2>
            <p>
              If any provision of these Terms is determined to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect to the extent permitted by law.
            </p>
          </section>

          {/* Section 25 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">25. No Waiver</h2>
            <p>
              Fleet Integra&apos;s failure to enforce any provision of these Terms does not constitute a waiver of that provision or of Fleet Integra&apos;s right to enforce it later.
            </p>
          </section>

          {/* Section 26 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">26. Entire Agreement Regarding Website Use</h2>
            <p className="mb-3">
              These Terms, together with the Privacy Policy and any other policies expressly incorporated by reference, constitute the agreement between you and Fleet Integra concerning your use of the Site.
            </p>
            <p>
              These Terms do not replace any separate service agreement, statement of work, payment authorization, or other contract governing services provided by Fleet Integra.
            </p>
          </section>

          {/* Section 27 */}
          <section className="border-t border-slate-800/80 pt-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-3">27. Contact Us</h2>
            <p className="mb-4">Questions regarding these Terms may be directed to:</p>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-bold text-white">Fleet Integra LLC</p>
              <p>Website: <a href="https://fleetintegra.com" className="text-sky-400 hover:underline">fleetintegra.com</a></p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-sky-400" />
                <span>Email: <a href="mailto:support@fleetintegra.com" className="text-sky-400 hover:underline">support@fleetintegra.com</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-sky-400" />
                <span>Phone: <a href="tel:+12012937774" className="text-sky-400 hover:underline">+1 (201) 293-7774</a></span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-sky-400 mt-1 flex-shrink-0" />
                <span>Mailing Address: 1101 Avenue U, Brooklyn, NY 11235</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
