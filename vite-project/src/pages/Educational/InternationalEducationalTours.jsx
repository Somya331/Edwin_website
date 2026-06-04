import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBusAlt,
  FaCheckCircle,
  FaEnvelope,
  FaFileSignature,
  FaGlobeAsia,
  FaGraduationCap,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const EducationalTours = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("travel");

  

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

  const formLinks = {
    travel:
      "https://crm.zoho.in/crm/WebFormServeServlet?rid=2f863ab3466466178ebae319aaf7b0f269387a29242d8405aa8909088f5e85920d157b56b1313fffd286e546cc122a72gided38a7bcffcd85ddcbea9d4f55a970265b0daa75184b3c2aaf3678059513dfad",
    delhi:
      "https://crm.zoho.in/crm/WebFormServeServlet?rid=f1420ee806ce233e55e99be6778f3e3015a7f215bbaa689ad0f606b7b47f551cd97947a230f4a1088883504de1588f3fgid4d7fc7126b8a0ed7f4bb013865c714ef13fa99aa6a62993d8879cb8d50a73793",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-[#EEF5FF] font-['Plus_Jakarta_Sans'] text-[#08224A]">
      <section className="relative min-h-[650px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition duration-300 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover" loading="lazy" width="600" height="400" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#031329]/90 via-[#073B86]/82 to-[#051B3B]/88" />
          </div>
        ))}

        <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1200px] items-center gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 inline-flex rounded-xl border border-[#FFB000] bg-white/95 px-4 py-2 text-[13px] text-[#5A6A85]">
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
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFB000] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-white hover:text-[#082B63]"
              >
                Apply Now <FaArrowRight />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl border border-[#FFFFFF] bg-white/10 px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-white hover:text-[#082B63]"
              >
                Our Experience
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] border border-[#DDE9F7] bg-white/95 p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
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
                    className={`h-3 w-3 rounded-full border border-[#082B63] transition duration-300 ${
                      index === activeSlide ? "bg-[#FFB000]" : "bg-white"
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
                className="group rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#082B63] text-[22px] text-[#FFFFFF] transition duration-300 group-hover:bg-[#FFB000]">
                  {index % 3 === 0 ? (
                    <FaGraduationCap />
                  ) : index % 3 === 1 ? (
                    <FaBusAlt />
                  ) : (
                    <FaPlaneDeparture />
                  )}
                </div>
                <h3 className="mb-5 text-[18px] font-semibold text-[#08224A]">
                  {item}
                </h3>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#082B63] px-5 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
                >
                  Apply Now <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-5 py-20">
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
                className={`overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-white shadow-[0_18px_55px_rgba(8,34,74,.10)] ${
                  index === 0 || index === 5 ? "lg:row-span-2" : ""
                }`}
              >
                <img src={image}
                  alt={`Educational tour experience ${index + 1}`}
                  className={`w-full object-cover transition duration-300 hover:scale-105 ${
                    index === 0 || index === 5 ? "h-[420px]" : "h-[230px]"
                  }`} loading="lazy" width="600" height="400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
              Dr. Prashant Mishra
            </h2>
            <div className="space-y-4 text-[22px] font-semibold text-[#082B63]">
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
            <p className="mb-4 inline-flex rounded-xl border border-[#FFB000] bg-white px-4 py-2 text-[13px] text-[#5A6A85]">
              Education Tours
            </p>
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
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
                  className="rounded-[24px] border border-[#DDE9F7] bg-white p-5 transition duration-300 hover:border-[#FFB000]"
                >
                  <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="apply"
        className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] px-5 py-20"
      >
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DDE9F7] bg-white px-5 py-2 text-[14px] font-semibold text-[#082B63] shadow-sm">
              <FaFileSignature />
              Application Form
            </div>

            <h2 className="mb-4 text-[34px] font-bold text-[#082B63]">
              Education Tours Application
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7] text-[#5A6A85]">
              Select the application type and submit your details through the
              official form below.
            </p>
          </motion.div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveCategory("travel")}
              className={`rounded-xl px-6 py-[10px] text-[15px] font-medium transition duration-300 ${
                activeCategory === "travel"
                  ? "bg-[#082B63] text-[#FFFFFF]"
                  : "border border-[#082B63] bg-white text-[#082B63] hover:bg-[#EEF5FF]"
              }`}
            >
              Travel Grant
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("delhi")}
              className={`rounded-xl px-6 py-[10px] text-[15px] font-medium transition duration-300 ${
                activeCategory === "delhi"
                  ? "bg-[#082B63] text-[#FFFFFF]"
                  : "border border-[#082B63] bg-white text-[#082B63] hover:bg-[#EEF5FF]"
              }`}
            >
              Delhi Tours 13-14 November 2025
            </button>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              key={`${activeCategory}-info`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="rounded-[20px] border border-[#DDE9F7] bg-white p-7 text-[#08224A] shadow-xl"
            >
              <FaMapMarkedAlt className="mb-5 text-[42px] text-[#FFB000]" />
              <h3 className="mb-4 text-[28px] font-semibold text-[#082B63]">
                {activeCategory === "delhi"
                  ? "Yatra Registration - Delhi Flight 13-14 Nov"
                  : "Travel Grant Application"}
              </h3>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#5A6A85]">
                {activeCategory === "delhi"
                  ? "Submit your details for Delhi Tours 13-14 November 2025 registration and travel support."
                  : "Submit your details for educational tour, industrial visit and travel grant support."}
              </p>

              <div className="space-y-4">
                {[
                  "Official Zoho CRM form",
                  "Secure application submission",
                  "Team will contact after review",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[#DDE9F7] bg-white p-5 text-[#08224A]"
                  >
                    <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                    <p className="text-[15px]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={`${activeCategory}-iframe`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-white shadow-xl"
            >
              <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  {activeCategory === "delhi"
                    ? "Delhi Tour Application Form"
                    : "Travel Grant Application Form"}
                </h3>
              </div>

              <div className="flex w-full justify-center bg-white">
                <iframe
                  title={
                    activeCategory === "delhi"
                      ? "Delhi Tour Zoho Form"
                      : "Travel Grant Zoho Form"
                  }
                  src={
                    activeCategory === "delhi"
                      ? formLinks.delhi
                      : formLinks.travel
                  }
                  width={activeCategory === "delhi" ? "610" : "910"}
                  height={activeCategory === "delhi" ? "590" : "560"}
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: "none",
                    maxWidth: "100%",
                    display: "block",
                  }}
                />
              </div>
            </motion.div>
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

export default EducationalTours;
