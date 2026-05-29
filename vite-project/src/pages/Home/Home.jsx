// Home.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  BookOpen,
  GraduationCap,
  Globe,
  ShieldCheck,
  Building2,
  Briefcase,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Mail,
} from "lucide-react";

const serviceCards = [
  {
    title: "Services for Academicians",
    icon: <BookOpen size={24} />,
    items: [
      "Research Paper Publication – Submit Now",
      "Editorial Board Membership – Apply Now / Members",
      "Fellowships – Apply Now",
      "Attend the International Conference",
      "Calculate API Score",
      "Online Learning Course (Affiliated with WASC, USA)",
      "Professional Membership – National / International",
      "Grant for Attending Conference",
      "Plagiarism Detector Service (Checker)",
      "Book Publication Services (National, International)",
      "Membership of the Digital Library",
      "HR Support (Jobs – Private & Govt)",
      "Patent Registration",
      "Major/Minor Project Support",
    ],
  },
  {
    title: "Services for Journals Editors",
    icon: <Globe size={24} />,
    items: [
      "E-ISSN and P-ISSN Technical Help – Allotment",
      "Indexing Services – Technical Help",
      "DOI – Free",
      "DOI – Crossref",
      "E-Journals Management Services",
    ],
  },
  {
    title: "Services for Research Scholar",
    icon: <GraduationCap size={24} />,
    items: ["PhD Assistant", "Plagiarism Checker", "Admission in University"],
  },
  {
    title: "Services for University and Colleges",
    icon: <Building2 size={24} />,
    items: [
      "NAAC – Technical Support",
      "Conference Management Board – Support for Conference",
      "Publications Support – Books and Journals",
      "HR Services Support (Faculty Support)",
      "Business Process Outsourcing Support (BPO)",
      "Admission Services",
      "Training and Development Support",
      "Accreditation and Membership",
      "MOU Support (International Only)",
      "Book/Library/Digital Supply Support",
      "Educational Tours Supports",
      "Support for the Automation of the University",
    ],
  },
  {
    title: "Upcoming Projects",
    icon: <ShieldCheck size={24} />,
    items: [
      "South Asian University of Higher Education",
      "Educational News – YouTube Channel",
    ],
  },
  {
    title: "Professional Membership",
    icon: <Briefcase size={24} />,
    items: ["South Asia Management Association", "Jabalpur Management Association"],
  },
];

const facebookLinks = [
  { title: "41st International Conference: Nepal", link: "#" },
  { title: "40th International Conference: USA", link: "#" },
  { title: "Edwin Patent Support Services | Delhi", link: "#" },
  { title: "Edwin's Job Support Services | Delhi", link: "#" },
  { title: "Edwin Academic Conferences Services | Delhi", link: "#" },
  { title: "Edwin's Award Services | Delhi", link: "#" },
  { title: "Edwin Major & Minor Project Support | Delhi", link: "#" },
  { title: "Edwin's Editorial Board Membership | Delhi", link: "#" },
  { title: "Edwin's API Calculator | Delhi", link: "#" },
];

const carouselSlides = [
  {
    title: "Empowering Academic Excellence",
    subtitle:
      "Helping researchers, universities, journals, and professionals grow globally through standard publishing, resource support, and global integrations.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    tag: "Edwin Incorporation",
  },
  {
    title: "Global Publishing Solutions",
    subtitle:
      "Streamlining international journal indexing, DOI allotments, and professional research assistance with trusted expertise.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    tag: "Research & Development",
  },
  {
    title: "Institutional Growth & Support",
    subtitle:
      "Providing end-to-end technical help, accreditation assistance, and digital library automation for universities worldwide.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    tag: "University Partnership",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E] antialiased">
      <section className="relative h-[650px] overflow-hidden bg-[#1B3A6B]">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "z-10 scale-100 opacity-100"
                : "z-0 scale-105 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/95 via-[#1B3A6B]/78 to-[#1B3A6B]/20" />
          </div>
        ))}

        <div className="relative z-20 mx-auto flex h-full max-w-[1200px] items-center px-5">
          <div className="max-w-3xl rounded-[28px] border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/50 bg-[#FFFFFF]/15 px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#FFFFFF] backdrop-blur">
              <Sparkles size={14} className="text-[#C89B3C]" />
              {carouselSlides[currentSlide].tag}
            </span>

            <h1 className="mt-6 text-[42px] font-extrabold leading-tight text-[#FFFFFF] md:text-[60px]">
              {carouselSlides[currentSlide].title}
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] font-medium leading-[1.8] text-[#FFFFFF]/90">
              {carouselSlides[currentSlide].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-7 py-3 text-[15px] font-bold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Explore Services <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[12px] border border-[#FFFFFF]/40 bg-[#FFFFFF]/10 px-7 py-3 text-[15px] font-bold text-[#FFFFFF] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-[#C89B3C]"
                  : "w-3 bg-[#FFFFFF]/60 hover:bg-[#FFFFFF]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-20">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#EAF1FB] blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#C89B3C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF]/80 p-8 shadow-[0_20px_60px_rgba(27,58,107,0.10)] backdrop-blur-md md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="rounded-[24px] bg-[#EAF1FB] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(27,58,107,0.14)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <ChevronRight size={32} />
                </div>
                <h2 className="mt-6 text-[34px] font-extrabold text-[#1B3A6B]">
                  The Edwin <span className="text-[#C89B3C]">INC</span>
                </h2>
                <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                  Academic, institutional, research and professional support
                  services under one trusted platform.
                </p>
              </div>

              <div>
                <p className="text-[17px] font-semibold leading-[1.8] text-[#1A1A2E]">
                  Edwin Incorporation delivers a wide range of solutions for
                  universities, journals, NGOs, and businesses — combining research
                  support, digital tools, and expert services to accelerate academic
                  and professional growth.
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                  Our offerings include research & development, educational
                  development for colleges and universities, journal support,
                  membership services, patent registrations, book publications,
                  online courses and conferences, HR services, API calculators,
                  digital library solutions, PhD assistance, and more.
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                  We operate with a commitment to customer satisfaction, integrity,
                  innovation, collaboration, and continuous improvement — empowering
                  individuals and organizations worldwide to reach their academic
                  and intellectual potential.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Customer Satisfaction",
                    "Integrity",
                    "Expertise",
                    "Innovation",
                    "Collaboration",
                    "Continuous Improvement",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#D6E0F0] bg-[#FFFFFF] px-5 py-2 text-[13px] font-bold text-[#1B3A6B] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#1B3A6B] hover:text-[#FFFFFF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-[#FFFFFF] px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Our Services
            </span>
            <h2 className="mt-4 text-[38px] font-extrabold text-[#1B3A6B]">
              What We Provide
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-7 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="group flex h-full flex-col rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF]/85 p-7 shadow-[0_12px_32px_rgba(27,58,107,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_22px_50px_rgba(27,58,107,0.16)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:rotate-6 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                    {card.icon}
                  </div>
                  <h3 className="text-[20px] font-extrabold leading-snug text-[#1B3A6B]">
                    {card.title}
                  </h3>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[12px] px-2 py-1 text-[14px] font-medium leading-[1.65] text-[#1A1A2E] transition duration-200 hover:bg-[#EAF1FB] hover:text-[#1B3A6B]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C89B3C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-[#EAF1FB] px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#1B3A6B]">
              Stay Connected
            </span>
            <h2 className="mt-4 text-[38px] font-extrabold text-[#1B3A6B]">
              Connect with Edwin Services on Facebook
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facebookLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group flex h-full min-h-[150px] flex-col justify-between rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_10px_28px_rgba(27,58,107,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:bg-[#EAF1FB]"
              >
                <h3 className="text-[16px] font-bold leading-[1.5] text-[#1A1A2E] transition duration-200 group-hover:text-[#1B3A6B]">
                  {item.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#1B3A6B]">
                  Visit Page
                  <ArrowRight
                    size={16}
                    className="transition duration-300 group-hover:translate-x-2"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#1B3A6B] px-5 py-20 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="rounded-[28px] border border-white/20 bg-white/10 p-8 backdrop-blur-md md:p-12">
            <h2 className="text-[34px] font-extrabold text-[#FFFFFF] md:text-[44px]">
              Start Your Academic Journey With Edwin INC
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-[1.8] text-[#FFFFFF]/90">
              Trusted solutions for research publication, conferences, memberships,
              and academic excellence worldwide.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-8 py-4 text-[15px] font-extrabold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <a
                href="tel:+916262752167"
                className="inline-flex items-center gap-2 rounded-[12px] border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-extrabold text-[#FFFFFF] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                <PhoneCall size={16} /> Call Now
              </a>
              <a
                href="mailto:care@edwinepc.com"
                className="inline-flex items-center gap-2 rounded-[12px] border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-extrabold text-[#FFFFFF] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}