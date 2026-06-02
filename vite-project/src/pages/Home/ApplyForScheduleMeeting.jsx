import React from 'react';

const ApplyForScheduleMeeting = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] px-5 py-14 font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes shineMove {
          0% { transform: translateX(-180%) rotate(18deg); opacity: 0; }
          35% { opacity: .9; }
          100% { transform: translateX(260%) rotate(18deg); opacity: 0; }
        }

        .glass-card {
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          top: -70%;
          left: -80%;
          width: 28%;
          height: 260%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), rgba(255,210,80,.38), rgba(255,255,255,.18), transparent);
          filter: blur(16px);
          opacity: 0;
          pointer-events: none;
        }

        .glass-card:hover::before {
          animation: shineMove 1.45s ease;
        }
      `}</style>

      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-[#FFB000]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#073B86]/18 blur-3xl" />

      <div
  id="schedule-meeting"
  className="glass-card relative z-10 mx-auto w-full max-w-[950px] overflow-hidden rounded-[30px] border border-white/70 bg-white/85 shadow-[0_30px_90px_rgba(7,28,52,.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FFD35A]/80"
>
  <div className="bg-gradient-to-r from-[#031329] via-[#073B86] to-[#051B3B] px-6 py-4">
    <p className="text-[13px] font-black uppercase tracking-wide text-[#FFD35A]">
      Meeting Application
    </p>

    <h2 className="mt-1 text-[26px] font-black text-white">
      Schedule Meeting
    </h2>
  </div>

  <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-3">
    <div className="overflow-hidden rounded-[20px] border border-[#D6E0F0] bg-white shadow-inner">
  <iframe
    title="Schedule Meeting"
    width="100%"
    height="500"
    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=09c1ba8807a47da8593d7e5cef940856613db46cd890907d627fe190e9c64175f0badb869d7f41d1481a730090ddb372gidf6805627c413a1d9346818821e3c81fe75b92f9fbaf81e434d986bb1b5f07c2d"
    className="block w-full border-0"
    scrolling="auto"
  />
    </div>
  </div>
</div>
     
    </div>
  );
};

export default ApplyForScheduleMeeting;
