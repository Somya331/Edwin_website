import React, { useEffect } from "react";

export default function SimpleThemedPage({ title, children }) {
  

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes editorsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .editors-fade-up { animation: editorsFadeUp .78s ease both; }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 md:py-20">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute -left-24 top-8 h-[300px] w-[300px] rounded-full bg-[#FFB000]/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/28 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1100px] editors-fade-up">
          <h1 className="max-w-[760px] text-[36px] font-black leading-[1.12] text-white md:text-[46px]">
            {title}
          </h1>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-20">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#FFD35A]/14 blur-3xl" />
        <div className="relative mx-auto max-w-[900px]">
          <div className="rounded-[26px] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(8,34,74,.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFB000] hover:shadow-[0_24px_66px_rgba(8,34,74,.14)]">
            <div className="text-[16px] font-semibold leading-[1.8] text-[#5B6B83]">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
