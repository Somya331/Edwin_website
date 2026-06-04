import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook,
  FaBookOpen,
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaFileSignature,
  FaGlobeAsia,
  FaGraduationCap,
  FaLayerGroup,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUniversity,
} from "react-icons/fa";

const DigitalLibrary = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const COLORS = {
    primaryBlue: "#08224A",
    secondaryBlue: "#082B63",
    accentGold: "#FFB000",
    bgLight: "#EEF5FF",
    white: "#FFFFFF",
    textMain: "#31445F",
    borderLight: "#DBE8F7",
  };

  const heroSlides = [
    {
      title: "Digital Library Resource in Europe and South Asia",
      subtitle: "Book distribution, research paper access and digital academic resources.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Edwin Digital Library",
      subtitle: "Useful academic resources for universities, colleges and researchers.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Book Distribution Services",
      subtitle: "Reliable online process for institutions and academic users.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const services = [
    {
      icon: <FaGlobeAsia />,
      title: "Visit Now",
      value: "E-Shodpatra",
    },
    {
      icon: <FaFileAlt />,
      title: "Research Paper",
      value: "100,000+",
    },
    {
      icon: <FaBriefcase />,
      title: "Books / Articles",
      value: "20,000+",
    },
  ];

  const featureCards = [
    {
      title: "100,000+ Research Papers",
      subtitle: "Access to a vast collection of high-quality research papers for academic reference.",
      points: [
        "Global access to peer-reviewed content",
        "Multiple disciplines and research fields",
      ],
    },
    {
      title: "Apply for Membership",
      subtitle: "Exclusive digital library membership for colleges and universities.",
      points: [
        "Free institutional access options",
        "Centralized resource management",
      ],
    },
    {
      title: "Journal Editors",
      subtitle: "Dedicated space for journal editors to preserve and share research papers.",
      points: [
        "Archive management support",
        "Increased visibility for journals",
      ],
    },
    {
      title: "Research Submission",
      subtitle: "Platform for researchers to contribute their work to the digital repository.",
      points: [
        "Seamless upload process",
        "Broad academic reach",
      ],
    },
    {
      title: "Book Collections",
      subtitle: "Comprehensive distribution and access for academic books and textbooks.",
      points: [
        "High-quality digital versions",
        "Institutional library support",
      ],
    },
  ];

  const benefits = [
    "Providing book distribution services for the past 10 years.",
    "High-quality books delivered to universities and colleges.",
    "Online application process for book distribution.",
    "Customer care executives understand exact institutional requirements.",
    "Digital library membership support for universities and colleges.",
  ];

  const testimonials = [
    {
      name: "University Coordinator",
      text: "The digital library and book distribution support helped our institution arrange academic resources smoothly.",
    },
    {
      name: "Research Scholar",
      text: "Useful access to research papers, books and articles for academic reference work.",
    },
    {
      name: "College Representative",
      text: "The online process and customer support made the book requirement discussion easier.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <section className="relative overflow-hidden px-5 py-12 md:py-20 lg:py-24">
        {/* Modern Light Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF5FF] via-[#FFFFFF] to-[#E8F0FF]" />
        <div className="absolute -left-24 top-10 h-[300px] w-[300px] rounded-full bg-[#FFB000]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#4DA3FF]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFB000]/30 bg-white px-4 py-2 text-[13px] font-bold tracking-wide text-[#08224A] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#FFB000]" />
              EDWIN DIGITAL LIBRARY
            </div>

            <h1 className="mb-6 text-[42px] font-black leading-[1.1] text-[#08224A] md:text-[54px] lg:text-[62px]">
              Digital Library & <br />
              <span className="bg-gradient-to-r from-[#08224A] to-[#0b66c3] bg-clip-text text-transparent">
                Book Distribution
              </span>
            </h1>

            <p className="mb-10 max-w-[600px] text-[16px] font-medium leading-[1.8] text-[#31445F] md:text-[18px]">
              Edwin Incorporation's book distribution services provide academic
              resources to universities and colleges. With over 10 years of 
              experience, we have built a reputation for delivering high-quality 
              resources to institutional partners globally.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#apply"
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0b66c3] to-[#083a7c] px-8 py-4 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(11,102,195,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(11,102,195,0.35)]"
              >
                Start Application
                <FaBookOpen className="transition group-hover:rotate-12" />
              </a>
              <a
                href="https://wa.me/916262752167"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border-2 border-[#DBE8F7] bg-white px-8 py-4 text-[15px] font-bold text-[#08224A] transition duration-300 hover:border-[#FFB000] hover:bg-[#EEF5FF] hover:text-[#08224A]"
              >
                <FaPhoneAlt className="text-[#FFB000]" />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-[#FFB000]/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-3 shadow-[0_25px_60px_rgba(8,34,74,0.12)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[450px] overflow-hidden rounded-[20px]"
                >
                  <img src={heroSlides[activeSlide].image}
                    alt={heroSlides[activeSlide].title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" width="600" height="400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08224A]/90 via-[#08224A]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <h2 className="mb-3 text-[24px] font-bold text-white md:text-[28px]">
                      {heroSlides[activeSlide].title}
                    </h2>
                    <p className="max-w-[400px] text-[14px] leading-relaxed text-white/80 md:text-[15px]">
                      {heroSlides[activeSlide].subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-8 right-8 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index
                        ? "w-8 bg-[#FFB000]"
                        : "w-3 bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1fr_1.1fr] items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-[#FFB000]" />
              <span className="text-[14px] font-black uppercase tracking-widest text-[#FFB000]">Our Legacy</span>
            </div>
            <h2 className="mb-8 text-[36px] font-black leading-tight text-[#08224A] md:text-[44px]">
              About Digital Library
            </h2>
            <div className="space-y-6">
              <p className="text-[16px] leading-[1.8] text-[#31445F]">
                Edwin Incorporation's book distribution services have been a cornerstone of academic support for the past 10 years. We have built a strong reputation for delivering high-quality books and resources to universities and colleges worldwide.
              </p>
              <p className="text-[16px] leading-[1.8] text-[#31445F]">
                Our streamlined online application process, coupled with personalized support from our dedicated customer care team, ensures that every institution's unique requirements are met with precision and excellence.
              </p>
              <div className="rounded-2xl border border-[#DBE8F7] bg-[#EEF5FF]/40 p-6 italic text-[#08224A]">
                "Our commitment to digital transformation makes library membership free for all institutional partners who utilize our distribution services."
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                className={`rounded-[24px] border border-[#DBE8F7] p-6 shadow-[0_15px_45px_rgba(8,34,74,0.06)] ${index === 0
                  ? "bg-gradient-to-br from-[#082B63] to-[#0b66c3] text-white sm:col-span-2"
                  : "bg-white text-[#08224A]"
                  }`}
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${index === 0 ? "bg-white/20" : "bg-[#EEF5FF]"}`}>
                  <FaCheckCircle
                    className={`text-[20px] ${index === 0 ? "text-white" : "text-[#0b66c3]"
                      }`}
                  />
                </div>
                <p className="text-[15px] font-bold leading-[1.6]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-[14px] font-black uppercase tracking-widest text-[#FFB000]">Core Offerings</span>
            <h2 className="mt-2 text-[36px] font-black text-[#08224A] md:text-[44px]">
              Our Premium Services
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#FFB000] to-[#FFD35A]" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[28px] border border-white bg-white p-8 text-center shadow-[0_20px_50px_rgba(8,34,74,0.08)] transition-all duration-300 hover:border-[#FFB000]/50"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5FF] text-[28px] text-[#0b66c3] transition duration-300 group-hover:bg-[#0b66c3] group-hover:text-white group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-[22px] font-black text-[#08224A]">
                  {item.title}
                </h3>
                <p className="mb-8 text-[24px] font-black text-[#0b66c3]">{item.value}</p>
                <a
                  href="#apply"
                  className="inline-flex w-full justify-center rounded-full bg-[#08224A] px-6 py-3 text-[14px] font-bold text-white transition duration-300 hover:bg-[#FFB000] hover:text-[#08224A] hover:shadow-lg"
                >
                  Access Service
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-3">
            {featureCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-[#DBE8F7] bg-[#F8FBFF] p-8 shadow-[0_15px_40px_rgba(8,34,74,0.05)]"
              >
                <h3 className="mb-4 text-[20px] font-black text-[#08224A]">
                  {card.title}
                </h3>
                <p className="mb-6 border-b border-dashed border-[#DBE8F7] pb-6 text-[15px] font-medium leading-[1.7] text-[#31445F]">
                  {card.subtitle}
                </p>
                <ul className="space-y-4">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px] font-semibold text-[#08224A]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB000]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {featureCards.slice(3).map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-[#DBE8F7] bg-[#F8FBFF] p-8 shadow-[0_15px_40px_rgba(8,34,74,0.05)]"
              >
                <h3 className="mb-4 text-[20px] font-black text-[#08224A]">
                  {card.title}
                </h3>
                <p className="mb-6 text-[15px] font-medium leading-[1.7] text-[#31445F]">{card.subtitle}</p>
                <ul className="space-y-4">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px] font-semibold text-[#08224A]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB000]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#08224A] via-[#082B63] to-[#051B3B] px-5 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB000]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4DA3FF]/10 blur-[120px] rounded-full" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1fr_1.2fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block overflow-hidden rounded-[32px] border-4 border-white/10 shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Expert"
              className="h-[480px] w-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500" loading="lazy" width="600" height="400" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-[12px] font-black uppercase tracking-widest text-[#FFB000]">
              Expert Support
            </div>
            <h2 className="mb-8 text-[36px] font-black text-white md:text-[44px]">
              Meet Our Consultants
            </h2>
            <div className="space-y-4 text-[18px] font-bold text-white/90">
              <p className="flex items-center justify-center gap-3">
                <FaGraduationCap className="text-[#FFB000]" />
                Dr. Carla Parker & Dr. David
              </p>
              <p className="flex items-center justify-center gap-3">
                <FaPhoneAlt className="text-[#FFB000]" />
                +91 6262752168
              </p>
              <p className="flex items-center justify-center gap-3 underline underline-offset-8 decoration-[#FFB000]">
                <FaEnvelope className="text-[#FFB000]" />
                care@edwinepc.com
              </p>
            </div>
            <a
              href="#apply"
              className="mt-12 inline-flex rounded-full bg-[#FFB000] px-10 py-4 text-[15px] font-black text-[#08224A] shadow-[0_15px_35px_rgba(255,176,0,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Consult Now
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block overflow-hidden rounded-[32px] border-4 border-white/10 shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Expert"
              className="h-[480px] w-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500" loading="lazy" width="600" height="400" />
          </motion.div>
        </div>
      </section>

      <section id="apply" className="bg-[#EEF5FF] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[14px] font-black uppercase tracking-widest text-[#FFB000]">Registration</span>
            <h2 className="mt-2 text-[36px] font-black text-[#08224A] md:text-[42px]">
              Library Access Application
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[32px] bg-white shadow-[0_30px_70px_rgba(8,34,74,0.12)] border border-white overflow-hidden max-w-[1000px] mx-auto"
          >
            <div className="bg-gradient-to-r from-[#08224A] to-[#0b66c3] px-8 py-6 flex items-center justify-between">
              <div>
                <h3 className="text-white text-[20px] font-black">
                  Digital Library Application Form
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  Institutional Membership Registration
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <FaFileSignature className="text-[#FFB000] text-xl" />
              </div>
            </div>

            <div className="p-4 md:p-8">
              <div className="rounded-[24px] border border-[#DBE8F7] overflow-hidden bg-[#F8FBFF]">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=d4dba4baaf42bc964cd0b0fff01b2fe05f7ac940287f9c60c58ef99dd649f94cbee9205586521402e2180b44fe5d3f50gid5c5161cf37ffd7557cfa7f33a848e98423a9533df300cd9b927c3dc0dd4cbc44"
                  width="100%"
                  height="550"
                  frameBorder="0"
                  scrolling="yes"
                  className="w-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[14px] font-black uppercase tracking-widest text-[#FFB000]">Voices of Success</span>
            <h2 className="mt-2 text-[36px] font-black text-[#08224A]">
              Institutional Testimonials
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-[28px] border border-[#DBE8F7] bg-white p-8 shadow-[0_20px_50px_rgba(8,34,74,0.06)] transition-all duration-300 hover:border-[#FFB000]"
              >
                <FaQuoteLeft className="mb-6 text-[30px] text-[#FFB000]/30" />
                <div className="mb-4 flex gap-1 text-[#FFB000]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={14} />
                  ))}
                </div>
                <p className="mb-8 text-[15px] font-medium leading-[1.8] text-[#31445F]">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0b66c3] font-black">
                    {item.name[0]}
                  </div>
                  <h3 className="text-[16px] font-black text-[#08224A]">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalLibrary;
