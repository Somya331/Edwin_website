import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalculator,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaHeart,
  FaPhoneAlt,
  FaRegFilePdf,
  FaUniversity,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ApiCalculator = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

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
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
              alt="API calculator academic work"
              className="h-[300px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
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
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="API application"
              className="h-[360px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h3 className="mb-8 text-[18px] font-semibold text-[#1A1A2E]">
              API Services
            </h3>

            <div className="mb-5">
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

            <div className="grid gap-5 md:grid-cols-2">
              {formFields.map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label className="flex items-center gap-3 text-[15px] text-[#1B3A6B]">
                <input type="checkbox" /> Terms & Condition * Read
              </label>
            </div>

            <div className="mt-6 flex gap-4">
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

      <section className="bg-[#1B3A6B] px-5 py-20">
        <motion.div
          className="mx-auto max-w-[1200px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <FaUsers className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need API Calculator Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for API score calculation, UGC norms
            assistance, academic eligibility support, and career progression
            guidance.
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

export default ApiCalculator;