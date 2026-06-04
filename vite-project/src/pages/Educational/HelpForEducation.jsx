import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaGraduationCap,
  FaHeadset,
  FaLaptop,
  FaLightbulb,
  FaMicroscope,
  FaNewspaper,
  FaPhoneAlt,
  FaQuoteLeft,
  FaSchool,
  FaStar,
  FaUniversity,
  FaUserGraduate,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const HelpForEducation = () => {
  const [activeTab, setActiveTab] = useState("Students");

  

  const heroImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  ];

  const services = [
    { icon: <FaBookOpen />, title: "Academic Support", text: "Assignment guidance, projects, presentations, academic writing and learning support." },
    { icon: <FaGraduationCap />, title: "Admission Guidance", text: "University admissions, scholarship support, career counselling and SOP guidance." },
    { icon: <FaLaptop />, title: "Online Learning", text: "Online classes, digital learning resources, recorded lectures and certification programmes." },
    { icon: <FaMicroscope />, title: "Research Assistance", text: "Research methodology, publication support, journal guidance and thesis assistance." },
    { icon: <FaSchool />, title: "Training Programmes", text: "Workshops, FDPs, seminars, skill development and technical training." },
    { icon: <FaBriefcase />, title: "Career Development", text: "Resume building, interview preparation, internship support and mentoring." },
  ];

  const tabs = {
    Students: ["Academic guidance", "Project support", "Career preparation", "Online learning"],
    Researchers: ["Research methodology", "Publication guidance", "Thesis assistance", "Journal support"],
    Institutions: ["FDP programmes", "Academic collaboration", "Training workshops", "Institutional development"],
  };

  const resources = [
    { icon: <FaFileAlt />, title: "Study Materials" },
    { icon: <FaVideo />, title: "Webinars" },
    { icon: <FaNewspaper />, title: "Academic Updates" },
    { icon: <FaAward />, title: "Certificates" },
  ];

  const testimonials = [
    { name: "Student", text: "The academic support helped me prepare my projects professionally." },
    { name: "Research Scholar", text: "Research guidance and publication support were useful and clear." },
    { name: "Faculty Member", text: "Training programmes were practical and well structured." },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#EEF5FF] font-['Plus_Jakarta_Sans'] text-[#08224A]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-20">
        <div className="absolute -left-24 top-8 h-[300px] w-[300px] rounded-full bg-[#FFB000]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            <span className="mb-5 inline-flex rounded-xl border border-[#FFB000] bg-white px-4 py-2 text-[13px] text-[#5A6A85]">
              Help for Education
            </span>
            <h1 className="mb-6 text-[42px] font-bold leading-tight text-[#FFFFFF] md:text-[58px]">
              Complete Educational Support for Students & Institutions
            </h1>
            <p className="mb-8 max-w-2xl text-[16px] leading-[1.8] text-[#FFFFFF]">
              Empowering students, researchers, educators and institutions through quality educational guidance, training and academic support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+916262752167" className="inline-flex items-center gap-2 rounded-xl bg-[#FFB000] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-white hover:text-[#082B63]">
                <FaPhoneAlt /> Get Consultation
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-white hover:text-[#082B63]">
                View Services <FaArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-5">
            {heroImages.map((img, index) => (
              <div key={img} className={`${index === 0 ? "col-span-2 h-[260px]" : "h-[220px]"} overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-white p-2 shadow-[0_18px_55px_rgba(8,34,74,.10)]`}>
                <img src={img} alt="education" className="h-full w-full rounded-xl object-cover" loading="lazy" width="600" height="400" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">Our Educational Services</h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Professional educational support services for learners, researchers, faculty members and institutions.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] hover:border-[#FFB000]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[24px] bg-[#EEF5FF] text-[26px] text-[#082B63] group-hover:bg-[#082B63] group-hover:text-[#FFFFFF]">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold text-[#082B63]">{service.title}</h3>
                <p className="text-[15px] leading-[1.7]">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="mb-4 inline-flex rounded-xl border border-[#FFB000] bg-white px-4 py-2 text-[13px] text-[#5A6A85]">
              Support Categories
            </span>
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
              Who Can Benefit?
            </h2>
            <p className="text-[15px] leading-[1.7]">
              Educational support services designed for students, researchers, faculty members and institutions.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]">
            <div className="mb-6 flex flex-wrap gap-3">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-xl px-5 py-[10px] text-[15px] font-medium ${activeTab === tab ? "bg-[#082B63] text-[#FFFFFF]" : "border border-[#082B63] bg-white text-[#082B63]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {tabs[activeTab].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-5">
                  <FaCheckCircle className="text-[#2D7A4F]" />
                  <p className="text-[15px] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">Educational Resources</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-6 text-center hover:border-[#FFB000]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[24px] bg-white text-[26px] text-[#082B63] shadow-[0_18px_55px_rgba(8,34,74,.10)]">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-semibold text-[#082B63]">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">Testimonials</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] hover:border-[#FFB000]"
              >
                <FaQuoteLeft className="mb-4 text-[22px] text-[#FFB000]" />
                <div className="mb-4 flex gap-1 text-[#FFB000]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="mb-5 text-[15px] leading-[1.7]">{item.text}</p>
                <h3 className="text-[18px] font-semibold text-[#082B63]">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpForEducation;
