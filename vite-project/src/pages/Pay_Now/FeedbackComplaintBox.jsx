import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaComments,
  FaHeadset,
  FaBookOpen,
  FaExternalLinkAlt,
  FaSearch,
  FaCheckCircle,
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
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes feedbackFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feedback-fade-up {
          animation: feedbackFadeUp .78s ease both;
        }

        .feedback-card {
          box-shadow: 0 18px 50px rgba(8, 34, 74, .09);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease, background-color .3s ease;
        }

        .feedback-card:hover {
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
          <div className="feedback-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black text-[#FFD35A] shadow-sm backdrop-blur-md">
              <FaQuestionCircle className="text-[#FFD35A]" />
              Feedback / Complaint Box / FAQ
            </div>

            <h1 className="mt-6 max-w-[650px] text-[36px] font-black leading-[1.12] text-white md:text-[46px]">
              Need Help? We Are Here to Support You
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] font-semibold leading-[1.8] text-white/82">
              Find answers through the FAQ knowledge base, submit feedback or complaints, and connect with Edwin Incorporation support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://desk.zoho.in/portal/edwinincorp/en/kb" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-6 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1">
                Open FAQ <FaExternalLinkAlt className="text-[12px]" />
              </a>
              <a href="#feedback" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]">
                Click Here to Feedback
              </a>
            </div>
          </div>

          <div className="feedback-card grid gap-5 rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md">
            <img src={heroImages.support} alt="FAQ support" className="h-[330px] w-full rounded-[22px] border border-white/20 object-cover" loading="lazy" width="600" height="400" />
            <div className="grid gap-5 sm:grid-cols-2">
              <img src={heroImages.faq} alt="Customer support" className="h-[160px] w-full rounded-[18px] border border-white/20 object-cover" loading="lazy" width="600" height="400" />
              <img src={heroImages.help} alt="Online help" className="h-[160px] w-full rounded-[18px] border border-white/20 object-cover" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-16">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#FFD35A]/14 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <a key={card.title} href={card.link} target={card.link.startsWith("http") ? "_blank" : undefined} rel={card.link.startsWith("http") ? "noreferrer" : undefined} className="feedback-card group rounded-[24px] border border-white/70 bg-white/85 p-6 backdrop-blur-xl hover:border-[#FFB000]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg transition duration-300 group-hover:from-[#FFB000] group-hover:to-[#FFD35A] group-hover:text-[#071C34]">
                    <Icon className="text-[24px]" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-black text-[#082B63]">{card.title}</h3>
                  <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">{card.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-black text-[#083A7C] group-hover:text-[#D97706]">
                    {card.button} <FaExternalLinkAlt className="text-[12px]" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#EEF5FF] px-5 py-20">
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-[#0B66C3]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="feedback-fade-up">
            <p className="text-[13px] font-black uppercase tracking-wider text-[#D97706]">Common Questions</p>
            <h2 className="mt-3 text-[30px] font-black text-[#082B63] md:text-[34px]">Frequently Asked Questions</h2>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">
              Browse important support questions before submitting your feedback or complaint.
            </p>
            <div className="feedback-card mt-6 rounded-[18px] border border-white/70 bg-white/90 p-5">
              <div className="flex gap-3">
                <FaSearch className="mt-1 shrink-0 text-[#FFB000]" />
                <p className="text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                  For more detailed answers, please visit the official FAQ knowledge base.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.question} className="feedback-card overflow-hidden rounded-[18px] border border-white/80 bg-white/90 hover:border-[#FFB000]">
                <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-[16px] font-black text-[#082B63]">{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#083A7C]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-[#DDE9F7] px-5 py-4">
                    <p className="text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="feedback" className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-20">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#FFD35A]/14 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-10 text-center feedback-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DDE9F7] bg-white px-5 py-2 text-sm font-black text-[#083A7C] shadow-sm">
              <FaFileSignature className="text-[#FFB000]" />
              Feedback / Complaint Form
            </div>

            <h2 className="text-[30px] font-black text-[#082B63] md:text-[34px]">
              Submit Your Concern
            </h2>

            <div className="mx-auto mt-4 mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0B66C3] via-[#FFB000] to-[#FFD35A]" />

            <p className="mx-auto max-w-2xl text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
              Share your feedback, complaint, or service support request. Our team will contact you shortly.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="feedback-card rounded-[26px] border border-white/80 bg-white/90 p-7 backdrop-blur-xl hover:border-[#FFB000]">
              <FaCheckCircle className="text-[34px] text-[#FFB000]" />
              <h3 className="mt-4 text-[22px] font-black text-[#082B63]">
                Support Information
              </h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">
                Support is available for service-related questions, application concerns, payment confirmation, feedback, and complaint review.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[16px] border border-[#DDE9F7] bg-[#EAF4FF] p-4">
                  <p className="text-[14px] font-black text-[#082B63]">
                    Please keep ready:
                  </p>
                  <p className="mt-2 text-[14px] font-semibold leading-[1.7] text-[#5B6B83]">
                    Registered mobile number, service name, payment/reference details, and clear issue description.
                  </p>
                </div>

                <div className="rounded-[16px] bg-gradient-to-r from-[#082B63] via-[#0B66C3] to-[#083A7C] p-4 text-white">
                  <p className="text-[14px] font-black text-white">
                    Official Support
                  </p>
                  <p className="mt-2 text-[14px] font-semibold leading-[1.7] text-white/85">
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
              className="feedback-card relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[26px] border border-white/80 bg-white"
            >
              <div className="relative flex items-center justify-between gap-4 bg-gradient-to-r from-[#082B63] via-[#0B66C3] to-[#083A7C] px-6 py-4">
                <div>
                  <h3 className="text-white text-lg font-bold">Application Form</h3>
                  <p className="text-white/75 text-sm mt-1">
                    Fill all required details carefully
                  </p>
                </div>

                <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                  <FaFileSignature className="text-[#FFD35A] text-xl" />
                </div>
              </div>

              <div className="relative w-full bg-white p-3">
                <div className="overflow-hidden rounded-[18px] border border-[#DDE9F7] bg-white shadow-inner">
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
    </div>
  );
}
