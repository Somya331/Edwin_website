import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaGlobeAsia,
  FaGraduationCap,
  FaHandshake,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaUniversity,
  FaWhatsapp,
} from "react-icons/fa";

const ApplyForGrants = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const travelFields = [
    "Name of Participant",
    "Last Name *",
    "Name of College of University",
    "Email *",
    "Mobile *",
  ];

  const conferenceFields = [
    "Name of Events *",
    "Last Name *",
    "Email *",
    "Mobile *",
    "Name of University / College / Organisation",
    "Conference Theme",
  ];

  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Activities",
      text: "Support for Academic Activities /Conference and Seminar, and Webinar",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Travel Grants",
      text: "Grants for Travel to Academicians",
    },
    {
      icon: <FaFileAlt />,
      title: "Research Grants",
      text: "Grants for Research",
    },
    {
      icon: <FaHandshake />,
      title: "Conference Sponsorship",
      text: "Grants/Sponsorship for Organizing Conference",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Applications
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Grants from the Public and Private Sectors
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7]">
              In Indian and Foreign sectors, apply for academic activities,
              conference, seminar, webinar, travel grants for academicians,
              research grants, and sponsorship for organizing conferences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#travel-grants"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Apply for Travel Grants <FaArrowRight />
              </a>
              <a
                href="#conference-grants"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                Conference Sponsorship
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
              alt="Grant meeting"
              className="col-span-2 h-[250px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80"
              alt="Conference"
              className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
              alt="Research"
              className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover"
            />
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
              Applications
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7] text-[#1A1A2E]">
              Support for Academic Activities /Conference and Seminar, and
              Webinar, Grants for Travel to Academicians, and Grants for
              Research.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="mb-4 text-[26px] text-[#1B3A6B]">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold">{card.title}</h3>
                <p className="text-[15px] leading-[1.7]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="travel-grants" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
                Apply for Travel Grants
              </h2>
              <p className="text-[15px] leading-[1.7]">
                Travel_Grant application support for academicians, participants,
                colleges, universities, and conference-related academic travel.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Academic travel"
              className="h-[280px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
          </motion.div>

          <motion.form
            className="grid gap-6 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:grid-cols-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="md:col-span-2 text-[18px] font-semibold">
              Travel_Grant
            </h3>

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

            {travelFields.map((label) => (
              <div key={label}>
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  {label}
                </label>
                <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              </div>
            ))}

            <div>
              <label className="mb-2 block text-[13px] text-[#5A6A85]">
                Select Conference
              </label>
              <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                <option>-None-</option>
                <option>National Conference</option>
                <option>International Conference</option>
                <option>Seminar / Webinar</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                <input type="checkbox" /> Terms & Condition * Read
              </label>
            </div>

            <div className="flex gap-4 md:col-span-2">
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

      <section id="conference-grants" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
                Apply For Grants for Organising Conference
              </h2>
              <p className="mb-6 text-[15px] leading-[1.7]">
                CMB Sponsorship support for events, conferences, seminars,
                webinars, institutions, and academic organisations.
              </p>
              <div className="space-y-4">
                {[
                  "Grants/Sponsorship for Organizing Conference",
                  "Support for Academic Activities",
                  "Conference and Seminar Assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]"
                  >
                    <FaCheckCircle className="mt-1 text-[20px] text-[#2D7A4F]" />
                    <p className="text-[15px] leading-[1.7]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80"
              alt="Conference organizing grant"
              className="h-full min-h-[420px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            />
          </div>

          <motion.form
            className="grid gap-6 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:grid-cols-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="md:col-span-2 text-[18px] font-semibold">
              CMB Sponsorship
            </h3>

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

            {conferenceFields.map((label) => (
              <div key={label}>
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  {label}
                </label>
                <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                <input type="checkbox" /> Terms & Condition * Read
              </label>
            </div>

            <div className="flex gap-4 md:col-span-2">
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
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
            alt="Grant documentation"
            className="h-[430px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Grant Support Categories
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Support for Academic Activities /Conference and Seminar, and Webinar",
                "Grants for Travel to Academicians",
                "Grants for Research",
                "Grants/Sponsorship for Organizing Conference",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5 }}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]"
                >
                  <FaCheckCircle className="mb-4 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] leading-[1.7]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            Need Help Applying for Grants?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for support related to academic grants,
            research grants, travel grants, and conference sponsorship applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:care@edwinepc.com"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
            >
              <FaEnvelope /> care@edwinepc.com
            </a>
            <a
              href="tel:+916262752167"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF]"
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

export default ApplyForGrants;