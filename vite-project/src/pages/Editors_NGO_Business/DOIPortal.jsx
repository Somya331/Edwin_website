import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaClipboardCheck,
  FaDatabase,
  FaFileAlt,
  FaFileSignature,
  FaHashtag,
  FaLink,
  FaQuestionCircle,
  FaQuoteLeft,
  FaSearch,
  FaShieldAlt,
  FaUpload,
} from "react-icons/fa";

const heroImages = {
  main: "/images/doi-hero.jpg",
  metadata: "/images/doi-metadata.jpg",
  research: "/images/doi-research.jpg",
};

const fallbackImages = {
  main: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=90",
  metadata:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90",
  research:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=90",
};

const doiBenefits = [
  "Permanent identification for your research work",
  "Improves credibility of academic publications",
  "Supports citation tracking and referencing",
  "Helps increase research visibility",
  "Reduces broken-link and access issues",
];

const doiServices = [
  {
    title: "DOI Registration Help",
    text: "Guidance and assistance for registering DOI for eligible academic and research publications.",
    icon: FaHashtag,
  },
  {
    title: "Metadata Preparation",
    text: "Support in preparing accurate title, author, abstract, keyword, journal, and publication metadata.",
    icon: FaDatabase,
  },
  {
    title: "Research Visibility",
    text: "Improve online discoverability and academic presence of your research through DOI-based linking.",
    icon: FaSearch,
  },
  {
    title: "Journal Support",
    text: "DOI assistance for journals, conference papers, proceedings, and research publication platforms.",
    icon: FaBookOpen,
  },
  {
    title: "Publication Review",
    text: "Basic checking of publication details to ensure proper DOI-related documentation and formatting.",
    icon: FaClipboardCheck,
  },
  {
    title: "Fast Assistance",
    text: "Quick and reliable support for researchers who need DOI guidance for their academic work.",
    icon: FaShieldAlt,
  },
];

const processSteps = [
  {
    title: "Submit Details",
    text: "Share your research paper, journal details, author information, and publication requirements.",
  },
  {
    title: "Document Review",
    text: "We review your details and guide you regarding DOI eligibility and metadata requirements.",
  },
  {
    title: "DOI Support",
    text: "Our team assists you with the DOI registration process and proper linking guidance.",
  },
];

const comparisonRows = [
  {
    feature: "Purpose",
    doi: "Identifies academic content permanently",
    url: "Shows web location only",
  },
  {
    feature: "Stability",
    doi: "Highly stable and permanent",
    url: "Can change or break",
  },
  {
    feature: "Academic Value",
    doi: "Preferred for citation and referencing",
    url: "Less reliable for academic use",
  },
  {
    feature: "Discoverability",
    doi: "Improves research indexing and tracking",
    url: "Limited discoverability support",
  },
];

const faqs = [
  {
    question: "Can every research paper get a DOI?",
    answer:
      "DOI assignment depends on publication type, publisher policies, metadata quality, and registration agency requirements.",
  },
  {
    question: "Is DOI useful for citation?",
    answer:
      "Yes. DOI helps readers and citation systems locate the original publication accurately and reliably.",
  },
  {
    question: "Do you provide DOI support for journals?",
    answer:
      "Yes. We provide DOI-related assistance for journals, papers, proceedings, and academic publication platforms.",
  },
  {
    question: "How can I start?",
    answer:
      "You can contact Academic Help Store with your publication details, and our team will guide you through the next steps.",
  },
];

const inputClass =
  "w-full rounded-[14px] border border-[#D6E0F0] bg-white px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#8A98AD] focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10";

function DoiForm({ status, onSubmit }) {
  return (
    <motion.form
      id="submit-doi"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 rounded-[30px] border border-[#D6E0F0] bg-white p-6 shadow-[0_20px_55px_rgba(27,58,107,0.12)] lg:p-8"
    >
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          Submit Papers for DOI
        </p>
        <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
          DOI Registration Assistance Form
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="text" placeholder="Full Name *" className={inputClass} />
        <input required type="email" placeholder="Email Address *" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="tel" placeholder="Mobile Number *" className={inputClass} />

        <select required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select DOI Requirement
          </option>
          <option>DOI Registration Help</option>
          <option>Metadata Preparation</option>
          <option>Journal DOI Support</option>
          <option>Conference Paper DOI</option>
          <option>Proceedings DOI Support</option>
          <option>Research Publication DOI</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Paper / Article Title" className={inputClass} />
        <input type="text" placeholder="Journal / Publisher Name" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Author Name(s)" className={inputClass} />
        <input type="text" placeholder="Publication URL, if available" className={inputClass} />
      </div>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        className={`${inputClass} file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-white`}
      />

      <textarea
        rows="4"
        placeholder="Write DOI requirement, publication details, metadata requirement, or support message"
        className={`${inputClass} resize-none`}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-[#C89B3C]"
        >
          Submit DOI Request
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

export default function DoiPage() {
  const [formStatus, setFormStatus] = useState("");

  

  const submitForm = (event) => {
    event.preventDefault();
    setFormStatus("Your DOI assistance request has been prepared successfully.");
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
                <FaLink className="text-[#FFD35A]" />
                DOI Registration Assistance | Academic Help Store
              </span>

              <h1 className="mt-6 text-[36px] font-black leading-tight text-white lg:text-[52px]">
                Increase Citation and DOI with Edwin for Research Papers
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-[1.9] text-white/82">
                Get professional DOI-related support for research papers, journal
                articles, books, reports, conference papers, proceedings, and academic
                publication platforms.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#submit-doi"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-7 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
                >
                  Submit Papers for DOI
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#doi-services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
                >
                  View DOI Services
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Stable", "Permanent Identity", FaLink],
                  ["Better", "Discoverability", FaSearch],
                  ["Citation", "Tracking Support", FaBookOpen],
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
                    alt="DOI Registration Assistance"
                    className="h-[360px] w-full rounded-[26px] object-cover lg:h-[430px]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.main;
                    }} loading="lazy" width="600" height="400" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <img src={heroImages.metadata}
                    alt="Metadata preparation"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.metadata;
                    }} loading="lazy" width="600" height="400" />

                  <img src={heroImages.research}
                    alt="Research visibility"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.research;
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
                What is a DOI?
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                A Permanent Digital Identity for Academic Content
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                A Digital Object Identifier, commonly known as DOI, is a unique and
                permanent digital identity assigned to academic content such as research
                papers, journal articles, books, reports, and datasets.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Unlike a normal website URL, a DOI remains stable and helps readers,
                researchers, and indexing platforms locate your publication reliably
                over time.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {doiBenefits.map((item, index) => (
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

      <section id="doi-services" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Our DOI Services
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Professional DOI-Related Support
            </h2>

            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              We assist researchers, journals, institutions, and publishers with
              professional DOI-related support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doiServices.map((service, index) => {
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
                <FaQuoteLeft className="text-[34px] text-[#C89B3C]" />
                <h3 className="mt-5 text-[28px] font-bold">
                  Ready to Submit Papers for DOI?
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-white">
                  Share your publication details and our team will guide you through
                  DOI eligibility, metadata requirements, and DOI-related support.
                </p>
                <a
                  href="#submit-doi"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
                >
                  Submit Now
                  <FaArrowRight />
                </a>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                How Our DOI Assistance Works
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                A Simple Process for Researchers, Authors and Publishers
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                A simple process designed for researchers, authors, and academic
                publishers.
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

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              DOI vs Normal URL
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Understand Why DOI is Preferred in Academic Publishing
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-white shadow-[0_12px_34px_rgba(27,58,107,0.10)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] border-collapse">
                <thead>
                  <tr className="bg-[#1B3A6B] text-left text-white">
                    <th className="px-5 py-4 text-[14px] font-bold">Feature</th>
                    <th className="px-5 py-4 text-[14px] font-bold">DOI</th>
                    <th className="px-5 py-4 text-[14px] font-bold">Normal URL</th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-t border-[#D6E0F0] ${index % 2 === 0 ? "bg-white" : "bg-[#F8FBFF]"
                        }`}
                    >
                      <td className="px-5 py-4 text-[15px] font-bold text-[#1B3A6B]">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                        {row.doi}
                      </td>
                      <td className="px-5 py-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                        {row.url}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Common Questions About DOI and Academic Publication Support
              </h2>
            </div>

            <div className="grid gap-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="rounded-[22px] border border-[#D6E0F0] bg-white p-6 shadow-[0_8px_24px_rgba(27,58,107,0.07)] transition duration-200 hover:border-[#C89B3C]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#EAF1FB] text-[#1B3A6B]">
                      <FaQuestionCircle />
                    </div>

                    <div>
                      <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="submit-doi" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Submit Papers for DOI
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Start Your DOI Assistance Request
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Submit your paper and publication details. Our team will review your
              requirement and guide you regarding DOI registration assistance and support.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[22px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[720px] mx-auto relative"          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-xl font-bold">
                  DOI Registration Assistance Form
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  Fill all required details carefully
                </p>
              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                <FaFileSignature className="text-[#C89B3C] text-2xl" />
              </div>
            </div>

            <div className="relative w-full bg-white p-4 sm:p-6">
              <div className="rounded-[20px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
                <iframe
                  title="DOI Registration Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=e639355228678de75411d6d254b98d70de877ce17221c9afba7642cfc8300664d19835e1c517f7df2859b7b222f43fc3gidd41e813e7ef20bdb317c1adc29443978d8bebac396c12b4f896257e8aa82d4d3"
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
