import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);


  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#EAF1FB] px-5 py-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#C89B3C]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#1B3A6B]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-[#FFFFFF] px-5 py-2 text-[13px] font-semibold text-[#1B3A6B]">
              <FaHeadset className="text-[#C89B3C]" />
              Contact Edwin Incorporation
            </div>

            <h1 className="mt-6 text-[42px] font-bold leading-tight text-[#1B3A6B] lg:text-[58px]">
              Get in Touch with Our Support Team
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Contact Edwin Incorporation for academic services, research
              support, conference queries, payment support, journal assistance,
              and institutional services.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:-translate-y-1 hover:bg-[#C89B3C]"
              >
                Send Message <FaArrowRight className="text-[12px]" />
              </a>

              <a
                href="#offices"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:-translate-y-1 hover:bg-[#EAF1FB]"
              >
                View Offices
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
              alt="Contact support"
              className="h-[390px] w-full rounded-[22px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 group-hover:bg-[#C89B3C] group-hover:text-[#FFFFFF]">
                  <Icon className="text-[24px]" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="contact-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Contact Form
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Send Your Query
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Fill out the form with your details. Our team will review your
              query and connect with you for support.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <FaEnvelope className="mt-1 text-[#C89B3C]" />
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1B3A6B]">
                    Email
                  </h3>
                  <p className="mt-1 text-[15px]">care@edwinepc.com</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <FaPhoneAlt className="mt-1 text-[#C89B3C]" />
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1B3A6B]">
                    Phone
                  </h3>
                  <p className="mt-1 text-[15px]">
                    011-66155019, +91 6262752167, +12792029553
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                <FaGlobe className="mt-1 text-[#C89B3C]" />
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1B3A6B]">
                    Website
                  </h3>
                  <p className="mt-1 text-[15px]">www.academichelpstore.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden w-full max-w-[950px] mx-auto relative"
          >
            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
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
              <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
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

      <section id="offices" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Office Locations
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
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
                className="overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] transition duration-200 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <div className="bg-[#1B3A6B] p-6 text-[#FFFFFF]">
                  <span className="inline-flex rounded-full bg-[#C89B3C] px-4 py-2 text-[13px] font-semibold">
                    {office.type}
                  </span>
                  <h3 className="mt-4 text-[24px] font-semibold">
                    {office.title}
                  </h3>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                    <p className="text-[15px] leading-[1.7]">
                      {office.address}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                    <p className="text-[15px] leading-[1.7]">
                      India: {office.phone}
                      <br />
                      Phone: {office.mobile}
                      <br />
                      Phone: {office.international}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
                    <p className="text-[15px] leading-[1.7]">
                      {office.email}
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-[14px] border border-[#D6E0F0]">
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