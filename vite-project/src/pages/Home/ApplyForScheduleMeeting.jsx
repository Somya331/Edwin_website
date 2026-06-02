import React from 'react';

const ApplyForScheduleMeeting = () => {
  return (
    <div className="px-5 py-10">
      <div
  id="schedule-meeting"
  className="mx-auto w-full max-w-[950px] overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-white shadow-xl"
>
  <div className="bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4">
    <p className="text-[13px] font-semibold uppercase tracking-wide text-white/75">
      Meeting Application
    </p>

    <h2 className="mt-1 text-[26px] font-bold text-white">
      Schedule Meeting
    </h2>
  </div>

  <div className="bg-white p-3">
    <div className="overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-white shadow-inner">
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
