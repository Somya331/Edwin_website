import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaGlobe,
  FaHandshake,
  FaMapMarkerAlt,
  FaFileSignature,
  FaNewspaper,
  FaPhoneAlt,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaUserGraduate,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1900&q=90";

const fellowshipImage =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80";

const academicNewsImage =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80";

const researchImage =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80";

const applicationCards = [
  {
    title: "Apply for Fellowship",
    subtitle: "Fellowship Recognition",
    text: "Apply for fellowship support through Edwin Science Society and strengthen your academic recognition.",
    icon: FaAward,
    link: "#fellowship-form",
  },
  {
    title: "Book Slot for Academic News",
    subtitle: "Academic News Visibility",
    text: "Book a slot for academic news, fellowship announcements, institutional updates, and research achievements.",
    icon: FaNewspaper,
    link: "#academic-news-form",
  },
];

const benefits = [
  {
    title: "Prestige & Recognition",
    text: "Fellowships offered by journals and academic organizations serve as distinguished accolades within the academic realm.",
    icon: FaCertificate,
  },
  {
    title: "Career Advancement",
    text: "Membership in prestigious societies can open doors to career advancement opportunities and professional growth.",
    icon: FaBriefcase,
  },
  {
    title: "Networking Connections",
    text: "Fellowship opportunities help scholars build valuable connections with peers, experts, and academic communities.",
    icon: FaUsers,
  },
  {
    title: "Academic Visibility",
    text: "Fellows often gain enhanced visibility and credibility within the academic and research community.",
    icon: FaGlobe,
  },
  {
    title: "Publication Platforms",
    text: "Fellowship support may provide access to exclusive platforms for publication and scholarly communication.",
    icon: FaBookOpen,
  },
  {
    title: "Research Collaboration",
    text: "Fellowships can support research collaborations and meaningful contribution to knowledge advancement.",
    icon: FaHandshake,
  },
];

const fellowshipContacts = [
  {
    name: "Dr. Tekchand Chetanla Gaupale",
    designation:
      "Asst. Professor, Department of Zoology, Vivekanand College, Kolhapur, Maharashtra, India",
    fellowship: "Early Career Scientist Fellowship",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Zubaida Khatoon",
    designation:
      "School of Life Sciences Jawaharlal Nehru University, New Delhi, India",
    fellowship:
      "In recognition of significant contribution in the field of Affiliation Royal Society of Biology",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Tikam Chanda Dakal",
    designation: "Assistant Professor",
    fellowship: "Fellowship for Genomics and Genetics Fellowship",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Abhinandan H Patil",
    designation: "Founder",
    fellowship: "Science Excellence Fellowship",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Shikha Sharma",
    designation: "Research Scholar, Life Sciences",
    fellowship: "Academic Research Fellowship",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Amit Kumar Verma",
    designation: "Assistant Professor, Department of Biotechnology",
    fellowship: "Young Scientist Fellowship",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
  },
];

const fellowshipTypes = [
  "Fellowship Application",
  "Academic Society Membership",
  "Research Recognition Support",
  "Journal Fellowship Support",
  "Academic Achievement Highlight",
  "Research Collaboration Support",
];

const newsSlotTypes = [
  "Academic News Slot",
  "Fellowship Announcement",
  "Research Achievement News",
  "Institutional Activity News",
  "Conference / Seminar News",
  "Publication Achievement News",
];

export default function FellowshipSupportPage() {
  const [fellowshipStatus, setFellowshipStatus] = useState("");
  const [newsStatus, setNewsStatus] = useState("");
  const [contactSearch, setContactSearch] = useState("");

  

  const filteredContacts = useMemo(() => {
    const query = contactSearch.toLowerCase().trim();

    return fellowshipContacts.filter((item) =>
      `${item.name} ${item.designation} ${item.fellowship}`
        .toLowerCase()
        .includes(query)
    );
  }, [contactSearch]);

  const handleFellowshipSubmit = (event) => {
    event.preventDefault();
    setFellowshipStatus("Your fellowship application has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleNewsSubmit = (event) => {
    event.preventDefault();
    setNewsStatus("Your academic news slot request has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative overflow-hidden bg-[#FFFFFF]">
        <div className="grid min-h-[720px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex items-center overflow-hidden bg-[#1B3A6B] px-5 py-20">
            <img src={heroImage}
              alt="Edwin Apply for Fellowship"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-25" loading="lazy" width="600" height="400" />
            <div className="absolute inset-0 bg-[#1B3A6B]/80" />

            <div className="relative mx-auto w-full max-w-[680px] lg:mr-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
                  <FaAward className="text-[#C89B3C]" />
                  Edwin Apply for Fellowship
                </div>

                <h1 className="max-w-3xl text-[44px] font-bold leading-tight text-[#FFFFFF]">
                  Fellowship Recognition for Academic Excellence
                </h1>

                <p className="mt-5 max-w-3xl text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  Fellowships offered by journals, often backed by organizations such as
                  Edwin Science Society, hold immense prestige within the academic realm.
                  These positions serve as distinguished accolades, recognizing the
                  exceptional contributions and expertise of scholars in specific fields.
                </p>

                <p className="mt-4 max-w-3xl text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  Being awarded a fellowship not only acknowledges an academician's
                  research accomplishments but also signifies a high level of esteem and
                  recognition within the academic community.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#fellowship-form"
                    className="rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                  >
                    Apply for Fellowship
                  </a>

                  <a
                    href="#fellowship-table"
                    className="rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                  >
                    View Fellowship Members
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative flex items-center bg-[#EAF1FB] px-5 py-20">
            <div className="mx-auto w-full max-w-[620px] lg:ml-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                className="grid gap-5"
              >
                <div className="overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_20px_55px_rgba(27,58,107,0.16)]">
                  <img src={fellowshipImage}
                    alt="Academic fellowship recognition"
                    className="h-[360px] w-full object-cover" loading="lazy" width="600" height="400" />
                  <div className="p-6">
                    <h3 className="text-[22px] font-semibold text-[#1B3A6B]">
                      Edwin Science Society
                    </h3>
                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      Supporting scholars through fellowship opportunities, academic
                      visibility, recognition, and professional growth.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <p className="text-[28px] font-bold text-[#1B3A6B]">115</p>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                      Fellowship Records
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <p className="text-[28px] font-bold text-[#1B3A6B]">ESS</p>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                      Science Society
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <p className="text-[28px] font-bold text-[#1B3A6B]">News</p>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                      Academic Slots
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-[#FFFFFF] px-5 py-12">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
          {applicationCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.link}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.05 }}
                className="group rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:-translate-y-1 hover:border-[#C89B3C]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                    <Icon className="text-2xl" />
                  </div>

                  <div>
                    <p className="text-[13px] font-normal text-[#5A6A85]">
                      {card.subtitle}
                    </p>
                    <h3 className="mt-2 text-[22px] font-semibold text-[#1B3A6B]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {card.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out group-hover:text-[#C89B3C]">
                      Open Form <FaArrowRight className="text-[13px]" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About Fellowship
              </p>

              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Academic Prestige and Recognition
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Membership in such prestigious societies like Edwin Science Society can
                greatly benefit scholars in various ways. It opens doors to career
                advancement opportunities, facilitates valuable networking connections
                with peers and experts in the field, and enhances visibility and
                credibility within the academic community.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Additionally, fellows often gain access to exclusive platforms for
                publication, research collaborations, and potentially financial support
                for their scholarly endeavors.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                The support provided by Edwin Science Society plays a pivotal role in
                nurturing academic growth and recognition. By offering fellowship
                opportunities, Edwin Science Society empowers scholars to further their
                research agendas, disseminate their findings, and contribute meaningfully
                to the advancement of knowledge in their respective fields.
              </p>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_20px_55px_rgba(27,58,107,0.12)]">
              <img src={researchImage}
                alt="Academic research fellowship support"
                className="h-[420px] w-full object-cover" loading="lazy" width="600" height="400" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fellowship-table" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                All Contacts
              </p>
              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Fellowship Awarded Members
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Fellowship awarded contacts and academic recognition records.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={contactSearch}
                onChange={(event) => setContactSearch(event.target.value)}
                placeholder="Search contacts..."
                className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[360px]"
              />
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="w-[150px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Picture
                    </th>
                    <th className="w-[260px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Name
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Designation With Institute
                    </th>
                    <th className="w-[330px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Fellowship Awarded
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.map((item, index) => (
                    <tr
                      key={`${item.name}-${index}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4">
                        <img src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-[10px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold leading-[1.7] text-[#1A1A2E]">
                        {item.name}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                        {item.designation}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold leading-[1.7] text-[#1B3A6B]">
                        {item.fellowship}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {filteredContacts.length} of 115 fellowship records
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fellowship-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Applications
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Apply for Fellowship
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Fill this form to apply for fellowship support and academic recognition
                through Edwin Science Society.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Submit your academic profile and fellowship requirement.",
                  "Upload your CV or supporting academic documents.",
                  "Receive fellowship application support and communication.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                    <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

           {/* ZOHO FORM SECTION */}
<section className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-5xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-7"
    >
     
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B]">
        Journals - Fellowship
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-4 mb-4 rounded-full" />

      
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold">Application Form</h3>
          
        </div>

        <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
          <FaFileSignature className="text-[#C89B3C] text-xl" />
        </div>
      </div>

      <div className="relative w-full bg-white p-3">
        <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
          <iframe
            title="Zoho CRM Web Form"
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=d33efea6fa48ab84f235899ccf35b8d4db0652ae9efed3e0a655b93dc19c2ae45e4f548c580c8b37c182201b0a5b6990gid56c541f624d6b283ed61c47888fa51826120a939226ca9d4a624a2b934cce8ca"
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="yes"
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

{/* fellowship */}
                  
               
           
          </div>
        </div>
      </section>

    
    </div>
  );
}