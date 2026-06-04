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
  FaFileSignature,
  FaStar,
  FaUpload,
  FaUserShield,
  FaWhatsapp,
} from "react-icons/fa";

const PlagiarismDetector = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("submit");

  

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
            <img src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover" loading="lazy" width="600" height="400" />
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
            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80"
              alt="Document checking"
              className="h-[260px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" loading="lazy" width="600" height="400" />
            <div className="grid gap-6 md:grid-cols-2">
              <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80"
                alt="Research paper"
                className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80"
                alt="Academic checking"
                className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
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
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Plagiarism checking service"
                className="h-[260px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
            </motion.div>

          {/* ZOHO FORM SECTION */}
<section className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-5xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-7"
    >
      

      <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
       Submit DOC for Plagiarism
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">
           Submit DOC for Plagiarism
          </h3>
          
        </div>

        <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
          <FaFileSignature className="text-[#C89B3C] text-xl" />
        </div>
      </div>

      <div className="relative w-full bg-white p-3">
        <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
          <iframe
            title="Zoho CRM Web Form"
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=bbb8e318c9757fb4855b5eb43d114bc88e5783d82a8d39196361f5d0a55ebfecebd7d4e075efe0c1c59719ad870cff29gidd3f8be96bbb38eefff2c7877ba6c7a29f8524b04b4b622ae4c8a35ce03ff71c0"
            width="100%"
            height="500"
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

      
    </main>
  );
};

export default PlagiarismDetector;