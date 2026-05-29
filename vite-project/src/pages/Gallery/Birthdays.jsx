import React from "react";
import { motion } from "framer-motion";

const birthdaySections = [
  {
    heading: "Birthday Highlights of Our Team",
    subheading: `" Birthdays are better when celebrated with a great team "`,
    photos: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    heading: "Birthday Moments at Work",
    subheading: "",
    photos: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export default function BirthdaysPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative h-[430px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1600&q=90"
          alt="Birthday Celebration"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1B3A6B]/55" />

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#FFFFFF]">
              Photo Gallery
            </p>
            <h1 className="mt-4 text-[42px] font-bold text-[#FFFFFF] lg:text-[60px]">
              Birthdays
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.7] text-[#FFFFFF]">
              Birthday highlights, team celebrations and memorable moments.
            </p>
          </div>
        </div>
      </section>

      {birthdaySections.map((section, sectionIndex) => (
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

              {section.subheading && (
                <p className="mx-auto mt-4 max-w-3xl text-[20px] font-semibold leading-[1.7] text-[#1A1A2E]">
                  {section.subheading}
                </p>
              )}
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
    </div>
  );
}