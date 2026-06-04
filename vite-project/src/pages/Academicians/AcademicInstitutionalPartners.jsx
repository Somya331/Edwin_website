import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaGlobeAsia,
  FaHandshake,
  FaMapMarkerAlt,
  FaMicrophone,
  FaPhoneAlt,
  FaRegClock,
  FaRocket,
  FaSearch,
  FaStar,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1900&q=90";

const auditoriumImage =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=90";

const collegeImage =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90";

const universityImage =
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1400&q=90";

const indiaCultureImage =
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=90";

const penchImage =
  "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=90";

const conferenceStats = [
  { value: "18–22", label: "February 2026" },
  { value: "IKS", label: "Conference Theme" },
  { value: "2047", label: "Viksit Bharat Road Map" },
  { value: "FDDI", label: "Venue Chhindwara" },
];

const quickLinks = [
  {
    title: "Apply for Conference",
    text: "Register yourself for the International Conference - Chhindwara 2026.",
    icon: FaFileAlt,
    link: "#conference-form",
  },
  {
    title: "Apply for Award",
    text: "Submit your profile for awards and honours during the conference.",
    icon: FaAward,
    link: "#award-form",
  },
  {
    title: "Apply for Speaker",
    text: "Register as speaker, resource person, or invited academic expert.",
    icon: FaMicrophone,
    link: "#speaker-form",
  },
  {
    title: "Travel Grant",
    text: "Apply for travel grant assistance for the conference event.",
    icon: FaRocket,
    link: "#travel-grant-form",
  },
];

const partners = [
  {
    name: "IPS College, Chhindwara",
    role: "Joint Organizer",
    text: "Indira Priyadarshini College, Chhindwara (M.P.), India",
    icon: FaUniversity,
  },
  {
    name: "Raja Shankar Shah University",
    role: "Joint Organizer",
    text: "Raja Shankar Shah University, Chhindwara (M.P.), India",
    icon: FaUniversity,
  },
  {
    name: "FDDI Auditorium",
    role: "Conference Venue",
    text: "FDDI Campus, Chhindwara (M.P.), India",
    icon: FaMapMarkerAlt,
  },
  {
    name: "South Asia Management Association",
    role: "In Association With",
    text: "SAMA - South Asia Management Association",
    icon: FaHandshake,
  },
  {
    name: "Edwin Incorporation",
    role: "Technical Support",
    text: "Edwin Incorporation (Edwin INC)",
    icon: FaGlobeAsia,
  },
];

const themes = [
  "An overview on conceptualization of Viksit Bharat 2047.",
  "Science, Social Science, Technology and Applicability of Ancient Engineering for Sustainable Innovation.",
  "Holistic Well-being and Healthcare through IKS.",
  "Quality Education and Lifelong Learning in IKS.",
  "Equality and Empowerment in IKS.",
  "Sustainable Natural Resources through IKS.",
  "Ethical Business and Economic Growth through IKS.",
  "Environmental Conservation through IKS.",
  "Research methodology in IKS.",
  "Social Innovation for rural and tribal empowerment.",
  "IKS towards future solutions for sustainable development.",
  "Indian Knowledge System and modern era: Indian Footwear design, Fashion and Retail.",
  "Sustainable Retailing for Viksit Bharat 2047.",
  "Retail Entrepreneurship & Start-Up Ecosystem.",
  "Future evolution of footwear design and manufacturing.",
];

const features = [
  {
    title: "Present Your Research",
    text: "Share your findings with a global audience of academics and industry experts.",
    icon: FaBookOpen,
  },
  {
    title: "International Exposure",
    text: "Gain visibility and connect with researchers from around the world.",
    icon: FaGlobeAsia,
  },
  {
    title: "Networking Opportunities",
    text: "Build valuable connections with academics, industry leaders, and policy stakeholders.",
    icon: FaUsers,
  },
  {
    title: "Journal Publication",
    text: "Selected papers will be published in reputed international journals.",
    icon: FaFileAlt,
  },
  {
    title: "Best Paper Awards",
    text: "Recognition and awards for outstanding research contributions.",
    icon: FaAward,
  },
  {
    title: "IKS & Sustainability",
    text: "Deep-dive discussions on integrating Indigenous Knowledge Systems with sustainability goals.",
    icon: FaStar,
  },
];

const importantDates = [
  { milestone: "Abstract Submission Deadline", date: "10 January 2026" },
  { milestone: "Full Paper Submission Deadline", date: "15 February 2026" },
  { milestone: "Conference Dates", date: "18–22 February 2026" },
];

const feeRows = [
  { category: "Academicians / Scientists", indian: "₹3,000", foreign: "$40" },
  { category: "Research Scholars", indian: "₹2,500", foreign: "$35" },
  { category: "Industry Professionals", indian: "₹4,000", foreign: "$50" },
  { category: "PG / UG Students", indian: "₹2,000", foreign: "$30" },
  { category: "Junior Scientist", indian: "₹500", foreign: "$10" },
];

const awardList = [
  "Change Maker of the Year Award 2026",
  "Life Time Achievement Award 2026",
  "Visionary Leader of the Year Award 2026",
  "Edupreneur of the Year Award 2026",
  "Exemplary Academic Leader of the Year Award 2026",
  "Best Academician of the Year Award 2026",
  "Principal of the Year Award 2026",
  "Rashtriya Shiksha Gaurav Puraskar 2026",
  "Award for Excellence in Teaching in Higher Education",
  "Young Scientist Award",
  "Award for Pioneer in Research",
  "Award for the Best Paper Presentation",
  "International Pride of Educationist Award",
  "International Research Supervisor Award",
  "Young Research Scholar Award – Upto 40 Years",
];

const formOptions = [
  "Conference Registration",
  "Award Application",
  "Speaker / Resource Person",
  "Travel Grant",
  "Research Paper Presentation",
  "Poster Presentation",
  "Keynote Talk",
];

export default function ChhindwaraConferencePage() {
  const [query, setQuery] = useState("");
  const [conferenceStatus, setConferenceStatus] = useState("");
  const [awardStatus, setAwardStatus] = useState("");
  const [speakerStatus, setSpeakerStatus] = useState("");
  const [travelStatus, setTravelStatus] = useState("");

  

  const filteredAwards = useMemo(() => {
    const value = query.toLowerCase().trim();
    return awardList.filter((item) => item.toLowerCase().includes(value));
  }, [query]);

  const handleConferenceSubmit = (event) => {
    event.preventDefault();
    setConferenceStatus("Your conference application has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleAwardSubmit = (event) => {
    event.preventDefault();
    setAwardStatus("Your award application has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleSpeakerSubmit = (event) => {
    event.preventDefault();
    setSpeakerStatus("Your speaker application has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleTravelSubmit = (event) => {
    event.preventDefault();
    setTravelStatus("Your travel grant application has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute inset-0">
          <img src={heroImage}
            alt="International Conference Chhindwara"
            className="h-full w-full object-cover opacity-30" loading="lazy" width="600" height="400" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.32),transparent_34%),linear-gradient(120deg,rgba(27,58,107,0.98),rgba(7,27,53,0.92))]" />
        </div>

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[7%] top-[17%] hidden h-24 w-24 rounded-full border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur lg:block"
        />

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[8%] hidden h-32 w-32 rounded-[28px] border border-[#C89B3C]/35 bg-[#C89B3C]/20 backdrop-blur lg:block"
        />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6E0F0]/35 bg-[#FFFFFF]/10 px-5 py-2 text-[13px] font-normal text-[#FFFFFF] backdrop-blur">
                <FaCalendarAlt className="text-[#C89B3C]" />
                International Conference - Chhindwara 2026
              </div>

              <h1 className="max-w-4xl text-[42px] font-bold leading-tight text-[#FFFFFF] lg:text-[56px]">
                Indian Knowledge Systems for Sustainable Development
              </h1>

              <p className="mt-6 max-w-3xl text-[17px] font-normal leading-[1.8] text-[#FFFFFF]">
                A Multidisciplinary International Conference on Indian Knowledge
                Systems (IKS) For Sustainable Development: Road Map for Viksit
                Bharat-2047.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] border border-[#D6E0F0]/25 bg-[#FFFFFF]/10 p-5 text-[#FFFFFF] backdrop-blur">
                  <FaRegClock className="text-[#C89B3C]" />
                  <p className="mt-3 text-[18px] font-semibold">18–22 February 2026</p>
                  <p className="mt-1 text-[13px] text-[#D6E0F0]">Conference Dates</p>
                </div>

                <div className="rounded-[18px] border border-[#D6E0F0]/25 bg-[#FFFFFF]/10 p-5 text-[#FFFFFF] backdrop-blur">
                  <FaMapMarkerAlt className="text-[#C89B3C]" />
                  <p className="mt-3 text-[18px] font-semibold">
                    FDDI Auditorium Chhindwara
                  </p>
                  <p className="mt-1 text-[13px] text-[#D6E0F0]">M.P., India</p>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#conference-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  Apply for Conference
                  <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#academicpartner"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FFFFFF]/80 bg-[#FFFFFF]/10 px-7 py-3 text-[15px] font-medium text-[#FFFFFF] backdrop-blur transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  View Organizers
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 -top-6 h-full w-full rounded-[34px] border border-[#C89B3C]/45" />

              <div className="relative overflow-hidden rounded-[34px] border border-[#D6E0F0]/30 bg-[#FFFFFF]/10 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur">
                <img src={auditoriumImage}
                  alt="Conference auditorium"
                  className="h-[560px] w-full rounded-[26px] object-cover" loading="lazy" width="600" height="400" />

                <div className="absolute inset-x-6 bottom-6 rounded-[20px] border border-[#D6E0F0]/40 bg-[#FFFFFF]/95 p-5 backdrop-blur">
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Jointly Organized By
                  </p>
                  <h3 className="mt-2 text-[20px] font-semibold text-[#1B3A6B]">
                    IPS College & Raja Shankar Shah University
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#1A1A2E]">
                    In association with South Asia Management Association. Technical
                    support by Edwin Incorporation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conferenceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
                className="rounded-[18px] border border-[#D6E0F0]/25 bg-[#FFFFFF]/10 p-5 backdrop-blur"
              >
                <p className="text-[30px] font-bold text-[#FFFFFF]">{stat.value}</p>
                <p className="mt-1 text-[13px] text-[#D6E0F0]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      <section className="bg-[#FFFFFF] px-5 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.link}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(27,58,107,0.08)] transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_18px_45px_rgba(27,58,107,0.14)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-5 text-[18px] font-semibold text-[#1B3A6B]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {card.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 group-hover:text-[#C89B3C]">
                    Apply Now
                    <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      <section id="academicpartner" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Academic Partners
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Organized by Leading Academic Institutions
              </h2>

              <p className="mt-5 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                The International Conference on Indian Knowledge Systems for achieving
                Sustainable Development is jointly organized by IPS College, Chhindwara
                and Raja Shankar Shah University, Chhindwara, in association with South
                Asia Management Association.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                Edwin Incorporation and IPS College provide technical support to ensure
                smooth execution, coordination, and professional assistance throughout
                the event.
              </p>
            </motion.div>

            <div className="grid gap-5">
              {partners.map((partner, index) => {
                const Icon = partner.icon;

                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, x: 26 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex gap-5 rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_8px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-x-2 hover:border-[#C89B3C]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-300 group-hover:scale-110 group-hover:bg-[#C89B3C]">
                      <Icon className="text-xl" />
                    </div>

                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-wide text-[#C89B3C]">
                        {partner.role}
                      </p>
                      <h3 className="mt-1 text-[18px] font-semibold text-[#1B3A6B]">
                        {partner.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.7] text-[#1A1A2E]">
                        {partner.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About The Conference
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Indian Knowledge System for Sustainable Development
              </h2>

              <p className="mt-5 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                This International Conference on the Indian Knowledge System for
                achieving Sustainable Development, organized by Indira Priyadarshini
                College and Raja Shankar Shah University, Chhindwara (M.P.), India, aims
                to provide a platform to exchange new advancements related to the listed
                themes.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                The conference further opens new avenues for networking and fosters
                bilateral and multilateral interdisciplinary research collaborations in
                areas of mutual interest to achieve Sustainable Development.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[18px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                  <p className="text-[28px] font-bold text-[#1B3A6B]">IKS</p>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">Core Theme</p>
                </div>
                <div className="rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <p className="text-[28px] font-bold text-[#1B3A6B]">5</p>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">Conference Days</p>
                </div>
                <div className="rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <p className="text-[28px] font-bold text-[#1B3A6B]">2047</p>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">Viksit Bharat</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[28px] bg-[#C89B3C]/20" />
              <img src={indiaCultureImage}
                alt="Indian Knowledge Systems"
                className="relative h-[520px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_20px_50px_rgba(27,58,107,0.12)]" loading="lazy" width="600" height="400" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Key Themes
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Conference Theme Areas
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Multidisciplinary themes related to IKS, sustainability, Viksit Bharat
              2047, education, innovation, and research.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, index) => (
              <motion.div
                key={theme}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.025 }}
                className="group rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_4px_20px_rgba(27,58,107,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#1B3A6B] text-[13px] font-semibold text-[#FFFFFF] transition duration-300 group-hover:bg-[#C89B3C]">
                    {index + 1}
                  </div>
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {theme}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Publication
              </p>

              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Paper Submission Guidelines
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "Full Paper: 2500–3000 words including abstract",
                  "Structure: Introduction, Literature Review, Objectives, Methodology, Discussion, Findings, Policy Implications, Conclusion",
                  "Reference Style: APA format (alphabetical order)",
                  "Font: Times New Roman",
                  "Line Spacing: 1.5",
                  "Font Size: Heading 14, Text 12",
                  "Margin: 1.5 inch",
                  "Abstract: 300–350 words",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[12px] bg-[#EAF1FB] p-4"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                    <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <p className="text-[15px] font-semibold text-[#1B3A6B]">
                  Submission Email:
                </p>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#1A1A2E]">
                  ipscwaconference2026@gmail.com
                  <br />
                  care@edwinepc.com
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="group rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:scale-110 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {feature.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-[30px] font-semibold text-[#1B3A6B]">
              Important Dates
            </h2>

            <div className="mt-8 overflow-hidden rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <table className="w-full border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Milestone
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {importantDates.map((item, index) => (
                    <tr
                      key={item.milestone}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {item.milestone}
                      </td>
                      <td className="px-5 py-4 text-[15px] text-[#1A1A2E]">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-[30px] font-semibold text-[#1B3A6B]">
              Registration Fee
            </h2>

            <div className="mt-8 overflow-hidden rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <table className="w-full border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Category
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Indian Participants
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Foreign Participants
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {feeRows.map((item, index) => (
                    <tr
                      key={item.category}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {item.category}
                      </td>
                      <td className="px-5 py-4 text-[15px] text-[#1A1A2E]">
                        {item.indian}
                      </td>
                      <td className="px-5 py-4 text-[15px] text-[#1A1A2E]">
                        {item.foreign}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[13px] leading-[1.7] text-[#5A6A85]">
              Registration fees include a conference kit and meals only during the
              conference period. Fees are non-refundable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Awards & Honours
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Conference Award Categories
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#1A1A2E]">
                Apply for awards and honours during the International Conference -
                Chhindwara 2026.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search awards..."
                className="w-full rounded-full border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[360px]"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAwards.map((award, index) => (
              <motion.a
                key={award}
                href="#award-form"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.025 }}
                className="group rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_4px_20px_rgba(27,58,107,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:bg-[#C89B3C] group-hover:text-[#FFFFFF]">
                    <FaAward />
                  </div>
                  <p className="text-[15px] font-semibold leading-[1.7] text-[#1A1A2E]">
                    {award}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_20px_55px_rgba(27,58,107,0.12)]">
              <img src={penchImage}
                alt="Pench Tiger Reserve"
                className="h-[450px] w-full object-cover" loading="lazy" width="600" height="400" />
            </div>

            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Discover Chhindwara
              </p>

              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Pench Tiger Reserve - Mowgli Land
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Chhindwara lies gracefully in the Satpura Mountain Range, blessed with
                rich biodiversity and a vibrant tribal culture. The Bharia tribe is
                predominantly found in the scenic Patalkot Valley.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Experience the legendary Pench Tiger Reserve – Mowgli Land, the
                real-world jungle that inspired Rudyard Kipling’s Jungle Book. Enjoy
                thrilling safaris, breathtaking landscapes, and a vivid glimpse into
                India’s majestic wildlife.
              </p>

              <div className="mt-6 rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <p className="text-[15px] font-semibold text-[#1B3A6B]">
                  Guest & Delegate Information
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                  <li>Meals: Breakfast, Lunch & Dinner will be provided.</li>
                  <li>Accommodation: Sharing basis for all registered guests/delegates.</li>
                  <li>
                    Pench Visit Package: Includes 02 days & 01 night stay with
                    accommodation, meals, and safari.
                  </li>
                  <li>Foreign Delegates: Additional charges apply.</li>
                </ul>
              </div>

              <p className="mt-4 text-[13px] text-[#5A6A85]">
                Note: Pench Tiger Reserve visit charges are not included in the
                registration fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="conference-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Apply Online
              </p>

              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Conference Registration Form
              </h2>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                Register now for International Conference on Indian Knowledge Systems
                (IKS) For Sustainable Development: Road Map for Viksit Bharat-2047.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <form onSubmit={handleConferenceSubmit} className="grid gap-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] text-[#5A6A85]">
                      Full Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] text-[#5A6A85]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] text-[#5A6A85]">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] text-[#5A6A85]">
                      Application Type
                    </label>
                    <select className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                      {formOptions.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    Institution / Organization
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    Paper / Presentation Title
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    Upload Abstract / Paper
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".doc,.docx,.pdf"
                    className="w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full resize-none rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="submit"
                    className="rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                  >
                    Submit Registration
                  </button>

                  <button
                    type="reset"
                    className="rounded-full border border-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                  >
                    Reset
                  </button>
                </div>

                {conferenceStatus && (
                  <p className="rounded-[12px] border border-[#2D7A4F] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
                    {conferenceStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="award-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Award Application
            </p>
            <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
              Apply for Award
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
              Submit your profile for conference awards and honours.
            </p>
          </div>

          <form
            onSubmit={handleAwardSubmit}
            className="grid gap-5 rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)] lg:col-span-2"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Mobile"
                className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
              />
              <select className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]">
                {awardList.slice(0, 8).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Designation with Institution"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <input
              type="file"
              multiple
              accept=".doc,.docx,.pdf,.jpg,.png"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-[#FFFFFF]"
            />

            <textarea
              rows="4"
              placeholder="Profile / Award details"
              className="resize-none rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <button
              type="submit"
              className="w-fit rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              Submit Award Application
            </button>

            {awardStatus && (
              <p className="rounded-[12px] border border-[#2D7A4F] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
                {awardStatus}
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="speaker-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <form
            onSubmit={handleSpeakerSubmit}
            className="grid gap-5 rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]"
          >
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Speaker Application
              </p>
              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Apply for Speaker
              </h2>
            </div>

            <input
              required
              type="text"
              placeholder="Speaker Name"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <input
              type="email"
              placeholder="Email"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <input
              type="text"
              placeholder="Topic / Expertise"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <textarea
              rows="5"
              placeholder="Speaker profile"
              className="resize-none rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <button
              type="submit"
              className="w-fit rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              Submit Speaker Profile
            </button>

            {speakerStatus && (
              <p className="rounded-[12px] border border-[#2D7A4F] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
                {speakerStatus}
              </p>
            )}
          </form>

          <form
            id="travel-grant-form"
            onSubmit={handleTravelSubmit}
            className="grid gap-5 rounded-[22px] border border-[#D6E0F0] bg-[#EAF1FB] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]"
          >
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Travel Grant
              </p>
              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Apply for Travel Grant
              </h2>
            </div>

            <input
              required
              type="text"
              placeholder="Applicant Name"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <input
              type="email"
              placeholder="Email"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <input
              type="text"
              placeholder="City / Country"
              className="rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <textarea
              rows="5"
              placeholder="Travel grant requirement"
              className="resize-none rounded-[12px] border border-[#D6E0F0] px-4 py-3 outline-none focus:border-[#1B3A6B]"
            />

            <button
              type="submit"
              className="w-fit rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              Submit Travel Grant
            </button>

            {travelStatus && (
              <p className="rounded-[12px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
                {travelStatus}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#C89B3C]">
              Join Conference Facebook
            </p>

            <h2 className="mt-3 text-[30px] font-semibold text-[#FFFFFF]">
              Stay Connected with Official Conference Updates
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
              Follow the official Facebook page for real-time updates, announcements,
              speaker highlights, schedules, and behind-the-scenes insights.
            </p>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
            >
              <FaFacebookF />
              Visit Facebook Page
            </a>
          </div>

          <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
            <div className="grid gap-5">
              <div className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  ipscwaconference2026@gmail.com
                  <br />
                  care@edwinepc.com
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  +916262752168
                  <br />
                  +919243583512
                </p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  FDDI Auditorium Chhindwara (M.P.), India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}