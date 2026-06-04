import React, { useEffect } from "react";
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
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes payNowFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .paynow-fade-up {
          animation: payNowFadeUp .78s ease both;
        }

        .paynow-card {
          box-shadow: 0 18px 50px rgba(8, 34, 74, .09);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease, background-color .3s ease;
        }

        .paynow-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 66px rgba(8, 34, 74, .14);
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 md:py-20">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute -left-24 top-8 h-[300px] w-[300px] rounded-full bg-[#FFB000]/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/28 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="paynow-fade-up">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FFD35A] shadow-sm backdrop-blur-md">
              Secure Payment Gateway
            </p>
            <h1 className="mt-6 max-w-[650px] text-[36px] font-black leading-[1.12] text-white md:text-[46px]">
              Pay to Edwin Incorporation
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] font-semibold leading-[1.8] text-white/82">
              Use online payment, UPI QR, domestic bank transfer, or international
              ACH transfer for Edwin Incorporation services. Please keep your
              payment receipt for confirmation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://pmny.in/8IdWZY27l1kq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-6 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
              >
                Pay Online <FaExternalLinkAlt className="text-[12px]" />
              </a>
              <a
                href="#upi"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
              >
                View UPI QR
              </a>
            </div>
          </div>

          <div className="paynow-card rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md">
            <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80"
              alt="Online payment"
              className="h-[320px] w-full rounded-[22px] object-cover md:h-[390px]" loading="lazy" width="600" height="400" />
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-16">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#FFD35A]/14 blur-3xl" />
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="paynow-card rounded-[24px] border border-white/70 bg-white/85 p-6 backdrop-blur-xl hover:border-[#FFB000]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
                <FaCreditCard className="text-[24px]" />
              </div>
              <h3 className="mt-5 text-[18px] font-black text-[#082B63]">
                Online Payment
              </h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                Pay using SBI and other supported online payment platforms.
              </p>
            </div>

            <div className="paynow-card rounded-[24px] border border-white/70 bg-white/85 p-6 backdrop-blur-xl hover:border-[#FFB000]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
                <FaQrcode className="text-[24px]" />
              </div>
              <h3 className="mt-5 text-[18px] font-black text-[#082B63]">
                UPI QR Payment
              </h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                Scan and pay with any UPI app using the official payment QR.
              </p>
            </div>

            <div className="paynow-card rounded-[24px] border border-white/70 bg-white/85 p-6 backdrop-blur-xl hover:border-[#FFB000]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
                <FaShieldAlt className="text-[24px]" />
              </div>
              <h3 className="mt-5 text-[18px] font-black text-[#082B63]">
                Payment Terms
              </h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                Payment terms apply to all payments. Read terms before making
                payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#EEF5FF] px-5 py-20">
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-[#0B66C3]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-10 paynow-fade-up">
            <p className="text-[13px] font-black uppercase tracking-wider text-[#D97706]">
              Offline Payment Options
            </p>
            <h2 className="mt-3 text-[30px] font-black text-[#082B63] md:text-[34px]">
              Bank Transfer Details
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {paymentOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="paynow-card rounded-[26px] border border-white/80 bg-white/90 p-6 backdrop-blur-xl hover:border-[#FFB000]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-[22px] font-black text-[#082B63]">
                        {option.title}
                      </h3>
                      <p className="mt-1 text-[13px] font-bold text-[#65758C]">
                        Currency: {option.currency}
                      </p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
                      <Icon className="text-[24px]" />
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[18px] border border-[#DDE9F7] bg-white">
                    {option.details.map(([label, value]) => (
                      <div
                        key={label}
                        className="grid gap-2 border-b border-[#DDE9F7] px-4 py-3 last:border-b-0 md:grid-cols-[180px_1fr]"
                      >
                        <p className="text-[13px] font-bold text-[#65758C]">{label}</p>
                        <p className="text-[15px] font-bold leading-[1.6] text-[#08224A]">
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

      <section id="upi" className="relative bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#FFD35A]/12 blur-3xl" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="paynow-card rounded-[26px] border border-white/80 bg-white/90 p-6 backdrop-blur-xl">
            <img src="https://www.academichelpstore.com/Wed%20Jul%2012%202023-2.png"
              alt="UPI QR Payment"
              className="mx-auto max-h-[420px] w-full max-w-[360px] object-contain" loading="lazy" width="600" height="400" />
          </div>

          <div className="paynow-fade-up">
            <p className="text-[13px] font-black uppercase tracking-wider text-[#D97706]">
              UPI QR Payment Options
            </p>
            <h2 className="mt-3 text-[30px] font-black text-[#082B63] md:text-[34px]">
              Scan & Pay With Any UPI App
            </h2>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">
              Use BHIM UPI or any supported UPI application to scan the official
              QR code and complete the payment.
            </p>

            <div className="mt-6 rounded-[18px] border border-[#DDE9F7] bg-white/90 p-5 shadow-sm">
              <p className="text-[15px] font-bold text-[#08224A]">
                After payment, share the transaction screenshot or receipt with
                Edwin Incorporation support for verification.
              </p>
            </div>

            <a
              href="https://edwinincorp.zohodesk.in/portal/en/kb/articles/what-is-the-refund-policy-of-edwin-incorporation"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#DDE9F7] bg-white px-6 py-3 text-[15px] font-black text-[#083A7C] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:bg-[#FFF7E5]"
            >
              Payment Terms Applies on All Payments
              <FaExternalLinkAlt className="text-[12px]" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-[#EEF5FF] px-5 py-20">
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-[#FFD35A]/14 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="paynow-fade-up">
            <p className="text-[13px] font-black uppercase tracking-wider text-[#D97706]">
              Keep in Touch with Us
            </p>
            <h2 className="mt-3 text-[30px] font-black text-[#082B63] md:text-[34px]">
              Need Help With Payment?
            </h2>

            <div className="mt-8 grid gap-4">
              <div className="paynow-card flex gap-4 rounded-[18px] border border-white/70 bg-white/90 p-5">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FFB000]" />
                <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                  15th Floor, Eros Corporate Tower, Nehru Place, New Delhi,
                  Delhi 110019
                </p>
              </div>

              <div className="paynow-card flex gap-4 rounded-[18px] border border-white/70 bg-white/90 p-5">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#FFB000]" />
                <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                  India: 011-66155019
                  <br />
                  Phone: +91 6262752167
                  <br />
                  Phone: +12792029553
                </p>
              </div>

              <div className="paynow-card flex gap-4 rounded-[18px] border border-white/70 bg-white/90 p-5">
                <FaEnvelope className="mt-1 shrink-0 text-[#FFB000]" />
                <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                  care@edwinepc.com
                  <br />
                  support@edwinincorp.com
                </p>
              </div>
            </div>
          </div>

          <div className="paynow-card rounded-[26px] border border-white/80 bg-white/90 p-7 backdrop-blur-xl hover:border-[#FFB000]">
            <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
              <FaFileInvoice className="text-[28px]" />
            </div>
            <h3 className="mt-5 text-[24px] font-black text-[#082B63]">
              Payment Confirmation
            </h3>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">
              For quick confirmation, send your payment proof with your name,
              registered mobile number, service name, and transaction ID.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
