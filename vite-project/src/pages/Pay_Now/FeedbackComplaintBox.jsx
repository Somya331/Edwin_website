import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaComments,
  FaHeadset,
  FaBookOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaWhatsapp,
  FaSearch,
  FaCheckCircle,
  FaPaperPlane,
  FaFileSignature,
} from "react-icons/fa";

const heroImages = {
  support:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=90",
  faq:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=90",
  help:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=90",
};

export default function FeedbackComplaintBox() {
  const [openIndex, setOpenIndex] = useState(0);
  const [status, setStatus] = useState("");

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

  const faqItems = [
    {
      question: "Where can I read Edwin Incorporation FAQs?",
      answer:
        "You can visit the official Edwin Incorporation help desk knowledge base for frequently asked questions and service support information.",
    },
    {
      question: "How can I submit feedback or a complaint?",
      answer:
        "You can use the feedback and complaint section on this page or contact the support team through email, phone, or WhatsApp.",
    },
    {
      question: "What details should I share for quick support?",
      answer:
        "Please share your name, registered mobile number, service name, payment/reference details if applicable, and a clear description of your issue.",
    },
    {
      question: "How can I contact Edwin Incorporation?",
      answer:
        "You can contact Edwin Incorporation at care@edwinepc.com or call +91 6262752167 for support.",
    },
  ];

  const supportCards = [
    {
      title: "FAQ Knowledge Base",
      text: "Visit Edwin Incorporation help desk to read common questions, service guidance, payment support, refund policy, and service process details.",
      icon: FaBookOpen,
      link: "https://desk.zoho.in/portal/edwinincorp/en/kb",
      button: "Open FAQ",
    },
    {
      title: "Feedback & Complaint Box",
      text: "Submit your feedback, complaint, or service-related concern to the support team for review and assistance.",
      icon: FaComments,
      link: "#feedback",
      button: "Send Feedback",
    },
    {
      title: "Direct Support",
      text: "Connect with Edwin Incorporation support through phone, email, or WhatsApp for service-related help.",
      icon: FaHeadset,
      link: "#contact",
      button: "Contact Support",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Your feedback/complaint details have been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-[#FFFFFF] px-5 py-2 text-[13px] font-semibold text-[#1B3A6B]">
              <FaQuestionCircle className="text-[#C89B3C]" />
              Feedback / Complaint Box / FAQ
            </div>

            <h1 className="mt-6 text-[42px] font-bold leading-tight text-[#1B3A6B] lg:text-[56px]">
              Need Help? We Are Here to Support You
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Find answers through the FAQ knowledge base, submit feedback or complaints, and connect with Edwin Incorporation support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://desk.zoho.in/portal/edwinincorp/en/kb" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]">
                Open FAQ <FaExternalLinkAlt className="text-[12px]" />
              </a>
              <a href="#feedback" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]">
                Click Here to Feedback
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <img src={heroImages.support} alt="FAQ support" className="h-[330px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]" />
            <div className="grid gap-5 sm:grid-cols-2">
              <img src={heroImages.faq} alt="Customer support" className="h-[160px] w-full rounded-[18px] border border-[#D6E0F0] object-cover" />
              <img src={heroImages.help} alt="Online help" className="h-[160px] w-full rounded-[18px] border border-[#D6E0F0] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <a key={card.title} href={card.link} target={card.link.startsWith("http") ? "_blank" : undefined} rel={card.link.startsWith("http") ? "noreferrer" : undefined} className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 transition duration-200 hover:border-[#C89B3C]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#EAF1FB] text-[#1B3A6B]">
                    <Icon className="text-[24px]" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">{card.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1B3A6B] group-hover:text-[#C89B3C]">
                    {card.button} <FaExternalLinkAlt className="text-[12px]" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">Common Questions</p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">Frequently Asked Questions</h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Browse important support questions before submitting your feedback or complaint.
            </p>
            <div className="mt-6 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
              <div className="flex gap-3">
                <FaSearch className="mt-1 text-[#C89B3C]" />
                <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
                  For more detailed answers, please visit the official FAQ knowledge base.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.question} className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF]">
                <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-[16px] font-semibold text-[#1B3A6B]">{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF1FB] text-[#1B3A6B]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-[#D6E0F0] px-5 py-4">
                    <p className="text-[15px] leading-[1.8] text-[#1A1A2E]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="feedback" className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] px-5 py-20 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
              <FaFileSignature className="text-[#C89B3C]" />
              Feedback / Complaint Form
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
              Submit Your Concern
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />

            <p className="text-[15px] leading-[1.7] text-[#5A6A85] max-w-2xl mx-auto">
              Share your feedback, complaint, or service support request. Our team will contact you shortly.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="rounded-[24px] border border-[#D6E0F0] bg-white p-7 shadow-[0_14px_35px_rgba(27,58,107,0.10)]">
              <FaCheckCircle className="text-[34px] text-[#2D7A4F]" />
              <h3 className="mt-4 text-[22px] font-semibold text-[#1B3A6B]">
                Support Information
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Support is available for service-related questions, application concerns, payment confirmation, feedback, and complaint review.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[16px] bg-[#EAF1FB] p-4">
                  <p className="text-[14px] font-semibold text-[#1B3A6B]">
                    Please keep ready:
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#1A1A2E]">
                    Registered mobile number, service name, payment/reference details, and clear issue description.
                  </p>
                </div>

                <div className="rounded-[16px] bg-[#1B3A6B] p-4 text-white">
                  <p className="text-[14px] font-semibold text-white">
                    Official Support
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-white/85">
                    Email: care@edwinepc.com<br />Phone: +91 6262752167
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[22px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[720px] mx-auto w-full relative"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

              <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-white text-lg font-bold">Application Form</h3>
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
                    title="Zoho CRM Feedback Complaint Form"
                    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=1379d25ac259e1673b912a61a6fe486eb96d7232c0d6039dba30c263db3b0640a2caacfc68cf23ff0f0a2852e193fa6fgid17a7d31d91c8cd244f08083f380951990ad2d9fd65dec6ce39cf81e0c06a79f8"
                    width="100%"
                    height="420"
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
        </div>
      </section>

      <a href="https://wa.me/916262752167" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]" aria-label="WhatsApp">
        <FaWhatsapp className="text-[24px]" />
      </a>
    </div>
  );
}