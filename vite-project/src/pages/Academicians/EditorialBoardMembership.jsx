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
  FaUsers,
  FaWhatsapp,
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

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

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
              <img
                src={heroImage}
                alt="Editorial board academic review"
                className="h-[460px] w-full object-cover"
              />
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

      <section id="editorial-board" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Our Editorial Board
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Member Details
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Search editorial board members by name, designation, or university /
                college name.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search member..."
                className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[340px]"
              />
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Picture
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Name
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Designation
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      University/College Name
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredMembers.map((member, index) => (
                    <tr
                      key={member.name}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4">
                        <img
                          src={member.picture}
                          alt={member.name}
                          className="h-20 w-20 rounded-[8px] border border-[#D6E0F0] object-cover"
                        />
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {member.name}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {member.designation}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                        {member.university}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {filteredMembers.length} of {boardMembers.length} editorial
                board members
              </p>
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

      <section id="apply-online" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Membership for Journals
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              Apply Online
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Fill the form below for editorial board membership application.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-start">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Select Your Location <span className="text-[#C0392B]">*</span>
                </label>
                <div>
                  <select
                    required
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]"
                  >
                    <option value="">-None-</option>
                    <option>India</option>
                    <option>Other Country</option>
                    <option>Mobile Number</option>
                  </select>
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    You need to select the country name, your location, or your mobile
                    number from the dropdown menu.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Last Name <span className="text-[#C0392B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-start">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Mobile
                </label>
                <div>
                  <input
                    type="tel"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    Do not use 0 (zero) as the initial digit
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-start">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Designation
                </label>
                <div>
                  <input
                    type="text"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    With Complete Institute Name
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-start">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Upload CV <span className="text-[#C0392B]">*</span>
                </label>
                <div>
                  <input
                    type="file"
                    required
                    multiple
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    Please Upload CV or Scan your Document
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-center">
                <label className="text-[13px] font-normal text-[#5A6A85]">
                  Terms & Condition <span className="text-[#C0392B]">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-[#D6E0F0] accent-[#1B3A6B]"
                  />
                  <a
                    href="#terms"
                    className="text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:text-[#C89B3C]"
                  >
                    Read
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center">
                <button
                  type="submit"
                  className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                >
                  Reset
                </button>
              </div>

              {formStatus && (
                <p className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
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

      <section id="contact" className="bg-[#1B3A6B] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#C89B3C]">
              Keep in Touch with Us
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#FFFFFF]">
              Need support for Editorial Board Membership?
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
              Contact Edwin Incorporation for editorial board membership, academic
              participation, journal review support, and related publication services.
            </p>

            <a
              href="mailto:care@edwinepc.com"
              className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
            >
              Email Now
              <FaArrowRight />
            </a>
          </div>

          <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6">
            <div className="grid gap-5">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi
                  110019
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  India: 011-66155019
                  <br />
                  Phone: +91 6262752167
                  <br />
                  Phone: +12792029553
                </p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  care@edwinepc.com
                </p>
              </div>

              <div className="flex gap-3">
                <FaGlobe className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  www.academichelpstore.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/916262752167"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}