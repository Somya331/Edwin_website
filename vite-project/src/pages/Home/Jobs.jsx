import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const heroImages = {
  main: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
  team: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=90",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90",
  interview: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=90",
};

const applicationCards = [
  {
    title: "Application",
    text: "Submit your profile for available career opportunities and professional roles at Edwin Incorporation.",
    icon: FaBriefcase,
    link: "#career-with-edwin-inc",
  },
  {
    title: "Partnership Programme",
    text: "Apply for collaboration, business partnership, service partnership, and professional association.",
    icon: FaHandshake,
    link: "#partnership-programme",
  },
  {
    title: "Application for Internship",
    text: "Students and freshers can apply for internship opportunities, training support, and practical exposure.",
    icon: FaUserGraduate,
    link: "#internship-application",
  },
];

const workHighlights = [
  "Professional environment for academicians, universities, colleges, journal editors, and admission services.",
  "Opportunities for internship, partnership, and career applications.",
  "Work with academic services, research support, publication services, conference services, and digital operations.",
  "Submit your profile online with CV, contact details, and area of interest.",
];

const roleOptions = [
  "Business Development Executive",
  "Customer Support Executive",
  "Social Media Handler",
  "Zoho CRM / IT Support",
  "Academic Counsellor",
  "Content Writer",
  "Research Support Executive",
  "Internship",
  "Partnership Programme",
];

const inputClass =
  "w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#8A98AD] focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10";

function ZohoFormCard({ id, kicker, title, children }) {
  return (
    <div
      id={id}
      className="glass-card mx-auto w-full max-w-[950px] overflow-hidden rounded-[30px] border border-white/70 bg-white/85 shadow-[0_30px_90px_rgba(7,28,52,.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/80"
    >
      <div className="bg-gradient-to-r from-[#031329] via-[#073B86] to-[#051B3B] px-6 py-4">
        <p className="text-[13px] font-black uppercase tracking-wide text-[#FFD35A]">
          {kicker}
        </p>

        <h2 className="mt-1 text-[26px] font-black text-white">{title}</h2>
      </div>

      <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-3">
        <div className="overflow-hidden rounded-[20px] border border-[#D6E0F0] bg-white shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

function ApplicationForm({ id, title, subtitle, type, status, onSubmit }) {
  return (
    <motion.form
      id={id}
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_14px_38px_rgba(27,58,107,0.10)] lg:p-8"
    >
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          {subtitle}
        </p>
        <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">{title}</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="text" placeholder="Full Name *" className={inputClass} />
        <input required type="email" placeholder="Email *" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="tel" placeholder="Mobile Number *" className={inputClass} />
        <select required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select Application Type
          </option>
          <option>{type}</option>
          {roleOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Current City / Location" className={inputClass} />
        <input type="text" placeholder="Qualification / Experience" className={inputClass} />
      </div>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        className={`${inputClass} file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-[#FFFFFF]`}
      />

      <textarea
        rows="4"
        placeholder="Write your message, skills, interest area, or application details"
        className={`${inputClass} resize-none`}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
        >
          Submit Application
          <FaArrowRight className="text-[13px]" />
        </button>

        <button
          type="reset"
          className="rounded-full border border-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
        >
          Reset
        </button>
      </div>

      {status && (
        <p className="rounded-[12px] border border-[#2D7A4F] bg-[#F4FFF8] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
          {status}
        </p>
      )}
    </motion.form>
  );
}

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [partnerStatus, setPartnerStatus] = useState("");
  const [internshipStatus, setInternshipStatus] = useState("");

  

  const filteredCards = useMemo(() => {
    const value = query.toLowerCase().trim();
    if (!value) return applicationCards;
    return applicationCards.filter((item) =>
      `${item.title} ${item.text}`.toLowerCase().includes(value)
    );
  }, [query]);

  const submitForm = (event, setter, message) => {
    event.preventDefault();
    setter(message);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes shineMove {
          0% { transform: translateX(-180%) rotate(18deg); opacity: 0; }
          35% { opacity: .9; }
          100% { transform: translateX(260%) rotate(18deg); opacity: 0; }
        }

        .glass-card {
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          top: -70%;
          left: -80%;
          width: 28%;
          height: 260%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), rgba(255,210,80,.38), rgba(255,255,255,.18), transparent);
          filter: blur(16px);
          opacity: 0;
          pointer-events: none;
        }

        .glass-card:hover::before {
          animation: shineMove 1.45s ease;
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-12 lg:px-8 lg:py-16">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#FFB000]/25 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />

        <div className="relative mx-auto max-w-[1300px]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black text-[#FFD35A] shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <FaBriefcase className="text-[#FFD35A]" />
                Jobs at Edwin INC
              </span>

              <h1 className="mt-6 text-[42px] font-black leading-tight text-white lg:text-[64px]">
                Build Your Career With Edwin Incorporation
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-[1.9] text-white/82">
                Apply online for jobs, internship opportunities, and partnership programmes.
                Edwin Incorporation works across academic services, universities, colleges,
                journals editors, and admission services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#job-application"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF9D00] to-[#FFD35A] px-7 py-3 text-[15px] font-black text-[#071C34] shadow-[0_16px_42px_rgba(255,176,0,.35)] transition duration-300 hover:-translate-y-1"
                >
                  Apply Now
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#application-options"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
                >
                  View Options
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="glass-card rounded-[22px] border border-white/15 bg-white/10 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/70 hover:bg-white/15">
                  <FaUsers className="text-[24px] text-[#FFD35A]" />
                  <p className="mt-3 text-[24px] font-black text-white">Team</p>
                  <p className="mt-1 text-[13px] text-white/65">Professional Culture</p>
                </div>

                <div className="glass-card rounded-[22px] border border-white/15 bg-white/10 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/70 hover:bg-white/15">
                  <FaUserGraduate className="text-[24px] text-[#FFD35A]" />
                  <p className="mt-3 text-[24px] font-black text-white">Internship</p>
                  <p className="mt-1 text-[13px] text-white/65">Students & Freshers</p>
                </div>

                <div className="glass-card rounded-[22px] border border-white/15 bg-white/10 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/70 hover:bg-white/15">
                  <FaHandshake className="text-[24px] text-[#FFD35A]" />
                  <p className="mt-3 text-[24px] font-black text-white">Partner</p>
                  <p className="mt-1 text-[13px] text-white/65">Programme</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-[28px] bg-[#FFB000]/25 lg:block" />

              <div className="relative grid gap-4">
                <div className="glass-card overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,.32)] backdrop-blur-md">
                  <img src={heroImages.main}
                    alt="Jobs at Edwin INC"
                    className="h-[360px] w-full rounded-[26px] object-cover lg:h-[430px]" loading="lazy" width="600" height="400" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <img src={heroImages.team}
                    alt="Team work"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]" loading="lazy" width="600" height="400" />
                  <img src={heroImages.office}
                    alt="Office culture"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]" loading="lazy" width="600" height="400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="application-options" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Apply Now
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Application Options
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                Select the correct application section and submit your profile online.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search application..."
                className="w-full rounded-full border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[340px]"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {filteredCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.link}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[26px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                >
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="mt-6 text-[21px] font-semibold text-[#1B3A6B]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-[#1A1A2E]">
                      {card.text}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 group-hover:text-[#C89B3C]">
                      Apply Now
                      <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Work Culture
            </p>
            <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
              Stay Connected with Us!
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Follow us on Facebook for the latest Major & Minor Project Support,
              updates and exclusive content. Applicants can stay updated with career,
              internship, partnership and academic service opportunities.
            </p>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-7 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              <FaFacebookF />
              Follow us on Facebook
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="grid gap-4"
          >
            {workHighlights.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaFileAlt />
                </div>
                <p className="text-[15px] leading-[1.75] text-[#1A1A2E]">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-10">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Online Forms
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Submit Your Application
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                Fill the relevant form below. Attach your CV or supporting document
                and share your application details.
              </p>
            </div>

            <img src={heroImages.interview}
              alt="Interview application"
              className="h-[260px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_14px_38px_rgba(27,58,107,0.10)]" loading="lazy" width="600" height="400" />
          </div>
         <div className="grid gap-6">
         <ZohoFormCard
  id="career-with-edwin-inc"
  kicker="Career Application"
  title="Career with Edwin INC"
>

  <iframe
    title="Career with Edwin INC"
    width="100%"
    height="500"
    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=26de158348063c1edfc9ad6d9b57f6013cfc563a93e3a947e8c7a579ef58a5861996ceaefe1a0ec211dd26e8e9cf1b5fgid563201e6b42013857924a77e1873d2135f199456df88f061c1cd4ff3586038c3"
    className="block w-full border-0"
    scrolling="auto"
  />
</ZohoFormCard>
          
            <ZohoFormCard
  id="partnership-programme"
  kicker="Partnership Application"
  title="Partnership Programme"
>

  <iframe
    title="Partnership Programme Zoho CRM Form"
    width="100%"
    height="500"
    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=a443df8d74518c14977077abce953612a7854b09c207d158fba80bc413b8efa1ab558ea3c27686320ccb2a46cb61bdaegid2d2e02378a105e7a856119d245aa96c14d8c47b009f59a111afc8184e24b2811"
    className="block w-full border-0"
    scrolling="auto"
  />
</ZohoFormCard>

            <ZohoFormCard
  id="internship-application"
  kicker="Internship Application"
  title="Application for Internship"
>

  <iframe
    title="Application for Internship"
    width="100%"
    height="500"
    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=51112abc98f271a6263dd1fd29565976fa602534a4908959c69abb1f87ba1a3d3cbf6408e31181bda780c28e59585ae2gid81e615699b36668458c9dfaef197d543fec8c64e6e2aa6e20992204e1a6cd988"
    className="block w-full border-0"
    scrolling="auto"
  />
   </ZohoFormCard>

   <ZohoFormCard
  id="schedule-meeting"
  kicker="Meeting Application"
  title="Schedule Meeting"
>

  <iframe
    title="Schedule Meeting"
    width="100%"
    height="500"
    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=09c1ba8807a47da8593d7e5cef940856613db46cd890907d627fe190e9c64175f0badb869d7f41d1481a730090ddb372gidf6805627c413a1d9346818821e3c81fe75b92f9fbaf81e434d986bb1b5f07c2d"
    className="block w-full border-0"
    scrolling="auto"
  />
</ZohoFormCard>

   </div>
        </div>
      </section>
    </div>
  );
}
