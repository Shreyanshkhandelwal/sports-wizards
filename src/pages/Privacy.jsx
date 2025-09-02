import React from "react";

const Privacy = () => {
  return (
    <>
      {/* {isLargeScreen && <NeonCursor />} */}
      <main className="w-full overflow-x-hidden px-6 py-10 max-w-5xl mx-auto">
        <section className="relative w-full">
          <h5 className="text-2xl font-semibold mb-4">Privacy Policy</h5>
          <p>
            <strong>Last Updated:</strong> 01-09-2025
          </p>
          <p>
            Sports Wizards is a brand under Wincognito Technologies Private
            Limited (hereafter “Sports Wizards”, “we”, “us” or “our”) that
            provides sports infrastructure, coaching programs, events, and
            related services. This Privacy Policy explains how we collect, use,
            disclose, and protect personal information when you interact with
            our website, services, or communications.
          </p>

          <h5 className="mt-6 font-semibold">1. Scope</h5>
          <p>
            This policy applies to all personal data collected via our website,
            forms, events, apps, campaigns (including whitepaper downloads), or
            offline interactions in India. For any questions, email:
            connect@sportswizards.in.
          </p>

          <h5 className="mt-6 font-semibold">2. Data Controller</h5>
          <p>
            Data controller: Wincognito Technologies (Sports Wizards brand).
            <br />
            Registered entity details: CIN: U93120MH2025PTC441514
            <br />
            Address: 305 - G1, Jaigad Samata Ngr, Thakur Vlg, Kandivali(E),
            Mumbai- 400101, Maharashtra, India
          </p>

          <h5 className="mt-6 font-semibold">3. Types of Data Collected</h5>
          <p>We collect the following categories of information:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Identity & Contact Data:</strong> name, email, phone,
              organization, job title, billing address.
            </li>
            <li>
              <strong>Transactional Data:</strong> order details, invoices,
              payment receipts.
            </li>
            <li>
              <strong>Usage & Technical Data:</strong> IP address, device,
              browser, pages visited, cookies, analytics data.
            </li>
            <li>
              <strong>Health & Fitness Data (optional / limited):</strong>{" "}
              attendance records, fitness metrics (if voluntarily provided).
            </li>
            <li>
              <strong>Communications Data:</strong> messages, emails, call
              recordings (if applicable).
            </li>
          </ul>

          <h5 className="mt-6 font-semibold">4. How We Collect Data</h5>
          <ul className="list-disc list-inside ml-4">
            <li>Directly from you: forms, registration, purchases, emails.</li>
            <li>Automatically: cookies, analytics, server logs.</li>
            <li>
              From third parties: payment gateways, CRM connectors, LinkedIn
              (with your consent).
            </li>
            <li>
              From partners/sponsors for events and campaigns (only with
              justification).
            </li>
          </ul>

          <h5 className="mt-6 font-semibold">
            5. Purposes of Processing & Legal Basis
          </h5>
          <ul className="list-disc list-inside ml-4">
            <li>
              Providing services and customer support (Contractual necessity).
            </li>
            <li>Marketing communications (with consent).</li>
            <li>Analytics & improving services (Legitimate interest).</li>
            <li>Legal compliance.</li>
            <li>Safety and incident investigations.</li>
          </ul>

          <h5 className="mt-6 font-semibold">6. Sharing & Disclosure</h5>
          <p>We do not sell personal data. Data may be shared with:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Service providers: payment gateways, CRMs, cloud hosting
              (AWS/Vercel), analytics.
            </li>
            <li>Event partners: venues, vendors, or sponsors.</li>
            <li>Legal authorities (as required).</li>
            <li>Business acquirers (with notice to users).</li>
          </ul>

          <h5 className="mt-6 font-semibold">7. International Transfers</h5>
          <p>
            If data is transferred outside India, we ensure safeguards (e.g.,
            standard contractual clauses).
          </p>

          <h5 className="mt-6 font-semibold">8. Cookies & Tracking</h5>
          <p>
            We use cookies for functionality, analytics (Google Analytics), and
            marketing (LinkedIn Insight Tag). You can manage cookies via browser
            or banner.
          </p>

          <h5 className="mt-6 font-semibold">9. Data Retention</h5>
          <p>
            Retention varies: marketing data — up to 2 years; transactional data
            — 7 years; coaching records — 3 years (or as needed).
          </p>

          <h5 className="mt-6 font-semibold">10. Your Rights</h5>
          <p>
            You may request access, correction, deletion, or objection. Contact
            connect@sportswizards.in. We will verify your identity.
          </p>

          <h5 className="mt-6 font-semibold">11. Security</h5>
          <p>
            We use encryption, secure hosting, and access controls. No system is
            100% secure. Report any issues to connect@sportswizards.in.
          </p>

          <h5 className="mt-6 font-semibold">12. Changes</h5>
          <p>
            We may update this policy. Changes will be posted with a new
            effective date.
          </p>

          {/* TERMS OF SERVICE */}
          <h5 className="mt-10 text-2xl font-semibold">Terms of Service</h5>
          <p>
            <strong>Last updated:</strong> 01-09-2025
          </p>

          <h5 className="mt-6 font-semibold">1. Agreement</h5>
          <p>
            These Terms govern your access to the Sports Wizards website and
            services. By using our site or services, you agree to these Terms.
          </p>

          <h5 className="mt-6 font-semibold">2. Services</h5>
          <p>
            Sports Wizards provides sports infra, coaching programs, events, and
            B2B equipment supply. Specific terms for bookings or projects will
            be in separate SOWs/contracts.
          </p>

          <h5 className="mt-6 font-semibold">3. Eligibility</h5>
          <p>
            You must be 18+ to use the services. If acting for an organization,
            you confirm authority to bind it.
          </p>

          <h5 className="mt-6 font-semibold">4. Account & Accuracy</h5>
          <p>
            If you register, keep info accurate. You’re responsible for activity
            under your account.
          </p>

          <h5 className="mt-6 font-semibold">
            5. Bookings, Payments & Pricing
          </h5>
          <ul className="list-disc list-inside ml-4">
            <li>
              Paid services/events have applicable pricing & taxes. Payments via
              Razorpay/Stripe/PayU/bank transfer.
            </li>
            <li>
              Refund/cancellation: stated in event/order confirmation. Default:
              deposits non-refundable.
            </li>
            <li>15% agency/management fee applies unless otherwise agreed.</li>
          </ul>

          <h5 className="mt-6 font-semibold">6. Delivery & Acceptance</h5>
          <p>
            Timelines are estimates. Final acceptance on authorized sign-off.
            Changes may affect cost/time.
          </p>

          <h5 className="mt-6 font-semibold">7. Intellectual Property</h5>
          <p>
            All content is IP of Sports Wizards/Wincognito. Use is restricted to
            internal/personal use unless permitted.
          </p>

          <h5 className="mt-6 font-semibold">8. Use of Content</h5>
          <p>No reproduction or modification without written consent.</p>

          <h5 className="mt-6 font-semibold">9. User Conduct</h5>
          <p>
            Do not engage in unlawful or unsafe behavior. Follow safety
            guidelines in coaching classes.
          </p>

          <h5 className="mt-6 font-semibold">10. Confidentiality</h5>
          <p>
            Parties must maintain confidentiality. NDAs may be required for
            sensitive projects.
          </p>

          <h5 className="mt-6 font-semibold">11. Liability & Indemnity</h5>
          <ul className="list-disc list-inside ml-4">
            <li>Liability is limited to fees paid for the relevant service.</li>
            <li>You indemnify Sports Wizards against breaches or misuse.</li>
          </ul>

          <h5 className="mt-6 font-semibold">12. Force Majeure</h5>
          <p>
            No party is liable for delays caused by uncontrollable events
            (natural disasters, pandemics, strikes, etc.).
          </p>

          <h5 className="mt-6 font-semibold">13. Termination</h5>
          <p>
            We may suspend or terminate for breaches. Outstanding fees remain
            due.
          </p>

          <h5 className="mt-6 font-semibold">
            14. Governing Law & Dispute Resolution
          </h5>
          <p>
            Governed by Indian law. Disputes resolved via arbitration in Mumbai
            under Arbitration & Conciliation Act.
          </p>

          <h5 className="mt-6 font-semibold">15. Changes to Terms</h5>
          <p>
            We may update Terms. Changes will be published with an effective
            date.
          </p>

          <h5 className="mt-6 font-semibold">16. Contact & Notices</h5>
          <p>
            connect@sportswizards.in
            <br />
            Wincognito Technologies Private Limited (Sports Wizards)
            <br />
            305 - G1, Jaigad Samata Ngr, Thakur Vlg, Kandivali(E), Mumbai-
            400101, Maharashtra, India
          </p>
        </section>
      </main>
    </>
  );
};

export default Privacy;
