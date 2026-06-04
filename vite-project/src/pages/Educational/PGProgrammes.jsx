import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaEnvelope,
  FaFileSignature,
  FaGraduationCap,
  FaPhoneAlt,
  FaQuoteLeft,
  FaSchool,
  FaStar,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";

const AdmissionServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  

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
      title: "Foreign Universities ",
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

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-[#EEF5FF] font-['Plus_Jakarta_Sans'] text-[#08224A]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-20">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition duration-300 ${index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover" loading="lazy" width="600" height="400" />
              <div className="absolute inset-0 bg-[#031329]/78" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="rounded-[24px] border border-[#DDE9F7] bg-white/95 p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
          >
            <p className="mb-4 inline-flex rounded-xl border border-[#FFB000] px-4 py-2 text-[13px] text-[#5A6A85]">
              Admission Services
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#082B63]">
              Educational Support for Higher Studies & Degree Programme
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#08224A]">
              Apply for admission support in Foreign Universities, Indian Private
              Universities, Indian Private Colleges, Indian Govt Universities,
              Indian Govt Colleges, Free Degree Programme and Distance Degree
              Programme.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-[#082B63] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
              >
                Apply Now <FaArrowRight />
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 rounded-xl border border-[#082B63] bg-white px-6 py-[10px] text-[15px] font-medium text-[#082B63] transition duration-300 hover:bg-[#EEF5FF]"
              >
                View Programmes
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] border border-[#DDE9F7] bg-white/95 p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#EEF5FF] text-[32px] text-[#082B63]">
              <FaGraduationCap />
            </div>
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
              {slides[activeSlide].title}
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              {slides[activeSlide].text}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Foreign Universities",
                "Indian Universities",
                "Free Degree",
                "Diploma",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-5 transition duration-300 hover:border-[#FFB000]"
                >
                  <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full border border-[#082B63] transition duration-300 ${index === activeSlide ? "bg-[#FFB000]" : "bg-white"
                      }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#082B63] bg-white text-[#082B63] transition duration-300 hover:bg-[#EEF5FF]"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082B63] text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
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
                className="group overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-white shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EEF5FF]">
                  <img src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" width="600" height="400" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-5 text-[18px] font-semibold text-[#082B63]">
                    {card.title}
                  </h3>
                  <a
                    href="#apply"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#082B63] px-5 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
                  >
                    Registration Now <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
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
                className="flex items-center justify-between gap-5 rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#082B63] text-[22px] text-[#FFFFFF]">
                    {index % 2 === 0 ? <FaUniversity /> : <FaBookOpen />}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#08224A]">
                    {item}
                  </h3>
                </div>
                <a
                  href="#apply"
                  className="shrink-0 rounded-xl bg-[#082B63] px-5 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
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
                className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 text-center shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <div className="mx-auto mb-5 aspect-square w-[160px] overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF]">
                  <img src={client.image}
                    alt={client.name}
                    className="h-full w-full object-cover" loading="lazy" width="600" height="400" />
                </div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#082B63]">
                  {client.name}
                </h3>
                <p className="text-[15px] text-[#5A6A85]">{client.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-[1300px] items-start gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-xl border border-[#FFB000] bg-white px-4 py-2 text-[13px] text-[#5A6A85]">
              Apply For Free Degree Programme
            </p>
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
              Admission Higher Studies
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Submit your admission details for higher studies support. Select
              course for study such as Ph.D, Post Doctoral, MBA and other
              programmes.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-6">
                <FaUserGraduate className="mb-4 text-[28px] text-[#082B63]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  Admission Higher Studies
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Free degree programme, distance degree programme and higher
                  studies admission support.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-6">
                <FaSchool className="mb-4 text-[28px] text-[#082B63]" />
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[24px] bg-white shadow-xl border border-[#DDE9F7] overflow-hidden w-full max-w-[950px] mx-auto relative"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-lg font-bold">
                  Admission Application Form
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  Fill all required details carefully
                </p>
              </div>

              <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                <FaFileSignature className="text-[#FFB000] text-xl" />
              </div>
            </div>

            <div className="relative w-full bg-white p-3">
              <div className="rounded-[18px] border border-[#DDE9F7] overflow-x-auto bg-white shadow-inner flex justify-center">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=d6d80a9e1b20660e52bfd153f4f4b521033147dd326e5ffc260e1f9f9c7033d9dea7267b300f32db7d9a3080ae01bca1gidf815c616118be556b1556cabbbb64e3b8c65a89f77904eb705a07fd2d5502e81"
                  width="910"
                  height="560"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: "none",
                    width: "910px",
                    maxWidth: "100%",
                    display: "block",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
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
                className="flex gap-4 rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <FaCheckCircle className="mt-1 text-[20px] text-[#2D7A4F]" />
                <p className="text-[15px] leading-[1.7]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
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
                className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <FaQuoteLeft className="mb-4 text-[22px] text-[#FFB000]" />
                <div className="mb-4 flex gap-1 text-[#FFB000]">
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

export default AdmissionServices;
