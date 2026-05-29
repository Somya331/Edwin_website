import React from "react";
import { motion } from "framer-motion";

const celebrationSections = [
  {
    heading: "Republic Day - 26 January 2026",
    subheading:
      "Warm wishes on 26 January 2026. Let us celebrate the pride of our Constitution and the spirit of a united India.",
    photos: [
      "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598002238578-2e17b2f97975?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    heading: "Independence Day - 15 August 2025",
    subheading: `"Freedom in Every Heart, One Nation, One Dream"`,
    photos: [
      "https://images.unsplash.com/photo-1598952626422-fff846f8303a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1625929739682-f4c9f03a7352?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    heading: "Holi Celebration",
    subheading:
      "Our team celebrated the vibrant festival of Holi with great enthusiasm. May the colors of Holi fill everyone’s life with joy and prosperity.",
    photos: [
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615887023544-3e2416f5b8a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615887023422-b6d5c9ed7d63?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1580377968103-84cadc0525f4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615887023544-3e2416f5b8a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export default function NationalCelebrationsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative h-[430px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=90"
          alt="National Celebrations"
          className="h-full w-full object-cover"
        />

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
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-semibold text-[#1B3A6B]">
                {section.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[20px] font-semibold leading-[1.7] text-[#1A1A2E]">
                {section.subheading}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.photos.map((photo, index) => (
                <motion.div
                  key={`${photo}-${index}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] transition duration-200 hover:-translate-y-1 hover:border-[#C89B3C]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={photo}
                      alt={`${section.heading} ${index + 1}`}
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                      Title
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-[#5A6A85]">
                      Caption
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#FFFFFF] px-5 py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-[28px] font-semibold text-[#1B3A6B]">
            Keep in Touch with Us
          </h2>

          <div className="mt-8 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-8">
            <p className="text-[15px] leading-[1.8]">
              15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi
              110019
            </p>
            <p className="mt-3 text-[15px] leading-[1.8]">
              India : 011-66155019
              <br />
              Phone: +91 6262752167
              <br />
              Phone: +12792029553
            </p>
            <p className="mt-3 text-[15px] leading-[1.8]">
              Email: care@edwinepc.com
              <br />
              Website: www.academichelpstore.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}