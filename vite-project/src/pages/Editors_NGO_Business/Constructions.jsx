import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaHome,
  FaCity,
  FaDraftingCompass,
  FaHardHat,
  FaTools,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
  FaFileSignature,
} from "react-icons/fa";

const heroImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
];

const services = [
  {
    title: "Residential Construction",
    text: "Modern home construction solutions with planning, elevation, design, and civil work support.",
    icon: FaHome,
  },
  {
    title: "Commercial Construction",
    text: "Professional construction support for offices, shops, commercial buildings, and business spaces.",
    icon: FaCity,
  },
  {
    title: "Modern Design & Elevation",
    text: "Attractive front elevation, modern design planning, and space-focused construction guidance.",
    icon: FaDraftingCompass,
  },
  {
    title: "Certified Civil Engineers",
    text: "Construction work powered by Tata Group’s certified civil engineers for reliable execution.",
    icon: FaHardHat,
  },
];

const galleryImages = [
  {
    title: "Modern Home Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Residential Elevation",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Commercial Space",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Construction Planning",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Interior Finishing",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Building Project",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ConstructionsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4200);

    return () => {
      clearInterval(timer);
      
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <section className="relative h-[560px] overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B]">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ${
              activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <img src={image}
              alt="Edwin Construction"
              className="h-full w-full object-cover" loading="lazy" width="600" height="400" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031329]/95 via-[#073B86]/80 to-[#051B3B]/20" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5">
          <div className="max-w-3xl rounded-[26px] border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.25)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FFD35A]">
              <FaBuilding className="text-[#FFD35A]" />
              Edwin's Constructions
            </span>

            <h1 className="mt-6 text-[40px] font-extrabold leading-tight text-[#FFFFFF] md:text-[58px]">
              Edwin Construction Services
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] font-medium leading-[1.8] text-[#FFFFFF]/90">
              Build your dream home or commercial space with Edwin Construction,
              powered by Tata Group’s certified civil engineers, offering
              world-class construction solutions in Jabalpur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-7 py-3 text-[15px] font-black text-[#FFFFFF] shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
              >
                Apply Now <FaArrowRight />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/40 bg-white/10 px-7 py-3 text-[15px] font-bold text-[#FFFFFF] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
              >
                View Services
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

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-20">
        <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-[#EAF1FB] blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-80 w-80 rounded-full bg-[#C89B3C]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[26px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_18px_50px_rgba(27,58,107,0.12)]">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=90"
              alt="Construction work"
              className="h-[420px] w-full rounded-[20px] object-cover" loading="lazy" width="600" height="400" />
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Constructions Work
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold leading-tight text-[#1B3A6B]">
              Build Your Dream Home or Commercial Space
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Edwin Construction, powered by Tata Group’s certified civil
              engineers, offers world-class construction solutions in Jabalpur,
              including modern design and elevation for both residential and
              commercial spaces.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Modern Design",
                "Residential Spaces",
                "Commercial Spaces",
                "Jabalpur Construction Support",
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

            <a
              href="#apply"
              className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-[#1B3A6B] px-7 py-3 text-[15px] font-bold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#C89B3C]"
            >
              Apply Now <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Our Construction Services
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
              Complete Building Solutions
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex h-full flex-col rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF]/90 p-6 shadow-[0_12px_32px_rgba(27,58,107,0.08)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_22px_50px_rgba(27,58,107,0.16)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:rotate-6 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                    <Icon className="text-[24px]" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-extrabold leading-snug text-[#1B3A6B]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#1A1A2E]">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
                Project Gallery
              </p>
              <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
                Construction Design Gallery
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                Add your construction project images here. All boxes follow a
                fixed image size, so many images can be added without breaking
                layout.
              </p>
            </div>

            <div className="rounded-[16px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
              <FaTools className="text-[30px] text-[#C89B3C]" />
              <p className="mt-2 text-[14px] font-bold text-[#1B3A6B]">
                Same size image cards
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_10px_28px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
              >
                <div className="overflow-hidden">
                  <img src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" width="600" height="400" />
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-extrabold text-[#1B3A6B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#5A6A85]">
                    Title / Caption
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Apply Now
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold text-[#1B3A6B]">
              Construction Enquiry Form
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
              Submit your construction requirement for residential or commercial
              space. Our team will connect with you for further discussion.
            </p>

            <div className="mt-7 rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_12px_32px_rgba(27,58,107,0.08)]">
              <h3 className="text-[20px] font-extrabold text-[#1B3A6B]">
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

          <div className="overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-white shadow-[0_18px_50px_rgba(27,58,107,0.12)]">
            <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <FaFileSignature />
                Construction Application Form
              </h3>
            </div>

            <div className="flex w-full justify-center bg-white">
              <iframe
                title="Construction Zoho CRM Web Form"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=299679cb8b0cf3b07f0da1dc5767c03fae451abff702d7b43005614dd34b675694962fcf20f45f9c52a33a12d69c5302gide77a5beb3032c8c33f6600f2678b6040d9dc9d6fa4dcee69839610803a82d89f"
                width="610"
                height="620"
                frameBorder="0"
                scrolling="yes"
                style={{
                  border: "none",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
