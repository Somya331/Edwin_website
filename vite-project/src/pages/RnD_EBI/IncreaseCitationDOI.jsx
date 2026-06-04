import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaCheckCircle,
  FaEye,
  FaPlus,
  FaSearch,
  FaFileSignature,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const IncreaseCitation = () => {
  const [search, setSearch] = useState("");

  

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
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          alt="Academic discussion"
          className="absolute inset-0 h-full w-full object-cover" loading="lazy" width="600" height="400" />
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

      {/* ZOHO FORM SECTION */}
{/* ZOHO FORM SECTION */}
<section className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-3xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-7"
    >
    

      <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
       Google_Citation
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />

      <p className="text-[15px] leading-[1.6] text-[#5A6A85] max-w-xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[650px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">
            Application Form
          </h3>
         
        </div>

        <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
          <FaFileSignature className="text-[#C89B3C] text-xl" />
        </div>
      </div>

      <div className="relative w-full bg-white p-3">
        <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
          <iframe
            title="Zoho CRM Web Form"
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=5fcdb590772a039619d35d3e6c642d2d8e9ecc7d737e417d2acf8321edd3d485a83ccf8763dcd3c38dfaee51171de0b7gidc2daf2135f60d1f35ab40e5b382efc567f8174ae2a4407ef2ce40847f2c2f0d5"
            width="100%"
            height="330"
            frameBorder="0"
            scrolling="no"
            style={{
              border: "none",
              width: "100%",
              display: "block",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* ZOHO FORM SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
           

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B]">
              Research Employment Support
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-5 mb-6 rounded-full" />

            <p className="text-[16px] leading-[1.7] text-[#5A6A85] max-w-2xl mx-auto">
              Complete the application form below. Our team will contact you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[28px] bg-white shadow-2xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-xl font-bold">
                  Research Employment Support
                </h3>
                
              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                <FaFileSignature className="text-[#C89B3C] text-2xl" />
              </div>
            </div>

            <div className="relative w-full bg-white p-3 sm:p-5">
              <div className="rounded-[20px] border border-[#D6E0F0] overflow-hidden bg-[#F8FBFF] shadow-inner">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=bd1afb2d5877bdf89dacc87e53ecd73d1fc4e8cf43d641caee6420e25d85465c0b6ca1cd272a5dca77c66f5ff32728cfgid267679a7cc517bf9ebef6725adf61817670ef2d60d532b48040517c66f3e6284"
                  width="100%"
                  height="620"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: 'none',
                    width: '100%',
                    maxWidth: '100%',
                    display: 'block',
                    backgroundColor: 'white'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
};

export default IncreaseCitation;