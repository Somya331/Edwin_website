import React, { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    

    window.location.replace('https://edwinincorp.zohodesk.in/portal/en/home');

    
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] px-5 py-20 font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-fade-up {
          animation: faqFadeUp .78s ease both;
        }
      `}</style>

      <section className="relative mx-auto max-w-[900px] overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-[0_24px_66px_rgba(8,34,74,.12)] backdrop-blur-xl md:p-10">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#FFD35A]/14 blur-3xl" />

        <div className="relative faq-fade-up">
          <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#0B66C3] via-[#FFB000] to-[#FFD35A]" />
          <h1 className="text-3xl font-bold mb-4 text-[#082B63]">FAQ</h1>
          <p className="text-[15px] font-semibold leading-[1.8] text-[#5B6B83]">Redirecting to FAQ support portal...</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
