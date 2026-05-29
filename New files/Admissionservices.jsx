import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaEnvelope,
  FaGraduationCap,
  FaPhoneAlt,
  FaQuoteLeft,
  FaSchool,
  FaStar,
  FaUniversity,
  FaUpload,
  FaUserGraduate,
  FaWhatsapp,
} from "react-icons/fa";

const AdmissionServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeForm, setActiveForm] = useState("freeDegree");

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
        title: "Admission Services",
        text: "Educational Support for the Education by the Education.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Admission Higher Studies",
        text: "Support for Ph.D, Post Doctoral, MBA, degree and diploma admission guidance.",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Free Degree Programme",
        text: "Apply for free degree programme, distance degree programme and diploma certificate programme.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
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

  const admissionCards = [
    {
      title: "Foreign Universities",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Indian Private Universities, India",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Indian Private Colleges",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Foreign State Govt Universities",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Indian Govt Universities",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Indian Govt Colleges",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const programmes = [
    "Govt College and University (NAAC-A)",
    "Free Degree Programme",
    "Private College and University (NAAC -A)",
    "Distance Degree Programme",
    "Ph. D (NAAC -A)",
    "Diploma and Certificate Programme",
  ];

  const clients = [
    {
      name: "SVN University, Sager",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "AKU University Satna",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "ITU, California USA",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "HB College Jabalpur",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const benefits = [
    "Admission guidance for higher studies",
    "Foreign Universities and Indian Universities support",
    "Govt College and University (NAAC-A) assistance",
    "Private College and University (NAAC-A) assistance",
    "Free Degree Programme and Distance Degree Programme",
    "Diploma and Certificate Programme support",
  ];

  const testimonials = [
    {
      name: "Admission Applicant",
      text: "The admission guidance helped me understand available higher study options clearly.",
    },
    {
      name: "Research Scholar",
      text: "Useful support for Ph.D, post doctoral and university admission information.",
    },
    {
      name: "Student",
      text: "The programme options and registration process were explained professionally.",
    },
  ];

  const formFields = [
    "Select Area(ex-Science,Arts ,Commerce)",
    "First Name",
    "Last Name *",
    "Email *",
    "Mobile *",
    "Designation / Qualification",
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
      <section className="relative overflow-hidden bg-[#1B3A6B] px-5 py-20">
        <div className="absolute inset-0">
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
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF]/95 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Admission Services
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Educational Support for Higher Studies & Degree Programme
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
              Apply for admission support in Foreign Universities, Indian Private
              Universities, Indian Private Colleges, Indian Govt Universities,
              Indian Govt Colleges, Free Degree Programme and Distance Degree
              Programme.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Apply Now <FaArrowRight />
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                View Programmes
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF]/95 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[32px] text-[#1B3A6B]">
              <FaGraduationCap />
            </div>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              {slides[activeSlide].title}
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              {slides[activeSlide].text}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {["Foreign Universities", "Indian Universities", "Free Degree", "Diploma"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5 transition duration-200 hover:border-[#C89B3C]"
                  >
                    <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                    <p className="text-[15px] font-medium">{item}</p>
                  </div>
                )
              )}
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
              Admission Session
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Choose your admission category and register for admission guidance.
              Dummy images are added and can be replaced later.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {admissionCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EAF1FB]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-5 text-[18px] font-semibold text-[#1B3A6B]">
                    {card.title}
                  </h3>
                  <a
                    href="#apply"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#1B3A6B] px-5 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                  >
                    Registration Now <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="bg-[#FFFFFF] px-5 py-20">
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
              Apply Now
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Apply for Govt College and University, Private College and
              University, Ph.D, Free Degree, Distance Degree and Diploma
              programmes.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {programmes.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="flex items-center justify-between gap-5 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[22px] text-[#FFFFFF]">
                    {index % 2 === 0 ? <FaUniversity /> : <FaBookOpen />}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                    {item}
                  </h3>
                </div>
                <a
                  href="#apply"
                  className="shrink-0 rounded-[8px] bg-[#1B3A6B] px-5 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
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
              Our Clients
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mx-auto mb-5 aspect-square w-[160px] overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB]">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#1B3A6B]">
                  {client.name}
                </h3>
                <p className="text-[15px] text-[#5A6A85]">{client.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Apply For Free Degree Programme
            </p>
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Admission Higher Studies
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Submit your admission details for higher studies support. Select
              course for study such as Ph.D, Post Doctoral, MBA and other
              programmes.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <FaUserGraduate className="mb-4 text-[28px] text-[#1B3A6B]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  Admission Higher Studies
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Free degree programme, distance degree programme and higher
                  studies admission support.
                </p>
              </div>
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <FaSchool className="mb-4 text-[28px] text-[#1B3A6B]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  College & University Support
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Support for Govt, Private, Indian and Foreign Universities and
                  Colleges.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveForm("freeDegree")}
                className={`rounded-[8px] px-5 py-[10px] text-[15px] font-medium transition duration-200 ${
                  activeForm === "freeDegree"
                    ? "bg-[#1B3A6B] text-[#FFFFFF]"
                    : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] hover:bg-[#EAF1FB]"
                }`}
              >
                Apply For Free Degree Programme
              </button>
              <button
                type="button"
                onClick={() => setActiveForm("admission")}
                className={`rounded-[8px] px-5 py-[10px] text-[15px] font-medium transition duration-200 ${
                  activeForm === "admission"
                    ? "bg-[#1B3A6B] text-[#FFFFFF]"
                    : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] hover:bg-[#EAF1FB]"
                }`}
              >
                Admission Higher Studies
              </button>
            </div>

            <h3 className="mb-8 text-[18px] font-semibold text-[#1A1A2E]">
              {activeForm === "freeDegree"
                ? "Apply For Free Degree Programme"
                : "Admission Higher Studies"}
            </h3>

            <div className="mb-5">
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

            <div className="mb-5">
              <label className="mb-2 block text-[13px] text-[#5A6A85]">
                Select Course -for Study
              </label>
              <select
                multiple
                className="h-[100px] w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
              >
                <option>Ph.D (All Discipline )</option>
                <option>Post Doctoral (All Discipline )</option>
                <option>MBA</option>
                <option>Diploma and Certificate Programme</option>
                <option>Distance Degree Programme</option>
                <option>Free Degree Programme</option>
              </select>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {formFields.map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                <input type="checkbox" /> Terms & Condition * Read
              </label>
            </div>

            <div className="mt-6 flex gap-4">
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
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <FaCheckCircle className="mt-1 text-[20px] text-[#2D7A4F]" />
                <p className="text-[15px] leading-[1.7]">{item}</p>
              </motion.div>
            ))}
          </div>
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
          <FaGraduationCap className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need Admission Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for admission services, free degree
            programme, distance degree programme, diploma, certificate, Ph.D,
            and higher studies guidance.
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

export default AdmissionServices;