import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaFileAlt,
  FaGraduationCap,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUniversity,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const NaacSupport = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "NAAC Support",
      subtitle:
        "Professional assistance for accreditation, documentation, compliance and institutional quality support.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Legal Education & Accreditation",
      subtitle:
        "Helping schools, colleges, universities and training providers improve quality systems.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Institutional Quality Support",
      subtitle:
        "Support for NAAC/MOU, NIRF, NBA, documentation and regulatory compliance.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const services = [
    "Accreditation services for college and university",
    "Educational project finance",
    "Employment of educational faculties",
    "Branding & positioning analysis",
    "Planning and establishment of any robust educational institution",
    "Drafting all requisite documents and getting proper registration",
    "Compliance of all regulatory laws and rules of concerned authorities",
    "Formulation of curriculum and programs",
    "Adoption or transfer of teaching technology",
    "Other legal services for education sector",
  ];

  const mission = [
    "To be a globally recognized authority on the accreditation of international universities, colleges, schools, training organizations and distance education providers.",
    "To assist institutions to develop into providers of quality higher education, respected worldwide.",
    "To ensure that all the LES areas of operation are adhered to and the best possible education experience is given to their students.",
  ];

  const legalAims = [
    "To train students for legal profession.",
    "To educate the students to solve the individual client’s problems as well as society’s problems.",
    "To provide a centre where scholars might contribute to understanding of law.",
    "To inculcate students with operative legal rules and provide adequate experience.",
    "To point the right road for future development.",
  ];

  const objectives = [
    "To develop perceptions and understand the problems of society.",
    "To generate different kinds of skills and knowledge needed for tasks in society.",
    "To broaden opportunity and mobility in society.",
    "To develop research of value to education and society with use of educational facilities.",
  ];

  const formFields = [
    "Name of College / University / NGO *",
    "Email *",
    "Mobile *",
    "Chairperson Name",
    "Year of Establishment",
    "Postal Address",
    "Last Project Detail",
  ];

  const testimonials = [
    {
      name: "College Administrator",
      text: "The documentation and accreditation guidance helped us understand the process clearly.",
    },
    {
      name: "University Coordinator",
      text: "Professional support for compliance, planning and institutional development.",
    },
    {
      name: "Academic Consultant",
      text: "Useful assistance for NAAC, NIRF and regulatory documentation support.",
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
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [slides.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45 }}
          >
            <p className="mb-5 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Edwin Legal Services
            </p>

            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              NAAC Support & Legal Education Assistance
            </h1>

            <p className="mb-6 max-w-2xl text-[15px] leading-[1.7] text-[#1A1A2E]">
              Edwin Legal Services provides institutional support for schools,
              colleges, universities and online learning providers through
              accreditation guidance, regulatory documentation, project planning
              and quality enhancement assistance.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {["NAAC/MOU", "NIRF/NBA", "Documentation"].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5"
                >
                  <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] font-medium text-[#1A1A2E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Apply Now
              </a>
              <a
                href="https://wa.me/916262752167"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                Instant Chat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[12px] bg-[#1B3A6B]" />
            <div className="relative overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="relative overflow-hidden rounded-[12px]"
                >
                  <img
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    className="h-[430px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1B3A6B]/55" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="mb-2 text-[28px] font-semibold text-[#FFFFFF]">
                      {slides[activeSlide].title}
                    </h2>
                    <p className="text-[15px] leading-[1.7] text-[#FFFFFF]">
                      {slides[activeSlide].subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-3 rounded-full transition duration-200 ${
                        index === activeSlide
                          ? "w-8 bg-[#C89B3C]"
                          : "w-3 bg-[#D6E0F0]"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                  >
                    <FaArrowRight />
                  </button>
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
            <FaUniversity className="mb-5 text-[40px] text-[#1B3A6B]" />
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              About Us
            </h2>
            <p className="mb-4 text-[15px] leading-[1.7]">
              Edwin Legal Services is an internationally renowned quality
              standard for schools, colleges, universities and online learning
              providers.
            </p>
            <p className="text-[15px] leading-[1.7]">
              The well-defined and objective benchmarking of LES accreditation
              brings independent information to both students and education
              professionals.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Solutions for Success
            </h2>
            <p className="mb-4 text-[15px] leading-[1.7]">
              Accreditation through LES will help students and parents make a
              more informed choice and will also help a school, college,
              university, training provider or distance education provider
              demonstrate that they are a high-quality institution.
            </p>
            <p className="text-[15px] leading-[1.7]">
              Our international accreditation allows students to gain a
              realistic and honest picture of what an institution is really like
              in terms of quality, resources, student support and ethics.
            </p>
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
              NAAC & Institutional Services
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Complete support for education institutions, accreditation,
              documentation, regulatory requirements and academic planning.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <motion.div
                key={service}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[22px] text-[#1B3A6B]">
                  <FaClipboardList />
                </div>
                <h3 className="text-[18px] font-semibold leading-[1.5] text-[#1A1A2E]">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
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
                Our Mission
              </h2>
              <div className="space-y-4">
                {mission.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[13px] font-semibold text-[#FFFFFF]">
                      {index + 1}
                    </span>
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
                Our Expertise
              </h2>
              <p className="mb-4 text-[15px] leading-[1.7]">
                Drawing on nearly three decades of international education
                experience, LES has a unique insight into the global education
                market.
              </p>
              <p className="text-[15px] leading-[1.7]">
                As education becomes increasingly globalised, the need for
                quality assurance becomes ever more important. Institutions need
                to ensure that they are recruiting genuine and appropriately
                qualified students while students look for quality learning
                experiences.
              </p>
            </motion.div>
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
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Legal Education in India
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Legal education is a broad concept that includes profession,
              teaching, research and administration in different branches where
              law plays a pivotal role.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
                Aims of Legal Education
              </h2>
              <div className="space-y-3">
                {legalAims.map((item) => (
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
                Objectives of Legal Education
              </h2>
              <div className="space-y-3">
                {objectives.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#2D7A4F]" />
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
            className="mt-8 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6"
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Legal Education Institutions
            </h2>
            <p className="text-[15px] leading-[1.7]">
              Private universities have played a significant role in exploring
              the changes in legal education over the last decade. They engage
              in the field of legal education and strive to improve the quality
              of legal education in India. Many institutions have opted for more
              interactive and innovative methods of learning.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="apply" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] bg-[#1B3A6B] p-6 text-[#FFFFFF]"
          >
            <FaFileAlt className="mb-5 text-[40px] text-[#C89B3C]" />
            <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
              Edwin Legal Services
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#FFFFFF]">
              Submit your institutional details for NAAC support, accreditation
              assistance, documentation, compliance and legal education services.
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
              NAAC Support Form
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
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

              <div>
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Select Service
                </label>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>NAAC Assistance</option>
                  <option>NIRF Support</option>
                  <option>NBA Support</option>
                  <option>Documentation</option>
                </select>
              </div>

              {formFields.map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input
                    type={label === "Year of Establishment" ? "date" : "text"}
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Message / Requirement
                </label>
                <textarea className="min-h-[120px] w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
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
          <FaUsers className="mx-auto mb-5 text-[44px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need NAAC or Legal Education Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Connect with Edwin Incorporation for accreditation assistance,
            NAAC/NIRF/NBA support, institutional documentation and regulatory
            guidance.
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

export default NaacSupport;