import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaFileAlt,
  FaGlobe,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

const heroSlides = [
   {
    title: "Research Paper Submission Online",
    subtitle:
      "Edwins Journals collaborates with 170+ journals across Scopus, UGC-CARE, and Web of Science platforms.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
  },
  
  {
    title: "Smooth Publication Journey",
    subtitle:
      "Authors are requested to follow submission rules shared via email. Typical timelines range from 4–6 months.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },

  {
    title: "Faculty And Co-guide Registration",
    subtitle:
      "Professional academic support services for academicians, research scholars, universities, colleges, journal editors, and academic partners.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  },

  {
    title: "Smooth Publication Journey",
    subtitle:
      "Authors are requested to follow submission rules shared via email. Typical timelines range from 4–6 months.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },
];

const beforeSubmit = [
  {
    title: "Format",
    text: "Follow the journal’s template including title page, abstract, and references. Maintain citation consistency such as APA, IEEE, etc.",
    icon: FaFileAlt,
  },
  {
    title: "Originality",
    text: "Plagiarism should be below 15%. Properly cite all sources used in the manuscript.",
    icon: FaCheckCircle,
  },
  {
    title: "Figures",
    text: "Use high-resolution images of 300 dpi or above and include editable tables wherever required.",
    icon: FaBookOpen,
  },
  {
    title: "Authorship",
    text: "Include ORCID IDs and confirm the correct author order before submission.",
    icon: FaUserGraduate,
  },
  {
    title: "Cover Letter",
    text: "Clearly state the novelty, scope fit, contribution, and academic value of the submitted work.",
    icon: FaEnvelope,
  },
];

const submissionSteps = [
  "Initial Screening – formatting and plagiarism check.",
  "Peer Review – double-blind by 2–3 experts.",
  "Decision – Accept / Revise / Reject.",
  "Production – typesetting, proofing, author approval.",
  "Publication – issue release and indexing (Scopus/WoS/UGC).",
];

const benefits = [
  "Academicians & Research Scholars Only",
  "University / Organising Secretary / Registered Agencies Only",
  "Copyright Forms Support",
  "Journals List Under Consultancy",
  "Official email-based communication",
  "Publication workflow guidance",
];

const testimonials = [
  {
    name: "Research Scholar",
    role: "Academic Author",
    text: "The submission guidance helped us understand formatting, plagiarism, review stages, and publication workflow clearly.",
  },
  {
    name: "Faculty Member",
    role: "University Department",
    text: "The process was structured and professional, especially for documentation, author details, and official communication.",
  },
  {
    name: "Journal Editor",
    role: "Editorial Support",
    text: "Edwins Journals provides useful support for academic publication coordination and journal consultancy services.",
  },
];

export default function FacultyAndCoGuideRegistration() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formStatus, setFormStatus] = useState("");

  const currentSlide = heroSlides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const navLinks = useMemo(
    () => [
      "Home",
      "About us",
      "Academicians",
      "R&D/EB1",
      "Educational",
      "Pay Now",
      "Contact",
    ],
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your registration enquiry has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
  

      <header className="relative overflow-hidden bg-[#FFFFFF]">
        <div className="absolute inset-0">
          <img src={currentSlide.image}
            alt={currentSlide.title}
            className="h-full w-full object-cover opacity-20" loading="lazy" width="600" height="400" />
          <div className="absolute inset-0 bg-[#FFFFFF]/80" />
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-[1200px] items-center gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-2 text-[13px] font-medium text-[#5A6A85]">
              <FaBookOpen className="text-[#C89B3C]" />
              Edwin Group of Journal
            </div>

            <h1 className="text-[40px] font-bold leading-tight text-[#1B3A6B]">
              {currentSlide.title}
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              {currentSlide.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Edwins Journals, a division of Edwin Incorporation, collaborates with 170+
              journals across Scopus, UGC-CARE, and Web of Science platforms. To ensure a
              smooth publication journey, authors are requested to follow submission rules
              shared via email.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#registration-form"
                className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
              >
                Start Submission
              </a>
              <a
                href="#process"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
              >
                View Process
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] text-[#1B3A6B] transition duration-200 ease-in-out hover:border-[#C89B3C] hover:text-[#C89B3C]"
                aria-label="Previous slide"
              >
                <FaArrowLeft />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] text-[#1B3A6B] transition duration-200 ease-in-out hover:border-[#C89B3C] hover:text-[#C89B3C]"
                aria-label="Next slide"
              >
                <FaArrowRight />
              </button>
              <div className="flex gap-2 pl-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition duration-200 ease-in-out ${
                      activeSlide === index
                        ? "w-8 bg-[#C89B3C]"
                        : "w-2.5 bg-[#D6E0F0] hover:bg-[#C89B3C]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <div className="rounded-[12px] bg-[#EAF1FB] p-6">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Online Academic Support
              </p>
              <h2 className="mt-3 text-[28px] font-semibold leading-tight text-[#1B3A6B]">
                Research Paper Submission Online
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Academicians and Research Scholar Only
              </p>
              <div className="mt-6 grid gap-3">
                {benefits.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 transition duration-200 ease-in-out hover:border-[#C89B3C]"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B] transition duration-200 ease-in-out group-hover:text-[#C89B3C]" />
                    <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="bg-[#EAF1FB] px-5 py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Before You Submit
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Author Submission Requirements
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Follow these essential academic checks before submitting your manuscript for
                journal publication support.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beforeSubmit.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]">
                      <Icon className="text-xl transition duration-200 ease-in-out group-hover:rotate-6" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#1A1A2E]">{item.title}</h3>
                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#FFFFFF] px-5 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Submission Process
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Publication Workflow
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Typical timelines range from 4–6 months, depending on reviewer availability
                and journal workflow. Authors should whitelist Edwin’s official email for all
                communication.
              </p>
              <div className="mt-6 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  <strong className="font-semibold text-[#1B3A6B]">Note:</strong> Indexing
                  including Scopus, WoS, and UGC-CARE depends on respective databases. While
                  submissions are routed only to eligible journals, no agency can guarantee
                  indexing or fixed timelines. APCs, if applicable, are disclosed after
                  acceptance.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {submissionSteps.map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex gap-5 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[15px] font-semibold text-[#FFFFFF]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                      {step.split("–")[0].trim()}
                    </h3>
                    <p className="mt-2 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {step.split("–")[1]?.trim()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EAF1FB] px-5 py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Benefits
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Academic Support Highlights
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                A structured support experience for academicians, research scholars,
                universities, organising secretaries, and registered agencies.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <FaClipboardList className="mb-4 text-2xl text-[#1B3A6B] transition duration-200 ease-in-out group-hover:scale-110 group-hover:text-[#C89B3C]" />
                  <h3 className="text-[18px] font-semibold text-[#1A1A2E]">{item}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFFFF] px-5 py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Testimonials
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                What Academic Users Say
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <FaQuoteLeft className="text-2xl text-[#C89B3C]" />
                  <div className="mt-4 flex gap-1 text-[#C89B3C]">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {item.text}
                  </p>
                  <div className="mt-6 border-t border-[#D6E0F0] pt-4">
                    <h3 className="text-[18px] font-semibold text-[#1A1A2E]">{item.name}</h3>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
  id="registration-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-14"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Register Online
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          Submit Research Paper
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Submit your research paper details, author information, manuscript file,
          and publication requirement through the official online submission form.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <FaEnvelope className="text-[#1B3A6B]" />
            <span className="text-[15px] text-[#1A1A2E]">care@edwinepc.com</span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <FaPhoneAlt className="text-[#1B3A6B]" />
            <span className="text-[15px] text-[#1A1A2E]">+91 6262752167</span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <FaGlobe className="text-[#1B3A6B]" />
            <span className="text-[15px] text-[#1A1A2E]">
              www.academichelpstore.com
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
          <div>
            <h3 className="text-[26px] font-bold text-white">
              Research Paper Submission Form
            </h3>

            <p className="mt-1 text-[14px] text-white/75">
              Complete the research paper submission form below.
            </p>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
            📄
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <div className="max-h-[620px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="Research Paper Submission Form"
                className="block h-[1150px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=239ce4717d98bdb242939a375e58cd737b562e9db84a8761c6058098b5779dc89bf437bb240483e78210cad3553629f0gid9541df1fe8b8b60011813264e5d12a98e81efdcd4d5ecf0a1b502d37968408a6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       <section className="w-full bg-[#eef7fd] px-5 py-16">
  <div className="mx-auto max-w-[1200px]">
    <h2 className="text-center text-[36px] font-bold text-[#2f356b] font-serif">
      Journals List -
    </h2>

    <h3 className="mt-4 text-center text-[34px] font-bold text-[#2f356b] font-serif">
      (Under Consultancy)
    </h3>

    <div className="mt-12 overflow-hidden rounded-[12px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <iframe
        title="Journals List - Under Consultancy"
        src="https://creatorapp.zohopublic.in/edwininc/journals-list/report-embed/All_New_Data/RjsB1VSEeKQRCMTZ72r9rrArj9ugtOr2qDkwR0sYZUb0SXAS5W45PB2HXvG3QZZAzbpyfnqeR9rp6uZDUY5CX98D669z09frxUuB"
        width="100%"
        height="500px"
        frameBorder="0"
        allowTransparency="true"
        scrolling="auto"
      />
    </div>
  </div>
</section>

      </main>
    </div>
  );
}