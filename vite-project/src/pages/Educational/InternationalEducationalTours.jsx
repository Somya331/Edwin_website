import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBusAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaGlobeAsia,
  FaGraduationCap,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaQuoteLeft,
  FaStar,
  FaUniversity,
  FaUpload,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const EducationalTours = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("delhi");

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
        title: "Educational Tours",
        text: "Educational tours, industrial visits, Delhi tours, foreign tours and free visit support for school children.",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Industrial Visits",
        text: "Structured industrial visit support for students, institutions and academic groups in India and abroad.",
        image:
          "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Delhi Tours",
        text: "Yatra Registration - Delhi Flight 13-14 Nov with education travel support.",
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
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

  const tourOptions = [
    "Educational Tours in India",
    "Industrial Visit in India",
    "Educational Tours in Foreign",
    "Industrial Visit for Foreign",
    "Eggs and Sausage/Bacon",
    "Free Visit to School Children's",
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
  ];

  const travelFields = [
    "Name of Participant",
    "Last Name *",
    "Name of College of University",
    "Email *",
    "Mobile *",
    "Select Conference",
  ];

  const delhiFields = [
    "Name",
    "Last Name *",
    "Email *",
    "Mobile *",
    "Institute / School / College Name",
    "Number of Participants",
  ];

  const benefits = [
    "Educational Tours in India and Foreign",
    "Industrial Visit in India and Foreign",
    "Free Visit to School Children's",
    "Delhi Tours 13-14 November 2025",
    "Yatra Registration - Delhi Flight 13-14 Nov",
    "Academic travel and student exposure support",
  ];

  const testimonials = [
    {
      name: "School Coordinator",
      text: "The educational tour planning support was useful for students and teachers.",
    },
    {
      name: "College Faculty",
      text: "Industrial visit coordination helped our students get practical exposure.",
    },
    {
      name: "Student Group",
      text: "The Delhi tour registration and travel assistance was smooth and helpful.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentFields = activeCategory === "delhi" ? delhiFields : travelFields;

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative min-h-[650px] overflow-hidden">
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
            <div className="absolute inset-0 bg-[#1B3A6B]/75" />
          </div>
        ))}

        <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1200px] items-center gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF]/95 px-4 py-2 text-[13px] text-[#5A6A85]">
              Educational Tours
            </p>
            <h1 className="mb-5 max-w-3xl text-[48px] font-bold leading-tight text-[#FFFFFF]">
              Education Tours, Industrial Visits & Delhi Travel Registration
            </h1>
            <p className="mb-8 max-w-2xl text-[15px] leading-[1.7] text-[#FFFFFF]">
              Apply for Educational Tours in India, Educational Tours in Foreign,
              Industrial Visit in India, Industrial Visit for Foreign and Free
              Visit to School Children&apos;s.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Apply Now <FaArrowRight />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF]/10 px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Our Experience
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF]/95 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              {slides[activeSlide].title}
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              {slides[activeSlide].text}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Delhi Tours",
                "Educational Tours",
                "Industrial Visit",
                "Foreign Tour",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5 transition duration-200 hover:border-[#C89B3C]"
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
              Apply Now
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Select any tour category and submit your application for education
              tours, industrial visits, foreign tours or Delhi tours.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tourOptions.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[22px] text-[#FFFFFF] transition duration-200 group-hover:bg-[#C89B3C]">
                  {index % 3 === 0 ? (
                    <FaGraduationCap />
                  ) : index % 3 === 1 ? (
                    <FaBusAlt />
                  ) : (
                    <FaPlaneDeparture />
                  )}
                </div>
                <h3 className="mb-5 text-[18px] font-semibold text-[#1A1A2E]">
                  {item}
                </h3>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-5 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                >
                  Apply Now <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#FFFFFF] px-5 py-20">
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
              Our Experience
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Dummy gallery images are added here. You can replace these image
              links later with your real tour images.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${
                  index === 0 || index === 5 ? "lg:row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Educational tour experience ${index + 1}`}
                  className={`w-full object-cover transition duration-200 hover:scale-105 ${
                    index === 0 || index === 5 ? "h-[420px]" : "h-[230px]"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Dr. Prashant Mishra
            </h2>
            <div className="space-y-4 text-[22px] font-semibold text-[#1B3A6B]">
              <p>Call: 6262752166</p>
              <p>Email: care@edwinepc.com</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Education Tours
            </p>
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Education Tours Categories
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Educational Tours in India / Educational Tours in Foreign /
              Industrial Visit in India / Industrial Visit for Foreign / Free
              Visit to School Children&apos;s.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 transition duration-200 hover:border-[#C89B3C]"
                >
                  <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="apply" className="bg-[#FFFFFF] px-5 py-20">
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
              Education Tours Application
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Fill the form for Travel_Grant or Delhi Tours registration.
            </p>
          </motion.div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveCategory("travel")}
              className={`rounded-[8px] px-6 py-[10px] text-[15px] font-medium transition duration-200 ${
                activeCategory === "travel"
                  ? "bg-[#1B3A6B] text-[#FFFFFF]"
                  : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] hover:bg-[#EAF1FB]"
              }`}
            >
              Travel_Grant
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("delhi")}
              className={`rounded-[8px] px-6 py-[10px] text-[15px] font-medium transition duration-200 ${
                activeCategory === "delhi"
                  ? "bg-[#1B3A6B] text-[#FFFFFF]"
                  : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] hover:bg-[#EAF1FB]"
              }`}
            >
              Delhi Tours 13-14 November 2025
            </button>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              key={activeCategory}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#1B3A6B] p-6 text-[#FFFFFF]"
            >
              <FaMapMarkedAlt className="mb-5 text-[42px] text-[#C89B3C]" />
              <h3 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
                {activeCategory === "delhi"
                  ? "Yatra Registration - Delhi Flight 13-14 Nov"
                  : "Travel_Grant"}
              </h3>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#FFFFFF]">
                {activeCategory === "delhi"
                  ? "Submit your details for Delhi Tours 13-14 November 2025 registration and travel support."
                  : "Submit your details for educational tour, industrial visit and travel grant support."}
              </p>
              <div className="space-y-4">
                {[
                  "Select Country",
                  "Participant Details",
                  "Terms & Condition",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 text-[#1A1A2E]"
                  >
                    <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                    <p className="text-[15px]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              key={`${activeCategory}-form`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h3 className="mb-8 text-[18px] font-semibold text-[#1A1A2E]">
                {activeCategory === "delhi"
                  ? "Yatra Registration - Delhi Flight 13-14 Nov"
                  : "Travel_Grant"}
              </h3>

              <div className="mb-5">
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  {activeCategory === "delhi"
                    ? "Select Country"
                    : "Select Your Location"}
                </label>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>India</option>
                  <option>Foreign</option>
                </select>
                <p className="mt-2 text-[13px] text-[#5A6A85]">
                  {activeCategory === "delhi"
                    ? "Select your travel country"
                    : "Select Your Country"}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {currentFields.map((label) => (
                  <div key={label}>
                    <label className="mb-2 block text-[13px] text-[#5A6A85]">
                      {label}
                    </label>
                    {label === "Select Conference" ? (
                      <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                        <option>-None-</option>
                        <option>Educational Tours in India</option>
                        <option>Educational Tours in Foreign</option>
                        <option>Industrial Visit in India</option>
                        <option>Industrial Visit for Foreign</option>
                      </select>
                    ) : (
                      <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
                    )}
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
          <FaGlobeAsia className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need Educational Tour Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for educational tours, industrial visits,
            Delhi tours, travel grant, foreign tours and student visit support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:care@edwinepc.com"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
            >
              <FaEnvelope /> care@edwinepc.com
            </a>
            <a
              href="tel:+916262752166"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
            >
              <FaPhoneAlt /> 6262752166
            </a>
          </div>
        </motion.div>
      </section>

      <a
        href="https://wa.me/916262752166"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[24px] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
};

export default EducationalTours;