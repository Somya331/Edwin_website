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
  FaWhatsapp,
} from "react-icons/fa";

const DigitalLibrary = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const COLORS = {
    primaryBlue: "#1B3A6B",
    accentGold: "#C89B3C",
    white: "#FFFFFF",
    darkText: "#1A1A2E",
    lightGray: "#F8FAFC",
    borderGray: "#E2E8F0",
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
      value: "100000",
    },
    {
      icon: <FaBriefcase />,
      title: "Books / Articles and Others",
      value: "20000",
    },
  ];

  const featureCards = [
    {
      title: "Than 100000 Research Papers",
      subtitle: "Top Research papers are available",
      points: [
        "Use this paragraph to describe what you do.",
        "Add useful information that your users may find interesting. What makes.",
      ],
    },
    {
      title: "Apply for Membership",
      subtitle: "College and Universities Only",
      points: [
        "Use this paragraph to describe what you do.",
        "Add useful information that your users may find interesting. What makes.",
      ],
    },
    {
      title: "Add Journals",
      subtitle: "Journals Editors, can save there Research papers",
      points: [
        "Use this paragraph to describe what you do.",
        "Add useful information that your users may find interesting. What makes.",
      ],
    },
    {
      title: "Add Research Paper",
      subtitle: "Use this paragraph to describe what you do. This is a great place to let your visitors.",
      points: [
        "Use this paragraph to describe what you do.",
        "Add useful information that your users may find interesting. What makes.",
      ],
    },
    {
      title: "Add Books",
      subtitle: "Use this paragraph to describe what you do. This is a great place to let your visitors.",
      points: [
        "Use this paragraph to describe what you do.",
        "Add useful information that your users may find interesting. What makes.",
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

  const fields = [
    "Name of Institution / University / College",
    "Contact Person Name",
    "Designation",
    "Email",
    "Mobile",
    "Requirement Details",
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
    <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EAF1F8]" />
        <div className="absolute left-0 top-0 h-full w-[34%] bg-[#1B3A6B]" />
        <div className="absolute right-10 top-16 h-64 w-64 rounded-full bg-[#C89B3C]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="rounded-[12px] border border-[#E2E8F0] bg-[#FFFFFF]/95 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur"
          >
            <p className="mb-5 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] font-medium text-[#1B3A6B]">
              Edwin Digital Library
            </p>

            <h1 className="mb-6 text-[40px] font-bold leading-tight text-[#1B3A6B] md:text-[56px]">
              Digital Library & Book Distribution Services
            </h1>

            <p className="mb-8 text-[16px] leading-[1.8] text-[#1A1A2E]">
              Edwin Incorporation's book distribution services provide academic
              resources to universities and colleges. The company has been
              providing this service for the past 10 years and has built a
              reputation for delivering high-quality books.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Order Now
              </a>
              <a
                href="https://wa.me/916262752167"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:border-[#C89B3C] hover:text-[#C89B3C]"
              >
                Instant Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-[12px]"
              >
                <img
                  src={heroSlides[activeSlide].image}
                  alt={heroSlides[activeSlide].title}
                  className="h-[430px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1B3A6B]/55" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h2 className="mb-3 text-[30px] font-semibold text-[#FFFFFF]">
                    {heroSlides[activeSlide].title}
                  </h2>
                  <p className="text-[15px] leading-[1.7] text-[#FFFFFF]">
                    {heroSlides[activeSlide].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex justify-center gap-2">
              {heroSlides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-3 rounded-full transition-all duration-200 ${activeSlide === index
                    ? "w-8 bg-[#C89B3C]"
                    : "w-3 bg-[#E2E8F0]"
                    }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-5 top-0 h-full w-[4px] rounded-full bg-[#C89B3C]" />
            <h2 className="mb-6 text-[32px] font-semibold text-[#1B3A6B]">
              About Digital Library
            </h2>
            <p className="mb-5 text-[15px] leading-[1.9] text-[#1A1A2E]">
              Edwin Incorporation's book distribution services. The company has
              been providing this service for the past 10 years and has built a
              reputation for delivering high-quality books to universities and
              colleges. The fact that satisfied customers are continuously
              ordering books from Edwin Incorporation is a testament to the
              company's commitment to customer satisfaction.
            </p>
            <p className="mb-5 text-[15px] leading-[1.9] text-[#1A1A2E]">
              It's also good to know that the process for applying for book
              distribution is simple and can be done online. The involvement of
              customer care executives to understand the exact requirements of
              the university or college is a thoughtful touch that ensures that
              the books being delivered meet the specific needs of the
              customers.
            </p>
            <p className="text-[15px] leading-[1.9] text-[#1A1A2E]">
              The digital library service is also a valuable offering,
              especially given the increasing importance of digital resources in
              the modern era. The fact that membership is free for universities
              and colleges that order book distributions from Edwin
              Incorporation is a great incentive for those institutions to take
              advantage of this service.
            </p>
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
                className={`rounded-[12px] border border-[#E2E8F0] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${index === 0
                  ? "bg-[#1B3A6B] text-[#FFFFFF] sm:col-span-2"
                  : "bg-[#F8FAFC] text-[#1A1A2E]"
                  }`}
              >
                <FaCheckCircle
                  className={`mb-4 text-[22px] ${index === 0 ? "text-[#C89B3C]" : "text-[#1B3A6B]"
                    }`}
                />
                <p className="text-[15px] leading-[1.7]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-[34px] font-semibold text-[#1B3A6B]">
              Our Services
            </h2>
            <div className="mx-auto h-[4px] w-24 rounded-full bg-[#C89B3C]" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[12px] border border-[#E2E8F0] bg-[#FFFFFF] p-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[28px] text-[#FFFFFF] transition duration-200 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-[24px] font-semibold text-[#1B3A6B]">
                  {item.title}
                </h3>
                <p className="mb-6 text-[15px] text-[#1A1A2E]">{item.value}</p>
                <a
                  href="#apply"
                  className="inline-flex rounded-[8px] bg-[#1B3A6B] px-5 py-[10px] text-[14px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <h3 className="mb-5 text-center text-[24px] font-semibold text-[#1B3A6B]">
                  {card.title}
                </h3>
                <p className="mb-5 border-b border-dashed border-[#E2E8F0] pb-5 text-[15px] leading-[1.7]">
                  {card.subtitle}
                </p>
                <ul className="space-y-4">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-[1.7]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C89B3C]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featureCards.slice(3).map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <h3 className="mb-5 text-center text-[24px] font-semibold text-[#1B3A6B]">
                  {card.title}
                </h3>
                <p className="mb-5 text-[15px] leading-[1.7]">{card.subtitle}</p>
                <ul className="space-y-4">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-[1.7]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C89B3C]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_0.9fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-[12px]"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Expert"
              className="h-[420px] w-full object-cover grayscale"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6 text-[34px] font-semibold text-[#1B3A6B]">
              Meet Experts
            </h2>
            <p className="mb-4 text-[18px] leading-[1.7] text-[#1B3A6B]">
              Dr Carla Paker and Dr David
            </p>
            <p className="mb-4 text-[18px] text-[#1B3A6B]">
              Call on: +91 6262752168
            </p>
            <p className="mb-7 text-[18px] text-[#1B3A6B]">
              Email :- care@edwinepc.com
            </p>
            <a
              href="#apply"
              className="inline-flex rounded-[8px] bg-[#1B3A6B] px-7 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              Get More
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-[12px]"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Expert"
              className="h-[420px] w-full object-cover grayscale"
            />
          </motion.div>
        </div>
      </section>

      <section id="apply" className="bg-[#EAF1FB] px-5 py-20">
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
              Edwin Legal Services Application
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Fill the institutional membership form for University Services.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
          >
            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-lg font-bold">
                  Digital Library Application Form
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  Fill all required details carefully
                </p>
              </div>

              <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                <FaFileSignature className="text-[#C89B3C] text-xl" />
              </div>
            </div>

            <div className="relative w-full bg-white p-3">
              <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=d4dba4baaf42bc964cd0b0fff01b2fe05f7ac940287f9c60c58ef99dd649f94cbee9205586521402e2180b44fe5d3f50gid5c5161cf37ffd7557cfa7f33a848e98423a9533df300cd9b927c3dc0dd4cbc44"
                  width="100%"
                  height="520"
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

      <section className="bg-[#F8FAFC] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-[32px] font-semibold text-[#1B3A6B]">
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
                className="rounded-[12px] border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <FaQuoteLeft className="mb-4 text-[22px] text-[#C89B3C]" />
                <div className="mb-4 flex gap-1 text-[#C89B3C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="mb-5 text-[15px] leading-[1.7]">{item.text}</p>
                <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
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

export default DigitalLibrary;