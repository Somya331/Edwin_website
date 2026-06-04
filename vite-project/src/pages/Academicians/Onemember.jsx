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

  

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your One Membership enquiry has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative min-h-[680px] overflow-hidden bg-[#1B3A6B]">
        <img src={heroImage}
          alt="One Membership for Discounted Services"
          className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" width="600" height="400" />
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
                <img src={sideImage}
                  alt="Academic membership support"
                  className="h-[280px] w-full object-cover" loading="lazy" width="600" height="400" />
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

      <section
  id="membership-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-14"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Now
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          One Membership Application Form
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Submit your details to apply for Edwin INC One Membership and access
          discounted academic, research, and professional services.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            "Get discounted access to book publication, journal publication, API scorecard, and conference registrations.",
            "Get free editorial board membership certificate, digital library access, Shodhparta access, and website support.",
            "Get free assistance and consultation for MOOC & SHYAM UGC online refresher courses.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 shadow-sm backdrop-blur"
            >
              <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
              <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
          <div>
            <h3 className="text-[26px] font-bold text-white">
              One Membership Form
            </h3>

            <p className="mt-1 text-[14px] text-white/75">
              Complete the one membership application form below.
            </p>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
            🎓
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <div className="max-h-[540px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="One Membership Application Form"
                className="block h-[800px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=2f17454868bf09341e5c89e93cae5c66098771aeab69c15061acc1a9f452e91219bc76ddaa3e3d1bde018056644ae4dfgide3b6acdb98e0676c62b30909c9429d61100792d88191375e0a0726ee04a37a6c"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}