import React from 'react';

const ApplyForScheduleMeeting = () => {
  return (
    <div className="p-8">
      <div
  id="schedule-meeting"
  className="rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_14px_38px_rgba(27,58,107,0.10)] lg:p-8"
>
  <div className="mb-6">
    <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
      Meeting Application
    </p>

    <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
      Schedule Meeting
    </h2>
  </div>

  <iframe
    title="Schedule Meeting"
    width="100%"
    height="660"
    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=09c1ba8807a47da8593d7e5cef940856613db46cd890907d627fe190e9c64175f0badb869d7f41d1481a730090ddb372gidf6805627c413a1d9346818821e3c81fe75b92f9fbaf81e434d986bb1b5f07c2d"
    className="w-full border-0"
    scrolling="auto"
  />
</div>
     
    </div>
  );
};

export default ApplyForScheduleMeeting;
