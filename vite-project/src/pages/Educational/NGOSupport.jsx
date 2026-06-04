import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBalanceScale,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaFileAlt,
  FaFileSignature,
  FaHandsHelping,
  FaHandshake,
  FaRegFileAlt,
  FaSearch,
  FaShieldAlt,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const heroImages = {
  main: "/images/ngo-support-hero.jpg",
  documents: "/images/ngo-documents.jpg",
  csr: "/images/csr-funding.jpg",
};

const fallbackImages = {
  main: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=90",
  documents:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=90",
  csr:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=90",
};

const services = [
  {
    title: "NGO Registration Support",
    text: "Complete support for NGO registration and documentation preparation.",
    icon: FaUniversity,
  },
  {
    title: "80G & 12A Assistance",
    text: "Documentation assistance for 80G and 12A related NGO compliance support.",
    icon: FaShieldAlt,
  },
  {
    title: "CSR Funding Assistance",
    text: "Support for CSR funding approach, documentation, and proposal preparation.",
    icon: FaHandshake,
  },
  {
    title: "Project Report Preparation",
    text: "Professional project reports for NGO funding and institutional presentation.",
    icon: FaRegFileAlt,
  },
  {
    title: "ITR Filing Support",
    text: "Support for ITR filing, audit report, balance sheet, and related documentation.",
    icon: FaBalanceScale,
  },
  {
    title: "CSR Company Data",
    text: "Access and guidance for approaching CSR companies for funding opportunities.",
    icon: FaChartLine,
  },
];

const processSteps = [
  {
    title: "Requirement Review",
    text: "Share your NGO details, registration status, and funding/support requirement.",
  },
  {
    title: "Document Planning",
    text: "We identify required documents such as registration papers, project reports, audit details, and compliance records.",
  },
  {
    title: "Application & Support",
    text: "Our team assists with preparation, filing support, and guidance for NGO services and CSR funding.",
  },
];

const highlights = [
  "Service to NGO from registration till funding.",
  "Support for 80G, 12A, CSR, project reports, and compliance documentation.",
  "Affordable documentation and consultancy support.",
  "ITR filing, audit report, and balance sheet support.",
  "CSR company data support to help NGOs approach funding sources.",
];

const inputClass =
  "w-full rounded-[14px] border border-[#D6E0F0] bg-white px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#8A98AD] focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10";

function NgoSupportForm({ status, onSubmit }) {
  return (
    <motion.form
      id="ngo-support-form"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 rounded-[30px] border border-[#D6E0F0] bg-white p-6 shadow-[0_20px_55px_rgba(27,58,107,0.12)] lg:p-8"
    >
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          Submit Application
        </p>
        <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
          NGO Support Application Form
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="text" placeholder="Applicant Name *" className={inputClass} />
        <input required type="email" placeholder="Email Address *" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="tel" placeholder="Mobile Number *" className={inputClass} />

        <select required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select Service Requirement
          </option>
          <option>NGO Registration Support </option>
          <option>80G Assistance</option>
          <option>12A Assistance</option>
          <option>CSR Funding Assistance</option>
          <option>Project Report Preparation</option>
          <option>ITR Filing Support</option>
          <option>Audit Report / Balance Sheet Support</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="NGO Name / Trust / Society Name" className={inputClass} />
        <input type="text" placeholder="City / State" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Registration Status" className={inputClass} />
        <input type="text" placeholder="Website URL, if available" className={inputClass} />
      </div>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        className={`${inputClass} file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-white`}
      />

      <textarea
        rows="4"
        placeholder="Write your NGO service requirement, CSR funding need, document support, or project report details"
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

export default function NgoSupportPage() {
  const [formStatus, setFormStatus] = useState("");

  

  const submitForm = (event) => {
    event.preventDefault();
    setFormStatus("Your NGO support application has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 lg:px-8 lg:py-20">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FFB000]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black text-[#FFD35A] shadow-sm backdrop-blur-md">
                <FaHandsHelping className="text-[#FFD35A]" />
                NGO Support
              </span>

              <h1 className="mt-6 text-[36px] font-black leading-tight text-white lg:text-[52px]">
                NGO Support Services from Registration to Funding
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-[1.9] text-white/82">
                We are giving service to NGO from registration till funding. If you
                want any services like 80G, 12A, CSR, we will make all your documents
                at affordable prices and very low from other consultancies. We also
                make project reports for your NGO.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ngo-support-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-7 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
                >
                  Submit Application
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["80G", "Documentation", FaFileAlt],
                  ["12A", "Assistance", FaShieldAlt],
                  ["CSR", "Funding Support", FaHandshake],
                ].map(([title, sub, Icon]) => (
                  <div
                    key={title}
                    className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(8,34,74,.10)] transition duration-300 hover:-translate-y-1 hover:border-[#FFB000]"
                  >
                    <Icon className="text-[24px] text-[#FFB000]" />
                    <p className="mt-3 text-[24px] font-black text-[#082B63]">
                      {title}
                    </p>
                    <p className="mt-1 text-[13px] text-[#5A6A85]">{sub}</p>
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
                    alt="NGO support services"
                    className="h-[360px] w-full rounded-[26px] object-cover lg:h-[430px]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.main;
                    }} loading="lazy" width="600" height="400" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <img src={heroImages.documents}
                    alt="NGO documents"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.documents;
                    }} loading="lazy" width="600" height="400" />

                  <img src={heroImages.csr}
                    alt="CSR funding support"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.csr;
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
                About NGO Support
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Complete Documentation and Funding Support for NGOs
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                ALL services will be done: ITR filing, audit report, balance sheet,
                documentation, NGO registration support, 80G, 12A, CSR documentation,
                and project report preparation.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                We also have top CSR companies data to get funds and support NGOs with
                professional documents for funding approach and compliance requirements.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className={`group rounded-[24px] border border-[#D6E0F0] p-6 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C] ${index === 0
                    ? "bg-[#1B3A6B] text-white md:col-span-2"
                    : "bg-white"
                    }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-[16px] transition duration-300 ${index === 0
                      ? "bg-[#C89B3C] text-white"
                      : "bg-[#EAF1FB] text-[#1B3A6B] group-hover:bg-[#C89B3C] group-hover:text-white"
                      }`}
                  >
                    <FaCheckCircle />
                  </div>

                  <p
                    className={`mt-5 text-[15px] font-semibold leading-[1.7] ${index === 0 ? "text-white" : "text-[#1A1A2E]"
                      }`}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Services
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              NGO Documentation and Funding Services
            </h2>

            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Apply for NGO registration, 80G, 12A, CSR, project report, ITR filing,
              audit report, balance sheet, and funding support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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

                    <h3 className="mt-6 text-[21px] font-semibold text-[#1B3A6B]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-[#1A1A2E]">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-[#D6E0F0] bg-[#F6F9FD] p-6 shadow-[0_18px_42px_rgba(27,58,107,0.10)]">
              <div className="rounded-[24px] bg-[#1B3A6B] p-7 text-white">
                <FaSearch className="text-[38px] text-[#C89B3C]" />

                <h3 className="mt-5 text-[28px] font-bold">
                  Need CSR Funding Support?
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-white">
                  We help NGOs prepare project reports, arrange proper documents,
                  and guide them for CSR company approach and funding requirements.
                </p>

                <a
                  href="#ngo-support-form"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
                >
                  Apply Now
                  <FaArrowRight />
                </a>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Application Process
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Simple Process for NGO Support Applications
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Submit your NGO details and service requirement. Our team will review
                your details and guide you with the required documentation and next steps.
              </p>

              <div className="mt-8 grid gap-5">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex gap-5 rounded-[22px] border border-[#D6E0F0] bg-white p-6 shadow-[0_8px_26px_rgba(27,58,107,0.08)] transition duration-200 hover:border-[#C89B3C]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[20px] font-extrabold text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-[20px] font-semibold text-[#1B3A6B]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.7] text-[#1A1A2E]">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ngo-support-form" className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-16 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
              <FaFileSignature className="text-[#C89B3C]" />
              NGO Support Form
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
              Apply for NGO Support
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />

            <p className="text-[15px] leading-[1.7] text-[#5A6A85] max-w-2xl mx-auto">
              Submit your NGO service requirement for registration, 80G, 12A, CSR,
              project report, ITR filing, audit report, balance sheet, or funding support.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[22px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[720px] mx-auto relative"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-lg font-bold">
                  NGO Support Application Form
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
                  title="Zoho CRM NGO Support Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=f2855a233217efef0edb982313d419a5e79d8c26867c8b0211d721ea7fdb074784cb81a3b50f0e01027857928341d70egid758c5e4e6f8ed32157ff469b40ba1e6298367f1c3de42bf364a7115737de6cbb"
                  width="100%"
                  height="460"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: "none",
                    width: "100%",
                    display: "block",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
