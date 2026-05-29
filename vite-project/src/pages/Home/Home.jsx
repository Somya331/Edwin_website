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
  PhoneCall,
  Mail,
} from "lucide-react";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero4 from "../../assets/images/hero4.png";

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

const carouselSlides = [hero1, hero2, hero4];

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
    }, 4500);

    return () => {
      clearInterval(timer);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7FAFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#172033] antialiased">
      <section className="relative h-[520px] w-full overflow-hidden bg-[#0B2F5B] md:h-[560px]">
        {carouselSlides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "z-10 scale-100 opacity-100"
                : "z-0 scale-105 opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Edwin carousel ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06284F]/45 via-[#06284F]/15 to-transparent" />
          </div>
        ))}

        <button
          onClick={() =>
            setCurrentSlide(
              (currentSlide - 1 + carouselSlides.length) % carouselSlides.length
            )
          }
          className="absolute left-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-[#D7A93B]"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % carouselSlides.length)
          }
          className="absolute right-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-[#D7A93B]"
        >
          ›
        </button>

        <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-3 rounded-full border border-white/25 bg-white/20 px-5 py-3 backdrop-blur-md">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-11 bg-[#D7A93B]"
                  : "w-3 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FAFF] px-5 py-20">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#BFD7FF]/50 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#D7A93B]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-[32px] border border-white bg-white/80 p-8 shadow-[0_25px_80px_rgba(11,47,91,0.12)] backdrop-blur-xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="rounded-[28px] bg-gradient-to-br from-[#0B2F5B] to-[#174C86] p-7 text-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(11,47,91,0.24)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-white/15 text-[#D7A93B]">
                  <ChevronRight size={32} />
                </div>
                <h2 className="mt-6 text-[34px] font-extrabold">
                  The Edwin <span className="text-[#D7A93B]">INC</span>
                </h2>
                <p className="mt-4 text-[15px] leading-[1.8] text-white/85">
                  Academic, institutional, research and professional support
                  services under one trusted platform.
                </p>
              </div>

              <div>
                <p className="text-[17px] font-semibold leading-[1.8] text-[#172033]">
                  Edwin Incorporation delivers a wide range of solutions for
                  universities, journals, NGOs, and businesses — combining research
                  support, digital tools, and expert services to accelerate academic
                  and professional growth.
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-[#4B5565]">
                  Our offerings include research & development, educational
                  development for colleges and universities, journal support,
                  membership services, patent registrations, book publications,
                  online courses and conferences, HR services, API calculators,
                  digital library solutions, PhD assistance, and more.
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-[#4B5565]">
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
                      className="rounded-full border border-[#DCE7F7] bg-white px-5 py-2 text-[13px] font-bold text-[#0B2F5B] transition duration-300 hover:-translate-y-1 hover:border-[#D7A93B] hover:bg-[#0B2F5B] hover:text-white"
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

      <section id="services" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#D7A93B] shadow-sm">
              Our Services
            </span>
            <h2 className="mt-4 text-[38px] font-extrabold text-[#0B2F5B]">
              What We Provide
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-7 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="group flex h-full flex-col rounded-[28px] border border-white bg-white/90 p-7 shadow-[0_14px_40px_rgba(11,47,91,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#D7A93B] hover:shadow-[0_25px_60px_rgba(11,47,91,0.16)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#EEF5FF] text-[#0B2F5B] transition duration-300 group-hover:rotate-6 group-hover:bg-[#0B2F5B] group-hover:text-white">
                    {card.icon}
                  </div>
                  <h3 className="text-[20px] font-extrabold leading-snug text-[#0B2F5B]">
                    {card.title}
                  </h3>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[14px] px-2 py-1 text-[14px] font-medium leading-[1.65] text-[#4B5565] transition duration-200 hover:bg-[#EEF5FF] hover:text-[#0B2F5B]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D7A93B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#0B2F5B] shadow-sm">
              Stay Connected
            </span>
            <h2 className="mt-4 text-[38px] font-extrabold text-[#0B2F5B]">
              Connect with Edwin Services on Facebook
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facebookLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group flex h-full min-h-[145px] flex-col justify-between rounded-[24px] border border-white bg-white p-6 shadow-[0_12px_32px_rgba(11,47,91,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#D7A93B] hover:bg-[#EEF5FF]"
              >
                <h3 className="text-[16px] font-bold leading-[1.5] text-[#172033] transition duration-200 group-hover:text-[#0B2F5B]">
                  {item.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#0B2F5B]">
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
        className="relative overflow-hidden bg-[#0B2F5B] px-5 py-20 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,169,59,0.28),transparent_60%)]" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="rounded-[32px] border border-white/20 bg-white/10 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.16)] backdrop-blur-md md:p-12">
            <h2 className="text-[34px] font-extrabold text-white md:text-[44px]">
              Start Your Academic Journey With Edwin INC
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-[1.8] text-white/90">
              Trusted solutions for research publication, conferences, memberships,
              and academic excellence worldwide.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[#D7A93B] px-8 py-4 text-[15px] font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2F5B]"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <a
                href="tel:+916262752167"
                className="inline-flex items-center gap-2 rounded-[14px] border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-extrabold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2F5B]"
              >
                <PhoneCall size={16} /> Call Now
              </a>
              <a
                href="mailto:care@edwinepc.com"
                className="inline-flex items-center gap-2 rounded-[14px] border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-extrabold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2F5B]"
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