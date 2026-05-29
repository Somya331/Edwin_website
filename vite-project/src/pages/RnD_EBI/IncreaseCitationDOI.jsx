import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaCheckCircle,
  FaEye,
  FaPlus,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";

const IncreaseCitation = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const recruitmentRows = useMemo(
    () => [
      {
        university: "National Sanskrit University, Tirupati (A Central University established by an Act of Parliament)",
        post: "Assistant Professor in Visistadvaita Vedanta",
        lastDate: "30-Nov-2025",
        details: "https://www.nsktu.ac.in/recruitment",
      },
      {
        university: "Shivaji College",
        post: "Professor, Assistant Professor Associate Professor",
        lastDate: "26-Apr-2025",
        details: "chrome-extension://recruitment-details",
      },
      {
        university: "Dibrugarh University Assam",
        post: "Project Assistant Research Project",
        lastDate: "22-Apr-2025",
        details: "https://dibru.ac.in/recruitment",
      },
      {
        university: "Dibrugarh University Assam",
        post: "Professor, Assistant Professor Associate Professor",
        lastDate: "20-Apr-2025",
        details: "https://dibru.ac.in/faculty-recruitment",
      },
      {
        university: "Chhatrapati Shahu Ji Maharaj University Kanpur",
        post: "Project Senior Research Fellow",
        lastDate: "20-Apr-2025",
        details: "chrome-extension://content/uploads/recruitment",
      },
      {
        university: "Tripura University",
        post: "Professor, Assistant Professor Associate Professor",
        lastDate: "18-Apr-2025",
        details: "https://www.tripurauniv.ac.in",
      },
      {
        university: "CHHATRAPATI SHAHU JI MAHARAJ UNIVERSITY, KANPUR",
        post: "Professor, Assistant Professor Associate Professor",
        lastDate: "27-Apr-2025",
        details: "https://csjmu.ac.in/recruitment",
      },
    ],
    []
  );

  const filteredRows = recruitmentRows.filter(
    (row) =>
      row.university.toLowerCase().includes(search.toLowerCase()) ||
      row.post.toLowerCase().includes(search.toLowerCase()) ||
      row.lastDate.toLowerCase().includes(search.toLowerCase())
  );

  const aboutPoints = [
    "Citations reflect the impact and reach of a researcher’s work within the academic community.",
    "Google Scholar citations and similar citation metrics help boost an academic profile.",
    "Citation metrics are frequently used to assess scholarly impact and productivity.",
    "Institutions and hiring committees may review citation metrics during academic evaluation.",
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans'] text-[#1A1A2E]">
      <section className="relative flex min-h-[560px] items-center justify-center bg-[#FFFFFF]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          alt="Academic discussion"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="relative mx-auto max-w-[1200px] px-5 text-center">
          <p className="mx-auto mb-5 inline-flex rounded-[8px] border border-[#C89B3C] bg-[#FFFFFF] px-5 py-2 text-[13px] font-medium text-[#1B3A6B]">
            Edwin Support for All
          </p>
          <h1 className="mb-4 text-[40px] font-bold leading-tight text-[#FFFFFF]">
            Increase
          </h1>
          <h1 className="mb-6 text-[40px] font-bold leading-tight text-[#FFFFFF]">
            Google Citation & DOI Allocation
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#FFFFFF]">
            Academic profile support for researchers, faculty members, scholars,
            and academicians seeking citation visibility, DOI guidance, and
            academic job assistance.
          </p>
          <a
            href="#apply-now"
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#C89B3C] hover:text-[#FFFFFF]"
          >
            Apply Now <FaArrowRight />
          </a>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-4">
          {aboutPoints.map((point) => (
            <div
              key={point}
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:border-[#C89B3C]"
            >
              <FaCheckCircle className="mb-4 text-[22px] text-[#1B3A6B]" />
              <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mb-8 text-[28px] font-semibold text-[#1B3A6B]">
            About
          </h2>
          <div className="mx-auto max-w-6xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="space-y-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
              <p>
                Citations are crucial in academic jobs for several reasons.
                Firstly, they reflect the impact and reach of a researcher&apos;s
                work within the academic community. A higher number of citations
                often indicates that the research is influential and widely
                recognized in the field.
              </p>
              <p>
                Google Scholar citations and other similar citation metrics help
                boost an academic profile by providing a quantifiable measure of
                a researcher&apos;s contributions. These metrics are frequently
                used to assess a scholar&apos;s impact and productivity, which
                are key factors in academic hiring and promotion decisions.
              </p>
              <p>
                Institutions and hiring committees often look at these citation
                metrics as part of the evaluation process to gauge a
                candidate&apos;s expertise, the relevance of their work, and
                their potential to contribute significantly to the field.
                Therefore, increasing citations can be beneficial for career
                advancement in academia.
              </p>
              <p>
                &quot;Edwin Support for all&quot; appears to be offering a service
                to help increase the citation count for researchers. They require
                CVs and research papers to assist in this process, implying they
                might help in promoting the research work to get more citations.
                However, it&apos;s important to approach such services with
                caution and ensure they align with ethical academic practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-[28px] font-semibold text-[#1B3A6B]">
                All Recruitment Details
              </h2>
              <p className="mt-2 text-[13px] text-[#5A6A85]">
                Showing 273 of 273
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-3">
                <FaSearch className="text-[#1B3A6B]" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="w-48 rounded-[8px] bg-[#FFFFFF] px-3 py-[10px] text-[15px] outline-none placeholder:text-[#A0AEC0]"
                />
              </div>
              <button className="rounded-[8px] bg-[#1B3A6B] p-3 text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]">
                <FaPlus />
              </button>
              <button className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] p-3 text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]">
                <FaBars />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <table className="w-full min-w-[1000px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#D6E0F0] bg-[#FFFFFF]">
                  <th className="w-12 px-4 py-4 text-[13px] font-semibold text-[#1A1A2E]">
                    <FaEye />
                  </th>
                  <th className="w-12 px-4 py-4">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-4 text-[13px] font-semibold text-[#1A1A2E]">
                    Name of University
                  </th>
                  <th className="px-4 py-4 text-[13px] font-semibold text-[#1A1A2E]">
                    Required Post
                  </th>
                  <th className="px-4 py-4 text-[13px] font-semibold text-[#1A1A2E]">
                    Last Date to Apply
                  </th>
                  <th className="px-4 py-4 text-[13px] font-semibold text-[#1A1A2E]">
                    Detailed Advertisement
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr
                    key={`${row.university}-${index}`}
                    className="border-b border-[#D6E0F0] transition duration-200 hover:bg-[#EAF1FB]"
                  >
                    <td className="px-4 py-4 text-[15px] text-[#1A1A2E]" />
                    <td className="px-4 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                      {row.university}
                    </td>
                    <td className="px-4 py-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                      {row.post}
                    </td>
                    <td className="px-4 py-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                      {row.lastDate}
                    </td>
                    <td className="px-4 py-4 text-[15px] leading-[1.7] text-[#1B3A6B]">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="apply-now" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mb-8 text-[28px] font-semibold text-[#1B3A6B]">
            Apply Now
          </h2>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-[15px]">
            <a href="#google-citation" className="text-[#1B3A6B] hover:text-[#C89B3C]">
              Click Here for Citation and DOI
            </a>
            <span className="text-[#1A1A2E]">III.</span>
            <a href="#academic-jobs" className="text-[#1B3A6B] hover:text-[#C89B3C]">
              Click here for Academic Jobs
            </a>
          </div>

          <form
            id="google-citation"
            className="mx-auto max-w-4xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <h2 className="mb-8 text-center text-[28px] font-semibold text-[#1B3A6B]">
              Apply for Google Citation
            </h2>
            <h3 className="mb-6 text-[18px] font-semibold text-[#1A1A2E]">
              Google_Citation
            </h3>

            {["First Name", "Last Name *", "Designation with Inst.", "Email", "Mobile"].map(
              (label) => (
                <div
                  key={label}
                  className="mb-5 grid gap-4 md:grid-cols-[260px_1fr] md:items-center"
                >
                  <label className="text-[13px] text-[#5A6A85]">{label}</label>
                  <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]" />
                </div>
              )
            )}

            <div className="mt-6 flex gap-4 md:ml-[260px]">
              <button
                type="button"
                className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Submit
              </button>
              <button
                type="reset"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="academic-jobs" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mb-8 text-[28px] font-semibold text-[#1B3A6B]">
            Academic Membership for Job
          </h2>
          <h2 className="mb-10 text-[28px] font-semibold text-[#1B3A6B]">
            Apply Here
          </h2>

          <form className="mx-auto max-w-4xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <h3 className="mb-6 text-[18px] font-semibold text-[#1A1A2E]">
              Research_Employment_Support
            </h3>

            <div className="mb-5 grid gap-4 md:grid-cols-[260px_1fr] md:items-center">
              <label className="text-[13px] text-[#5A6A85]">
                Select Your Location
              </label>
              <div>
                <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                  <option>-None-</option>
                  <option>India</option>
                  <option>International</option>
                </select>
                <p className="mt-2 text-[13px] text-[#5A6A85]">
                  Select your Country
                </p>
              </div>
            </div>

            <div className="mb-5 grid gap-4 md:grid-cols-[260px_1fr] md:items-center">
              <label className="text-[13px] text-[#5A6A85]">
                Register as Research
              </label>
              <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none focus:border-[#1B3A6B]">
                <option>-None-</option>
                <option>Research Scholar</option>
                <option>Faculty Member</option>
                <option>Professor</option>
                <option>Assistant Professor</option>
              </select>
            </div>

            {[
              "Preferred (Govt /Private",
              "Subject",
              "First Name *",
              "Last Name *",
              "Email",
              "Mobile",
              "Highest Qualification",
              "Current Designation",
            ].map((label) => (
              <div
                key={label}
                className="mb-5 grid gap-4 md:grid-cols-[260px_1fr] md:items-center"
              >
                <label className="text-[13px] text-[#5A6A85]">{label}</label>
                <input className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]" />
              </div>
            ))}

            <div className="mt-6 flex gap-4 md:ml-[260px]">
              <button
                type="button"
                className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Submit
              </button>
              <button
                type="reset"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/916262752167"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[24px] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
};

export default IncreaseCitation;