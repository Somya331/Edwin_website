// Home.jsx
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe,
  ShieldCheck,
  Users,
  Award,
  Quote,
  Star,
  MapPin,
  FileText,
  BriefcaseBusiness,
  Newspaper,
  BadgeCheck,
  LibraryBig,
  Handshake,
  Lightbulb,
  Building2,
  ScrollText,
  Calculator,
  Trophy,
  Network,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero4 from "../../assets/images/hero4.png";

const carouselSlides = [hero1, hero2, hero4];

const serviceCards = [
  { title: "Research Publication", icon: <BookOpen size={26} />, desc: "Journal selection, manuscript support, publication guidance and UGC Care assistance." },
  { title: "DOI & Indexing Services", icon: <Globe size={26} />, desc: "DOI registration, Crossref support, indexing guidance and journal technical solutions." },
  { title: "Patent Support", icon: <ShieldCheck size={26} />, desc: "Patent filing, drafting, documentation and application support services." },
  { title: "Conferences & Events", icon: <Users size={26} />, desc: "National and international academic conferences, seminars and event support." },
  { title: "Editorial & Peer Review", icon: <GraduationCap size={26} />, desc: "Editorial board membership, reviewer support and peer-review management." },
  { title: "Academic Membership", icon: <Award size={26} />, desc: "Academic membership and fellowship support for scholars and organizations." },
  { title: "ISSN Support", icon: <ScrollText size={26} />, desc: "ISSN documentation, application guidance and journal identity support." },
  { title: "Book Publication", icon: <LibraryBig size={26} />, desc: "ISBN book publication support, cover, formatting and publishing assistance." },
  { title: "Journal Website & OJS", icon: <Network size={26} />, desc: "Journal website setup, OJS configuration and online publishing workflow support." },
  { title: "Plagiarism & Formatting", icon: <FileText size={26} />, desc: "Similarity checking, formatting, proofreading and manuscript improvement support." },
  { title: "API Calculator Support", icon: <Calculator size={26} />, desc: "Academic API score calculation support for faculty and researchers." },
  { title: "Awards & Recognition", icon: <Trophy size={26} />, desc: "Academic awards, certificates and recognition support for professionals." },
  { title: "Major & Minor Project", icon: <Lightbulb size={26} />, desc: "Project topic selection, report preparation and academic project guidance." },
  { title: "Recruitment Services", icon: <BriefcaseBusiness size={26} />, desc: "Academic, institutional and professional recruitment support services." },
  { title: "Press & Media", icon: <Newspaper size={26} />, desc: "Press release, media coverage and academic event promotion support." },
  { title: "Institutional Consultancy", icon: <Building2 size={26} />, desc: "Support for colleges, universities, NGOs, journals and academic organizations." },
];

const stats = [
  ["25+", "Countries Served"],
  ["10K+", "Researchers Connected"],
  ["500+", "Research Papers"],
  ["1000+", "Institutions"],
  ["170+", "Journals Supported"],
];

const partners = [
  { name: "Scopus", logo: "https://www.scopus.com/static/images/scopus-logo-orange.svg" },
  { name: "Web of Science", logo: "https://clarivate.com/wp-content/uploads/2020/06/Web-of-Science-Logo.png" },
  { name: "Crossref", logo: "https://assets.crossref.org/logo/crossref-logo-landscape-200.svg" },
  { name: "DOAJ", logo: "https://doaj.org/static/doaj/images/logo.svg" },
  { name: "UGC", logo: "https://www.ugc.gov.in/assets/images/logo.png" },
  { name: "Google Scholar", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" },
  { name: "ISSN", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/ISSN_Logo.svg" },
];

const testimonials = [
  { name: "Dr. Raman Kumar", role: "Professor, Delhi University", text: "Excellent support for our research publication and academic process." },
  { name: "Dr. Kavita Sharma", role: "Research Scholar, JNU", text: "DOI and indexing services are reliable, transparent and highly professional." },
  { name: "Dr. Ankit Verma", role: "Scholar", text: "The guidance in paper writing and journal selection helped me greatly." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4200);

    return () => {
      clearInterval(timer);
      
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes floatSoft {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to { opacity:1; transform:translateY(0); }
        }

        @keyframes slideLeft {
          from { opacity:0; transform:translateX(40px); }
          to { opacity:1; transform:translateX(0); }
        }

        @keyframes glowPulse {
          0%,100% { box-shadow:0 0 0 rgba(255,176,0,0); }
          50% { box-shadow:0 0 38px rgba(255,176,0,.28); }
        }

        @keyframes shineMove {
          0% { transform: translateX(-180%) rotate(18deg); opacity:0; }
          35% { opacity:.9; }
          100% { transform: translateX(260%) rotate(18deg); opacity:0; }
        }

        @keyframes gradientMove {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }

        .fade-up { animation: fadeUp .85s ease both; }
        .slide-left { animation: slideLeft .85s ease both; }
        .float-soft { animation: floatSoft 5.5s ease-in-out infinite; }
        .pulse-glow { animation: glowPulse 3.8s ease-in-out infinite; }

        .modern-bg {
          background-size: 180% 180%;
          animation: gradientMove 12s ease infinite;
        }

        .glass-card {
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content:"";
          position:absolute;
          top:-70%;
          left:-80%;
          width:28%;
          height:260%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),rgba(255,210,80,.38),rgba(255,255,255,.18),transparent);
          filter:blur(16px);
          opacity:0;
          pointer-events:none;
        }

        .glass-card:hover::before {
          animation: shineMove 1.45s ease;
        }
      `}</style>

  {/* HERO */}
<section className="relative overflow-visible bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 pt-6 pb-8">
  <div className="absolute inset-0 opacity-40">
    <div className="absolute -left-24 top-8 h-[300px] w-[300px] rounded-full bg-[#FFB000]/40 blur-3xl" />
    <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/35 blur-3xl" />
  </div>

  <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 lg:grid-cols-[0.62fr_1.38fr]">
    {/* LEFT CONTENT */}
    <div className="fade-up">
      <p className="mb-3 text-[12px] font-black uppercase tracking-wider text-[#FFD35A]">
        Global Academic & Research Network
      </p>

      <h1 className="max-w-[560px] text-[42px] font-black leading-[1.05] text-white md:text-[62px]">
        Edwin
        <span className="block bg-gradient-to-r from-[#FFB000] to-[#FFD35A] bg-clip-text text-transparent">
          Incorporation
        </span>
      </h1>

      <p className="mt-4 max-w-[520px] text-[15px] font-semibold leading-[1.65] text-white/82">
        Connecting scholars, institutions and publishers across the world
        through trusted academic and research support services.
      </p>

      <div className="mt-5 flex flex-wrap gap-4">
        <a
          href="#services"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF9D00] to-[#FFD35A] px-7 py-3 text-[14px] font-black text-[#071C34] shadow-[0_16px_42px_rgba(255,176,0,.35)] transition duration-300 hover:-translate-y-1"
        >
          Explore Services
          <ArrowRight size={17} className="transition group-hover:translate-x-1" />
        </a>

        <a
          href="#about-edwin"
          className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-[14px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
        >
          Book Consultation
        </a>
      </div>

      <div className="mt-5 grid max-w-[620px] grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Trusted Support", "Reliable & Transparent"],
          ["Global Presence", "25+ Countries"],
          ["Excellence", "Quality Services"],
          ["24/7 Assistance", "Always Available"],
        ].map((item) => (
          <div
            key={item[0]}
            className="glass-card rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/70 hover:bg-white/15"
          >
            <BadgeCheck className="mb-2 text-[#FFD35A]" size={17} />
            <h4 className="text-[13px] font-black text-white">{item[0]}</h4>
            <p className="mt-1 text-[11px] font-semibold text-white/65">
              {item[1]}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative slide-left">
      <div className="glass-card relative h-[390px] overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,.32)] backdrop-blur-md">
        {carouselSlides.map((image, index) => (
          <img key={image}
            src={image}
            alt="Edwin Incorporation"
            className={`absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-[22px] object-cover transition-all duration-[1200ms] ${
              index === currentSlide
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`} loading="lazy" width="600" height="400" />
        ))}

        <button className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#082B63]/80 text-[#FFD35A] shadow-lg backdrop-blur-md">
          ‹
        </button>

        <button className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#082B63]/80 text-[#FFD35A] shadow-lg backdrop-blur-md">
          ›
        </button>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
          {carouselSlides.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#FFB000]"
                  : "w-2.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* STATS BAR */}
  <div className="relative z-10 mx-auto -mb-14 mt-5 max-w-[1120px]">
    <div className="glass-card grid grid-cols-2 gap-0 rounded-[24px] border-2 border-[#FFD35A]/80 bg-white/95 px-4 py-4 shadow-[0_24px_70px_rgba(255,176,0,.24)] backdrop-blur-xl md:grid-cols-5">
      {stats.map((item) => (
        <div
          key={item[0]}
          className="group flex items-center justify-center border-[#F2D37A] px-3 py-2 text-center transition duration-300 hover:bg-gradient-to-br hover:from-[#FFF7D6] hover:to-[#FFE39A] md:border-r last:border-r-0"
        >
          <div className="transition duration-300 group-hover:-translate-y-1">
            <h3 className="bg-gradient-to-r from-[#082B63] to-[#0B66C3] bg-clip-text text-[31px] font-black text-transparent group-hover:from-[#D97706] group-hover:to-[#FFB000]">
              {item[0]}
            </h3>
            <p className="mt-1 text-[12px] font-black leading-snug text-[#5B6B83] group-hover:text-[#082B63]">
              {item[1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section
        id="about-edwin"
        className="relative overflow-hidden bg-gradient-to-br from-[#FFF7E5] via-[#F4F8FF] to-[#EAF4FF] px-5 py-16"
      >
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#FFB000]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#0B66C3]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1180px]">
          <div className="glass-card rounded-[34px] border border-white/70 bg-white/70 p-8 shadow-[0_24px_70px_rgba(8,34,74,.12)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(8,34,74,.18)] md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="pulse-glow flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
                <ArrowRight size={28} />
              </div>

              <div>
                <span className="text-[13px] font-black uppercase tracking-wider text-[#FF9D00]">
                  About Edwin Incorporation
                </span>
                <h2 className="mt-2 text-[34px] font-black leading-tight text-[#082B63] md:text-[44px]">
                  The Edwin INC
                </h2>
              </div>
            </div>

            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#0B66C3] via-[#FFB000] to-[#FFD35A]" />

            <p className="mt-7 text-[17px] font-semibold leading-[1.9] text-[#08224A]">
              Edwin Incorporation delivers a wide range of solutions for universities,
              journals, NGOs, and businesses—combining research support, digital tools,
              and expert services to accelerate academic and professional growth.
            </p>

            <p className="mt-5 text-[15px] font-semibold leading-[1.9] text-[#52647B]">
              Our offerings include research & development, educational development for
              colleges and universities, journal support, membership services, patent
              registrations, book publications, online courses and conferences, HR
              services, API calculators, digital library solutions, PhD assistance, and
              more. We operate with a commitment to customer satisfaction, integrity,
              innovation, collaboration, and continuous improvement—empowering
              individuals and organizations worldwide to reach their academic and
              intellectual potential.
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
                  className="rounded-full border border-[#BFD5F2] bg-[#EEF6FF]/90 px-5 py-2 text-[13px] font-black text-[#164A96] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:bg-[#FFF1C2] hover:text-[#082B63]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-7 py-3.5 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(11,102,195,.36)]"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-xl border border-[#DDE9F7] bg-white px-7 py-3.5 text-[15px] font-black text-[#083A7C] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:bg-[#FFF7E5]"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden bg-gradient-to-br from-[#EAF4FF] via-[#F7FBFF] to-[#FFF4D8] px-5 py-20">
        <div className="absolute -left-28 top-10 h-96 w-96 rounded-full bg-[#FFD35A]/30 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="mb-12 text-center fade-up">
            <span className="rounded-full bg-white/80 px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FF8A00] shadow-sm backdrop-blur-md">
              What We Do
            </span>
            <h2 className="mt-4 text-[40px] font-black text-[#082B63]">
              Our Complete Services
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">
              Complete academic, research, journal, publication, conference and
              institutional support under one professional platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service, index) => (
              <div
                key={service.title}
                className="glass-card group rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#FFB000] hover:bg-white hover:shadow-[0_24px_70px_rgba(255,157,0,.24)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:from-[#FF9D00] group-hover:to-[#FFD35A] group-hover:text-[#071C34]">
                    {service.icon}
                  </div>
                  <span className="text-[13px] font-black text-[#FFB000]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-black text-[#082B63]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] font-semibold leading-[1.75] text-[#5B6B83]">
                  {service.desc}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-[14px] font-black text-[#083A7C] transition group-hover:text-[#D97706]">
                  Learn More
                  <ArrowRight size={16} className="transition group-hover:translate-x-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-[#051B3B] via-[#083A7C] to-[#031329] px-5 py-20"
      >
        <div className="absolute -left-24 top-12 h-96 w-96 rounded-full bg-[#FFB000]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#4DA3FF]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="glass-card rounded-[34px] border border-white/15 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-2">
            <img src={hero2}
              alt="Academic Network"
              className="h-[460px] w-full rounded-[26px] object-cover" loading="lazy" width="600" height="400" />
          </div>

          <div className="fade-up">
            <span className="text-[13px] font-black uppercase tracking-wider text-[#FFD35A]">
               Excellence, Trust, Global Impact
            </span>

            <h2 className="mt-3 text-[38px] font-black leading-tight text-white md:text-[46px]">
              Why Choose Edwin Incorporation ? 
            </h2>

            <p className="mt-5 text-[16px] font-semibold leading-[1.9] text-white/78">
              Edwin Incorporation delivers solutions for universities, journals,
              NGOs, scholars and businesses — combining research support,
              publication services, digital tools and expert academic guidance.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced Academic Experts",
                "Scopus, WoS & UGC Care Support",
                "DOI, ISSN, Patent & More",
                "Dedicated Customer Support",
                "Transparent Services",
                "Global Network of Institutions",
              ].map((item) => (
                <div
                  key={item}
                  className="glass-card flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-[14px] font-black text-white shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:bg-white/15"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB000] text-[#071C34]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#FF9D00] to-[#FFD35A] px-7 py-3.5 text-[15px] font-black text-[#071C34] shadow-[0_16px_42px_rgba(255,176,0,.28)] transition hover:-translate-y-1"
            >
              View Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-[#EAF4FF] to-[#FFF4D8] px-5 py-20">
        <div className="absolute -left-28 top-10 h-96 w-96 rounded-full bg-[#FFD35A]/30 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up">
            <span className="text-[13px] font-black uppercase tracking-wider text-[#FF9D00]">
              Our Global Presence
            </span>

            <h2 className="mt-3 text-[38px] font-black leading-tight text-[#082B63]">
              Serving scholars and institutions across 25+ countries
            </h2>

            <p className="mt-4 text-[15px] font-semibold leading-[1.85] text-[#5B6B83]">
              Edwin Incorporation supports academicians, research scholars,
              journals, colleges and universities through a growing global
              academic network.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {stats.slice(0, 4).map((item) => (
                <div
                  key={item[0]}
                  className="glass-card rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_14px_40px_rgba(8,34,74,.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#FFB000]"
                >
                  <h3 className="text-[30px] font-black text-[#083A7C]">
                    {item[0]}
                  </h3>
                  <p className="text-[13px] font-bold text-[#65758C]">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[34px] border border-white/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(8,34,74,.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-2">
            <div className="flex h-[370px] items-center justify-center rounded-[26px] bg-gradient-to-br from-[#EAF4FF] via-white to-[#FFF4D8]">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-[#FFB000]" size={60} />
                <h3 className="text-[34px] font-black text-[#082B63]">
                  Global Academic Network
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] font-semibold leading-[1.7] text-[#5B6B83]">
                  Connecting researchers, institutions and academic organizations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071C34] via-[#083A7C] to-[#041B3D] px-5 py-20">
        <div className="absolute -left-28 top-10 h-96 w-96 rounded-full bg-[#FFB000]/20 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#4DA3FF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="mb-12 text-center fade-up">
            <span className="text-[13px] font-black uppercase tracking-wider text-[#FFD35A]">
              What Scholars Say
            </span>
            <h2 className="mt-3 text-[38px] font-black text-white">
              Trusted by Researchers Worldwide
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="glass-card rounded-[28px] border border-white/15 bg-white/10 p-7 shadow-[0_18px_55px_rgba(0,0,0,.20)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#FFB000] hover:bg-white/15"
              >
                <Quote className="text-[#FFD35A]" size={34} />
                <div className="mt-4 flex gap-1 text-[#FFB000]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-white/78">
                  {item.text}
                </p>
                <div className="mt-6">
                  <h4 className="font-black text-white">{item.name}</h4>
                  <p className="text-[13px] font-bold text-white/60">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      
{/* PARTNERS */}
<section className="relative -mb-1 overflow-hidden bg-gradient-to-br from-[#FFF7E5] via-white to-[#EAF4FF] px-5 pt-8 pb-0">
  <div className="mx-auto max-w-[1280px]">
    <div className="glass-card rounded-t-[30px] border border-white/70 bg-white/75 px-6 py-6 shadow-[0_14px_45px_rgba(8,34,74,.10)] backdrop-blur-xl">
      <div className="mb-5 text-center">
        <span className="text-[12px] font-black uppercase tracking-wider text-[#FF9D00]">
          Our Partners & Indexing
        </span>
        <h2 className="mt-2 text-[28px] font-black text-[#082B63]">
          Academic Platforms We Support
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {partners.map((item) => (
          <div
            key={item.name}
            className="glass-card group flex h-[82px] items-center justify-center rounded-[18px] border border-[#DDE9F7] bg-white/90 p-3 shadow-[0_8px_24px_rgba(8,34,74,.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:bg-[#FFF7E5] hover:shadow-[0_12px_32px_rgba(255,157,0,.18)]"
          >
            <img src={item.logo}
              alt={item.name}
              className="max-h-[42px] max-w-[105px] object-contain transition duration-300 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "block";
              }} loading="lazy" width="64" height="64" />
            <span className="hidden text-center text-[15px] font-black text-[#083A7C]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


    </div>
  );
}