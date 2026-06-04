import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaGlobeAsia,
  FaGraduationCap,
  FaFileSignature ,
  FaHandshake,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaUniversity,
  FaWhatsapp,
} from "react-icons/fa";

const ApplyForGrants = () => {
  

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
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
              alt="Grant meeting"
              className="col-span-2 h-[250px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" loading="lazy" width="600" height="400" />
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80"
              alt="Conference"
              className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
              alt="Research"
              className="h-[180px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
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

      {/* ZOHO FORM SECTION */}
<section className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-5xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-7"
    >
     

      <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
       Travel _Grant
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />

      <p className="text-[15px] leading-[1.6] text-[#5A6A85] max-w-xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">
           Travel _Grant
          </h3>
          
        </div>

        <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
          <FaFileSignature className="text-[#C89B3C] text-xl" />
        </div>
      </div>

      <div className="relative w-full bg-white p-3">
        <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
          <iframe
            title="Zoho CRM Web Form"
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=cbb2918fcd12321f0bd34d702adf38b0f65f7a513d057e19d1e0dbdc6dca291416f6dcbff47dc43f7f051431e8ff6e86gid91f9a812ddc96919277ef52e497aeec4ed978eb4ece38148f4baeb33815c387d"
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
          </motion.form>
        </div>
      </section>

      {/* ZOHO FORM SECTION */}
<section className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-5xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-7"
    >
     

      <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
        CMB Sponsorship
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />

      <p className="text-[15px] leading-[1.6] text-[#5A6A85] max-w-xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          
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
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=1cdea8afb94fbade68d3a23b646eb36f9110fc45495a6fd6333c6d10f531c983c0e40515c3dad61e98302dcbdfc3bc9agid03f4d8cafcd8360cdd176bb143ec11d6980949b6c075e7c693bd7b24a4b65ecb"
            width="100%"
            height="580"
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

    
    </main>
  );
};

export default ApplyForGrants;