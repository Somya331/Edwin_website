import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaHeadset,
  FaArrowRight,
  FaFileSignature,
} from "react-icons/fa";

const offices = [
  {
    title: "Delhi Head Office",
    type: "Head Office",
    address:
      "15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019",
    phone: "011-66155019",
    mobile: "+91 6262752167",
    international: "+12792029553",
    email: "care@edwinepc.com",
    mapQuery:
      "15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019",
  },
  {
    title: "Jabalpur Branch Office",
    type: "Branch Office",
    address: "Nakshatra Nagar, Star City, Katangi Bypass Road, Jabalpur",
    phone: "+91 6262752167",
    mobile: "+91 6262752168",
    international: "+12792029553",
    email: "care@edwinepc.com",
    mapQuery: "Nakshatra Nagar, Star City, Katangi Bypass Road, Jabalpur",
  },
];

const contactCards = [
  {
    title: "Call Support",
    text: "Connect with Edwin Incorporation for service guidance and support.",
    icon: FaPhoneAlt,
  },
  {
    title: "Email Assistance",
    text: "Send your queries, documents, or service-related communication.",
    icon: FaEnvelope,
  },
  {
    title: "Office Visit",
    text: "Visit office locations with prior appointment and confirmation.",
    icon: FaBuilding,
  },
];

export default function ContactPage() {
  


  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-fade-up {
          animation: contactFadeUp .78s ease both;
        }

        .contact-card {
          box-shadow: 0 18px 50px rgba(8, 34, 74, .09);
        }

        .contact-card-hover {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease, background-color .3s ease;
        }

        .contact-card-hover:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 66px rgba(8, 34, 74, .14);
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 md:py-20">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute -left-24 top-8 h-[300px] w-[300px] rounded-full bg-[#FFB000]/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/28 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black text-[#FFD35A] shadow-sm backdrop-blur-md">
              <FaHeadset className="text-[#FFD35A]" />
              Contact Edwin Incorporation
            </div>

            <h1 className="mt-6 max-w-[650px] text-[36px] font-black leading-[1.12] text-white md:text-[46px]">
              Get in Touch with Our Support Team
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] font-semibold leading-[1.8] text-white/82">
              Contact Edwin Incorporation for academic services, research
              support, conference queries, payment support, journal assistance,
              and institutional services.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-6 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
              >
                Send Message <FaArrowRight className="text-[12px]" />
              </a>

              <a
                href="#offices"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
              >
                View Offices
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="contact-card rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md"
          >
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
              alt="Contact support"
              className="h-[320px] w-full rounded-[22px] object-cover md:h-[390px]" loading="lazy" width="600" height="400" />
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-16">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#FFD35A]/14 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="contact-card contact-card-hover group rounded-[24px] border border-white/70 bg-white/85 p-6 backdrop-blur-xl hover:border-[#FFB000]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg transition duration-300 group-hover:from-[#FFB000] group-hover:to-[#FFD35A] group-hover:text-[#071C34]">
                  <Icon className="text-[24px]" />
                </div>
                <h3 className="mt-5 text-[18px] font-black text-[#082B63]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="contact-form" className="relative bg-[#EEF5FF] px-5 py-20">
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-[#0B66C3]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="contact-fade-up">
            <p className="text-[13px] font-black uppercase tracking-wider text-[#D97706]">
              Contact Form
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-[#082B63] md:text-[34px]">
              Send Your Query
            </h2>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">
              Fill out the form with your details. Our team will review your
              query and connect with you for support.
            </p>

            <div className="mt-7 space-y-4">
              <div className="contact-card flex gap-4 rounded-[18px] border border-white/70 bg-white/90 p-5">
                <FaEnvelope className="mt-1 shrink-0 text-[#FFB000]" />
                <div>
                  <h3 className="text-[16px] font-black text-[#082B63]">
                    Email
                  </h3>
                  <p className="mt-1 text-[15px] font-semibold text-[#5B6B83]">care@edwinepc.com</p>
                </div>
              </div>

              <div className="contact-card flex gap-4 rounded-[18px] border border-white/70 bg-white/90 p-5">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#FFB000]" />
                <div>
                  <h3 className="text-[16px] font-black text-[#082B63]">
                    Phone
                  </h3>
                  <p className="mt-1 text-[15px] font-semibold text-[#5B6B83]">
                    011-66155019, +91 6262752167, +12792029553
                  </p>
                </div>
              </div>

              <div className="contact-card flex gap-4 rounded-[18px] border border-white/70 bg-white/90 p-5">
                <FaGlobe className="mt-1 shrink-0 text-[#FFB000]" />
                <div>
                  <h3 className="text-[16px] font-black text-[#082B63]">
                    Website
                  </h3>
                  <p className="mt-1 text-[15px] font-semibold text-[#5B6B83]">www.academichelpstore.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="contact-card overflow-hidden rounded-[26px] border border-white/80 bg-white w-full max-w-[950px] mx-auto relative"
          >
            <div className="relative bg-gradient-to-r from-[#082B63] via-[#0B66C3] to-[#083A7C] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-lg font-bold">
                  Contact Application Form
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
              <div className="rounded-[18px] border border-[#DDE9F7] overflow-hidden bg-white shadow-inner">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=1379d25ac259e1673b912a61a6fe486eb96d7232c0d6039dba30c263db3b0640a2caacfc68cf23ff0f0a2852e193fa6fgid17a7d31d91c8cd244f08083f380951990ad2d9fd65dec6ce39cf81e0c06a79f8"
                  width="100%"
                  height="420"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: "none",
                    width: "100%",
                    minWidth: "610px",
                    display: "block",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="offices" className="relative bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#FFD35A]/12 blur-3xl" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-10 contact-fade-up">
            <p className="text-[13px] font-black uppercase tracking-wider text-[#D97706]">
              Office Locations
            </p>
            <h2 className="mt-3 text-[30px] font-black text-[#082B63] md:text-[34px]">
              Delhi & Jabalpur Offices
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {offices.map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="contact-card contact-card-hover overflow-hidden rounded-[26px] border border-white/80 bg-white/90 backdrop-blur-xl hover:border-[#FFB000]"
              >
                <div className="bg-gradient-to-r from-[#082B63] via-[#0B66C3] to-[#083A7C] p-6 text-[#FFFFFF]">
                  <span className="inline-flex rounded-full bg-[#FFD35A] px-4 py-2 text-[13px] font-black text-[#071C34]">
                    {office.type}
                  </span>
                  <h3 className="mt-4 text-[22px] font-black">
                    {office.title}
                  </h3>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FFB000]" />
                    <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                      {office.address}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <FaPhoneAlt className="mt-1 shrink-0 text-[#FFB000]" />
                    <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                      India: {office.phone}
                      <br />
                      Phone: {office.mobile}
                      <br />
                      Phone: {office.international}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <FaEnvelope className="mt-1 shrink-0 text-[#FFB000]" />
                    <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                      {office.email}
                    </p>
                  </div>

                  <div className="contact-card overflow-hidden rounded-[18px] border border-[#DDE9F7] bg-white p-2">
                    <iframe
                      title={`${office.title} Map`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        office.mapQuery
                      )}&output=embed`}
                      className="h-[300px] w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
