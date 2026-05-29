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
  FaWhatsapp,
} from "react-icons/fa";

const HelpForEducation = () => {
  const [activeTab, setActiveTab] = useState("Students");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

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
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#EAF1FB] px-5 py-20">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#1B3A6B] via-[#1B3A6B] to-[#EAF1FB]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            <span className="mb-5 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Help for Education
            </span>
            <h1 className="mb-6 text-[42px] font-bold leading-tight text-[#FFFFFF] md:text-[58px]">
              Complete Educational Support for Students & Institutions
            </h1>
            <p className="mb-8 max-w-2xl text-[16px] leading-[1.8] text-[#FFFFFF]">
              Empowering students, researchers, educators and institutions through quality educational guidance, training and academic support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+916262752167" className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1B3A6B]">
                <FaPhoneAlt /> Get Consultation
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1B3A6B]">
                View Services <FaArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-5">
            {heroImages.map((img, index) => (
              <div key={img} className={`${index === 0 ? "col-span-2 h-[260px]" : "h-[220px]"} overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)]`}>
                <img src={img} alt="education" className="h-full w-full rounded-[8px] object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">Our Educational Services</h2>
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
                className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-[#C89B3C]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[26px] text-[#1B3A6B] group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold text-[#1B3A6B]">{service.title}</h3>
                <p className="text-[15px] leading-[1.7]">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Support Categories
            </span>
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Who Can Benefit?
            </h2>
            <p className="text-[15px] leading-[1.7]">
              Educational support services designed for students, researchers, faculty members and institutions.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="mb-6 flex flex-wrap gap-3">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-[8px] px-5 py-[10px] text-[15px] font-medium ${
                    activeTab === tab ? "bg-[#1B3A6B] text-[#FFFFFF]" : "border border-[#1B3A6B] bg-[#FFFFFF] text-[#1B3A6B]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {tabs[activeTab].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                  <FaCheckCircle className="text-[#2D7A4F]" />
                  <p className="text-[15px] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">Educational Resources</h2>
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
                className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6 text-center hover:border-[#C89B3C]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FFFFFF] text-[26px] text-[#1B3A6B] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-semibold text-[#1B3A6B]">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">Testimonials</h2>
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
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-[#C89B3C]"
              >
                <FaQuoteLeft className="mb-4 text-[22px] text-[#C89B3C]" />
                <div className="mb-4 flex gap-1 text-[#C89B3C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="mb-5 text-[15px] leading-[1.7]">{item.text}</p>
                <h3 className="text-[18px] font-semibold text-[#1B3A6B]">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <motion.div className="mx-auto max-w-[1200px] text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <FaGraduationCap className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need Educational Guidance?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Connect with Edwin Incorporation for academic support, research assistance, training programmes and educational consultancy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+916262752167" className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]">
              <FaPhoneAlt /> Call Now
            </a>
            <a href="mailto:care@edwinepc.com" className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]">
              <FaEnvelope /> Email Us
            </a>
          </div>
        </motion.div>
      </section>

      <a href="https://wa.me/916262752167" className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[24px] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#C89B3C]">
        <FaWhatsapp />
      </a>
    </main>
  );
};

export default HelpForEducation;