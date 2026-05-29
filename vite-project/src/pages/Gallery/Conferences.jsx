import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaImages,
  FaUniversity,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const heroSlides = [
  {
    title: "Conferences, Academic Events & Research Gatherings",
    subtitle:
      "View Edwin Incorporation conference updates, upcoming academic events, national and international conference galleries, and previous conference memories.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "National & International Academic Conferences",
    subtitle:
      "A professional platform for research presentations, academic collaboration, institutional participation, and knowledge exchange.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "Conference Gallery & Event Memories",
    subtitle:
      "Explore conference photographs, academic sessions, speakers, delegates, and event moments in a clean gallery format.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=90",
  },
];

const conferenceSections = [
  {
    title: "Chhindwara International Conference - 2026",
    subtitle:
      "A Multidisciplinary International Conference on Indian Knowledge Systems (IKS) For Sustainable Development: Road Map for Viksit Bharat-2047",
    type: "International Conference",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Barhi National Conference - 2026",
    subtitle:
      "शिक्षा अनुसंधान और नवाचार में भारतीय ज्ञान परंपरा की भूमिका: 2047 के परिप्रेक्ष्य में",
    type: "National Conference",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Previous - Conferences",
    subtitle:
      "Explore previous conference memories, academic sessions, participation, and institutional collaboration activities.",
    type: "Past Events",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=90",
  },
];

const galleryImages = [
  {
    title: "Conference Moment 1",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conference Moment 2",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conference Moment 3",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conference Moment 4",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conference Moment 5",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conference Moment 6",
    image:
      "https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ConferencesPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#EAF1FB]">
        <div className="relative h-[620px] w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1B3A6B]/70" />
            </div>
          ))}

          <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF] px-5 py-2 text-[13px] font-semibold text-[#1B3A6B]">
                <FaCalendarAlt className="text-[#C89B3C]" />
                Edwin Incorporation Conferences
              </div>

              <h1 className="mt-6 text-[42px] font-bold leading-tight text-[#FFFFFF] lg:text-[58px]">
                {heroSlides[activeSlide].title}
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-[#FFFFFF]">
                {heroSlides[activeSlide].subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#upcoming"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  View Conferences <FaArrowRight className="text-[12px]" />
                </a>

                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#FFFFFF] bg-transparent px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/40 bg-[#FFFFFF]/20 text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/40 bg-[#FFFFFF]/20 text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-3 rounded-full transition-all duration-200 ${
                  activeSlide === index
                    ? "w-9 bg-[#C89B3C]"
                    : "w-3 bg-[#FFFFFF]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="upcoming" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
              Conference Highlights
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Upcoming & Previous Conferences
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {conferenceSections.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] transition duration-200 hover:border-[#C89B3C]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[240px] w-full object-cover"
                />
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#EAF1FB] px-4 py-2 text-[13px] font-semibold text-[#1B3A6B]">
                    {item.type}
                  </span>
                  <h3 className="mt-4 text-[20px] font-semibold leading-[1.4] text-[#1B3A6B]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] uppercase tracking-wide text-[#5A6A85]">
                Event Gallery
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Chhindwara Conference 
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                This gallery layout is fixed-size and safe for adding many
                images. Replace demo images with original conference photos.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
              <FaImages className="text-[28px] text-[#C89B3C]" />
              <p className="mt-2 text-[14px] font-semibold text-[#1B3A6B]">
                Same image size maintained
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] transition duration-200 hover:border-[#C89B3C]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition duration-200 hover:scale-105"
                />

                <div className="p-4">
                  <h3 className="text-[16px] font-semibold text-[#1B3A6B]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">
                    Academic event gallery
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Barhi National Conference
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                This gallery layout is fixed-size and safe for adding many
                images. Replace demo images with original conference photos.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
              <FaImages className="text-[28px] text-[#C89B3C]" />
              <p className="mt-2 text-[14px] font-semibold text-[#1B3A6B]">
                Same image size maintained
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] transition duration-200 hover:border-[#C89B3C]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition duration-200 hover:scale-105"
                />

                <div className="p-4">
                  <h3 className="text-[16px] font-semibold text-[#1B3A6B]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">
                    Academic event gallery
                  </p>
                </div>
              </div>
            ))}
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