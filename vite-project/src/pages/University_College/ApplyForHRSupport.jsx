// HRPage.jsx
import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUniversity,
  FaUserTie,
  FaShieldAlt,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaStar,
} from "react-icons/fa";

const heroImages = [
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
];

const applyOptions = [
  "Apply for HR Staffing Solution",
  "Apply for HR University Support",
  "Jobs for Faculties",
  "Faculties Profile for University and Colleges",
  "Job Insurance of Faculties",
  "Recruitment Solutions",
];

const supportCards = [
  {
    title: "Secure Job (Guarantee)",
    text: "We had reached a great height in the atmosphere, for the sky was a dead black, and the stars.",
    icon: FaShieldAlt,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Insurance of Job",
    text: "We had reached a great height in the atmosphere, for the sky was a dead black, and the star s.",
    icon: FaBriefcase,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Perfect Match of Requirement",
    text: "We had reached a great height in the atmosphere, for the sky was a dead black, and the stars.",
    icon: FaHandshake,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Support & Motivation",
    text: "We had reached a great height in the atmosphere, for the sky was a dead black, and the stars.",
    icon: FaStar,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
];

const clients = [
  "International Technological University",
  "AKS University",
  "Roorkee Institute Of Technology",
  "Swami Vivekanand University",
  "Maharshi Dayanand Saraswati University",
  "Asian Institute Of Technology",
  "Swami Shraddhanand College",
  "D.N. Jain College Jabalpur",
];

const membershipPlans = [
  {
    title: "One-Year Membership",
    price: "INR 8,000",
    text: "Complete HR support membership for academicians, research scholars, and PhD aspirants.",
  },
  {
    title: "Six-Month Membership",
    price: "INR 5,600",
    text: "Short-term HR support membership for job alerts and academic career support.",
  },
];

export default function HRPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4300);

    return () => {
      clearInterval(timer);
      
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Your HR support request has been prepared successfully.");
    e.currentTarget.reset();
  };

  return (
    <div className="uc-theme min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative h-[540px] overflow-hidden bg-[#1B3A6B]">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ${
              activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <img src={image} alt="HR support" className="h-full w-full object-cover" loading="lazy" width="600" height="400" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/95 via-[#1B3A6B]/80 to-[#1B3A6B]/25" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5">
          <div className="max-w-3xl rounded-[26px] border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.25)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/50 bg-white/15 px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#FFFFFF]">
              <FaBriefcase className="text-[#C89B3C]" />
              Jobs for Academicians
            </span>

            <h1 className="mt-6 text-[40px] font-extrabold leading-tight text-[#FFFFFF] md:text-[58px]">
              HR Support for Academicians
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] font-medium leading-[1.8] text-[#FFFFFF]/90">
              Edwin Incorporation offers specialized HR services for
              academicians, research scholars, and PhD aspirants with job
              information, application support, faculty profiles, recruitment
              solutions, and membership assistance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#C89B3C] px-7 py-3 text-[15px] font-bold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Apply Now <FaArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/40 bg-white/10 px-7 py-3 text-[15px] font-bold text-[#FFFFFF] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                View HR Services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all ${
                activeSlide === index ? "w-10 bg-[#C89B3C]" : "w-3 bg-white/60"
              }`}
              aria-label={`slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-20">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#EAF1FB] blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#C89B3C]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden rounded-[26px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_18px_50px_rgba(27,58,107,0.12)]">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
              alt="HR meeting"
              className="h-[420px] w-full rounded-[20px] object-cover" loading="lazy" width="600" height="400" />
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              About
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold leading-tight text-[#1B3A6B]">
              Specialized HR Services for Academic Careers
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Edwin Incorporation offers specialized HR services for academicians,
              research scholars, and PhD aspirants. Our services include
              up-to-date job information via WhatsApp for government and private
              university positions, and comprehensive assistance with application
              forms.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              We offer a one-year membership for INR 8,000 and a six-month
              membership for INR 5,600. Our goal is to streamline the job search
              process, allowing academicians to focus on their core
              responsibilities.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Government & Private University Jobs",
                "WhatsApp Job Information",
                "Application Form Assistance",
                "Academic Career Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] border border-[#D6E0F0] bg-[#EAF1FB] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#FFFFFF]"
                >
                  <FaCheckCircle className="text-[#C89B3C]" />
                  <span className="text-[14px] font-bold text-[#1B3A6B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Apply Now
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
              HR Services Application Options
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applyOptions.map((item, index) => {
              const icons = [
                FaUsers,
                FaUniversity,
                FaGraduationCap,
                FaBuilding,
                FaShieldAlt,
                FaUserTie,
              ];
              const Icon = icons[index];

              return (
                <a
                  key={item}
                  href="#form"
                  className="group flex h-full flex-col justify-between rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF]/90 p-6 shadow-[0_12px_32px_rgba(27,58,107,0.08)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_22px_50px_rgba(27,58,107,0.16)]"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:rotate-6 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                      <Icon className="text-[24px]" />
                    </div>
                    <h3 className="mt-5 text-[19px] font-extrabold leading-snug text-[#1B3A6B]">
                      {item}
                    </h3>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#1B3A6B]">
                    Apply Now
                    <FaArrowRight className="transition duration-300 group-hover:translate-x-2" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              HR Benefits
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
              Support for Academicians
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_12px_32px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_22px_50px_rgba(27,58,107,0.16)]"
                >
                  <div className="overflow-hidden">
                    <img src={card.image}
                      alt={card.title}
                      className="h-[190px] w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" width="600" height="400" />
                  </div>
                  <div className="p-6">
                    <div className="flex h-13 w-13 items-center justify-center rounded-[14px] bg-[#EAF1FB] text-[#1B3A6B]">
                      <Icon className="text-[22px]" />
                    </div>
                    <h3 className="mt-4 text-[18px] font-extrabold text-[#1B3A6B]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.7] text-[#1A1A2E]">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Our Clients
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
              Trusted By Institutions
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="group rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_10px_28px_rgba(27,58,107,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                  <FaUniversity className="text-[24px]" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold leading-[1.5] text-[#1B3A6B]">
                  {client}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              HR Support For You
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
              Membership Plans
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {membershipPlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_14px_40px_rgba(27,58,107,0.10)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
              >
                <h3 className="text-[24px] font-extrabold text-[#1B3A6B]">
                  {plan.title}
                </h3>
                <p className="mt-3 text-[34px] font-extrabold text-[#C89B3C]">
                  {plan.price}
                </p>
                <p className="mt-3 text-[15px] leading-[1.8] text-[#1A1A2E]">
                  {plan.text}
                </p>
                <a
                  href="#form"
                  className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-[#1B3A6B] px-7 py-3 text-[15px] font-bold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#C89B3C]"
                >
                  Apply Now - Membership <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
  id="form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-14"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
    <div className="lg:sticky lg:top-10">
      <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
        Research Employment Support
      </p>

      <h2 className="mt-3 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
        Research Employment Support Form
      </h2>

      <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

      <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
        Submit your requirement for research employment support, academic profile assistance,
        faculty opportunities, university staffing, or professional guidance.
      </p>

      <div className="mt-7 rounded-[26px] border border-[#D6E0F0] bg-white/80 p-6 shadow-sm backdrop-blur">
        <h3 className="text-[22px] font-semibold text-[#1B3A6B]">
          Keep in Touch with Us
        </h3>

        <div className="mt-5 space-y-4">
          <div className="flex gap-3">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[14px] leading-[1.7]">
              15th Floor, Eros Corporate Tower, Nehru Place, New Delhi,
              Delhi 110019
            </p>
          </div>

          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[14px] leading-[1.7]">
              India : 011-66155019
              <br />
              Phone: +916262752168
              <br />
              Phone: +12792029553
            </p>
          </div>

          <div className="flex gap-3">
            <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[14px] leading-[1.7]">care@edwinepc.com</p>
          </div>

          <div className="flex gap-3">
            <FaGlobe className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[14px] leading-[1.7]">
              www.academichelpstore.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
        <div>
          <h3 className="text-[26px] font-bold text-white">
            Research Employment Support
          </h3>

          <p className="mt-1 text-[14px] text-white/75">
            Complete the online application form below.
          </p>
        </div>

        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
          💼
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
        <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
          <div className="max-h-[620px] overflow-y-auto overflow-x-hidden">
            <iframe
              title="Research Employment Support Form"
              className="block h-[1150px] w-full border-0"
              scrolling="auto"
              src="https://crm.zoho.in/crm/WebFormServeServlet?rid=239ce4717d98bdb242939a375e58cd737b562e9db84a8761c6058098b5779dc89bf437bb240483e78210cad3553629f0gid9541df1fe8b8b60011813264e5d12a98e81efdcd4d5ecf0a1b502d37968408a6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
