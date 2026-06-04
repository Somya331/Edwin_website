import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
} from "react-icons/fa";

const imageSeries = (prefix, length) =>
  Array.from(
    { length },
    (_, index) =>
      `/images/conferences/${prefix}-${String(index + 1).padStart(2, "0")}.jpg`
  );

const chhindwaraPhotos = imageSeries("chhindwara", 23);
const barhiPhotos = imageSeries("barhi", 24);
const previousPhotos = imageSeries("previous", 9);

const chhindwaraSubtitle = (
  <>
    A Multidisciplinary International Conference on Indian Knowledge Systems
    (IKS) For Sustainable Development: Road Map for Viksit Bharat-2047
  </>
);

const conferenceSections = [
  {
    id: "chhindwara",
    eyebrow: "International Conference",
    title: "Chhindwara International Conference - 2026",
    subtitle: chhindwaraSubtitle,
    carouselImages: chhindwaraPhotos.slice(0, 5),
    galleryImages: chhindwaraPhotos.slice(5),
  },
  {
    id: "barhi",
    eyebrow: "National Conference",
    title: "Barhi National Conference - 2026",
    subtitle:
      "शिक्षा अनुसंधान और नवाचार में भारतीय ज्ञान परंपरा की भूमिका: 2047 के परिप्रेक्ष्य में",
    carouselImages: barhiPhotos.slice(0, 4),
    galleryImages: barhiPhotos.slice(4),
  },
  {
    id: "previous",
    eyebrow: "Past Events",
    title: "Previous - Conferences",
    subtitle:
      "Explore previous conference memories, academic sessions, participation, and institutional collaboration activities.",
    carouselImages: [],
    galleryImages: previousPhotos,
  },
];

const heroSlides = [
  {
    title: "Chhindwara International Conference - 2026",
    subtitle:
      "A Multidisciplinary International Conference on Indian Knowledge Systems (IKS) For Sustainable Development.",
    image: chhindwaraPhotos[0],
    href: "#chhindwara",
  },
  {
    title: "Academic Sessions & Research Gatherings",
    subtitle:
      "Conference memories, speaker sessions, delegate participation and institutional collaboration.",
    image: chhindwaraPhotos[4],
    href: "#chhindwara",
  },
  {
    title: "Barhi National Conference - 2026",
    subtitle:
      "शिक्षा अनुसंधान और नवाचार में भारतीय ज्ञान परंपरा की भूमिका: 2047 के परिप्रेक्ष्य में",
    image: barhiPhotos[0],
    href: "#barhi",
  },
  {
    title: "Previous Conference Memories",
    subtitle:
      "A collection of earlier conference photographs and academic event highlights.",
    image: previousPhotos[0],
    href: "#previous",
  },
];

function SectionCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_20px_60px_rgba(27,58,107,0.14)]">
      <div className="relative h-[260px] bg-[#F7FAFE] sm:h-[360px] lg:h-[460px]">
        {images.map((image, index) => (
          <img key={image}
            src={image}
            alt={`${title} carousel ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-contain p-3 transition duration-700 ${
              activeIndex === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`} loading="lazy" width="600" height="400" />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/60 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div className="rounded-[12px] bg-[#FFFFFF]/90 px-4 py-3 backdrop-blur">
            <p className="text-[13px] font-semibold text-[#1B3A6B]">
              Photo {activeIndex + 1} of {images.length}
            </p>
            <p className="mt-1 text-[12px] text-[#5A6A85]">{title}</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF] text-[#1B3A6B] shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition duration-200 hover:bg-[#C89B3C] hover:text-[#FFFFFF]"
              aria-label={`Previous ${title} photo`}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF] text-[#1B3A6B] shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition duration-200 hover:bg-[#C89B3C] hover:text-[#FFFFFF]"
              aria-label={`Next ${title} photo`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 px-4 py-4">
        {images.map((image, index) => (
          <button
            key={`${image}-dot`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition-all duration-200 ${
              activeIndex === index ? "w-9 bg-[#C89B3C]" : "w-3 bg-[#D6E0F0]"
            }`}
            aria-label={`Show ${title} slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function GallerySection({ section, index }) {
  return (
    <section
      id={section.id}
      className={`px-5 py-20 ${index % 2 === 0 ? "bg-[#F3F7FC]" : "bg-[#FFFFFF]"}`}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EAF1FB] px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B]">
              <FaCalendarAlt className="text-[#C89B3C]" />
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-[30px] font-semibold leading-tight text-[#1B3A6B] lg:text-[38px]">
              {section.title}
            </h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.8] text-[#1A1A2E]">
              {section.subtitle}
            </p>
          </div>

          <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_12px_30px_rgba(27,58,107,0.08)]">
            <FaImages className="text-[28px] text-[#C89B3C]" />
            <p className="mt-2 text-[14px] font-semibold text-[#1B3A6B]">
              {section.carouselImages.length + section.galleryImages.length} photos
            </p>
          </div>
        </motion.div>

        {section.carouselImages.length > 0 && (
          <SectionCarousel images={section.carouselImages} title={section.title} />
        )}

        <div className={`${section.carouselImages.length > 0 ? "mt-10" : ""} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {section.galleryImages.map((image, photoIndex) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (photoIndex % 6) * 0.05 }}
              className="group overflow-hidden rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_12px_28px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:shadow-[0_18px_38px_rgba(27,58,107,0.16)]"
            >
              <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-[#F7FAFE] p-2">
                <img src={image}
                  alt={`${section.title} ${photoIndex + 1}`}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" loading="lazy" width="600" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ConferencesPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4300);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#0F2A4F]">
        <div className="relative h-[640px] w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition duration-1000 ${
                activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            >
              <img src={slide.image}
                alt={slide.title}
                className="h-full w-full object-contain" loading="lazy" width="600" height="400" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07182F]/92 via-[#1B3A6B]/70 to-[#07182F]/35" />
            </div>
          ))}

          <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5">
            <motion.div
              key={heroSlides[activeSlide].title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF] px-5 py-2 text-[13px] font-semibold text-[#1B3A6B] shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
                <FaImages className="text-[#C89B3C]" />
                Edwin Incorporation Photo Gallery
              </div>

              <h1 className="mt-6 text-[42px] font-bold leading-tight text-[#FFFFFF] lg:text-[62px]">
                {heroSlides[activeSlide].title}
              </h1>

              <p className="mt-5 max-w-2xl text-[17px] leading-[1.8] text-[#FFFFFF]">
                {heroSlides[activeSlide].subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={heroSlides[activeSlide].href}
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  View Photos <FaArrowRight className="text-[12px]" />
                </a>

                <a
                  href="#barhi"
                  className="inline-flex items-center justify-center rounded-[8px] border border-[#FFFFFF] bg-transparent px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  Explore Gallery
                </a>
              </div>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/40 bg-[#FFFFFF]/20 text-[#FFFFFF] backdrop-blur transition duration-200 hover:bg-[#C89B3C]"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/40 bg-[#FFFFFF]/20 text-[#FFFFFF] backdrop-blur transition duration-200 hover:bg-[#C89B3C]"
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
                  activeSlide === index ? "w-9 bg-[#C89B3C]" : "w-3 bg-[#FFFFFF]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {conferenceSections.map((section, index) => (
        <GallerySection key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
