import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalculator,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaFileSignature,
  FaHeart,
  FaPhoneAlt,
  FaRegFilePdf,
  FaUniversity,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

const ApiCalculator = () => {
  

  const formFields = [
    "First Name *",
    "Last Name *",
    "Designation",
    "Email *",
    "Mobile *",
  ];

  const ugcNorms = [
    "Download UGC Regulation - 2010",
    "Download UGC Regulation - 2013",
    "Download UGC Regulation - 2016",
    "Download UGC Regulation - 2018",
  ];

  const benefits = [
    "API score calculation as per UGC norms",
    "Academic Performance Indicator support",
    "Guidance for academic positions",
    "Support for career progression and eligibility clarity",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              API Calculator 2019
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Academic Performance Indicator Calculator
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
              The Academic Performance Indicator score, as per UGC norms, is a
              crucial metric used in the assessment of academicians&apos;
              performance, especially while applying for academic positions.
            </p>
            <a
              href="#api-form"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              Apply Now <FaArrowRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
              alt="API calculator academic work"
              className="h-[300px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" loading="lazy" width="600" height="400" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <FaCalculator className="mb-4 text-[26px] text-[#1B3A6B]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  API Calculator
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Designed by Edwin Incorporation.
                </p>
              </div>
              <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <FaUniversity className="mb-4 text-[26px] text-[#1B3A6B]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  UGC Approved Format
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Academic performance support as per UGC standards.
                </p>
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
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              About
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
              The Academic Performance Indicator (API) score, as per UGC norms,
              is a crucial metric used in the assessment of academicians&apos;
              performance, especially while applying for academic positions. It
              quantifies various academic contributions like research, teaching,
              and administrative responsibilities. Edwin Incorporation assists
              academicians in calculating their API score, providing clarity on
              where they stand in terms of UGC standards. This helps them
              understand their eligibility and areas of improvement for academic
              positions, making them more informed and prepared in their career
              progression.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={item}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
            >
              <FaCheckCircle className="mb-4 text-[22px] text-[#2D7A4F]" />
              <p className="text-[15px] leading-[1.7]">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <motion.div
          className="mx-auto max-w-xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
            Stay Connected with Us!
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7]">
            Follow us on Facebook for the latest <strong>API Calculator</strong>,
            updates & exclusive content.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
          >
            <FaFacebookF /> Follow us on Facebook
          </a>
        </motion.div>
      </section>

      <section id="api-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
              Application For API Calculator
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
              Submit your details for API Services and academic performance
              indicator calculation support.
            </p>
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="API application"
              className="h-[360px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" loading="lazy" width="600" height="400" />
          </motion.div>

          
           {/* ZOHO FORM SECTION */}
<section className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-3xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-7"
    >
      

      <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
        API Services
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[650px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">
           API Services
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
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=6f8273084a7dd04b02ced9396ee186a76d6f4ceaf90d291b163298f7d2a689f272f216c5150f17f3a5da3f7df30863b5gidc7188c78441ead2a4b61016d0fbee5ab127f29893c89d55fb2369f48717fb5a5"
            width="100%"
            height="380"
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

          
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 rounded-[12px] bg-[#1B3A6B] p-6 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-[28px] font-semibold text-[#FFFFFF]">
              UGC Norms
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ugcNorms.map((norm, index) => (
              <motion.a
                key={norm}
                href="#"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <FaRegFilePdf className="mx-auto mb-4 text-[26px] text-[#1B3A6B]" />
                <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                  {norm}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
<section className="bg-[#FFFFFF] px-5 py-20">
  <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
        How to Login to API Calculator
      </h2>
      <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
        Watch the guide to understand how to use the API Calculator system
        and submit your academic details properly.
      </p>
      <a
        href="https://youtu.be/1-oWPbhXuSY?si=2fQKNNXbG49-5TNU"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
      >
        <FaYoutube /> Watch on YouTube
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
    >
      <iframe
        className="h-[320px] w-full rounded-[12px]"
        src="https://www.youtube.com/embed/1-oWPbhXuSY?rel=0"
        title="How to Login to API Calculator"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  </div>
</section>

    </main>
  );
};

export default ApiCalculator;