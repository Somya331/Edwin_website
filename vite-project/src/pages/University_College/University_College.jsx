import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaFileSignature,
  FaHandshake,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const InstitutionalMembership = () => {
  const [activeService, setActiveService] = useState("Assistance for NAAC/MOU Sign");

  

  const mainServices = [
    "Assistance for NAAC/MOU Sign",
    "Assistance for NIRF",
    "Assistant for the NBA",
    "Assistance for Opening a University",
    "Assistance for Approval Documentation",
    "Assistance for Spreading Campus in India",
  ];

  const otherServices = [
    "Industrial Tie-ups",
    "Book Distribution s",
    "MOU Sign b/w Universities",
    "LAB Material Supplied",
    "Students Exchange Programme",
    "Placement",
  ];

  const benefits = [
    {
      icon: <FaUniversity />,
      title: "University Services",
      text: "Support for colleges, universities, NGOs and educational institutions.",
    },
    {
      icon: <FaFileAlt />,
      title: "Approval Documentation",
      text: "Professional support for NAAC, NIRF, NBA and approval documentation.",
    },
    {
      icon: <FaHandshake />,
      title: "MOU & Tie-ups",
      text: "MOU signing, industrial tie-ups and institutional collaboration support.",
    },
    {
      icon: <FaUsers />,
      title: "Student Support",
      text: "Students exchange programme, placement and institutional development.",
    },
  ];

  const testimonials = [
    {
      name: "University Coordinator",
      text: "The institutional support and documentation assistance was professional and helpful.",
    },
    {
      name: "College Administrator",
      text: "MOU and approval documentation guidance made the process easier for our team.",
    },
    {
      name: "Education Partner",
      text: "Edwin services helped us understand university support and institutional services clearly.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="uc-theme min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#1B3A6B] px-5 py-20">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#C89B3C]/20 blur-3xl" />
        <div className="absolute left-0 bottom-10 h-72 w-72 rounded-full bg-[#EAF1FB]/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <p className="mb-5 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              Institutional Membership
            </p>

            <h1 className="mb-6 text-[42px] font-bold leading-tight text-[#FFFFFF] md:text-[58px]">
              Edwin Legal Services For Education
            </h1>

            <p className="mb-8 max-w-2xl text-[16px] leading-[1.8] text-[#FFFFFF]">
              Edwin Services For Educational Support, University Services, NAAC/MOU
              Sign, NIRF, NBA, approval documentation, campus expansion and
              institutional membership support.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Apply Now
              </a>
              <a
                href="https://wa.me/916262752168"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF]/10 px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Instant Chat
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
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[12px] sm:col-span-2">
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                    alt="Institutional Membership"
                    className="h-[280px] w-full object-cover" loading="lazy" width="600" height="400" />
                </div>

                <div className="rounded-[12px] bg-[#EAF1FB] p-5">
                  <FaUniversity className="mb-3 text-[28px] text-[#1B3A6B]" />
                  <h3 className="mb-2 text-[18px] font-semibold text-[#1B3A6B]">
                    University Services
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#1A1A2E]">
                    NAAC, NIRF, NBA and documentation support.
                  </p>
                </div>

                <div className="rounded-[12px] bg-[#1B3A6B] p-5 text-[#FFFFFF]">
                  <FaHandshake className="mb-3 text-[28px] text-[#C89B3C]" />
                  <h3 className="mb-2 text-[18px] font-semibold text-[#FFFFFF]">
                    MOU & Tie-ups
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#FFFFFF]">
                    Industrial tie-ups and institutional collaboration.
                  </p>
                </div>
              </div>
            </div>
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
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-4 py-2 text-[13px] text-[#5A6A85]">
              Apply Now
            </p>
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              Institutional Support Services
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Select any service below and submit your institutional membership
              enquiry.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h3 className="mb-5 text-[18px] font-semibold text-[#1B3A6B]">
                Services List
              </h3>
              <div className="space-y-3">
                {mainServices.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`w-full rounded-[8px] px-4 py-3 text-left text-[15px] font-medium transition duration-200 ${activeService === service
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
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[60px] bg-[#EAF1FB]" />
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[30px] text-[#FFFFFF]">
                  <FaUniversity />
                </div>
                <h3 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
                  {activeService}
                </h3>
                <p className="mb-6 text-[15px] leading-[1.7]">
                  Edwin Incorporation provides professional institutional
                  assistance for this service with documentation, consultation
                  and educational support.
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
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Other Services
            </p>
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Institutional Development Services
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {otherServices.map((service, index) => (
                <motion.div
                  key={service}
                  whileHover={{ y: -6 }}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5 transition duration-200 hover:border-[#C89B3C] hover:bg-[#FFFFFF]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[22px] text-[#FFFFFF]">
                    {index % 2 === 0 ? <FaHandshake /> : <FaBookOpen />}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] bg-[#1B3A6B] p-8 text-[#FFFFFF]"
          >
            <FaAward className="mb-6 text-[46px] text-[#C89B3C]" />
            <h3 className="mb-5 text-[28px] font-semibold text-[#FFFFFF]">
              Contact Person
            </h3>
            <div className="space-y-4 rounded-[12px] bg-[#FFFFFF] p-6 text-[#1B3A6B]">
              <p className="text-[22px] font-semibold">Dr. Jyoti Prakash</p>
              <p className="text-[18px] font-semibold">Mobile: 6262752168</p>
              <p className="text-[18px] font-semibold">
                Email: care@edwinepc.com
              </p>
            </div>
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
                  Institutional Membership Application Form
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
      <section className="bg-[#FFFFFF] px-5 py-20">
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
    </main>
  );
};

export default InstitutionalMembership;
