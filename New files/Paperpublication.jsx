import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookOpen,
  FaCheckCircle,
  FaClipboardList,
  FaDownload,
  FaEnvelope,
  FaFileAlt,
  FaGlobe,
  FaGraduationCap,
  FaPhoneAlt,
  FaQuoteLeft,
  FaSearch,
  FaStar,
  FaUpload,
  FaWhatsapp,
} from "react-icons/fa";

const PaperPublication = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "Research Paper Submission Online",
      subtitle: "Publish with professional journal publication support",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Edwins Journals Publication Support",
      subtitle: "Support for Scopus, UGC-CARE and Web of Science platforms",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Academic Publishing Assistance",
      subtitle: "Formatting, review support, journal workflow and submission guidance",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const journals = [
    { name: "International Journal of Productivity and Quality Management", indexed: "Scopus", pissn: "17466474", time: "4–6 Months" },
    { name: "International Journal of RF Technologies: Research and Applications", indexed: "Scopus", pissn: "17545730", time: "4–6 Months" },
    { name: "International Journal of Space Structures", indexed: "Scopus", pissn: "9560599", time: "4–6 Months" },
    { name: "International Journal of Systemic Therapy", indexed: "Scopus", pissn: "2692398X", time: "4–6 Months" },
    { name: "International Journal of Urban and Regional Research", indexed: "Scopus", pissn: "3091317", time: "4–6 Months" },
    { name: "International Journal on Software Tools for Technology Transfer", indexed: "Scopus", pissn: "14332779", time: "4–6 Months" },
    { name: "International Review of Environmental and Resource Economics", indexed: "Scopus", pissn: "19321465", time: "4–6 Months" },
    { name: "Internationale Politik", indexed: "Scopus", pissn: "1430175X", time: "4–6 Months" },
    { name: "Investigaciones Regionales", indexed: "Scopus", pissn: "16957253", time: "4–6 Months" },
  ];

  const beforeSubmit = [
    "Format: Follow the journal’s template including title page, abstract and references. Maintain citation consistency such as APA, IEEE, etc.",
    "Originality: Plagiarism should be below 15%. Properly cite all sources.",
    "Figures: Use high-resolution images of 300 dpi+ and editable tables.",
    "Authorship: Include ORCID IDs and correct author order.",
    "Cover Letter: Clearly state novelty, scope fit and contribution.",
  ];

  const process = [
    "Initial Screening – formatting and plagiarism check.",
    "Peer Review – double-blind by 2–3 experts.",
    "Decision – Accept / Revise / Reject.",
    "Production – typesetting, proofing and author approval.",
    "Publication – issue release and indexing where applicable.",
  ];

  const benefits = [
    {
      icon: <FaBookOpen />,
      title: "170+ Journal Network",
      text: "Collaborates with journals across Scopus, UGC-CARE and Web of Science platforms.",
    },
    {
      icon: <FaClipboardList />,
      title: "Submission Guidance",
      text: "Authors are requested to follow submission rules shared via email for smooth workflow.",
    },
    {
      icon: <FaSearch />,
      title: "Screening Support",
      text: "Formatting, plagiarism check and basic eligibility guidance before journal routing.",
    },
    {
      icon: <FaGlobe />,
      title: "Indexing Awareness",
      text: "Indexing depends on respective databases and eligible journals only.",
    },
  ];

  const testimonials = [
    {
      name: "Research Scholar",
      text: "The submission guidance helped me understand formatting, originality and review process clearly.",
    },
    {
      name: "Academician",
      text: "The team explained timelines, journal workflow and submission requirements professionally.",
    },
    {
      name: "University Coordinator",
      text: "Useful support for paper submission, author communication and publication process.",
    },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45 }}
          >
            <p className="mb-5 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Paper Publication
            </p>

            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Research Paper Submission Online
            </h1>

            <p className="mb-6 max-w-2xl text-[15px] leading-[1.7] text-[#1A1A2E]">
              Edwins Journals, a division of Edwin Incorporation, collaborates
              with 170+ journals across Scopus, UGC-CARE, and Web of Science
              platforms. Authors are requested to follow submission rules shared
              via email for a smooth publication journey.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                <h3 className="mb-1 text-[18px] font-semibold text-[#1A1A2E]">
                  170+
                </h3>
                <p className="text-[13px] text-[#5A6A85]">Journal Network</p>
              </div>
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                <h3 className="mb-1 text-[18px] font-semibold text-[#1A1A2E]">
                  4–6
                </h3>
                <p className="text-[13px] text-[#5A6A85]">Months Timeline</p>
              </div>
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                <h3 className="mb-1 text-[18px] font-semibold text-[#1A1A2E]">
                  15%
                </h3>
                <p className="text-[13px] text-[#5A6A85]">Plagiarism Limit</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#submit-paper"
                className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Start Submission
              </a>
              <a
                href="#journals"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                View Journals
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[12px] bg-[#1B3A6B]" />
            <div className="relative rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="overflow-hidden rounded-[12px]"
                >
                  <img
                    src={heroSlides[activeSlide].image}
                    alt={heroSlides[activeSlide].title}
                    className="h-[430px] w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 rounded-[12px] bg-[#EAF1FB] p-5">
                <h2 className="mb-2 text-[28px] font-semibold text-[#1B3A6B]">
                  {heroSlides[activeSlide].title}
                </h2>
                <p className="text-[15px] leading-[1.7]">
                  {heroSlides[activeSlide].subtitle}
                </p>

                <div className="mt-4 flex gap-2">
                  {heroSlides.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-3 rounded-full transition duration-200 ${
                        activeSlide === index
                          ? "w-8 bg-[#C89B3C]"
                          : "w-3 bg-[#D6E0F0]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Publication Pathways
            </h2>

            <div className="space-y-4">
              <a
                href="#submit-paper"
                className="block rounded-[8px] bg-[#1B3A6B] px-5 py-4 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Academicians & Research Scholars Only
              </a>
              <a
                href="#university-submit"
                className="block rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-5 py-4 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                University / Organising Secretary / Registered Agencies Only
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Research Paper Submission Online
            </h2>
            <p className="text-[15px] leading-[1.7]">
              Edwins Journals, a division of Edwin Incorporation, collaborates
              with <strong>170+ journals</strong> across Scopus, UGC-CARE, and
              Web of Science platforms. To ensure a smooth publication journey,
              authors are requested to follow submission rules shared via email.
              Typical timelines range from <strong>4–6 months</strong>,
              depending on reviewer availability and journal workflow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
                Before You Submit
              </h2>
              <div className="space-y-4">
                {beforeSubmit.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#2D7A4F]" />
                    <p className="text-[15px] leading-[1.7]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
                Submission Process
              </h2>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[8px] border border-[#D6E0F0] bg-[#EAF1FB] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[13px] font-semibold text-[#FFFFFF]">
                      {index + 1}
                    </span>
                    <p className="text-[15px] leading-[1.7]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6 text-[15px] leading-[1.7]"
          >
            <strong>Note:</strong> Indexing such as Scopus/WoS/UGC-CARE depends
            on respective databases. While submissions are routed only to
            eligible journals, no agency can guarantee indexing or fixed
            timelines. APCs, if applicable, are disclosed after acceptance.
            Ensure to whitelist Edwin’s official email for all communication.
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Why Choose Publication Support
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Designed for academicians, research scholars, universities and
              registered agencies requiring structured publication assistance.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[24px] text-[#1B3A6B]">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold text-[#1A1A2E]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.7]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="submit-paper" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] bg-[#1B3A6B] p-6 text-[#FFFFFF]"
          >
            <FaFileAlt className="mb-5 text-[38px] text-[#C89B3C]" />
            <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
              Submit Research Paper
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#FFFFFF]">
              Fill the details below for research paper submission. You need to
              select the country name, your location, or your mobile number from
              the dropdown menu.
            </p>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 text-[#1A1A2E]">
              <p className="mb-3 flex items-center gap-3 text-[15px]">
                <FaEnvelope className="text-[#C89B3C]" /> care@edwinepc.com
              </p>
              <p className="flex items-center gap-3 text-[15px]">
                <FaPhoneAlt className="text-[#C89B3C]" /> +91 6262752167
              </p>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-6 text-[28px] font-semibold text-[#1B3A6B]">
              Research Paper Form
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Select Your Location
                </label>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>India</option>
                  <option>Foreign</option>
                </select>
                <p className="mt-2 text-[13px] text-[#5A6A85]">
                  Select Your Country
                </p>
              </div>

              {[
                "First Name *",
                "Last Name *",
                "Designation",
                "Email *",
                "Mobile *",
                "Institute Name",
                "Paper Title",
                "Subject / Area",
              ].map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
                  {label === "Designation" && (
                    <p className="mt-2 text-[13px] text-[#5A6A85]">
                      With Complete Institute Name
                    </p>
                  )}
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Upload Paper
                </label>
                <input
                  type="file"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Submit <FaUpload />
              </button>
              <button
                type="reset"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                Reset
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <section id="journals" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <a
                href="#"
                className="mb-4 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:text-[#C89B3C]"
              >
                <FaDownload /> Download Copy Right Forms
              </a>
              <h2 className="text-[28px] font-semibold text-[#1B3A6B]">
                Journals List - Under Consultancy
              </h2>
            </div>

            <button className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]">
              All New Data
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse text-left text-[14px]">
                <thead className="bg-[#1B3A6B] text-[#FFFFFF]">
                  <tr>
                    <th className="px-4 py-4">Name of Journal</th>
                    <th className="px-4 py-4">Indexed In</th>
                    <th className="px-4 py-4">Status of Journal</th>
                    <th className="px-4 py-4">Submit Paper Now</th>
                    <th className="px-4 py-4">P-ISSN</th>
                    <th className="px-4 py-4">Time Required</th>
                  </tr>
                </thead>
                <tbody>
                  {journals.map((journal, index) => (
                    <tr
                      key={journal.name}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-4 py-4 font-medium">{journal.name}</td>
                      <td className="px-4 py-4">{journal.indexed}</td>
                      <td className="px-4 py-4">Available</td>
                      <td className="px-4 py-4">
                        <a
                          href="#submit-paper"
                          className="rounded-[8px] border border-[#1B3A6B] px-4 py-2 text-[#1B3A6B] transition duration-200 hover:bg-[#1B3A6B] hover:text-[#FFFFFF]"
                        >
                          Submit Paper Now
                        </a>
                      </td>
                      <td className="px-4 py-4">{journal.pissn}</td>
                      <td className="px-4 py-4">{journal.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Testimonials
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <FaQuoteLeft className="mb-4 text-[22px] text-[#C89B3C]" />
                <div className="mb-4 flex gap-1 text-[#C89B3C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="mb-5 text-[15px] leading-[1.7]">{item.text}</p>
                <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <motion.div
          className="mx-auto max-w-[1100px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FaGraduationCap className="mx-auto mb-5 text-[44px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Ready to Submit Your Research Paper?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for publication assistance, journal
            routing, submission guidance and communication support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:care@edwinepc.com"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
            >
              <FaEnvelope /> care@edwinepc.com
            </a>
            <a
              href="tel:+916262752167"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
            >
              <FaPhoneAlt /> +91 6262752167
            </a>
          </div>
        </motion.div>
      </section>

      <a
        href="https://wa.me/916262752167"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[24px] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
};

export default PaperPublication;