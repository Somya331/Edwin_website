import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaFileSignature,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

const PatentRegistration = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const patentFields = [
    "Basic Ideas",
    "First Name *",
    "Last Name *",
    "Mobile *",
    "Email",
    "Designation with University / College Name *",
    "Subject / Area of Invention",
    "Brief Description of Patent Idea",
  ];

  const legalFields = [
    "First Name",
    "Last Name *",
    "Designation with Institute name",
    "Mobile",
    "Email",
    "Legal Service Required",
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Apply for Edwin Patent Support
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Patents & Certifications
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Edwin Incorporation is excited to announce our new patent
              registration services, designed to cater to all disciplines. Our
              team of experts is dedicated to guiding you through a streamlined
              and efficient process.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#C89B3C]"
            >
              Apply Now <FaArrowRight />
            </a>
          </div>

          <div className="grid gap-6">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
              alt="Patent legal documents"
              className="h-[260px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <div className="grid gap-6 md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
                alt="Patent paperwork"
                className="h-[170px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
                alt="Certification documents"
                className="h-[170px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 text-center text-[28px] font-semibold text-[#1B3A6B]">
            About
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-[15px] leading-[1.7]">
                Edwin Incorporation is excited to announce our new patent
                registration services, designed to cater to all disciplines. Our
                team of experts is dedicated to guiding you through a streamlined
                and efficient process, ensuring the protection of your
                groundbreaking inventions and brilliant ideas. With the potential
                to complete registration in just 90 days, we&apos;re committed to
                supporting your intellectual property needs. Start your patent
                journey with us today by visiting our website, and feel free to
                reach out for any assistance or additional information. Trust us to
                be your partner in safeguarding your valuable innovations.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Patent support meeting"
              className="h-full min-h-[260px] rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {[
            "Patent registration guidance for all disciplines",
            "Support for inventions, ideas, and certification needs",
            "Legal services support for registered members",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-[#C89B3C]"
            >
              <FaCheckCircle className="mb-4 text-[22px] text-[#1B3A6B]" />
              <p className="text-[15px] leading-[1.7]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
            Stay Connected with Us!
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7]">
            Follow us on Facebook for the latest <strong>Patent Support</strong>,
            updates & exclusive content.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#C89B3C]"
          >
            <FaFacebookF /> Follow us on Facebook
          </a>
        </div>
      </section>

      <section id="apply" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-10 text-center text-[28px] font-semibold text-[#1B3A6B]">
            Apply Now
          </h2>

          <form className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <h3 className="mb-8 text-[18px] font-semibold">
              Patent Registration Form
            </h3>

            <div className="mb-5 grid gap-4 md:grid-cols-[280px_1fr] md:items-center">
              <label className="text-[13px] text-[#5A6A85]">
                Select Your Location
              </label>
              <div>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>India</option>
                  <option>International</option>
                </select>
                <p className="mt-2 text-[13px] text-[#5A6A85]">
                  Select Your Country
                </p>
              </div>
            </div>

            {patentFields.map((label) => (
              <div
                key={label}
                className="mb-5 grid gap-4 md:grid-cols-[280px_1fr] md:items-center"
              >
                <label className="text-[13px] text-[#5A6A85]">{label}</label>
                <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              </div>
            ))}

            <div className="mb-6 grid gap-4 md:grid-cols-[280px_1fr] md:items-center">
              <label className="text-[13px] text-[#5A6A85]">
                Terms & Condition *
              </label>
              <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                <input type="checkbox" /> Read
              </label>
            </div>

            <div className="flex gap-4 md:ml-[280px]">
              <button
                type="button"
                className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#C89B3C]"
              >
                Submit
              </button>
              <button
                type="reset"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] hover:bg-[#EAF1FB]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-10 text-center text-[28px] font-semibold text-[#1B3A6B]">
            Legal Services
          </h2>

          <form className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <h3 className="mb-8 text-[18px] font-semibold">
              Legal Services to Members
            </h3>

            <div className="mb-5 grid gap-4 md:grid-cols-[280px_1fr] md:items-center">
              <label className="text-[13px] text-[#5A6A85]">
                Select Your Location
              </label>
              <div>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>India</option>
                  <option>International</option>
                </select>
                <p className="mt-2 text-[13px] text-[#5A6A85]">
                  Select Your Country
                </p>
              </div>
            </div>

            {legalFields.map((label) => (
              <div
                key={label}
                className="mb-5 grid gap-4 md:grid-cols-[280px_1fr] md:items-center"
              >
                <label className="text-[13px] text-[#5A6A85]">{label}</label>
                <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              </div>
            ))}

            <div className="flex gap-4 md:ml-[280px]">
              <button
                type="button"
                className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#C89B3C]"
              >
                Submit
              </button>
              <button
                type="reset"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] hover:bg-[#EAF1FB]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <FaShieldAlt className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need Patent or Legal Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for patent registration, certification,
            intellectual property support, and legal services to members.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:care@edwinepc.com"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
            >
              <FaEnvelope /> care@edwinepc.com
            </a>
            <a
              href="tel:+916262752167"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
            >
              <FaPhoneAlt /> +91 6262752167
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/916262752167"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[24px] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#C89B3C]"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
};

export default PatentRegistration;