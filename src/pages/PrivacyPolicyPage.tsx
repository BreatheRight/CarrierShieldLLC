import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#030d1b] text-slate-200 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>Privacy &amp; Compliance Policy</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
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
            Fleet Integra LLC (&quot;Fleet Integra,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects the privacy and security of personal information entrusted to us.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information in connection with our website at <span className="text-white font-medium">fleetintegra.com</span> (the &quot;Site&quot;), client and driver portals, communications, payment activities, and safety, compliance, registration, permit, and related services provided to commercial motor carriers and other transportation businesses.
          </p>

          <p>
            This Privacy Policy applies to information collected through the Site and, where applicable, information processed in connection with Fleet Integra&apos;s services.
          </p>

          {/* Section 1 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">1. About Fleet Integra and the Scope of This Policy</h2>
            <p className="mb-3">
              Fleet Integra provides outsourced safety, compliance, risk-management, administrative, registration, permit, and related support services primarily to commercial motor carriers and transportation businesses.
            </p>
            <p className="mb-2">Depending on the applicable engagement, our services may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>FMCSA and DOT compliance support;</li>
              <li>Driver Qualification File (&quot;DQ File&quot;) administration and monitoring;</li>
              <li>driver qualification and document monitoring;</li>
              <li>Medical Examiner&apos;s Certificate and medical qualification tracking;</li>
              <li>CDL and driver&apos;s-license monitoring;</li>
              <li>Motor Vehicle Record (&quot;MVR&quot;) services and monitoring;</li>
              <li>FMCSA Drug &amp; Alcohol Clearinghouse-related administrative services;</li>
              <li>Drug &amp; Alcohol Program administrative support;</li>
              <li>CSA and safety-performance monitoring;</li>
              <li>inspection and violation monitoring;</li>
              <li>audit preparation and compliance reviews;</li>
              <li>permit and registration assistance;</li>
              <li>compliance calendar and documentation management;</li>
              <li>driver onboarding compliance;</li>
              <li>Remote Safety Manager and outsourced safety and compliance services; and</li>
              <li>other transportation-related compliance and administrative services.</li>
            </ul>
            <p className="mb-3">
              Because of the nature of these services, Fleet Integra may process information concerning representatives of our business clients as well as drivers, applicants, employees, contractors, and other individuals associated with those clients.
            </p>
            <p>
              When we process driver or employee information on behalf of a motor-carrier client, we generally process that information for purposes of providing the services requested by the client and in accordance with the applicable service agreement, authorization, and law.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">2. Categories of Information We Collect</h2>
            <p className="mb-4">
              The information we collect depends on how you interact with Fleet Integra and which services are being provided.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-2">2.1 Website Visitors and Prospective Clients</h3>
                <p className="mb-2">When you visit our Site, request information, request a consultation, submit a contact form, or otherwise communicate with us, we may collect:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-300">
                  <li>first and last name;</li>
                  <li>business name;</li>
                  <li>job title or role;</li>
                  <li>telephone number;</li>
                  <li>email address;</li>
                  <li>business address;</li>
                  <li>USDOT number or other business/regulatory identifiers;</li>
                  <li>fleet size and general operational information;</li>
                  <li>services in which you are interested;</li>
                  <li>information contained in messages or inquiries you send to us; and</li>
                  <li>other information you voluntarily provide.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-2">2.2 Client Information</h3>
                <p className="mb-2">When a company becomes a Fleet Integra client, we may collect information reasonably necessary to establish and administer the business relationship and provide requested services, including:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-300">
                  <li>company and representative contact information;</li>
                  <li>company ownership or authorized representative information;</li>
                  <li>USDOT, MC, and other regulatory identifiers;</li>
                  <li>fleet and vehicle information;</li>
                  <li>insurance-related information where relevant to the requested service;</li>
                  <li>billing and transaction information;</li>
                  <li>service history;</li>
                  <li>communications;</li>
                  <li>authorizations and agreements;</li>
                  <li>regulatory records and documents; and</li>
                  <li>other information necessary to perform the contracted services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-2">2.3 Driver and Applicant Information</h3>
                <p className="mb-2">When necessary to provide safety and compliance services, Fleet Integra may process information concerning drivers, driver applicants, or other personnel associated with our clients, including:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2 text-slate-300">
                  <li>name;</li>
                  <li>address and contact information;</li>
                  <li>date of birth;</li>
                  <li>Social Security number (&quot;SSN&quot;), where required;</li>
                  <li>driver&apos;s-license and Commercial Driver&apos;s License (&quot;CDL&quot;) information;</li>
                  <li>driver&apos;s-license copies where required;</li>
                  <li>Medical Examiner&apos;s Certificate and medical qualification information;</li>
                  <li>Driver Qualification File documents;</li>
                  <li>employment and qualification information;</li>
                  <li>Motor Vehicle Record information;</li>
                  <li>driving history;</li>
                  <li>inspection and violation information;</li>
                  <li>accident-related information;</li>
                  <li>training and safety records;</li>
                  <li>Clearinghouse-related information;</li>
                  <li>Drug &amp; Alcohol Program administration information and records, where applicable and legally permitted;</li>
                  <li>regulatory and compliance records; and</li>
                  <li>other information reasonably necessary to perform the services requested by the motor-carrier client.</li>
                </ul>
                <p className="text-sm text-slate-400 italic">
                  Fleet Integra does not seek to collect medical information unrelated to driver qualification or the services being provided.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">3. Sensitive Personal Information</h2>
            <p className="mb-2">
              Certain information processed in connection with our services may be considered sensitive personal information or private information under applicable law.
            </p>
            <p className="mb-2">This may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>Social Security numbers;</li>
              <li>driver&apos;s-license and CDL numbers;</li>
              <li>government-issued identification information;</li>
              <li>account credentials;</li>
              <li>payment-card information;</li>
              <li>medical qualification information;</li>
              <li>certain Drug &amp; Alcohol Program information; and</li>
              <li>other sensitive regulatory or employment-related records.</li>
            </ul>
            <p className="mb-4">
              We seek to collect and use sensitive information only when reasonably necessary to provide requested services, comply with legal or regulatory requirements, maintain security, prevent fraud, or fulfill our contractual obligations.
            </p>

            <div className="bg-amber-950/30 border border-amber-500/30 rounded-lg p-4 text-amber-200 text-sm">
              <h3 className="font-bold text-amber-300 mb-1">Do Not Send Sensitive Information Through General Contact Forms</h3>
              <p>
                Unless Fleet Integra specifically instructs you otherwise, do not submit Social Security numbers, complete payment-card information, driver&apos;s-license copies, Medical Examiner&apos;s Certificates, Drug &amp; Alcohol Program records, passwords, or other highly sensitive information through the Site&apos;s general contact form or through unsecured email. Sensitive documents should be submitted only through a secure or otherwise authorized method designated by Fleet Integra.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">4. Information Collected Automatically</h2>
            <p className="mb-2">
              When you visit the Site or use certain online services, we or our service providers may automatically collect technical and usage information, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>IP address;</li>
              <li>browser type;</li>
              <li>device type;</li>
              <li>operating system;</li>
              <li>pages viewed;</li>
              <li>date and time of access;</li>
              <li>referring pages or websites;</li>
              <li>approximate location derived from IP address;</li>
              <li>cookies and similar technologies; and</li>
              <li>security, access, and system logs.</li>
            </ul>
            <p>
              If you use a client or driver portal, the applicable system may also maintain login records, audit logs, activity records, timestamps, and other information relating to use of the system.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">5. Sources of Personal Information</h2>
            <p className="mb-2">We may obtain personal information from:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>you directly;</li>
              <li>Fleet Integra&apos;s business clients;</li>
              <li>drivers or applicants;</li>
              <li>authorized representatives of clients;</li>
              <li>the Site and contact forms;</li>
              <li>client or driver portals;</li>
              <li>government and regulatory systems;</li>
              <li>motor vehicle record and screening providers;</li>
              <li>testing and Drug &amp; Alcohol Program service providers;</li>
              <li>payment processors;</li>
              <li>other service providers involved in providing requested services; and</li>
              <li>other sources authorized by the client, individual, contract, or applicable law.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">6. How We Use Personal Information</h2>
            <p className="mb-2">We may use personal information to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li>respond to inquiries and consultation requests;</li>
              <li>establish and manage client relationships;</li>
              <li>provide contracted safety and compliance services;</li>
              <li>establish and maintain Driver Qualification Files;</li>
              <li>monitor driver qualification and document status;</li>
              <li>perform or coordinate MVR-related services;</li>
              <li>administer or support Clearinghouse-related activities;</li>
              <li>administer or coordinate Drug &amp; Alcohol Program activities;</li>
              <li>monitor compliance deadlines and expiration dates;</li>
              <li>monitor inspections, violations, CSA-related information, and safety trends;</li>
              <li>assist with regulatory filings, permits, registrations, and renewals;</li>
              <li>assist clients with audit preparation and compliance reviews;</li>
              <li>provide Remote Safety Manager and outsourced safety and compliance services;</li>
              <li>create and administer portal accounts;</li>
              <li>communicate with clients and authorized users;</li>
              <li>process payments and maintain billing records;</li>
              <li>provide customer support;</li>
              <li>maintain and improve our Site and services;</li>
              <li>maintain security and prevent unauthorized activity or fraud;</li>
              <li>maintain business and regulatory records;</li>
              <li>comply with legal, contractual, regulatory, and governmental requirements;</li>
              <li>establish, exercise, or defend legal rights; and</li>
              <li>perform other purposes disclosed at the time information is collected or authorized by the applicable client or individual.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">7. Client and Driver Information</h2>
            <p className="mb-3">
              Fleet Integra frequently processes information concerning drivers on behalf of motor-carrier clients.
            </p>
            <p className="mb-3">
              In these circumstances, the motor carrier generally determines which services Fleet Integra is authorized to perform and which driver information is necessary for those services.
            </p>
            <p className="mb-3">
              Fleet Integra generally uses such information for purposes of providing the contracted safety, compliance, administrative, monitoring, and related services and as otherwise required or permitted by applicable law.
            </p>
            <p className="mb-3">
              Motor-carrier clients are responsible for ensuring that they have appropriate authority to provide Fleet Integra with personal information and to instruct Fleet Integra to perform the requested services.
            </p>
            <p>
              Drivers who have questions concerning information provided to Fleet Integra by their employer or contracting motor carrier may also contact that motor carrier directly.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">8. Client and Driver Portals</h2>
            <p className="mb-3">
              Fleet Integra may use a third-party technology provider to provide client or driver portal functionality.
            </p>
            <p className="mb-3">
              Depending on the system used, information submitted through the portal may be hosted, transmitted, processed, or stored using systems operated by the applicable technology provider.
            </p>
            <p className="mb-3">
              Fleet Integra selects and manages service providers based on business, operational, security, and compliance considerations and may enter into contractual data-protection or confidentiality arrangements where appropriate.
            </p>
            <p className="mb-3">
              Third-party technology providers may also maintain their own privacy, security, and data-handling practices.
            </p>
            <p>
              Users are responsible for protecting their portal credentials and should promptly notify Fleet Integra if they believe their account or credentials have been compromised.
            </p>
          </section>

          {/* Section 9 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">9. How We Disclose Personal Information</h2>
            <p className="mb-4">
              <strong className="text-white">Fleet Integra does not sell personal information for monetary consideration.</strong>
            </p>
            <p className="mb-3">We may disclose personal information when reasonably necessary to the following categories of recipients:</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-1">Service and Technology Providers</h3>
                <p className="mb-2">Companies that assist us with services such as:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-300">
                  <li>portal and compliance software;</li>
                  <li>website hosting;</li>
                  <li>cloud infrastructure;</li>
                  <li>email and communications;</li>
                  <li>customer relationship management;</li>
                  <li>document management;</li>
                  <li>cybersecurity;</li>
                  <li>analytics;</li>
                  <li>payment processing;</li>
                  <li>MVR and screening services;</li>
                  <li>testing and Drug &amp; Alcohol Program administration; and</li>
                  <li>other business and technology functions.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-1">Government and Regulatory Authorities</h3>
                <p>
                  We may provide or submit information to FMCSA, DOT, state agencies, licensing authorities, courts, law-enforcement authorities, or other government entities when necessary to perform an authorized service or when required or permitted by law.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-1">Professional Advisers</h3>
                <p>
                  We may disclose information to attorneys, accountants, auditors, insurers, cybersecurity professionals, and other advisers when reasonably necessary.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-1">Business Transactions</h3>
                <p>
                  Information may be transferred or disclosed in connection with an actual or proposed merger, acquisition, financing, reorganization, sale of assets, or similar business transaction, subject to applicable law and appropriate protections.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-sky-300 mb-1">Legal and Security Purposes</h3>
                <p>
                  We may disclose information when reasonably necessary to comply with law, respond to valid legal process, investigate fraud or security incidents, protect Fleet Integra&apos;s rights or property, or protect the safety and rights of others.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">10. Government and Third-Party Systems</h2>
            <p className="mb-3">
              Our services may require interaction with systems operated by FMCSA, DOT, state agencies, licensing authorities, financial institutions, testing providers, screening providers, or other third parties.
            </p>
            <p className="mb-3">
              Fleet Integra does not control the privacy, cybersecurity, availability, accuracy, or data-handling practices of independently operated third-party or government systems.
            </p>
            <p>
              Information submitted directly to or processed by those systems may also be subject to the privacy notices, terms, and legal requirements applicable to those systems.
            </p>
          </section>

          {/* Section 11 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">11. Payment Information</h2>
            <p className="mb-3">
              Fleet Integra uses third-party payment service providers, including Corepay, to process payments for our services.
            </p>
            <p className="mb-3">
              Customers may make payments through electronic invoices or payment links, where payment-card information is entered into the applicable payment processing system.
            </p>
            <p className="mb-3">
              Customers may also elect to provide payment-card information by telephone to an authorized Fleet Integra representative for the purpose of processing a requested transaction through an authorized payment processing system or virtual terminal.
            </p>
            <p className="mb-3">
              When payment information is provided by telephone, Fleet Integra personnel may receive card information verbally for purposes of processing the transaction.
            </p>
            <p className="mb-3">
              <strong className="text-white">Fleet Integra does not retain card verification codes such as CVV, CVC, or CID after transaction authorization.</strong> Fleet Integra seeks to minimize its independent storage of complete payment-card numbers outside authorized payment-processing environments.
            </p>
            <p className="mb-2">We may receive and retain limited billing and transaction information, such as:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>customer name;</li>
              <li>billing information;</li>
              <li>invoice number;</li>
              <li>transaction amount;</li>
              <li>transaction date;</li>
              <li>payment status;</li>
              <li>transaction or authorization reference;</li>
              <li>card type; and</li>
              <li>limited card information, such as the last four digits, when provided by the payment processor.</li>
            </ul>
            <p className="mb-3">
              We may use transaction information for billing, accounting, refunds, customer service, fraud prevention, dispute and chargeback management, legal compliance, and business recordkeeping.
            </p>
            <p>
              Payment processors and financial institutions involved in a transaction may process payment information according to their own terms, privacy practices, security requirements, and applicable payment-card standards.
            </p>
          </section>

          {/* Section 12 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">12. Cookies and Similar Technologies</h2>
            <p className="mb-2">The Site may use cookies and similar technologies for purposes such as:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>essential Site functionality;</li>
              <li>security;</li>
              <li>session management;</li>
              <li>remembering user preferences;</li>
              <li>understanding Site performance; and</li>
              <li>analytics, if implemented.</li>
            </ul>
            <p className="mb-3">
              Some cookies may be provided by third-party technology or analytics providers.
            </p>
            <p className="mb-3">
              You may be able to control cookies through your browser settings and, where provided, Site privacy or cookie controls.
            </p>
            <p className="mb-3">
              Fleet Integra does not currently intend to use personal information for cross-context behavioral advertising without providing any notices, choices, or consent mechanisms required by applicable law.
            </p>
            <p>
              If our use of advertising, analytics, or tracking technologies materially changes, we may update this Privacy Policy and applicable cookie or consent mechanisms.
            </p>
          </section>

          {/* Section 13 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">13. Telephone, SMS, and Email Communications</h2>
            <p className="mb-3">
              Fleet Integra may communicate with clients, prospective clients, drivers, and authorized representatives by telephone, text message, email, or other communication methods.
            </p>
            <p className="mb-2">Service-related communications may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>account or portal notices;</li>
              <li>compliance reminders;</li>
              <li>document requests;</li>
              <li>expiration notifications;</li>
              <li>billing and payment communications;</li>
              <li>service updates; and</li>
              <li>other communications reasonably related to services requested or provided.</li>
            </ul>
            <p className="mb-3">
              Where required by law, we will obtain appropriate consent before sending marketing communications.
            </p>
            <p className="mb-3">
              Recipients may opt out of marketing communications using the method provided in the communication, such as replying STOP to eligible marketing text messages or using an unsubscribe mechanism in marketing emails.
            </p>
            <p>
              Opting out of marketing communications does not prevent Fleet Integra from sending non-marketing communications reasonably necessary to provide requested services, administer an account, process transactions, or address legal or security matters.
            </p>
          </section>

          {/* Section 14 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">14. Data Retention</h2>
            <p className="mb-2">
              Fleet Integra retains personal information for as long as reasonably necessary for the purposes for which it was collected, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>providing contracted services;</li>
              <li>maintaining business and client records;</li>
              <li>satisfying applicable FMCSA, DOT, state, and other regulatory record-retention requirements;</li>
              <li>accounting and tax purposes;</li>
              <li>resolving disputes;</li>
              <li>enforcing agreements;</li>
              <li>responding to audits, investigations, or legal proceedings;</li>
              <li>maintaining security records; and</li>
              <li>satisfying other legal or legitimate business requirements.</li>
            </ul>
            <p className="mb-3">
              Retention periods may vary depending on the type of information, service being provided, contractual requirements, applicable regulatory requirements, and legal obligations.
            </p>
            <p>
              When information is no longer reasonably required, we may delete, destroy, de-identify, or otherwise dispose of it in accordance with applicable requirements and our data-management practices.
            </p>
          </section>

          {/* Section 15 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">15. Data Security</h2>
            <p className="mb-3">
              Fleet Integra maintains reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, acquisition, disclosure, alteration, loss, misuse, or destruction.
            </p>
            <p className="mb-2">Our security practices may include, as appropriate to our operations and the information involved:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-slate-300">
              <li>access controls;</li>
              <li>account and credential management;</li>
              <li>limiting access to information based on business need;</li>
              <li>security monitoring;</li>
              <li>employee and contractor security practices;</li>
              <li>risk assessment;</li>
              <li>evaluation of relevant service providers;</li>
              <li>secure methods for transmitting sensitive information;</li>
              <li>data-retention and disposal practices; and</li>
              <li>incident-response procedures.</li>
            </ul>
            <p className="mb-3">
              We also seek to select service providers capable of maintaining safeguards appropriate to the information and services involved and to establish appropriate contractual protections where applicable.
            </p>
            <p>
              However, no website, network, portal, electronic communication, or storage system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 16 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">16. Security Incidents and Data Breaches</h2>
            <p className="mb-3">
              If Fleet Integra becomes aware of a security incident involving personal information, we may investigate the incident, take reasonable steps to contain and remediate it, and evaluate our legal and contractual notification obligations.
            </p>
            <p className="mb-3">
              Where required by applicable law, Fleet Integra will provide notifications to affected individuals, clients, regulators, law-enforcement authorities, or other appropriate parties.
            </p>
            <p>
              Clients and portal users should promptly notify Fleet Integra if they become aware of suspected unauthorized access to an account, credentials, or information connected with Fleet Integra services.
            </p>
          </section>

          {/* Section 17 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">17. Your Privacy Rights</h2>
            <p className="mb-3">
              Depending on where you reside and which privacy laws apply to Fleet Integra and the information involved, you may have certain rights concerning your personal information.
            </p>
            <p className="mb-2">These rights may include, where applicable:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-3 text-slate-300">
              <li>requesting information about personal information collected about you;</li>
              <li>requesting access to personal information;</li>
              <li>requesting correction of inaccurate personal information;</li>
              <li>requesting deletion of certain personal information;</li>
              <li>requesting information concerning categories of disclosures;</li>
              <li>opting out of certain sales or sharing of personal information where applicable;</li>
              <li>limiting certain uses or disclosures of sensitive personal information where applicable; and</li>
              <li>exercising applicable privacy rights without unlawful discrimination.</li>
            </ul>
            <p className="mb-3">
              These rights are subject to applicable legal limitations and exceptions. For example, Fleet Integra may be required or permitted to retain certain information because of regulatory, contractual, legal, security, recordkeeping, or dispute-resolution requirements.
            </p>
            <p className="mb-3">
              To submit an applicable privacy request, contact us using the information in the Contact Us section below.
            </p>
            <p className="mb-3">
              We may need to verify your identity and authority before processing a request.
            </p>
            <p>
              Where Fleet Integra processes information solely or primarily on behalf of a motor-carrier client, we may refer a request to that client or coordinate with the client as appropriate.
            </p>
          </section>

          {/* Section 18 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">18. California and Other State Privacy Laws</h2>
            <p className="mb-3">
              Residents of California and certain other states may have additional rights under applicable state privacy laws.
            </p>
            <p className="mb-3">
              The availability and scope of these rights depend on whether the applicable law applies to Fleet Integra, the individual, and the information involved.
            </p>
            <p className="mb-3">
              Fleet Integra does not sell personal information for monetary consideration.
            </p>
            <p>
              Where an applicable state privacy law requires additional notices, rights, opt-out mechanisms, or disclosures, Fleet Integra will seek to provide them as required by that law.
            </p>
          </section>

          {/* Section 19 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">19. Children&apos;s Privacy</h2>
            <p className="mb-3">
              Fleet Integra provides business-to-business transportation compliance and related services.
            </p>
            <p className="mb-3">
              The Site and our services are not directed to children under 18, and we do not knowingly solicit personal information directly from children through the Site.
            </p>
            <p>
              If we learn that personal information from a child has been collected through the Site in circumstances where it should not have been collected, we will take appropriate steps consistent with applicable law.
            </p>
          </section>

          {/* Section 20 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">20. Third-Party Links and Services</h2>
            <p className="mb-3">
              The Site may contain links to websites or services operated by government agencies, social-media platforms, business partners, payment providers, or other third parties.
            </p>
            <p className="mb-3">
              Fleet Integra does not control the privacy or security practices of independently operated third-party websites and services.
            </p>
            <p>
              We encourage users to review the applicable privacy notices and terms before providing information directly to a third party.
            </p>
          </section>

          {/* Section 21 */}
          <section className="border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white mb-3">21. Changes to This Privacy Policy</h2>
            <p className="mb-3">
              Fleet Integra may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, service providers, or applicable legal and regulatory requirements.
            </p>
            <p className="mb-3">
              When we update this Privacy Policy, we will revise the Last Updated date at the top of this page.
            </p>
            <p>
              Where required by applicable law, we may provide additional notice of material changes.
            </p>
          </section>

          {/* Section 22 */}
          <section className="border-t border-slate-800/80 pt-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-3">22. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, our privacy practices, or an applicable privacy request, contact:</p>
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
            <p className="mt-4 text-xs text-slate-400 italic">
              Please do not include Social Security numbers, complete payment-card information, passwords, or other highly sensitive information in an initial privacy inquiry sent by ordinary email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
