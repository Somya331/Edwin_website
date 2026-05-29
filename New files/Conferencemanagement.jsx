import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaGlobeAsia,
  FaHandshake,
  FaMapMarkerAlt,
  FaMicrophone,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUpload,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const ConferenceManagement = () => {
  const [activeHero, setActiveHero] = useState(0);
  const [activeService, setActiveService] = useState("Sponsorship for your Conference");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const heroSlides = [
    {
      title: "Conference Management Board",
      text: "Professional support for academic conferences, seminars, symposiums, publication assistance and conference materials.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Conference Technical Support",
      text: "Sponsorship, speaker arrangement, conference kits, brochures, posters, banners and stationery support.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "International Conference Assistance",
      text: "Support for national and international level seminars, conferences and academic events.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    "Sponsorship for your Conference",
    "Speaker Needs (Foreign)",
    "Complete Conference Materials",
    "Needs Publication Assistance",
    "Needs Speakers (Indian)",
    "Organize International Conference Assistance",
  ];

  const speakers = [
    {
      name: "David",
      role: "Academicians",
      category: "Out of India",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Jack",
      role: "Industrialist",
      category: "Out of India",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Miller Cook",
      role: "Academicians",
      category: "Out of India",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Adam Joy",
      role: "ICT Experts",
      category: "Out of India",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Gaile",
      role: "Academicians",
      category: "Out of India",
      image:
        "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kingston",
      role: "Technological Experts",
      category: "Out of India",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Peeter",
      role: "Cricket Coach",
      category: "Club Trainers",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Tailor",
      role: "Tennis Coach",
      category: "Club Trainers",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const benefits = [
    {
      icon: <FaCalendarAlt />,
      title: "Conference Planning",
      text: "Planning support for seminars, conferences and symposia.",
    },
    {
      icon: <FaMicrophone />,
      title: "Speaker Assistance",
      text: "Indian speakers, foreign speakers, keynote speakers and resource persons.",
    },
    {
      icon: <FaFileAlt />,
      title: "Conference Kits",
      text: "Brochures, posters, banners, conference bags, writing pads and stationery.",
    },
    {
      icon: <FaBookOpen />,
      title: "Publication Support",
      text: "Publication assistance for conference papers, proceedings and academic material.",
    },
  ];

  const testimonials = [
    {
      name: "Conference Organizer",
      text: "Conference materials and speaker assistance were managed professionally.",
    },
    {
      name: "Academic Institution",
      text: "The team supported us in planning and managing our academic conference smoothly.",
    },
    {
      name: "Research Coordinator",
      text: "Publication assistance and technical support were very useful for our event.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-20">
        <div className="absolute left-0 top-0 h-full w-[58%] bg-[#1B3A6B]" />
        <div className="absolute right-0 top-0 h-full w-[42%] bg-[#EAF1FB]" />
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#C89B3C]/20 blur-3xl" />
        <div className="absolute right-12 bottom-16 h-72 w-72 rounded-full bg-[#C89B3C]/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[640px] max-w-[1200px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <p className="mb-5 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              Conference Management
            </p>

            <h1 className="mb-6 text-[42px] font-bold leading-tight text-[#FFFFFF] md:text-[58px]">
              Conference Management Board
            </h1>

            <p className="mb-8 max-w-2xl text-[16px] leading-[1.8] text-[#FFFFFF]">
              Complete support for conference sponsorship, speaker needs,
              publication assistance, conference materials and international
              conference organization assistance.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {["Sponsorship", "Speakers", "Publication"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5 }}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                >
                  <FaCheckCircle className="mx-auto mb-2 text-[#2D7A4F]" />
                  <p className="text-[14px] font-semibold text-[#1B3A6B]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Apply Now
              </a>
              <a
                href="#services"
                className="rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF]/10 px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHero}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55 }}
                  className="relative overflow-hidden rounded-[12px]"
                >
                  <img
                    src={heroSlides[activeHero].image}
                    alt={heroSlides[activeHero].title}
                    className="h-[380px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1B3A6B]/55" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="mb-3 text-[28px] font-semibold text-[#FFFFFF]">
                      {heroSlides[activeHero].title}
                    </h2>
                    <p className="max-w-xl text-[15px] leading-[1.7] text-[#FFFFFF]">
                      {heroSlides[activeHero].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[12px] bg-[#EAF1FB] p-5">
                  <FaMicrophone className="mb-3 text-[28px] text-[#1B3A6B]" />
                  <h3 className="mb-2 text-[18px] font-semibold text-[#1B3A6B]">
                    Speaker Support
                  </h3>
                  <p className="text-[14px] leading-[1.6]">
                    Indian and foreign speaker assistance.
                  </p>
                </div>

                <div className="rounded-[12px] bg-[#1B3A6B] p-5 text-[#FFFFFF]">
                  <FaHandshake className="mb-3 text-[28px] text-[#C89B3C]" />
                  <h3 className="mb-2 text-[18px] font-semibold text-[#FFFFFF]">
                    Event Assistance
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#FFFFFF]">
                    Complete conference management support.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[180px] left-0 right-0 flex justify-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveHero(index)}
                  className={`h-3 w-3 rounded-full border border-[#FFFFFF] ${
                    activeHero === index ? "bg-[#C89B3C]" : "bg-[#FFFFFF]"
                  }`}
                />
              ))}
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
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Apply Now
            </p>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Conference Services
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`w-full rounded-[8px] px-4 py-3 text-left text-[15px] font-medium transition duration-200 ${
                      activeService === service
                        ? "bg-[#1B3A6B] text-[#FFFFFF]"
                        : "bg-[#EAF1FB] text-[#1B3A6B] hover:bg-[#D6E0F0]"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-[60px] bg-[#EAF1FB]" />
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[30px] text-[#FFFFFF]">
                  <FaBriefcase />
                </div>
                <h3 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
                  {activeService}
                </h3>
                <p className="mb-6 text-[15px] leading-[1.7]">
                  Edwin Incorporation provides professional conference support
                  for this service with planning, documentation, coordination,
                  conference kits and execution assistance.
                </p>
                <a
                  href="#apply"
                  className="inline-flex rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#1B3A6B]"
                >
                  Apply for this Service
                </a>
              </div>
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
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Speakers Available
            </p>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Speaker & Resource Person Network
            </h2>
          </motion.div>

          <div className="mb-8 rounded-[12px] bg-[#1B3A6B] p-6 text-[#FFFFFF]">
            <h3 className="text-[22px] font-semibold text-[#FFFFFF]">
              Out of India
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {speakers.slice(0, 6).map((speaker, index) => (
              <motion.div
                key={speaker.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -7 }}
                className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-[230px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-[18px] font-semibold text-[#1B3A6B]">
                    {speaker.name}
                  </h3>
                  <p className="text-[15px] text-[#5A6A85]">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="my-10 rounded-[12px] bg-[#1B3A6B] p-6 text-[#FFFFFF]">
            <h3 className="text-[22px] font-semibold text-[#FFFFFF]">
              Club Trainers
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {speakers.slice(6).map((speaker, index) => (
              <motion.div
                key={speaker.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -7 }}
                className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-[260px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-[18px] font-semibold text-[#1B3A6B]">
                    {speaker.name}
                  </h3>
                  <p className="text-[15px] text-[#5A6A85]">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Conference management"
              className="h-[430px] w-full rounded-[12px] object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              About
            </p>
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Conference Management Board
            </h2>
            <p className="mb-4 text-[15px] leading-[1.8]">
              The Conference Management Board is a global, independent business
              working in the public interest. Our agenda is simple: to help
              leaders who are organizing conferences for academics navigate the
              biggest issues impacting business and better serve society.
            </p>
            <p className="mb-4 text-[15px] leading-[1.8]">
              We believe in innovative approaches that make you think- and act-
              differently. Everything we do reflects the input of our members
              and their real-world challenges.
            </p>
            <p className="mb-4 text-[15px] leading-[1.8]">
              We connect senior executives, academicians, keynote speakers and
              resource persons from across the World to share ideas, and our
              experts create fact-based research and consensus-driven policy
              statements.
            </p>
            <p className="mb-4 text-[15px] leading-[1.8]">
              Because we are independent and non-partisan, our work is trusted.
              If you learned it at The Conference Management Board, you can
              count on it.
            </p>
            <p className="text-[15px] leading-[1.8]">
              Conference Management Board concentrates on jobs related to the
              supply and printing of stationery and conference kits for
              international and national-level seminars/ conferences/ symposia
              held by various academic institutions/ organisations. Right from
              brochures, posters, banners, conference bags, writing pad,
              stationery, and memento for delegates, the Conference Management
              Board takes care of everything.
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
              Benefits
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[28px] text-[#FFFFFF] transition duration-200 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold text-[#1B3A6B]">
                  {benefit.title}
                </h3>
                <p className="text-[15px] leading-[1.7]">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[12px] bg-[#1B3A6B] p-8 text-[#FFFFFF]"
          >
            <FaAward className="mb-5 text-[44px] text-[#C89B3C]" />
            <h2 className="mb-5 text-[28px] font-semibold text-[#FFFFFF]">
              Conference - Technical Support
            </h2>
            <p className="mb-6 text-[15px] leading-[1.8]">
              Submit your request for sponsorship, speakers, publication
              assistance, conference materials and complete conference
              organization support.
            </p>

            <div className="space-y-4 rounded-[12px] bg-[#FFFFFF] p-6 text-[#1B3A6B]">
              <p className="text-[22px] font-semibold">Dr. Rohit Kulkarni</p>
              <p className="text-[18px] font-semibold">Call: 6262752168</p>
              <p className="text-[18px] font-semibold">
                Email: care@edwinepc.com
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
            <h3 className="mb-8 text-[28px] font-semibold text-[#1B3A6B]">
              CMB Sponsorship
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
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

              <div>
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  Select Conference Service
                </label>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>

              {[
                "Name of Events *",
                "Last Name *",
                "Email *",
                "Mobile *",
                "Postal Address *",
                "Organisation / Institution Name",
              ].map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[13px] text-[#5A6A85]">
                Upload Conference Document
              </label>
              <input
                type="file"
                className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
              />
            </div>

            <div className="mt-6">
              <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                <input type="checkbox" /> Terms & Condition * Read
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
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
                <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                  {item.name}
                </h3>
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
        >
          <FaBriefcase className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Keep in Touch with Us
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for conference sponsorship, speakers,
            publication assistance, technical support and complete conference
            management services.
          </p>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 text-left">
              <FaMapMarkerAlt className="mb-3 text-[22px] text-[#C89B3C]" />
              <p className="text-[15px] leading-[1.7] text-[#1B3A6B]">
                15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi
                110019
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 text-left">
              <FaPhoneAlt className="mb-3 text-[22px] text-[#C89B3C]" />
              <p className="mb-2 text-[15px] font-medium text-[#1B3A6B]">
                India: 011-66155019
              </p>
              <p className="mb-2 text-[15px] font-medium text-[#1B3A6B]">
                Phone: +91 6262752167
              </p>
              <p className="text-[15px] font-medium text-[#1B3A6B]">
                Phone: +12792029553
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 text-left md:col-span-2">
              <FaEnvelope className="mb-3 text-[22px] text-[#C89B3C]" />
              <p className="mb-2 text-[15px] font-medium text-[#1B3A6B]">
                Email: care@edwinepc.com
              </p>
              <p className="text-[15px] font-medium text-[#1B3A6B]">
                Website: www.academichelpstore.com
              </p>
            </div>
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

export default ConferenceManagement;