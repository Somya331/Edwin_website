import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaFileSignature,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const PatentRegistration = () => {
  

  const patentFields = [
    "Basic Ideas",
    "First Name *",
    "Last Name *",
    "Mobile *",
    "Email",
    "Designation with University / College Name *",
    "Subject / Area of Invention",
    "Brief Description of Patent Idea",
  ];

  const legalFields = [
    "First Name",
    "Last Name *",
    "Designation with Institute name",
    "Mobile",
    "Email",
    "Legal Service Required",
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-[8px] border border-[#C89B3C] px-4 py-2 text-[13px] text-[#5A6A85]">
              Apply for Edwin Patent Support
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Patents & Certifications
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Edwin Incorporation is excited to announce our new patent
              registration services, designed to cater to all disciplines. Our
              team of experts is dedicated to guiding you through a streamlined
              and efficient process.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#C89B3C]"
            >
              Apply Now <FaArrowRight />
            </a>
          </div>

          <div className="grid gap-6">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
              alt="Patent legal documents"
              className="h-[260px] w-full rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" loading="lazy" width="600" height="400" />
            <div className="grid gap-6 md:grid-cols-2">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
                alt="Patent paperwork"
                className="h-[170px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
                alt="Certification documents"
                className="h-[170px] w-full rounded-[12px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 text-center text-[28px] font-semibold text-[#1B3A6B]">
            About
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-[15px] leading-[1.7]">
                Edwin Incorporation is excited to announce our new patent
                registration services, designed to cater to all disciplines. Our
                team of experts is dedicated to guiding you through a streamlined
                and efficient process, ensuring the protection of your
                groundbreaking inventions and brilliant ideas. With the potential
                to complete registration in just 90 days, we&apos;re committed to
                supporting your intellectual property needs. Start your patent
                journey with us today by visiting our website, and feel free to
                reach out for any assistance or additional information. Trust us to
                be your partner in safeguarding your valuable innovations.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Patent support meeting"
              className="h-full min-h-[260px] rounded-[12px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" loading="lazy" width="600" height="400" />
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {[
            "Patent registration guidance for all disciplines",
            "Support for inventions, ideas, and certification needs",
            "Legal services support for registered members",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-[#C89B3C]"
            >
              <FaCheckCircle className="mb-4 text-[22px] text-[#1B3A6B]" />
              <p className="text-[15px] leading-[1.7]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <h2 className="mb-5 text-[28px] font-semibold text-[#1B3A6B]">
            Stay Connected with Us!
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7]">
            Follow us on Facebook for the latest <strong>Patent Support</strong>,
            updates & exclusive content.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] hover:bg-[#C89B3C]"
          >
            <FaFacebookF /> Follow us on Facebook
          </a>
        </div>
      </section>

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
       Patent Registration Form
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
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[650px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">
            Application Form
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
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=20c9b266f60cf8a19de5dbb07b1994ab5babd7a77df93acf8c201badbf6d7272b372ee1dcbd8fd3406d273de124cace0gidbd1914a3fe25e90bdc39f073b478a71957e88ae23e7a9651e3c409fa3f6b6924"
            width="100%"
            height="430"
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
        Legal Services to Members
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
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[650px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">
            Legal Services to Members
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
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=7364943487a5e745851dc708061219d7757c0bc35fb0d843f57d5b1df3d551549f59f5506109844411411c6f0582a691gidff6f8122b6c2c4e30e1fb42a44a05efb92a5b6c14eacebcd1612d26247bd373c"
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
    </main>
  );
};

export default PatentRegistration;