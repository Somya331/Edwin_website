import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaCalculator,
  FaCertificate,
  FaCheckCircle,
  FaEnvelope,
  FaGlobe,
  FaGraduationCap,
  FaIdCard,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPercent,
  FaPhoneAlt,
  FaUniversity,
  FaUserGraduate,
  FaWhatsapp,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80";

const sideImage =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80";

const benefits = [
  {
    title: "Book Publications Discount",
    text: "25 % flat discount on Book Publications. We have more than 180 publication houses both in India and abroad.",
    icon: FaBookOpen,
  },
  {
    title: "Journal Publications Discount",
    text: "25 % flat discount on Journal Publications. We have more than 400 journals in Scopus, UGC, NAAC, SCI, WAS, EMBASE to name a few.",
    icon: FaUniversity,
  },
  {
    title: "API Calculator & Scorecard",
    text: "25% discount on API calculator and scorecard which increases your professional value.",
    icon: FaCalculator,
  },
  {
    title: "Editorial Board Certificate",
    text: "Free Editorial board membership certificate.",
    icon: FaCertificate,
  },
  {
    title: "Shodhparta Access",
    text: "Free ID and Password for Shodhparta where you could find thesis, research papers etc absolutely free.",
    icon: FaIdCard,
  },
  {
    title: "Digital Library Portal",
    text: "Free ID and Password for access on Edwin digital library portal.",
    icon: FaBookOpen,
  },
  {
    title: "Free Website",
    text: "Free website for every member.",
    icon: FaLaptopCode,
  },
  {
    title: "MOOC & SHYAM UGC Support",
    text: "Free assistance and consultation for MOOC & SHYAM UGC online refresher courses.",
    icon: FaGraduationCap,
  },
  {
    title: "Conference Registration Discount",
    text: "Up to 25% discount on conference registrations organized by South Asia Management Association.",
    icon: FaPercent,
  },
];

const membershipSteps = [
  "Submit your membership enquiry with basic details.",
  "Select your preferred membership support services.",
  "Upload CV or academic profile document if required.",
  "Receive support confirmation from Edwin Incorporation.",
];

export default function OneMembershipPage() {
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your One Membership enquiry has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative min-h-[680px] overflow-hidden bg-[#1B3A6B]">
        <img
          src={heroImage}
          alt="One Membership for Discounted Services"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1200px] items-center px-5 py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
                <FaUserGraduate className="text-[#C89B3C]" />
                One Membership for Discounted Services
              </div>

              <h1 className="max-w-3xl text-[40px] font-bold leading-tight text-[#FFFFFF]">
                Join Edwin INC's One Membership
              </h1>

              <p className="mt-5 max-w-3xl text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                Join Edwin INC's One Membership for exclusive access to academic,
                research, and professional growth opportunities.
              </p>

              <p className="mt-4 max-w-3xl text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                As per this proposal after availing the comprehensive membership of
                Edwin Incorporation you will get colossal benefits on our services.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#membership-form"
                  className="rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  Apply Now
                </a>
                <a
                  href="https://wa.me/916262752168"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                >
                  Whats_app Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Membership Highlights
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                  <p className="text-[40px] font-bold leading-none text-[#1B3A6B]">
                    25%
                  </p>
                  <p className="mt-2 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Flat discount on selected academic services.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                    <p className="text-[28px] font-semibold text-[#1B3A6B]">180+</p>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                      Publication houses
                    </p>
                  </div>

                  <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                    <p className="text-[28px] font-semibold text-[#1B3A6B]">400+</p>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                      Journals support
                    </p>
                  </div>
                </div>

                <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <p className="text-[18px] font-semibold text-[#1A1A2E]">
                    Free Benefits Included
                  </p>
                  <p className="mt-2 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Editorial board certificate, Shodhparta access, digital library
                    portal access, and free website support for every member.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Get Started Now
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Comprehensive Membership Benefits
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                The One Membership plan is designed for academicians, researchers,
                authors, editors, and professionals who want discounted access to Edwin
                Incorporation services.
              </p>

              <div className="mt-8 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <img
                  src={sideImage}
                  alt="Academic membership support"
                  className="h-[280px] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      delay: index * 0.03,
                    }}
                    className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Membership Flow
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                How One Membership Works
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Apply online and share your academic or professional requirement. Edwin
                Incorporation will coordinate membership-related communication and
                support.
              </p>
            </div>

            <div className="grid gap-4">
              {membershipSteps.map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5 transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[15px] font-semibold text-[#FFFFFF]">
                    {index + 1}
                  </div>
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="membership-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Apply Now
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                One Membership Application Form
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Submit your details to apply for Edwin INC One Membership and access
                discounted academic, research, and professional services.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Get discounted access to book publication, journal publication,
                    API scorecard, and conference registrations.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Get free editorial board membership certificate, digital library
                    access, Shodhparta access, and website support.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Get free assistance and consultation for MOOC & SHYAM UGC online
                    refresher courses.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Select Your Location <span className="text-[#C0392B]">*</span>
                  </label>
                  <select
                    required
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]"
                  >
                    <option value="">-None-</option>
                    <option>India</option>
                    <option>Other Country</option>
                    <option>Mobile Number</option>
                  </select>
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    You need to select the country name, your location, or your mobile
                    number from the dropdown menu.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Last Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      Do not use 0 (zero) as the initial digit
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      With complete institute name
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Membership Interest
                    </label>
                    <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]">
                      <option value="">Select membership interest</option>
                      <option>One Membership - Edwin INC</option>
                      <option>Book Publication Discount</option>
                      <option>Journal Publication Discount</option>
                      <option>API Calculator and Scorecard</option>
                      <option>Editorial Board Membership Certificate</option>
                      <option>Digital Library Portal Access</option>
                      <option>Conference Registration Discount</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload CV / Document <span className="text-[#C0392B]">*</span>
                  </label>
                  <input
                    type="file"
                    required
                    multiple
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    Please upload CV or scan your document.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Message / Requirement
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your One Membership requirement"
                    className="w-full resize-none rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-[#D6E0F0] accent-[#1B3A6B]"
                  />
                  <p className="text-[15px] font-normal text-[#1A1A2E]">
                    I agree to the{" "}
                    <a
                      href="#terms"
                      className="font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:text-[#C89B3C]"
                    >
                      Terms & Condition
                    </a>
                    <span className="text-[#C0392B]"> *</span>
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                  >
                    Submit
                  </button>

                  <button
                    type="reset"
                    className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                  >
                    Reset
                  </button>
                </div>

                {formStatus && (
                  <p className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/916262752168"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}