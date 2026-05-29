import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBalanceScale,
  FaBuilding,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaHandshake,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRegFilePdf,
  FaStar,
  FaUpload,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const TrainingProgramme = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const formFields = [
    "Organisation/NGO_Name",
    "Mobile",
    "Email",
    "Chairman_Name *",
    "Secretary_Name",
  ];

  const services = [
    {
      icon: <FaBuilding />,
      title: "NGO Registration",
      text: "Service to NGO from registration till funding.",
    },
    {
      icon: <FaRegFilePdf />,
      title: "80G, 12A & CSR",
      text: "Documents support for 80G, 12A, CSR and related compliance.",
    },
    {
      icon: <FaFileAlt />,
      title: "Project Reports",
      text: "We make project reports for your NGO.",
    },
    {
      icon: <FaFolderOpen />,
      title: "Accounts Support",
      text: "ITR filling, audit report and balance sheet support.",
    },
  ];

  const benefits = [
    "Service to NGO from registration till funding",
    "80G, 12A, CSR documentation support",
    "Project reports for NGO",
    "ITR Filling, Audit report and Balance sheet",
    "Top CSR companies data to get funds",
    "Affordable prices and documentation support",
  ];

  const testimonials = [
    {
      name: "NGO Founder",
      text: "The NGO documentation and support process was very clear and useful.",
    },
    {
      name: "Trust Member",
      text: "Professional guidance for registration, CSR documents and project report.",
    },
    {
      name: "Social Worker",
      text: "Helpful support for funding documents and NGO compliance work.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#EAF1FB] px-5 py-20">
        <div className="absolute left-0 top-0 h-full w-[34%] bg-[#1B3A6B]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Training Programme
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              NGO Support from Registration to Funding
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7] text-[#1A1A2E]">
              We are Giving Service to NGO from registration till funding if you
              want any services like 80g,12A,CSR. We will make all your
              documents at affordable prices and very low from other
              consultancies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#submit-application"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Submit Application <FaArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="NGO support meeting"
              className="h-[360px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {["80G", "12A", "CSR"].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-[28px] font-semibold text-[#1B3A6B]">
                    {item}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#5A6A85]">
                    Documentation Support
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#1B3A6B] p-6 text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <FaHandshake className="mb-5 text-[42px] text-[#C89B3C]" />
            <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
              NGO Support
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#FFFFFF]">
              ALL services will be done: ITR Filling Audit report balance sheet.
              Also we have top CSR companies data to get funds.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <p className="text-[15px] leading-[1.7]">
              We are Giving Service to NGO from registration till funding if you
              want any services like 80g,12A,CSR We will make all your documents
              at affordable prices and very low from other consultancies also we
              make project reports for your NGO.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Registration", "Funding", "Compliance"].map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5"
                >
                  <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                  <p className="text-[15px] font-medium">{item}</p>
                </div>
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
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#1B3A6B]">
              NGO Services
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Registration, 80G, 12A, CSR, project report, audit and funding
              documentation support.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[12px] bg-[#EAF1FB]" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[24px] text-[#FFFFFF] transition duration-200 group-hover:bg-[#C89B3C]">
                  {service.icon}
                </div>
                <h3 className="relative mb-3 text-[18px] font-semibold">
                  {service.title}
                </h3>
                <p className="relative text-[15px] leading-[1.7]">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  

      <section id="submit-application" className="bg-[#EAF1FB] px-5 py-20">
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
              Submit Application
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Fill the NGO Support form and upload Certificate of Registration
              for support.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#1B3A6B] p-6 text-[#FFFFFF]"
            >
              <FaUpload className="mb-5 text-[42px] text-[#C89B3C]" />
              <h3 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
                NGO Support
              </h3>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#FFFFFF]">
                Submit your organisation details for NGO support, registration,
                documents, funding guidance and CSR support services.
              </p>
              <div className="space-y-4">
                {["Organisation details", "Contact details", "Certificate upload"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 text-[#1A1A2E]"
                    >
                      <FaCheckCircle className="mb-3 text-[20px] text-[#2D7A4F]" />
                      <p className="text-[15px]">{item}</p>
                    </div>
                  )
                )}
              </div>
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
                NGO Support Application Form
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

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    Certificate_of_Registration
                  </label>
                  <input
                    type="file"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-4">
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
                <h3 className="text-[18px] font-semibold">{item.name}</h3>
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
          transition={{ duration: 0.45 }}
        >
          <FaUsers className="mx-auto mb-5 text-[42px] text-[#C89B3C]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#FFFFFF]">
            Need NGO Support?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Contact Edwin Incorporation for NGO registration, 80G, 12A, CSR,
            project report, ITR filing, audit report, balance sheet and funding
            support.
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

export default TrainingProgramme;