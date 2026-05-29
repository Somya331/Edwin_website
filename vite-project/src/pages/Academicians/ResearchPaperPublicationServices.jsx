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
  FaWhatsapp,
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
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="h-full w-full object-cover opacity-20"
          />
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

        <section id="registration-form" className="bg-[#EAF1FB] px-5 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Register Online
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Research Paper Submission Form
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Submit your enquiry for faculty, guide, co-guide, or academic publication
                support. Our team will communicate through official email and phone.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4">
                  <FaEnvelope className="text-[#1B3A6B]" />
                  <span className="text-[15px] font-normal text-[#1A1A2E]">
                    care@edwinepc.com
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4">
                  <FaPhoneAlt className="text-[#1B3A6B]" />
                  <span className="text-[15px] font-normal text-[#1A1A2E]">
                    +91 6262752167
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4">
                  <FaGlobe className="text-[#1B3A6B]" />
                  <span className="text-[15px] font-normal text-[#1A1A2E]">
                    www.academichelpstore.com
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Applicant Type
                  </label>
                  <select
                    required
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]"
                  >
                    <option value="">Select applicant type</option>
                    <option>Academician</option>
                    <option>Research Scholar</option>
                    <option>Faculty Member</option>
                    <option>University / Organising Secretary</option>
                    <option>Registered Agency</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                  Service Interest
                </label>
                <select
                  required
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]"
                >
                  <option value="">Select service</option>
                  <option>Faculty And Co-guide Registration</option>
                  <option>Research Paper Submission Online</option>
                  <option>Copyright Forms</option>
                  <option>Journals List Under Consultancy</option>
                  <option>Publication Support</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your enquiry"
                  className="w-full resize-none rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
              >
                Submit Registration Enquiry
              </button>

              {formStatus && (
                <p className="mt-4 rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-[15px] font-normal text-[#2D7A4F]">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="bg-[#1B3A6B] px-5 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#C89B3C]">
                Keep in Touch with Us
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#FFFFFF]">
                Need academic publication or registration support?
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                Contact Edwin Incorporation for research paper submission, faculty and
                co-guide registration, copyright forms, and journal consultancy services.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019
                  </p>
                </div>
                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    India: 011-66155019 | Phone: +91 6262752167 | Phone: +12792029553
                  </p>
                </div>
                <div className="flex gap-3">
                  <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Email: care@edwinepc.com
                  </p>
                </div>
              </div>

              <a
                href="#registration-form"
                className="mt-6 inline-flex rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#1B3A6B]"
              >
                Start Submission
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/916262752167"
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