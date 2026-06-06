import React from "react";
import { motion } from "framer-motion";

const imageSeries = (prefix, length) =>
  Array.from(
    { length },
    (_, index) =>
      `/images/national-celebrations/${prefix}-${String(index + 1).padStart(
        2,
        "0"
      )}.jpg`
  );

const republicPhotos = imageSeries("republic", 7);
const independencePhotos = imageSeries("independence", 4);
const holiPhotos = imageSeries("holi", 13);

const celebrationSections = [
  {
    heading: "Republic Day - 26 January 2026",
    subheading:
      "Warm wishes on 26 January 2026. Let us celebrate the pride of our Constitution and the spirit of a united India.",
    photos: republicPhotos,
  },
  {
    heading: "Independence Day - 15 August 2025",
    subheading: `"Freedom in Every Heart, One Nation, One Dream"`,
    photos: independencePhotos,
  },
  {
    heading: "Holi Celebration",
    subheading:
      "Our team celebrated the vibrant festival of Holi with great enthusiasm. May the colors of Holi fill everyone's life with joy and prosperity.",
    photos: holiPhotos,
  },
];

export default function NationalCelebrationsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative h-[430px] w-full overflow-hidden bg-[#0F2A4F]">
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=90"
          alt="National Celebrations"
          className="h-full w-full object-cover" loading="lazy" width="600" height="400" />

        <div className="absolute inset-0 bg-[#1B3A6B]/55" />

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#FFFFFF]">
              Photo Gallery
            </p>
            <h1 className="mt-4 text-[42px] font-bold text-[#FFFFFF] lg:text-[60px]">
              National Celebrations
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.7] text-[#FFFFFF]">
              Celebrating national festivals, unity, culture, and joyful team
              moments.
            </p>
          </div>
        </div>
      </section>

      {celebrationSections.map((section, sectionIndex) => (
        <section
          key={`${section.heading}-${sectionIndex}`}
          className={`px-5 py-16 ${
            sectionIndex % 2 === 0 ? "bg-[#EAF1FB]" : "bg-[#FFFFFF]"
          }`}
        >
          <div className="mx-auto max-w-[1300px]">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-semibold text-[#1B3A6B]">
                {section.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[20px] font-semibold leading-[1.7] text-[#1A1A2E]">
                {section.subheading}
              </p>
            </div>

            <div className="columns-2 gap-[3px] md:columns-4 lg:columns-5">
              {section.photos.map((photo, index) => (
                <motion.div
                  key={`${photo}-${index}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 6) * 0.05,
                  }}
                  className="group mb-[3px] break-inside-avoid overflow-hidden bg-[#FFFFFF]"
                >
                  <div className="overflow-hidden">
                    <img src={photo}
                      alt={`${section.heading} ${index + 1}`}
                      className="block h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" width="600" height="400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
