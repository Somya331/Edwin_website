import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaCar,
  FaCertificate,
  FaCheckCircle,
  FaEnvelope,
  FaFileWord,
  FaHeart,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUpload,
  FaUserShield,
  FaWhatsapp,
} from "react-icons/fa";

const PlagiarismDetector = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("submit");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const slides = useMemo(
    () => [
      {
        title: "10+ Tools available to check",
        subtitle:
          "Copyleaks, PaperRater, Plagiarisma, Plagiarism Checker, Plagium, PlagScan, PlagTracker",
        image:
          "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1800&q=80",
      },
      {
        title: "Edwin Plagiarism Detector",
        subtitle:
          "Assistance for researchers, academicians, and professionals for plagiarism checking.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80",
      },
      {
        title: "Submit Paper for Plagiarism Checking",
        subtitle:
          "Submit DOC files online and get plagiarism checking support with certificate assistance.",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1800&q=80",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      icon: <FaFileWord />,
      title: "Submit Online .DOC",
      text: "Click here online",
      link: "Apply Now",
    },
    {
      icon: <FaCar />,
      title: "Submit Paper for Plagiarism Checking",
      text: "Click here to Submit",
      link: "Apply Now",
    },
    {
      icon: <FaBriefcase />,
      title: "Get Certificate Online",
      text: "Click here to Submit",
      link: "Apply Now",
    },
    {
      icon: <FaHeart />,
      title: "Institutional Membership",
      text: "Click here to Submit Online",
      link: "Apply Now",
    },
  ];

  const formFields = [
    "First Name *",
    "Last Name *",
    "Mobile",
    "Email",
    "Designation",
    "Name of Institute / University / College",
  ];

  const benefits = [
    "Plagiarism-free research paper checking support",
    "DOC paper submission assistance",
    "Certificate online support",
    "Institutional membership support",
    "Use of multiple plagiarism detection tools",
    "Support for researchers, academicians, and professionals",
  ];

  const testimonials = [
    {
      name: "Research Scholar",
      text: "The plagiarism checking support was useful for reviewing my thesis before submission.",
    },
    {
      name: "Faculty Member",
      text: "Professional support for checking copied content and preparing an academic report.",
    },
    {
      name: "Institutional User",
      text: "The membership support helped our team manage multiple paper checking requirements.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative min-h-[620px] overflow-hidden bg-[#FFFFFF]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition duration-200 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1B3A6B]/80" />
          </div>
        ))}

        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-[1200px] items-center gap-10 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Edwin Plagiarism Detector
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Plagiarism Checking Services for Thesis & Research Papers
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
              Edwin Incorporation provides continuous services to researchers,
              academicians, and professionals who need assistance in checking
              their research papers, theses, and academic documents.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#plagiarism-form"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Submit Paper <FaArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              {slides[activeSlide].title}
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
              {slides[activeSlide].subtitle}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Submit Online .DOC",
                "Submit Paper for Plagiarism Checking",
                "Get Certificate Online",
                "Institutional Membership",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6 transition duration-200 hover:border-[#C89B3C]"
                >
                  <FaCheckCircle className="mb-4 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full border border-[#1B3A6B] transition duration-200 ${
                      index === activeSlide ? "bg-[#C89B3C]" : "bg-[#FFFFFF]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Services
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7] text-[#1A1A2E]">
              Submit documents online, submit papers for plagiarism checking,
              get certificate online, and apply for institutional membership.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#EAF1FB] text-[24px] text-[#1B3A6B]">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold text-[#1A1A2E]">
                  {service.title}
                </h3>
                <p className="mb-5 text-[15px] leading-[1.7] text-[#1A1A2E]">
                  {service.text}
                </p>
                <a
                  href="#plagiarism-form"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:text-[#C89B3C]"
                >
                  {service.link} <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-6 text-[28px] font-semibold text-[#1B3A6B]">
              About Plagiarism Detector
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
              <p>
                Edwin Incorporation provides continuous services to researchers,
                academicians, and professionals who need assistance in checking
                their research papers, theses. We ensure that the papers are
                error-free and plagiarism-free by using software and applications
                that can detect any errors or copied content from other sources.
              </p>
              <p>
                We have tie-ups with different tools, such as plagiarism
                detectors like Paper Rater, Grammarly, Plagiarism Check, and
                Turnitin, and we are also currently using URKUND, which is a
                powerful software for detecting plagiarism.
              </p>
              <p>
                We are committed to providing the best possible solutions to our
                clients for detecting any issues with their research papers,
                including plagiarism. Our team is equipped with various tools
                such as Copyscape, Plagtracker, and Turnitin, which are widely
                used for detecting copied content.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="grid gap-6"
          >
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80"
              alt="Document checking"
              className="h-[260px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <div className="grid gap-6 md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80"
                alt="Research paper"
                className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80"
                alt="Academic checking"
                className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Benefits
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]"
              >
                <FaCheckCircle className="mt-1 text-[20px] text-[#2D7A4F]" />
                <p className="text-[15px] leading-[1.7]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="plagiarism-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Plagiarism Detector
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setActiveTab("submit")}
                className={`rounded-[8px] px-6 py-[10px] text-[15px] font-medium transition duration-200 ${
                  activeTab === "submit"
                    ? "bg-[#1B3A6B] text-[#FFFFFF]"
                    : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] hover:bg-[#EAF1FB]"
                }`}
              >
                Submit Online .DOC / Submit Paper for Plagiarism Checking / Get Certificate Online
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("membership")}
                className={`rounded-[8px] px-6 py-[10px] text-[15px] font-medium transition duration-200 ${
                  activeTab === "membership"
                    ? "bg-[#1B3A6B] text-[#FFFFFF]"
                    : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] hover:bg-[#EAF1FB]"
                }`}
              >
                Institutional Membership
              </button>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6"
            >
              <FaUpload className="mb-5 text-[42px] text-[#1B3A6B]" />
              <h3 className="mb-3 text-[18px] font-semibold text-[#1A1A2E]">
                {activeTab === "submit"
                  ? "Submit DOC for Plagiarism"
                  : "Institutional Membership"}
              </h3>
              <p className="mb-6 text-[15px] leading-[1.7]">
                {activeTab === "submit"
                  ? "Submit your paper or thesis details for plagiarism checking support and certificate assistance."
                  : "Apply for institutional membership for ongoing plagiarism checking and academic document support."}
              </p>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Plagiarism checking service"
                className="h-[260px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
              />
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="grid gap-6 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:grid-cols-2"
            >
              <h3 className="text-[18px] font-semibold text-[#1A1A2E] md:col-span-2">
                {activeTab === "submit"
                  ? "Submit DOC for Plagiarism"
                  : "Institutional Membership Form"}
              </h3>

              <div className="md:col-span-2">
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Select Your Location
                </label>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>India</option>
                  <option>International</option>
                </select>
                <p className="mt-2 text-[13px] text-[#5A6A85]">
                  Select Your Country
                </p>
              </div>

              {formFields.map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]" />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Upload DOC / Research Paper
                </label>
                <input
                  type="file"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                  <input type="checkbox" /> Terms & Condition * Read
                </label>
              </div>

              <div className="flex gap-4 md:col-span-2">
                <button
                  type="button"
                  className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                >
                  Submit
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
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
                <h3 className="text-[18px] font-semibold">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <motion.div
          className="mx-auto max-w-[1200px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <FaUserShield className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need Plagiarism Checking Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for research paper checking, thesis
            checking, plagiarism detector support, certificates, and
            institutional membership assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:care@edwinepc.com"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
            >
              <FaEnvelope /> care@edwinepc.com
            </a>
            <a
              href="tel:+916262752167"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
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

export default PlagiarismDetector;