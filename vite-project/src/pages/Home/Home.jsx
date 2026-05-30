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
    span: "lg:col-span-2",
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
    span: "",
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
    span: "",
    items: ["PhD Assistant", "Plagiarism Checker", "Admission in University"],
  },
  {
    title: "Services for University and Colleges",
    icon: <Building2 size={24} />,
    span: "lg:col-span-2",
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
    span: "",
    items: [
      "South Asian University of Higher Education",
      "Educational News – YouTube Channel",
    ],
  },
  {
    title: "Professional Membership",
    icon: <Briefcase size={24} />,
    span: "",
    items: [
      "South Asia Management Association",
      "Jabalpur Management Association",
    ],
  },
];

const facebookLinks = [
  { title: "41st International Conference: Nepal", link: "https://www.facebook.com/people/41th-International-Conference-Nepal/61582637724040/" },
  { title: "40th International Conference: USA", link: "https://www.facebook.com/people/40th-International-Conference-USA/61578401152336/" },
  { title: "Edwin Patent Support Services | Delhi", link: "https://www.facebook.com/people/Edwin-Patent-Support-services/61578565791587/" },
  { title: "Edwin's Job Support Services | Delhi", link: "https://www.facebook.com/people/Edwins-Job-Support-Services/61578053891299/" },
  { title: "Edwin Academic Conferences Services | Delhi", link: "https://www.facebook.com/people/Edwin-Academic-Conferences-Services/61578072282499/" },
  { title: "Edwin's Award Services | Delhi", link: "https://www.facebook.com/people/Edwins-Award-Services/61578162038702/" },
  { title: "Edwin Major & Minor Project Support | Delhi", link: "https://www.facebook.com/people/Edwin-Major-Minor-Project-Support/61578393956960/" },
  { title: "Edwin's Editorial Board Membership | Delhi", link: "https://www.facebook.com/people/Edwins-Editorial-Board-Membership/61578135487044/" },
  { title: "Edwin's API Calculator | Delhi", link: "https://www.facebook.com/people/Edwin-API-Calculator/61577999776688/" },
];

const carouselSlides = [hero1, hero2, hero4];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4200);

    return () => {
      clearInterval(timer);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFF8EA] font-['Plus_Jakarta_Sans',sans-serif] text-[#172033]">
      <style>{`
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes shineMove {
          0% { transform: translateX(-170%) rotate(16deg); }
          100% { transform: translateX(230%) rotate(16deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(255, 179, 0, 0); }
          50% { box-shadow: 0 0 26px rgba(255, 179, 0, 0.26); }
        }

        .glass-card {
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          top: -55%;
          left: -65%;
          width: 18%;
          height: 230%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 211, 90, 0.08),
            rgba(255, 255, 255, 0.15),
            rgba(255, 211, 90, 0.08),
            transparent
          );
          filter: blur(18px);
          opacity: 0;
          pointer-events: none;
        }

        .glass-card:hover::before {
          opacity: 1;
          animation: shineMove 1.5s ease;
        }

        .float-soft {
          animation: floatSoft 5s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 3.5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative h-[520px] w-full overflow-hidden bg-[#071C34] md:h-[560px]">
  {carouselSlides.map((image, index) => (
    <div
      key={image}
      className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
        index === currentSlide ? "z-10 scale-100 opacity-100" : "z-0 scale-105 opacity-0"
      }`}
    >
      <img
        src={image}
        alt={`Edwin carousel ${index + 1}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061B33]/95 via-[#061B33]/68 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061B33]/55 via-transparent to-transparent" />
    </div>
  ))}

  <div className="relative z-30 mx-auto flex h-full max-w-[1200px] items-center px-6">
    <div className="max-w-[560px]">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFD35A]/35 bg-white/10 px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FFD35A] backdrop-blur-md">
        <GraduationCap size={16} />
        Academic Growth Platform
      </div>

      <h1 className="text-[42px] font-black leading-[1.08] text-white md:text-[54px]">
        The Edwin{" "}
        <span className="bg-gradient-to-r from-[#FFB000] to-[#FFD35A] bg-clip-text text-transparent">
          INC
        </span>
      </h1>

      <p className="mt-4 max-w-[540px] text-[15.5px] font-semibold leading-[1.75] text-white/88">
        Research, journal, university, membership, conference and academic support
        services under one creative professional platform.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          ["Global Research", "Opportunities"],
          ["Academic", "Excellence"],
          ["Trusted by", "Institutions Worldwide"],
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-[18px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/60 hover:bg-white/15"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFB000]/20 text-[#FFD35A]">
              <BookOpen size={18} />
            </div>
            <p className="text-[13px] font-bold leading-[1.45] text-white">
              {item[0]} <br /> {item[1]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-4">
        <a
          href="#services"
          className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#FF9D00] to-[#FFD35A] px-7 py-3.5 text-[15px] font-black text-[#071C34] shadow-[0_15px_35px_rgba(255,176,0,.30)] transition duration-300 hover:-translate-y-1"
        >
          Explore Services
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </a>

        <a
          href="#about"
          className="inline-flex items-center gap-3 rounded-xl border border-[#FFD35A]/50 bg-white/8 px-7 py-3.5 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:bg-[#FFD35A] hover:text-[#071C34]"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  <div className="absolute bottom-8 right-[8%] z-30 hidden rounded-[22px] border border-white/15 bg-[#071C34]/75 px-7 py-4 text-white shadow-[0_20px_55px_rgba(0,0,0,.25)] backdrop-blur-xl lg:flex gap-7">
    {[
      ["25+", "Countries Served"],
      ["10K+", "Happy Members"],
      ["500+", "Research Papers"],
    ].map((stat) => (
      <div key={stat[0]} className="text-center">
        <h3 className="text-[24px] font-black text-[#FFD35A]">{stat[0]}</h3>
        <p className="text-[11px] font-semibold text-white/75">{stat[1]}</p>
      </div>
    ))}
  </div>

  <button
    onClick={() =>
      setCurrentSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length)
    }
    className="absolute left-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-3xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-[#FFB000] hover:text-[#071C34]"
  >
    ‹
  </button>

  <button
    onClick={() => setCurrentSlide((currentSlide + 1) % carouselSlides.length)}
    className="absolute right-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-3xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-[#FFB000] hover:text-[#071C34]"
  >
    ›
  </button>

  <div className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-md">
    {carouselSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-2.5 rounded-full transition-all duration-300 ${
          index === currentSlide ? "w-10 bg-[#FFB000]" : "w-2.5 bg-white/70"
        }`}
      />
    ))}
  </div>
</section>

      <section className="relative px-5 py-20">
        <div className="absolute -right-28 top-6 h-96 w-96 rounded-full bg-[#FFD35A]/45 blur-3xl" />
        <div className="absolute -left-28 bottom-8 h-96 w-96 rounded-full bg-[#FF8A00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="glass-card rounded-[36px] border border-white/70 bg-white/65 p-7 shadow-[0_30px_90px_rgba(97,54,0,.12)] backdrop-blur-xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
              <div className="float-soft rounded-[30px] bg-gradient-to-br from-[#071C34] via-[#0C3B70] to-[#FF9D00] p-8 text-white shadow-[0_28px_70px_rgba(7,28,52,.28)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-[#FFD35A] backdrop-blur">
                  <ChevronRight size={34} />
                </div>
                <h2 className="mt-6 text-[34px] font-black">
                  About Edwin Incorporation
                </h2>
                <p className="mt-4 text-[15px] leading-[1.8] text-white/90">
                  A modern platform for academicians, journals, universities,
                  research scholars and professional members.
                </p>
              </div>

              <div>
                <p className="text-[17px] font-bold leading-[1.85] text-[#172033]">
                  Edwin Incorporation delivers a wide range of solutions for
                  universities, journals, NGOs, and businesses — combining
                  research support, digital tools, and expert services to
                  accelerate academic and professional growth.
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-[#536071]">
                  Our offerings include research & development, educational
                  development for colleges and universities, journal support,
                  membership services, patent registrations, book publications,
                  online courses and conferences, HR services, API calculators,
                  digital library solutions, PhD assistance, and more.
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
                      className="rounded-full border border-[#FFE4A8] bg-white/80 px-5 py-2 text-[13px] font-black text-[#071C34] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:bg-gradient-to-r hover:from-[#FF9D00] hover:to-[#FFD35A] hover:text-[#071C34]"
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

      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-br from-[#071C34] via-[#0C315E] to-[#111827] px-5 py-20"
      >
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#FFB000]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#FF7A00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FFD35A] backdrop-blur">
              Our Services
            </span>
            <h2 className="mt-4 text-[38px] font-black text-white md:text-[48px]">
              What We Provide
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-[1.8] text-white/70">
              Services cards are arranged in a creative mixed-size layout with
              smooth hover, glass effect, and balanced spacing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, index) => (
              <div
                key={card.title}
                className={`glass-card group rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#FFD35A]/80 hover:bg-white/15 hover:shadow-[0_30px_85px_rgba(255,157,0,.22)] ${card.span}`}
              >
                <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-[#FFB000]/15 blur-2xl transition duration-500 group-hover:bg-[#FFD35A]/35" />

                <div className="relative flex items-start gap-4">
                  <div className="pulse-glow flex h-15 w-15 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#FF9D00] to-[#FFD35A] p-4 text-[#071C34] shadow-[0_16px_35px_rgba(255,157,0,.35)] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[12px] font-black uppercase tracking-wider text-[#FFD35A]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 text-[21px] font-black leading-snug text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`relative mt-6 grid gap-2 ${
                    card.items.length > 8 ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-2.5 text-[13.5px] font-semibold leading-[1.55] text-white/82 transition duration-300 hover:translate-x-1 hover:border-[#FFD35A]/55 hover:bg-[#FFD35A]/15 hover:text-white"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFD35A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#FFF8EA] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FF8A00] shadow-sm">
              Stay Connected
            </span>
            <h2 className="mt-4 text-[38px] font-black text-[#071C34]">
              Connect with Edwin Services on Facebook
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facebookLinks.map((item, index) => (
              <a
                key={item.title}
                href={item.link}
                className="glass-card group min-h-[135px] rounded-[26px] border border-white/80 bg-white/75 p-6 shadow-[0_18px_50px_rgba(97,54,0,.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#FFB000] hover:bg-gradient-to-br hover:from-white hover:to-[#FFF0C2]"
              >
                <span className="rounded-full bg-[#071C34] px-3 py-1 text-[11px] font-black text-[#FFD35A]">
                  Link {index + 1}
                </span>
                <h3 className="mt-4 text-[16px] font-black leading-[1.5] text-[#172033] transition duration-200 group-hover:text-[#C46A00]">
                  {item.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-black text-[#071C34]">
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

 <section className="relative overflow-hidden bg-[#FFF8EA] px-5 py-20">
  <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#FFD35A]/35 blur-3xl" />
  <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-[#FF8A00]/20 blur-3xl" />

  <div className="relative mx-auto max-w-[1400px]">
    <div className="mb-10 text-center">
      <span className="rounded-full bg-white px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FF8A00] shadow-sm">
        Editorial Board
      </span>

      <h2 className="mt-4 text-[36px] font-black text-[#071C34]">
        Editorial Board for Research Review
      </h2>

      <p className="mx-auto mt-3 max-w-4xl text-[15px] font-bold leading-[1.8] text-[#24346B]">
        ISSN: 2394-4498, ISSN: 2348-0459, ISSN: 2395-1079, ISSN- 2394-3084 Many More
      </p>
    </div>

    <div className="glass-card overflow-hidden rounded-[30px] border border-white/80 bg-white/75 p-4 shadow-[0_24px_70px_rgba(97,54,0,.12)] backdrop-blur-xl">
      <div className="overflow-hidden rounded-[22px] border border-[#FFE4A8] bg-white shadow-[0_16px_45px_rgba(7,28,52,.08)]">
        <iframe
          title="Editorial Board for Research Review"
          src="https://creatorapp.zohopublic.in/edwininc/editorial-board/report-embed/All_Contacts/OKBtwFgmpdN0qJPHh33DfX0eBwtpDwOjNMZY8AxMtqbUCEvU1rdzDpmgx3pBYOVkPttnPf7kMPG1PtuFdVhzGRw6FwjHyUvJEUYK"
          width="100%"
          height="560px"
          frameBorder="0"
          scrolling="auto"
          allowTransparency="true"
          style={{ border: "none" }}
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
}