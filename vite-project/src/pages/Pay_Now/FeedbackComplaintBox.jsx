import React, { useEffect, useState } from "react";
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

      <section id="feedback" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">Feedback and Complaints</p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">Submit Your Concern</h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Share your feedback, complaint, or service support request.
            </p>
            <div className="mt-7 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
              <FaCheckCircle className="text-[30px] text-[#2D7A4F]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">Local Cities Services</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                Support is available for service-related questions, application concerns, payment confirmation, feedback, and complaint review.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="grid gap-5 md:grid-cols-2">
              <input required type="text" placeholder="Full Name *" className="rounded-[8px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              <input required type="tel" placeholder="Mobile Number *" className="rounded-[8px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input type="email" placeholder="Email Address" className="rounded-[8px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
              <select className="rounded-[8px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                <option>Feedback</option>
                <option>Complaint</option>
                <option>Payment Support</option>
                <option>Service Query</option>
                <option>Other</option>
              </select>
            </div>

            <input type="text" placeholder="Service Name / Reference ID" className="mt-5 w-full rounded-[8px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />
            <textarea required rows="6" placeholder="Write your feedback or complaint details *" className="mt-5 w-full resize-none rounded-[8px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]" />

            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]">
              Submit Details <FaPaperPlane className="text-[13px]" />
            </button>

            {status && <p className="mt-5 rounded-[8px] border border-[#2D7A4F] px-4 py-3 text-[15px] text-[#2D7A4F]">{status}</p>}
          </form>
        </div>
      </section>

      <section id="contact" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">Keep in Touch with Us</p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">Edwin Incorporation Support</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
              <FaMapMarkerAlt className="text-[28px] text-[#C89B3C]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">Address</h3>
              <p className="mt-3 text-[15px] leading-[1.7]">15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019</p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
              <FaPhoneAlt className="text-[28px] text-[#C89B3C]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">Phone</h3>
              <p className="mt-3 text-[15px] leading-[1.7]">
                India : 011-66155019
                <br />
                Phone: +91 6262752167
                <br />
                Phone: +12792029553
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
              <FaEnvelope className="text-[28px] text-[#C89B3C]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">Email & Website</h3>
              <p className="mt-3 text-[15px] leading-[1.7]">
                care@edwinepc.com
                <br />
                www.academichelpstore.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/916262752167" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]" aria-label="WhatsApp">
        <FaWhatsapp className="text-[24px]" />
      </a>
    </div>
  );
}