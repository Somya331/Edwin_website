import React, { useEffect } from "react";
import {
  FaNewspaper,
  FaCameraRetro,
  FaVideo,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const heroImages = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=900&q=90",
];

const featuredPress = [
  "Chhindwara Press",
  "Barhi Media",
  "Bhopal Press",
  "Jabalpur Media",
  "Barabanki Press",
  "Dindori Media",
  "Dehradun Press",
];

const coverageSections = [
  {
    heading: "International Conference Coverage",
    text: "Selected media coverage of international conferences and academic visibility.",
    items: [
      {
        title: "4th International Conference",
        image:
          "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "International Conference",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "Conference at LNCT",
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
  {
    heading: "Conference Coverage",
    text: "Newspaper highlights from Dehradun, Dindori and other conference locations.",
    items: [
      {
        title: "Dehradun Press",
        image:
          "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "International Conference",
        image:
          "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "Dindori Press",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
  {
    heading: "Programme and Ceremony Media Coverage",
    text: "Media coverage of programmes, ceremonies, academic events and research activities.",
    items: [
      {
        title: "Conference at Navyug College JBP",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "Research Conference Coverage",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "Barabanki Press Coverage",
        image:
          "https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
  {
    heading: "Press Coverage",
    text: "Press and newspaper mentions associated with Edwin Incorporation events.",
    items: [
      {
        title: "NBT Barabanki Press Coverage",
        image:
          "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "Dindori Press Coverage",
        image:
          "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "Cityline Press",
        image:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
  {
    heading: "Chhindwara International Conference",
    text: "Media and newspaper coverage highlighting international conference activities and event visibility in Chhindwara.",
    items: [
      {
        title: "Chhindwara Conference Coverage",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "International Press Recognition",
        image:
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
  {
    heading: "Barhi International Conference",
    text: "Selected press and visual coverage of international conference activities associated with Barhi.",
    items: [
      {
        title: "Barhi Conference Media Coverage",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=90",
      },
      {
        title: "International Event Visibility",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
];

export default function PressMediaPage() {
  

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes pressFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pressShine {
          0% { transform: translateX(-180%) rotate(18deg); opacity: 0; }
          35% { opacity: .8; }
          100% { transform: translateX(260%) rotate(18deg); opacity: 0; }
        }

        .press-fade-up { animation: pressFadeUp .85s ease both; }

        .press-card {
          position: relative;
          overflow: hidden;
        }

        .press-card::before {
          content: "";
          position: absolute;
          top: -70%;
          left: -85%;
          width: 28%;
          height: 260%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), rgba(255,211,90,.34), rgba(255,255,255,.14), transparent);
          filter: blur(16px);
          opacity: 0;
          pointer-events: none;
        }

        .press-card:hover::before {
          animation: pressShine 1.4s ease;
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 md:py-20">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute -left-24 top-10 h-[300px] w-[300px] rounded-full bg-[#FFB000]/35 blur-3xl" />
          <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="press-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[12px] font-black uppercase tracking-wide text-[#FFD35A] backdrop-blur-md">
              <FaNewspaper className="text-[#C89B3C]" />
              NEWSPAPER COVERAGE
            </div>

            <h1 className="mt-6 max-w-3xl text-[36px] font-black leading-tight text-white md:text-[46px] lg:text-[52px]">
              Press and Media Coverage of Edwin Incorporation
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] font-semibold leading-[1.8] text-white/78">
              Explore newspaper highlights, press mentions, conference
              visibility, academic event coverage, and media recognition
              associated with Edwin Incorporation and its research-driven
              initiatives.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#coverage"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF9D00] to-[#FFD35A] px-6 py-3 text-[14px] font-black text-[#071C34] shadow-[0_16px_42px_rgba(255,176,0,.28)] transition duration-300 hover:-translate-y-1"
              >
                View Coverage <FaArrowRight className="text-[12px]" />
              </a>
              <a
                href="https://www.academichelpstore.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-[14px] font-black text-white shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
              >
                Visit Website <FaExternalLinkAlt className="text-[12px]" />
              </a>
            </div>
          </div>

          <div className="grid gap-5 press-fade-up [animation-delay:.12s]">
            <img src={heroImages[0]}
              alt="Press media coverage"
              className="h-[330px] w-full rounded-[26px] border border-white/20 object-cover p-2 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md" loading="lazy" width="600" height="400" />
            <div className="grid gap-5 sm:grid-cols-2">
              <img src={heroImages[1]}
                alt="Newspaper coverage"
                className="h-[160px] w-full rounded-[20px] border border-white/20 object-cover shadow-[0_16px_42px_rgba(0,0,0,.18)]" loading="lazy" width="600" height="400" />
              <img src={heroImages[2]}
                alt="Media press"
                className="h-[160px] w-full rounded-[20px] border border-white/20 object-cover shadow-[0_16px_42px_rgba(0,0,0,.18)]" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7FBFF] to-[#EAF4FF] px-5 py-16">
        <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#4DA3FF]/18 blur-3xl" />
        <div className="mx-auto max-w-[1200px]">
          <div className="relative mb-8 press-fade-up">
            <p className="text-[12px] font-black uppercase tracking-wide text-[#FF9D00]">
              Featured In
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-[#082B63] md:text-[36px]">
              Media Locations & Press Highlights
            </h2>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPress.map((item) => (
              <div
                key={item}
                className="press-card rounded-[22px] border border-white/70 bg-white p-5 shadow-[0_14px_40px_rgba(8,34,74,.09)] transition duration-300 hover:-translate-y-2 hover:border-[#FFB000] hover:shadow-[0_20px_55px_rgba(11,102,195,.14)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
                  <FaNewspaper className="text-[21px]" />
                </div>
                <h3 className="mt-4 text-[17px] font-black text-[#08224A]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coverage" className="relative overflow-hidden bg-gradient-to-br from-[#EAF4FF] via-[#F8FBFF] to-[#FFF7E5] px-5 py-20">
        <div className="absolute -left-28 top-14 h-96 w-96 rounded-full bg-[#FFD35A]/22 blur-3xl" />
        <div className="absolute -right-28 bottom-14 h-96 w-96 rounded-full bg-[#4DA3FF]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-3xl press-fade-up">
            <p className="text-[12px] font-black uppercase tracking-wide text-[#FF9D00]">
              Conference and Press Coverage
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-[#082B63] md:text-[36px]">
              Academic Event Coverage Gallery
            </h2>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#52647B]">
              This section highlights newspaper coverage and media recognition
              of conferences, academic activities, and research-related
              initiatives conducted under Edwin Incorporation.
            </p>
          </div>

          <div className="space-y-14">
            {coverageSections.map((section, sectionIndex) => (
              <div
                key={section.heading}
                className="press-card rounded-[26px] border border-white/70 bg-white p-5 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-500 hover:-translate-y-2 hover:border-[#FFB000] hover:shadow-[0_24px_70px_rgba(8,34,74,.14)] lg:p-7"
              >
                <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-wide text-[#D97706]">
                      Section {sectionIndex + 1}
                    </p>
                    <h3 className="mt-2 text-[24px] font-black text-[#082B63] md:text-[28px]">
                      {section.heading}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[15px] font-semibold leading-[1.7] text-[#52647B]">
                      {section.text}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4D8] text-[#D97706]">
                    <FaCameraRetro className="text-[28px]" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="group overflow-hidden rounded-[20px] border border-[#DDE9F7] bg-white shadow-[0_10px_28px_rgba(8,34,74,.07)] transition duration-300 hover:-translate-y-2 hover:border-[#FFB000] hover:shadow-[0_18px_48px_rgba(11,102,195,.14)]"
                    >
                      <img src={item.image}
                        alt={item.title}
                        className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="600" height="400" />
                      <div className="p-4">
                        <h4 className="text-[16px] font-black text-[#082B63]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[13px] font-semibold text-[#65758C]">
                          Press and media coverage
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20">
        <div className="absolute -left-28 bottom-8 h-80 w-80 rounded-full bg-[#4DA3FF]/14 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="press-card rounded-[26px] border border-white/70 bg-gradient-to-br from-[#F8FBFF] via-[#EAF4FF] to-[#FFF7E5] p-8 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-500 hover:-translate-y-2 hover:border-[#FFB000]">
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#0B66C3] to-[#083A7C] text-white shadow-lg">
              <FaVideo className="text-[31px]" />
            </div>
            <h2 className="mt-5 text-[30px] font-black leading-tight text-[#082B63] md:text-[34px]">
              Video Media Coverage
            </h2>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#52647B]">
              Watch media and event-related video coverage associated with Edwin
              Incorporation and its academic presence.
            </p>
          </div>

          <div className="press-card rounded-[26px] border border-white/70 bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-500 hover:-translate-y-2 hover:border-[#FFB000]">
            <div className="flex h-[300px] items-center justify-center rounded-[20px] border border-[#DDE9F7] bg-gradient-to-br from-[#EAF4FF] via-white to-[#FFF7E5]">
              <div className="text-center">
                <FaVideo className="mx-auto text-[54px] text-[#0B66C3]" />
                <h3 className="mt-4 text-[22px] font-black text-[#082B63]">
                  Conference & Media Video Coverage
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] font-semibold leading-[1.7] text-[#52647B]">
                  Official video glimpse of event and media visibility
                  associated with academic and research initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#EAF4FF] via-[#F8FBFF] to-white px-5 py-20">
        <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-[#FFD35A]/18 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-8 press-fade-up">
            <p className="text-[12px] font-black uppercase tracking-wide text-[#FF9D00]">
              Keep in Touch with Us
            </p>
            <h2 className="mt-3 text-[30px] font-black leading-tight text-[#082B63] md:text-[36px]">
              Edwin Incorporation Support
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="press-card rounded-[22px] border border-white/70 bg-white p-6 shadow-[0_14px_40px_rgba(8,34,74,.09)] transition duration-300 hover:-translate-y-2 hover:border-[#FFB000]">
              <FaMapMarkerAlt className="text-[28px] text-[#D97706]" />
              <h3 className="mt-4 text-[18px] font-black text-[#082B63]">Address</h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#52647B]">
                15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi
                110019
              </p>
            </div>

            <div className="press-card rounded-[22px] border border-white/70 bg-white p-6 shadow-[0_14px_40px_rgba(8,34,74,.09)] transition duration-300 hover:-translate-y-2 hover:border-[#FFB000]">
              <FaPhoneAlt className="text-[28px] text-[#D97706]" />
              <h3 className="mt-4 text-[18px] font-black text-[#082B63]">Phone</h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#52647B]">
                India : 011-66155019
                <br />
                Phone: +91 6262752167
                <br />
                Phone: +12792029553
              </p>
            </div>

            <div className="press-card rounded-[22px] border border-white/70 bg-white p-6 shadow-[0_14px_40px_rgba(8,34,74,.09)] transition duration-300 hover:-translate-y-2 hover:border-[#FFB000]">
              <FaEnvelope className="text-[28px] text-[#D97706]" />
              <h3 className="mt-4 text-[18px] font-black text-[#082B63]">
                Email & Website
              </h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-[#52647B]">
                care@edwinepc.com
                <br />
                www.academichelpstore.com
              </p>
            </div>
          </div>

          <div className="press-card mt-8 rounded-[22px] border border-white/70 bg-white p-6 shadow-[0_14px_40px_rgba(8,34,74,.09)] transition duration-300 hover:-translate-y-2 hover:border-[#FFB000]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <FaGlobe className="mt-1 text-[26px] text-[#D97706]" />
                <div>
                  <h3 className="text-[18px] font-black text-[#082B63]">
                    Visit Website
                  </h3>
                  <p className="mt-1 text-[15px] font-semibold text-[#52647B]">
                    www.academichelpstore.com
                  </p>
                </div>
              </div>

              <a
                href="https://www.academichelpstore.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-6 py-3 text-[14px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(11,102,195,.32)]"
              >
                Open Website <FaExternalLinkAlt className="text-[12px]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
