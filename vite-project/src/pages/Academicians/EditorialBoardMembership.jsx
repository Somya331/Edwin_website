import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaRegLightbulb,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaUserEdit,
  FaFileSignature,
  FaUsers,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";

const youtubeVideoUrl = "https://www.youtube.com/embed/nVScV4gXz0o";

const features = [
  {
    title: "Quality Direction",
    text: "Editorial board members play a key role in maintaining the quality, direction, and academic rigor of journals.",
    icon: FaAward,
  },
  {
    title: "Research Integrity",
    text: "Members safeguard research integrity by reviewing submissions and upholding ethical publishing practices.",
    icon: FaShieldAlt,
  },
  {
    title: "Scholarly Standards",
    text: "Board members help enforce scholarly standards and contribute to meaningful academic development.",
    icon: FaBookOpen,
  },
  {
    title: "Content Development",
    text: "Members influence content development and may suggest special themed issues for journals.",
    icon: FaRegLightbulb,
  },
];

const responsibilities = [
  "Reviewing submissions",
  "Providing thoughtful feedback",
  "Suggesting special themed issues",
  "Upholding ethical publishing practices",
  "Supporting academic quality and journal direction",
  "Contributing meaningfully to academic fields",
];

const pathway = [
  {
    title: "Apply Online",
    text: "Submit your editorial board membership application through the online application process.",
    icon: FaUserEdit,
  },
  {
    title: "Academic Review",
    text: "Your academic profile, expertise, and suitability for journal-related responsibilities are reviewed.",
    icon: FaGraduationCap,
  },
  {
    title: "Member Participation",
    text: "Approved members may participate in editorial and review-related academic activities.",
    icon: FaHandshake,
  },
];

const boardMembers = [
  {
    name: "Dr. Smritikana Ghosh",
    designation: "Assistant Professor",
    university:
      "Dr. Shyama Prasad Mukherjee University Ranchi Jharkhand, India.",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Suyash Sawale",
    designation: "Assistant Professor",
    university:
      "Kirti M. Doongursee College of Arts, Science & Commerce Dadar, Maharashtra, India.",
    picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Sunil Kumar Batla",
    designation: "Editorial Board Member",
    university: "Academic and Research Institution, India.",
    picture:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Subhel Kumar",
    designation: "Editorial Board Member",
    university: "Academic and Research Institution, India.",
    picture:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Sunil Sarkar",
    designation: "Editorial Board Member",
    university: "Academic and Research Institution, India.",
    picture:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
];

export default function EditorialBoardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formStatus, setFormStatus] = useState("");

  

  const filteredMembers = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return boardMembers.filter((member) =>
      `${member.name} ${member.designation} ${member.university}`
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your editorial board membership application has been prepared.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative overflow-hidden bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#EAF1FB] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
              <FaUsers className="text-[#C89B3C]" />
              Editorial Board Membership
            </div>

            <h1 className="text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Apply for Editorial Board Membership at Edwin Today
            </h1>

            <p className="mt-5 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Being part of an editorial board means joining a distinguished community
              of experts who play a key role in maintaining the quality, direction, and
              academic rigor of journals.
            </p>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Board members influence content development, enforce scholarly standards,
              and safeguard research integrity by reviewing submissions, providing
              thoughtful feedback, suggesting special themed issues, and upholding
              ethical publishing practices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#apply-online"
                className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
              >
                Apply Online
              </a>
              <a
                href="#editorial-board"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
              >
                View Member Details
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <img src={heroImage}
                alt="Editorial board academic review"
                className="h-[460px] w-full object-cover" loading="lazy" width="600" height="400" />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[28px] font-semibold text-[#1B3A6B]">01</p>
                  <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                    Apply Online
                  </p>
                </div>
                <div>
                  <p className="text-[28px] font-semibold text-[#1B3A6B]">02</p>
                  <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                    Academic Review
                  </p>
                </div>
                <div>
                  <p className="text-[28px] font-semibold text-[#1B3A6B]">03</p>
                  <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                    Member Role
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              About Us
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              Why Join Our Editorial Board?
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              These individuals are respected leaders in their disciplines, driving
              progress and contributing meaningfully to their academic fields. At
              Edwin, we encourage active academic participation through our paid review
              program, which strengthens collaboration and recognizes scholars within
              the research community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Training Video
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              Apply Online - Member
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Watch the video guide to understand how members can search their name in
              the editorial board and review application-related details.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-video bg-[#1B3A6B]">
              <iframe
                src={youtubeVideoUrl}
                title="How To Search Your Name in Board"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-[8px] bg-[#FFFFFF] px-4 py-2 text-[13px] font-normal text-[#1B3A6B] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <FaPlay className="text-[#C89B3C]" />
                How To Search Your Name in Board
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="relative py-16 bg-[#F5F8FC] overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,58,107,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,180,0,0.20),transparent_35%)]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-[#D6E0F0] text-[#1B3A6B] text-sm font-bold shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#F4B400]" />
        Editorial Board Members
      </span>

      <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-[#1B3A6B] tracking-tight">
        Registered Editorial Board Contacts
      </h2>

      <p className="mt-4 text-[#5A6A85] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        Access live editorial board member records, applications, and contact information through Zoho Creator.
      </p>
    </div>

    <div className="rounded-[34px] p-[1px] bg-gradient-to-br from-[#1B3A6B] via-[#D6E0F0] to-[#F4B400] shadow-[0_30px_80px_rgba(27,58,107,0.18)]">
      <div className="bg-white rounded-[33px] overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-6 md:px-8 py-5">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.22)_25%,rgba(255,255,255,0.22)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.22)_75%)] bg-[length:22px_22px]" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white text-xl md:text-2xl font-extrabold">
                All Contacts Report
              </h3>
              <p className="text-white/75 text-sm mt-1">
                Live Zoho Creator embedded report
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold">
                Live Data
              </span>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F4B400]" />
                <span className="w-3 h-3 rounded-full bg-white/60" />
                <span className="w-3 h-3 rounded-full bg-white/35" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4 md:p-6">
          <div className="rounded-[26px] bg-white border border-[#D6E0F0] shadow-inner overflow-hidden">
            <iframe
              title="Zoho Editorial Board Report"
              className="w-full h-[680px] border-0"
              src="https://creatorapp.zohopublic.in/edwininc/editorial-board/report-embed/All_Contacts/OKBtwFgmpdN0qJPHh33DfX0eBwtpDwOjNMZY8AxMtqbUCEvU1rdzDpmgx3pBYOVkPttnPf7kMPG1PtuFdVhzGRw6FwjHyUvJEUYK"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Academic Responsibilities
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              Role of Editorial Board Members
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Editorial board members help journals maintain transparent, ethical, and
              academically valuable publication standards.
            </p>

            <div className="mt-8 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaStar />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                    Paid Review Program
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Edwin encourages active academic participation through its paid
                    review program, supporting collaboration and recognition within the
                    research community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {responsibilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.03 }}
                className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#EAF1FB] text-[#1B3A6B]">
                  <FaCheckCircle />
                </div>
                <h3 className="text-[18px] font-semibold leading-snug text-[#1A1A2E]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* ZOHO FORM SECTION */}
<section id="editorial-board-form" className="relative py-10 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
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
        Membership for Journals
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
      className="rounded-[22px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[720px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-bold"> Membership for Journals</h3>
        
        </div>

        <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
          <FaFileSignature className="text-[#C89B3C] text-xl" />
        </div>
      </div>

      <div className="relative w-full bg-white p-3">
        <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
          <iframe
            title="Zoho CRM Web Form"
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=aed33fa3279a0f4c50ee2452c0f6cee27a838ac8e1fd5549229b0bfbfd63f44ed060f4d41756c6bf01ff81d6bcabfb82gid3ea2b8068e4dc1fcca4e63372241ecb336a467f770b4c09628e38ab105fff25f"
            width="100%"
            height="460"
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

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaFacebookF />
                </div>
                <div>
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Stay Connected with Us!
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                    Follow us on Facebook
                  </h2>
                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Follow us on Facebook for the latest Editorial Board Member,
                    updates & exclusive content.
                  </p>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                  >
                    Follow us on Facebook
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Support
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Donate Now
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Support academic activities and institutional initiatives through the
                online donation option.
              </p>
              <a
                href="https://rzp.io"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
              >
                Click here to Donate Now
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
