import React from "react";
import {
  FaUniversity,
  FaCreditCard,
  FaQrcode,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileInvoice,
  FaShieldAlt,
  FaExternalLinkAlt,
  FaWhatsapp,
} from "react-icons/fa";

const paymentOptions = [
  {
    title: "International Bank Transfer",
    currency: "USD",
    icon: FaGlobe,
    details: [
      ["Account Holder Name", "EDWIN INCORPORATION, USA"],
      ["Payment Method", "ACH"],
      ["ACH Routing Number", "026073150"],
      ["Account Number", "8335767679"],
      ["Bank Name", "Community Federal Savings Bank"],
      ["Beneficiary Address", "5 Penn Plaza, 14th Floor, New York, NY 10001, US"],
      ["Account Currency", "USD"],
    ],
  },
  {
    title: "Domestic Bank Transfer",
    currency: "INR",
    icon: FaUniversity,
    details: [
      ["Bank Name", "HDFC Bank"],
      ["Account Holder Name", "Edwin Educational and Professional Const."],
      ["Account No.", "50200066763130"],
      ["IFSC Code", "HDFC0001282"],
    ],
  },
];

export default function Pay2Edwin() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Secure Payment Gateway
            </p>
            <h1 className="mt-4 text-[42px] font-bold leading-tight text-[#1B3A6B] lg:text-[56px]">
              Pay to Edwin Incorporation
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Use online payment, UPI QR, domestic bank transfer, or international
              ACH transfer for Edwin Incorporation services. Please keep your
              payment receipt for confirmation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://pmny.in/8IdWZY27l1kq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Pay Online <FaExternalLinkAlt className="text-[12px]" />
              </a>
              <a
                href="#upi"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                View UPI QR
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80"
              alt="Online payment"
              className="h-[360px] w-full rounded-[16px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]">
              <FaCreditCard className="text-[32px] text-[#1B3A6B]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">
                Online Payment
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                Pay using SBI and other supported online payment platforms.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]">
              <FaQrcode className="text-[32px] text-[#1B3A6B]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">
                UPI QR Payment
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                Scan and pay with any UPI app using the official payment QR.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]">
              <FaShieldAlt className="text-[32px] text-[#1B3A6B]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">
                Payment Terms
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                Payment terms apply to all payments. Read terms before making
                payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Offline Payment Options
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Bank Transfer Details
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {paymentOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-[22px] font-semibold text-[#1B3A6B]">
                        {option.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-[#5A6A85]">
                        Currency: {option.currency}
                      </p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[#1B3A6B]">
                      <Icon className="text-[24px]" />
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[12px] border border-[#D6E0F0]">
                    {option.details.map(([label, value]) => (
                      <div
                        key={label}
                        className="grid gap-2 border-b border-[#D6E0F0] px-4 py-3 last:border-b-0 md:grid-cols-[180px_1fr]"
                      >
                        <p className="text-[13px] text-[#5A6A85]">{label}</p>
                        <p className="text-[15px] font-medium leading-[1.6] text-[#1A1A2E]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="upi" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <img
              src="https://www.academichelpstore.com/Wed%20Jul%2012%202023-2.png"
              alt="UPI QR Payment"
              className="mx-auto max-h-[420px] w-full max-w-[360px] object-contain"
            />
          </div>

          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              UPI QR Payment Options
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Scan & Pay With Any UPI App
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Use BHIM UPI or any supported UPI application to scan the official
              QR code and complete the payment.
            </p>

            <div className="mt-6 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
              <p className="text-[15px] font-medium text-[#1A1A2E]">
                After payment, share the transaction screenshot or receipt with
                Edwin Incorporation support for verification.
              </p>
            </div>

            <a
              href="https://edwinincorp.zohodesk.in/portal/en/kb/articles/what-is-the-refund-policy-of-edwin-incorporation"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
            >
              Payment Terms Applies on All Payments
              <FaExternalLinkAlt className="text-[12px]" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Keep in Touch with Us
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Need Help With Payment?
            </h2>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <FaMapMarkerAlt className="mt-1 text-[#C89B3C]" />
                <p className="text-[15px] leading-[1.7]">
                  15th Floor, Eros Corporate Tower, Nehru Place, New Delhi,
                  Delhi 110019
                </p>
              </div>

              <div className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <FaPhoneAlt className="mt-1 text-[#C89B3C]" />
                <p className="text-[15px] leading-[1.7]">
                  India: 011-66155019
                  <br />
                  Phone: +91 6262752167
                  <br />
                  Phone: +12792029553
                </p>
              </div>

              <div className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <FaEnvelope className="mt-1 text-[#C89B3C]" />
                <p className="text-[15px] leading-[1.7]">
                  care@edwinepc.com
                  <br />
                  support@edwinincorp.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
            <FaFileInvoice className="text-[44px] text-[#1B3A6B]" />
            <h3 className="mt-5 text-[24px] font-semibold text-[#1B3A6B]">
              Payment Confirmation
            </h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              For quick confirmation, send your payment proof with your name,
              registered mobile number, service name, and transaction ID.
            </p>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/916262752167"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-[24px]" />
      </a>
    </div>
  );
}