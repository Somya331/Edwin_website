import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBalanceScale,
  FaCertificate,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegFileAlt,
  FaRocket,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80";

const patentImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80";

const innovationImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80";

const supportCards = [
  {
    title: "Patent Registration Support",
    text: "Edwin Incorporation provides patent registration services designed to cater to all disciplines.",
    icon: FaCertificate,
  },
  {
    title: "Legal Services to Academicians",
    text: "Legal support is available for academicians who need assistance for intellectual property and academic documentation.",
    icon: FaBalanceScale,
  },
  {
    title: "Expert Guidance",
    text: "Our team of experts is dedicated to guiding you through a streamlined and efficient process.",
    icon: FaUserTie,
  },
  {
    title: "Innovation Protection",
    text: "Protect your groundbreaking inventions, brilliant ideas, and valuable innovations with professional support.",
    icon: FaShieldAlt,
  },
];

const processSteps = [
  {
    title: "Share Your Innovation",
    text: "Submit your idea, invention, research concept, or academic innovation details through the application form.",
    icon: FaLightbulb,
  },
  {
    title: "Documentation Review",
    text: "Your submitted patent-related information and supporting documents are reviewed by the support team.",
    icon: FaFileAlt,
  },
  {
    title: "Legal & Patent Support",
    text: "Guidance is provided for patent registration, legal support, and intellectual property process requirements.",
    icon: FaBalanceScale,
  },
  {
    title: "Registration Coordination",
    text: "Edwin Incorporation coordinates the patent support process with the aim of streamlined completion.",
    icon: FaHandshake,
  },
];

const highlights = [
  "Patent registration services for all disciplines",
  "Support for researchers, innovators, academicians, and institutions",
  "Expert assistance for securing patents and legal support",
  "Streamlined and efficient patent support process",
  "Potential to complete registration in just 90 days",
  "Guidance for safeguarding valuable innovations",
];

const serviceOptions = [
  "Patent Registration",
  "Patent Support Application",
  "Legal Services to Academicians",
  "Innovation Documentation Support",
  "Research Idea Protection Support",
  "Institutional Patent Support",
];

export default function PatentSupportPage() {
  const [formStatus, setFormStatus] = useState("");
  const [legalFormStatus, setLegalFormStatus] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your patent support application has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleLegalSubmit = (event) => {
    event.preventDefault();
    setLegalFormStatus("Your legal services application has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative overflow-hidden bg-[#FFFFFF]">
        <div className="grid min-h-[680px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative flex items-center bg-[#1B3A6B] px-5 py-20">
            <div className="absolute inset-0">
              <img src={heroImage}
                alt="Patent support and legal documentation"
                className="h-full w-full object-cover opacity-20" loading="lazy" width="600" height="400" />
              <div className="absolute inset-0 bg-[#1B3A6B]/85" />
            </div>

            <div className="relative mx-auto w-full max-w-[620px] lg:mr-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
                  <FaLightbulb className="text-[#C89B3C]" />
                  Apply for Edwin Patent Support Application
                </div>

                <h1 className="text-[40px] font-bold leading-tight text-[#FFFFFF]">
                  Protect Your Research and Inventions
                </h1>

                <p className="mt-5 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  Edwin Incorporation is excited to announce our new patent registration
                  services, designed to cater to all disciplines.
                </p>

                <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  Our team of experts is dedicated to guiding you through a streamlined
                  and efficient process, ensuring the protection of your groundbreaking
                  inventions and brilliant ideas.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#patent-form"
                    className="rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                  >
                    Apply Now
                  </a>

                  <a
                    href="#legal-service-form"
                    className="rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                  >
                    Legal Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative min-h-[480px] bg-[#EAF1FB] px-5 py-20 lg:min-h-[680px]">
            <div className="mx-auto flex h-full max-w-[620px] items-center lg:ml-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                className="w-full"
              >
                <div className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <img src={patentImage}
                    alt="Patent documentation support"
                    className="h-[360px] w-full object-cover" loading="lazy" width="600" height="400" />

                  <div className="p-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-4">
                        <p className="text-[28px] font-semibold text-[#1B3A6B]">90</p>
                        <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                          Days Potential Timeline
                        </p>
                      </div>

                      <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4">
                        <p className="text-[28px] font-semibold text-[#1B3A6B]">All</p>
                        <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                          Disciplines Supported
                        </p>
                      </div>

                      <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4">
                        <p className="text-[28px] font-semibold text-[#1B3A6B]">IP</p>
                        <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                          Innovation Protection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Edwin Patent Support Application
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                With the potential to complete registration in just 90 days, we're
                committed to supporting your intellectual property needs.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Start your patent journey with us today by visiting our website, and
                feel free to reach out for any assistance or additional information.
                Trust us to be your partner in safeguarding your valuable innovations.
              </p>

              <div className="mt-8 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <img src={innovationImage}
                  alt="Research and innovation support"
                  className="h-[300px] w-full object-cover" loading="lazy" width="600" height="400" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {supportCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      delay: index * 0.04,
                    }}
                    className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Patent Registration
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Services Designed for Innovators
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Edwin Incorporation supports academicians, researchers, institutions,
                and innovators with patent registration and legal support services for
                research-based inventions and ideas.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 transition duration-200 ease-in-out hover:border-[#C89B3C]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[13px] font-semibold text-[#FFFFFF]">
                      {index + 1}
                    </div>
                    <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaRocket className="text-xl" />
                </div>

                <div>
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Start Your Patent Journey
                  </p>

                  <h3 className="mt-2 text-[28px] font-semibold text-[#1B3A6B]">
                    Apply Now
                  </h3>

                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Submit your patent support application and our team will review your
                    requirement for further guidance.
                  </p>

                  <a
                    href="#patent-form"
                    className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                  >
                    Apply Now
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legal-services" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Process
            </p>

            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              Patent Support Process
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              A streamlined process for patent support applications, legal assistance,
              and innovation protection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className="relative overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <div className="absolute right-4 top-4 text-[56px] font-bold leading-none text-[#EAF1FB]">
                    {index + 1}
                  </div>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                      <Icon />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="patent-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Apply Now
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Patent Support Application Form
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Submit your details to apply for patent registration support, legal
                services, and innovation protection assistance.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Share your invention, innovation, or research-based idea details.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Upload documents or concept notes for preliminary review.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Our support team will connect with you for further patent process
                    guidance.
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
                      placeholder="Enter first name"
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
                      placeholder="Enter last name"
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
                      placeholder="Enter mobile number"
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
                      placeholder="Enter email address"
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
                      placeholder="Enter designation"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      With complete institute name
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Service Required
                    </label>
                    <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]">
                      <option value="">Select service</option>
                      {serviceOptions.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Invention / Innovation Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your invention or idea title"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload Document <span className="text-[#C0392B]">*</span>
                  </label>
                  <input
                    type="file"
                    required
                    multiple
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    Please upload CV, concept note, invention document, or scan copy.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Message / Patent Requirement
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your patent registration or legal support requirement"
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

      <section id="legal-service-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Legal Services
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Legal Services to Members
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Submit your details for legal services support. Edwin Incorporation
                assists members and academicians with legal service applications,
                document review, statement of problem submission, and related academic
                legal support.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                  <FaBalanceScale className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Legal service support for members, academicians, researchers, and
                    institutional applicants.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                  <FaRegFileAlt className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Upload your DOC file or statement of problem for review and legal
                    assistance.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                  <FaShieldAlt className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Submit your application securely with country, contact, and
                    professional details.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleLegalSubmit} className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-start">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    Select Your Location
                  </label>

                  <div>
                    <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]">
                      <option value="">-None-</option>
                      <option>India</option>
                      <option>Other Country</option>
                      <option>Mobile Number</option>
                    </select>

                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      Select Your Country
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    Last Name <span className="text-[#C0392B]">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    Designation with Institute name
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    Mobile
                  </label>

                  <input
                    type="tel"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-start">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    .DOC File - Statement of Problem{" "}
                    <span className="text-[#C0392B]">*</span>
                  </label>

                  <div>
                    <input
                      type="file"
                      required
                      accept=".doc,.docx,.pdf"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                    />

                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      Upload your statement of problem in DOC, DOCX, or PDF format.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                  <label className="text-[13px] font-normal text-[#5A6A85]">
                    Enter the Captcha
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center">
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

                {legalFormStatus && (
                  <p className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {legalFormStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaFacebookF />
                </div>

                <div>
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Stay Connected with Us!
                  </p>

                  <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                    Follow us on Facebook
                  </h2>

                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Follow us on Facebook for the latest Patent Support, updates &
                    exclusive content.
                  </p>

                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                  >
                    Follow us on Facebook
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Quick Services
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Legal Services to Academicians
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Apply for patent support and legal services designed for academic and
                research professionals.
              </p>

              <a
                href="#legal-service-form"
                className="mt-6 inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
              >
                Apply Now
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#C89B3C]">
              Keep in Touch with Us
            </p>

            <h2 className="mt-3 text-[28px] font-semibold text-[#FFFFFF]">
              Need patent registration or legal support?
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
              Contact Edwin Incorporation for patent support, patent registration,
              intellectual property guidance, and legal services to academicians.
            </p>

            <a
              href="mailto:care@edwinepc.com"
              className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
            >
              Email Now
              <FaArrowRight />
            </a>
          </div>

          <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
            <div className="grid gap-5">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi
                  110019
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  India: 011-66155019
                  <br />
                  Phone: +91 6262752167
                  <br />
                  Phone: +12792029553
                </p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  care@edwinepc.com
                </p>
              </div>

              <div className="flex gap-3">
                <FaGlobe className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  www.academichelpstore.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}