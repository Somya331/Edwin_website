import React, { useEffect } from "react";
import {
  FaNewspaper,
  FaCameraRetro,
  FaVideo,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp,
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
      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-[#FFFFFF] px-5 py-2 text-[13px] font-semibold text-[#1B3A6B]">
              <FaNewspaper className="text-[#C89B3C]" />
              NEWSPAPER COVERAGE
            </div>

            <h1 className="mt-6 text-[42px] font-bold leading-tight text-[#1B3A6B] lg:text-[56px]">
              Press and Media Coverage of Edwin Incorporation
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Explore newspaper highlights, press mentions, conference
              visibility, academic event coverage, and media recognition
              associated with Edwin Incorporation and its research-driven
              initiatives.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#coverage"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                View Coverage <FaArrowRight className="text-[12px]" />
              </a>
              <a
                href="https://www.academichelpstore.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                Visit Website <FaExternalLinkAlt className="text-[12px]" />
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src={heroImages[0]}
              alt="Press media coverage"
              className="h-[330px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src={heroImages[1]}
                alt="Newspaper coverage"
                className="h-[160px] w-full rounded-[18px] border border-[#D6E0F0] object-cover"
              />
              <img
                src={heroImages[2]}
                alt="Media press"
                className="h-[160px] w-full rounded-[18px] border border-[#D6E0F0] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Featured In
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Media Locations & Press Highlights
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPress.map((item) => (
              <div
                key={item}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 transition duration-200 hover:border-[#C89B3C]"
              >
                <FaNewspaper className="text-[26px] text-[#1B3A6B]" />
                <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coverage" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Conference and Press Coverage
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Academic Event Coverage Gallery
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              This section highlights newspaper coverage and media recognition
              of conferences, academic activities, and research-related
              initiatives conducted under Edwin Incorporation.
            </p>
          </div>

          <div className="space-y-14">
            {coverageSections.map((section, sectionIndex) => (
              <div
                key={section.heading}
                className="rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 lg:p-7"
              >
                <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#C89B3C]">
                      Section {sectionIndex + 1}
                    </p>
                    <h3 className="mt-2 text-[26px] font-semibold text-[#1B3A6B]">
                      {section.heading}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[15px] leading-[1.7] text-[#1A1A2E]">
                      {section.text}
                    </p>
                  </div>
                  <FaCameraRetro className="text-[34px] text-[#C89B3C]" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] transition duration-200 hover:border-[#C89B3C]"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[260px] w-full object-cover transition duration-200 hover:scale-105"
                      />
                      <div className="p-4">
                        <h4 className="text-[16px] font-semibold text-[#1B3A6B]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[13px] text-[#5A6A85]">
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

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[24px] border border-[#D6E0F0] bg-[#EAF1FB] p-8">
            <FaVideo className="text-[46px] text-[#C89B3C]" />
            <h2 className="mt-5 text-[34px] font-semibold text-[#1B3A6B]">
              Video Media Coverage
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Watch media and event-related video coverage associated with Edwin
              Incorporation and its academic presence.
            </p>
          </div>

          <div className="rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="flex h-[300px] items-center justify-center rounded-[14px] border border-[#D6E0F0] bg-[#EAF1FB]">
              <div className="text-center">
                <FaVideo className="mx-auto text-[54px] text-[#1B3A6B]" />
                <h3 className="mt-4 text-[22px] font-semibold text-[#1B3A6B]">
                  Conference & Media Video Coverage
                </h3>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.7] text-[#1A1A2E]">
                  Official video glimpse of event and media visibility
                  associated with academic and research initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Keep in Touch with Us
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Edwin Incorporation Support
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
              <FaMapMarkerAlt className="text-[28px] text-[#C89B3C]" />
              <h3 className="mt-4 text-[18px] font-semibold">Address</h3>
              <p className="mt-3 text-[15px] leading-[1.7]">
                15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi
                110019
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
              <FaPhoneAlt className="text-[28px] text-[#C89B3C]" />
              <h3 className="mt-4 text-[18px] font-semibold">Phone</h3>
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
              <h3 className="mt-4 text-[18px] font-semibold">
                Email & Website
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7]">
                care@edwinepc.com
                <br />
                www.academichelpstore.com
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <FaGlobe className="mt-1 text-[26px] text-[#C89B3C]" />
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                    Visit Website
                  </h3>
                  <p className="mt-1 text-[15px] text-[#1A1A2E]">
                    www.academichelpstore.com
                  </p>
                </div>
              </div>

              <a
                href="https://www.academichelpstore.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Open Website <FaExternalLinkAlt className="text-[12px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/916262752167"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-[24px]" />
      </a>
    </div>
  );
}