import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaCogs,
  FaDatabase,
  FaDigitalTachograph,
  FaFileAlt,
  FaFileSignature,
  FaGlobe,
  FaIdCard,
  FaLayerGroup,
  FaNewspaper,
  FaSearch,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const heroImages = {
  main: "/images/jhb-hero.jpg",
  journal: "/images/jhb-journal.jpg",
  editor: "/images/jhb-editor.jpg",
  publishing: "/images/jhb-publishing.jpg",
};

const applicationServices = [
  {
    title: "Apply For Opening Journal Services",
    subtitle: "Journal Launch Support",
    text: "Support for starting and managing a journal with professional editorial, technical, and publishing assistance.",
    icon: FaNewspaper,
    link: "#opening-journal-services",
  },
  {
    title: "Technical Support For Indexing",
    subtitle: "Indexing Assistance",
    text: "Guidance and technical support for indexing preparation, journal profile improvement, and documentation.",
    icon: FaCogs,
    link: "#services",
  },
  {
    title: "Apply for Print and E ISSN Allotment Support",
    subtitle: "ISSN Support",
    text: "Assistance for Print ISSN and E-ISSN application, documentation, and publisher/journal profile readiness.",
    icon: FaIdCard,
    link: "#services",
  },
  {
    title: "Free DOI - Apply Now",
    subtitle: "DOI Support",
    text: "Apply for DOI support and article-level digital identifier assistance for journal publication records.",
    icon: FaDigitalTachograph,
    link: "#services",
  },
  {
    title: "Impact Factor Services",
    subtitle: "Impact Factor",
    text: "Apply for impact factor calculation and journal performance assessment support.",
    icon: FaStar,
    link: "#impact-factor",
  },
  {
    title: "Paid DOI - Crossref",
    subtitle: "Crossref DOI",
    text: "Support for paid DOI allocation, metadata preparation, and journal article DOI processing.",
    icon: FaDatabase,
    link: "#services",
  },
];

const portalFeatures = [
  {
    title: "Online Article Submission",
    label: "System",
    text: "Structured submission workflow for authors, editors, reviewers, and journal administrators.",
    icon: FaFileAlt,
    FaFileSignature,
  },
  {
    title: "Editorial",
    label: "Control Panel",
    text: "Editorial control support for managing submissions, article review, and publication workflow.",
    icon: FaClipboardList,
  },
  {
    title: "Online",
    label: "Review Unit",
    text: "Review unit support to manage peer-review communication and article evaluation process.",
    icon: FaShieldAlt,
  },
  {
    title: "Free DOI and Pluralism",
    label: "Reports",
    text: "DOI, metadata, reporting, and publication support for journal editors and publishers.",
    icon: FaLayerGroup,
  },
];

const stats = [
  { value: "10+", label: "Years Journal Editor Services" },
  { value: "200+", label: "Customers in India and Abroad" },
  { value: "300+", label: "Services Delivered" },
  { value: "Global", label: "Indexing Support Vision" },
];

const indexingAgencies = [
  "Scopus",
  "WeS",
  "NAAS",
  "UGC CARE",
  "SCI",
  "Other world indexing agencies",
];

const formTypes = ["Opening Journal Services", "Impact Factor Services"];

const inputClass =
  "w-full rounded-[12px] border border-[#D6E0F0] bg-white px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#8A98AD] focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10";

function ApplicationForm({ id, title, subtitle, defaultType, status, onSubmit }) {
  return (
    <motion.form
      id={id}
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 rounded-[28px] border border-[#D6E0F0] bg-white p-6 shadow-[0_14px_38px_rgba(27,58,107,0.10)] lg:p-8"
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
        <select required className={inputClass} defaultValue={defaultType}>
          {formTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Journal Name / Proposed Journal Name" className={inputClass} />
        <input type="text" placeholder="Publisher / Institution Name" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Country / Location" className={inputClass} />
        <input type="text" placeholder="Website URL, if available" className={inputClass} />
      </div>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        className={`${inputClass} file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-white`}
      />

      <textarea
        rows="4"
        placeholder="Write your requirement, journal details, indexing need, impact factor support, or journal service details"
        className={`${inputClass} resize-none`}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-[#C89B3C]"
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

export default function JournalsHelpBoardPage() {
  const [search, setSearch] = useState("");
  const [openingStatus, setOpeningStatus] = useState("");
  const [impactStatus, setImpactStatus] = useState("");

  

  const filteredServices = useMemo(() => {
    const value = search.toLowerCase().trim();
    if (!value) return applicationServices;
    return applicationServices.filter((item) =>
      `${item.title} ${item.subtitle} ${item.text}`.toLowerCase().includes(value)
    );
  }, [search]);

  const submitForm = (event, setter, message) => {
    event.preventDefault();
    setter(message);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 lg:px-8 lg:py-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#FFB000]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />

        <div className="relative mx-auto max-w-[1300px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black text-[#FFD35A] shadow-sm backdrop-blur-md">
                <FaNewspaper className="text-[#FFD35A]" />
                Journals Help Board
              </span>

              <h1 className="mt-6 text-[36px] font-black leading-tight text-white lg:text-[52px]">
                EJMS/DOI/Indexing/Membership Portal
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-[1.9] text-white/82">
                Edwin Incorporation has been providing services to Journal Editors for the past
                10 years under the name Journal Health Board of India. The team supports journal
                editors in journal services, DOI, indexing, ISSN, impact factor, and membership portal solutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#apply-now"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-7 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
                >
                  Apply Now
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(8,34,74,.10)] transition duration-300 hover:-translate-y-1 hover:border-[#FFB000]"
                  >
                    <p className="text-[26px] font-black text-[#082B63]">{item.value}</p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-[#5A6A85]">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-[28px] bg-[#C89B3C]/20 lg:block" />
              <div className="relative grid gap-4">
                <div className="overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md">
                  <img src={heroImages.main}
                    alt="Journal Help Board"
                    className="h-[360px] w-full rounded-[26px] object-cover lg:h-[430px]"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=90";
                    }} loading="lazy" width="600" height="400" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <img src={heroImages.journal}
                    alt="Online journal portal"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90";
                    }} loading="lazy" width="600" height="400" />
                  <img src={heroImages.editor}
                    alt="Journal editor support"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=90";
                    }} loading="lazy" width="600" height="400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About Journal Health Board of India
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Services for Journal Editors and Publishers
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Edwin Incorporation has successfully delivered services to over 200 customers
                in India and abroad, with more than 300 services delivered. The organization
                is committed to providing quality services to journal editors and supports
                them in getting their journals indexed in various agencies.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Recently, Edwin Incorporation has started DOI services and impact factor
                calculation services for journal editors. DOI services help journal editors
                provide digital object identifiers for research papers, while impact factor
                calculation is provided based on Thomson Reuters instructions.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {indexingAgencies.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="group rounded-[22px] border border-[#D6E0F0] bg-white p-6 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:bg-[#C89B3C] group-hover:text-white">
                    <FaCheckCircle />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold text-[#1B3A6B]">{item}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#5A6A85]">
                    Journal indexing preparation and technical support.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Applications
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Journal Services Applications
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                Select the service you need and apply online for journal services or
                impact factor support.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search service..."
                className="w-full rounded-full border border-[#D6E0F0] bg-white py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[340px]"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  key={service.title}
                  href={service.link}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[26px] border border-[#D6E0F0] bg-white p-7 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                >
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#1B3A6B] text-white transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                      <Icon className="text-2xl" />
                    </div>

                    <p className="mt-6 text-[13px] uppercase tracking-wide text-[#5A6A85]">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-2 text-[21px] font-semibold text-[#1B3A6B]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-[#1A1A2E]">
                      {service.text}
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

      <section className="bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Portal Services
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                DOI/EJMS/Indexing Support/Portal for Membership
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Edwin Incorporation provides high-quality services to journal editors with
                a wide range of support aimed at research and publishing needs, including
                article submission systems, editorial panels, review units, DOI services,
                reports, indexing support, and membership portals.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {portalFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="rounded-[22px] border border-[#D6E0F0] bg-white p-6 shadow-[0_8px_26px_rgba(27,58,107,0.08)] transition duration-200 hover:border-[#C89B3C]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#1B3A6B] text-white">
                        <Icon />
                      </div>
                      <h3 className="mt-5 text-[20px] font-semibold text-[#1B3A6B]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[15px] font-medium text-[#C89B3C]">
                        {feature.label}
                      </p>
                      <p className="mt-3 text-[14px] leading-[1.7] text-[#1A1A2E]">
                        {feature.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[28px] bg-[#C89B3C]/20" />
              <img src={heroImages.publishing}
                alt="Journal publishing services"
                className="relative h-[560px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_20px_50px_rgba(27,58,107,0.12)]"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=90";
                }} loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      <section id="apply-now" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Apply Online
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Journal Services & Impact Factor Forms
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Submit your requirement for opening journal services or impact factor support.
            </p>
          </div>

          <div className="grid gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
              id="opening-journal-services"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

              <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-white text-lg font-bold">
                    Opening Journal Services Application Form
                  </h3>
                  <p className="text-white/75 text-sm mt-1">
                    Fill all required details carefully
                  </p>
                </div>

                <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                  <FaFileSignature className="text-[#C89B3C] text-xl" />
                </div>
              </div>

              <div className="relative w-full bg-white p-3">
                <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
                  <iframe
                    title="Opening Journal Services Zoho CRM Web Form"
                    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=a58efddd82d2bd8d1b2f949ec81be9e7607d2b613584f9576f4a91f93fa3130ddbe906e561730fd77844bf73a930031agidc73c6b8a4ba259224e5f8a712a4ff055131563721160c3febc379eaac27caa0a"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="yes"
                    width="100%"
                    height="720"
                    style={{
                      border: "none",
                      width: "100%",
                      minWidth: "610px",
                      display: "block",
                      backgroundColor: "white",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
              id="impact-factor"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

              <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-white text-lg font-bold">
                    Impact Factor Application Form
                  </h3>
                  <p className="text-white/75 text-sm mt-1">
                    Fill all required details carefully
                  </p>
                </div>

                <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                  <FaFileSignature className="text-[#C89B3C] text-xl" />
                </div>
              </div>

              <div className="relative w-full bg-white p-3">
                <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
                  <iframe
                    title="Impact Factor Zoho CRM Web Form"
                    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=7a198ff8553fd9083c84064f3346ec18e84c9609b42bb1b497bffeaf36839012b20f3685d6127a8c22a6373c6c9ff199gid275f0e4fcfd2b5dab2554a1b8750dcc32228307f6dbf65da4f1beddf67e1bc54"
                    width="100%"
                    height="720"
                    frameBorder="0"
                    scrolling="yes"
                    width="100%"
                    height="720"
                    style={{
                      border: "none",
                      width: "100%",
                      minWidth: "610px",
                      display: "block",
                      backgroundColor: "white",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
