import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileUpload,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80";

const professionalMembershipOptions = [
  {
    no: 1,
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    field: "Electrical and Electronics Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 2,
    name: "American Society of Mechanical Engineers (ASME)",
    field: "Mechanical Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 3,
    name: "American Institute of Chemical Engineers (AIChE)",
    field: "Chemical Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 4,
    name: "Project Management Institute (PMI)",
    field: "Project Management",
    link: "https://www.samaindia.org",
  },
  {
    no: 5,
    name: "American Society of Civil Engineers (ASCE)",
    field: "Civil Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 6,
    name: "Society of Automotive Engineers (SAE International)",
    field: "Automotive Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 7,
    name: "International Association of Computer Science and Information Technology (IACSIT)",
    field: "Computer Science and Information Technology",
    link: "https://www.samaindia.org",
  },
  {
    no: 8,
    name: "Institute of Management Accountants (IMA)",
    field: "Management Accounting",
    link: "https://www.samaindia.org",
  },
  {
    no: 9,
    name: "American Bar Association (ABA)",
    field: "Law",
    link: "https://www.samaindia.org",
  },
  {
    no: 10,
    name: "Association for Computing Machinery (ACM)",
    field: "Computing and Information Technology",
    link: "https://www.samaindia.org",
  },
  {
    no: 11,
    name: "Institute of Chartered Accountants of India (ICAI)",
    field: "Chartered Accountancy",
    link: "https://www.samaindia.org",
  },
  {
    no: 12,
    name: "Institute of Company Secretaries of India (ICSI)",
    field: "Company Secretaries",
    link: "https://www.samaindia.org",
  },
  {
    no: 13,
    name: "The Bar Council of India (BCI)",
    field: "Law",
    link: "https://www.samaindia.org",
  },
  {
    no: 14,
    name: "All India Management Association (AIMA)",
    field: "Management",
    link: "https://www.samaindia.org",
  },
  {
    no: 15,
    name: "Indian Medical Association (IMA)",
    field: "Medicine",
    link: "https://www.samaindia.org",
  },
  {
    no: 16,
    name: "Institution of Engineers (India) (IEI)",
    field: "Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 17,
    name: "Indian Institute of Architects (IIA)",
    field: "Architecture",
    link: "https://www.samaindia.org",
  },
  {
    no: 18,
    name: "Institute of Cost Accountants of India (ICMAI)",
    field: "Cost and Management Accounting",
    link: "https://www.samaindia.org",
  },
  {
    no: 19,
    name: "Indian Society of Agricultural Engineers (ISAE)",
    field: "Agricultural Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 20,
    name: "Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE)",
    field: "Heating, Refrigerating and Air Conditioning Engineering",
    link: "https://www.samaindia.org",
  },
  {
    no: 21,
    name: "The Institute of Company Secretaries of India (ICSI)",
    field: "Company Secretaries",
    link: "https://www.samaindia.org",
  },
  {
    no: 22,
    name: "Indian Institute of Technology (IIT)",
    field: "Engineering and Technology",
    link: "https://www.samaindia.org",
  },
  {
    no: 23,
    name: "National Association of Software and Service Companies (NASSCOM)",
    field: "Information Technology and Business Process Outsourcing",
    link: "https://www.samaindia.org",
  },
  {
    no: 24,
    name: "Indian Institute of Banking and Finance (IIBF)",
    field: "Banking and Finance",
    link: "https://www.samaindia.org",
  },
  {
    no: 25,
    name: "Confederation of Indian Industry (CII)",
    field: "Industry and Business",
    link: "https://www.samaindia.org",
  },
  {
    no: 26,
    name: "Indian Society for Technical Education (ISTE)",
    field: "Technical Education",
    link: "https://www.samaindia.org",
  },
  {
    no: 27,
    name: "The Institute of Chartered Financial Analysts of India (ICFAI)",
    field: "Finance and Accounting",
    link: "https://www.samaindia.org",
  },
  {
    no: 28,
    name: "Indian Institute of Welding (IIW)",
    field: "Welding",
    link: "https://www.samaindia.org",
  },
  {
    no: 29,
    name: "Indian Institute of Metals (IIM)",
    field: "Metallurgy and Materials Science",
    link: "https://www.samaindia.org",
  },
  {
    no: 30,
    name: "Indian Society for Training and Development (ISTD)",
    field: "Training and Development",
    link: "https://www.samaindia.org",
  },
  {
    no: 31,
    name: "South Asia Management Association",
    field: "Management",
    link: "https://www.samaindia.org",
  },
  {
    no: 32,
    name: "Jabalpur Management Association",
    field: "Management",
    link: "https://www.samaindia.org",
  },
];

const memberDetails = [
  {
    name: "Dr. Smritikana Ghosh",
    membership: "Professional Member",
    discipline: "Academics and Research",
    institution: "Dr. Shyama Prasad Mukherjee University Ranchi Jharkhand, India.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Suyash Sawale",
    membership: "Professional Member",
    discipline: "Academics and Research",
    institution:
      "Kirti M. Doongursee College of Arts, Science & Commerce Dadar, Maharashtra, India.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Professional Member",
    membership: "Membership Applicant",
    discipline: "Professional Body Membership",
    institution: "Edwin Incorporation Professional Membership Portal.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Academic Member",
    membership: "Professional Member",
    discipline: "Higher Education",
    institution: "Professional membership support for academicians.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
  },
];

const benefits = [
  {
    title: "Networking Opportunities",
    text: "Professional membership can help academicians connect with peers, experts, professional bodies, and academic networks.",
    icon: FaUsers,
  },
  {
    title: "Industry Events & Conferences",
    text: "Members may get access to professional events, seminars, workshops, and conferences related to their discipline.",
    icon: FaUniversity,
  },
  {
    title: "Professional Development",
    text: "Memberships can support career growth through professional development resources, academic engagement, and learning opportunities.",
    icon: FaGraduationCap,
  },
  {
    title: "Recognition of Expertise",
    text: "Professional membership helps academicians strengthen their professional credentials and recognition in their field.",
    icon: FaAward,
  },
];

const processSteps = [
  {
    title: "Select Membership",
    text: "Choose a professional membership option according to your academic discipline or professional field.",
    icon: FaIdCard,
  },
  {
    title: "Submit Application",
    text: "Fill the online membership form with your personal, academic, and professional details.",
    icon: FaFileUpload,
  },
  {
    title: "Document Review",
    text: "Your submitted details and documents are reviewed for membership processing support.",
    icon: FaShieldAlt,
  },
  {
    title: "Membership Support",
    text: "Edwin Incorporation supports the membership application process through its professional membership portal.",
    icon: FaHandshake,
  },
];

export default function ProfessionalMembershipPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [memberSearch, setMemberSearch] = useState("");
  const [formStatus, setFormStatus] = useState("");

  

  const filteredMemberships = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return professionalMembershipOptions.filter((item) =>
      `${item.no} ${item.name} ${item.field}`.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  const filteredMembers = useMemo(() => {
    const query = memberSearch.toLowerCase().trim();

    return memberDetails.filter((member) =>
      `${member.name} ${member.membership} ${member.discipline} ${member.institution}`
        .toLowerCase()
        .includes(query)
    );
  }, [memberSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your professional membership application has been prepared.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative w-full overflow-hidden bg-[#FFFFFF]">
        <div className="relative min-h-[620px] w-full">
          <img src={heroImage}
            alt="Professional Membership"
            className="absolute inset-0 h-full w-full object-cover" loading="lazy" width="600" height="400" />

          <div className="absolute inset-0 bg-[#1B3A6B]/70" />

          <div className="relative mx-auto flex min-h-[620px] max-w-[1200px] items-center px-5 py-20">
            <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
                  <FaIdCard className="text-[#C89B3C]" />
                  Professional Membership
                </div>

                <h1 className="text-[40px] font-bold leading-tight text-[#FFFFFF]">
                  About Our Members
                </h1>

                <p className="mt-5 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  Edwin Incorporation has tie-ups with more than a hundred
                  discipline-based professional bodies and can provide a one-stop
                  solution for academicians to get professional membership from
                  different types of professional bodies.
                </p>

                <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  Having a professional membership in different disciplines can offer a
                  range of benefits to academicians, including networking opportunities,
                  access to industry events and conferences, professional development
                  resources, and recognition of their expertise and achievements in
                  their field.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#membership-form"
                    className="rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#member"
                    className="rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                  >
                    View Members
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                  Quick Summary
                </p>

                <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                  One-Stop Membership Portal
                </h2>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
                    <p className="text-[28px] font-semibold text-[#1B3A6B]">100+</p>
                    <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                      Discipline-based professional bodies
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                      <p className="text-[28px] font-semibold text-[#1B3A6B]">32+</p>
                      <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                        Listed membership options
                      </p>
                    </div>

                    <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                      <p className="text-[28px] font-semibold text-[#1B3A6B]">1</p>
                      <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                        Simplified support process
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Membership Portal
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Simplified Professional Membership Support
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                By providing a professional membership tool and portal, Edwin
                Incorporation can simplify the application process for academicians and
                enable them to easily apply for membership from a variety of
                professional bodies. This can help them to enhance their professional
                credentials, expand their networks, and stay up-to-date with the latest
                developments in their field.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
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
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Process
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              How Professional Membership Works
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              A simple membership support process designed for academicians and
              professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.04 }}
                  className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#1B3A6B] text-[#FFFFFF]">
                    <Icon />
                  </div>
                  <p className="mt-5 text-[13px] font-normal text-[#5A6A85]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-[18px] font-semibold text-[#1A1A2E]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="member" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Our Professional Members
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Member Details
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Search professional members by name, membership type, discipline, or
                institution.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={memberSearch}
                onChange={(event) => setMemberSearch(event.target.value)}
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
                      Membership
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Discipline
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Institution / Details
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredMembers.map((member, index) => (
                    <tr
                      key={`${member.name}-${index}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4">
                        <img src={member.image}
                          alt={member.name}
                          className="h-20 w-20 rounded-[8px] border border-[#D6E0F0] object-cover" loading="lazy" width="600" height="400" />
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {member.name}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {member.membership}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {member.discipline}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                        {member.institution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {filteredMembers.length} of {memberDetails.length} professional
                members
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="membership-options" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Some Professional Membership Options with Edwin INC
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Professional Membership Options
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Search and select membership options from discipline-based professional
                bodies.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search membership..."
                className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[340px]"
              />
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="w-[90px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      S.No.
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Professional Body Name
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Discipline
                    </th>
                    <th className="w-[150px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredMemberships.map((item, index) => (
                    <tr
                      key={`${item.no}-${item.name}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1B3A6B]">
                        {item.no}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {item.name}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {item.field}
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-4 py-2 text-[13px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                        >
                          Apply Now
                          <FaExternalLinkAlt className="text-[11px]" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {filteredMemberships.length} of{" "}
                {professionalMembershipOptions.length} membership options
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="membership-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Apply Now
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Professional Membership Application Form
              </h2>
              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Fill this form to apply for professional membership support through
                Edwin Incorporation.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Select your professional body or mention your preferred membership
                    option.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Upload your CV or academic document for profile verification and
                    support.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Edwin Incorporation will coordinate for membership assistance and
                    communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Select Your Location <span className="text-[#C0392B]">*</span>
                  </label>
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

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Last Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      Do not use 0 (zero) as the initial digit
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                    <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                      With Complete Institute Name
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Membership Option
                    </label>
                    <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]">
                      <option value="">Select membership option</option>
                      {professionalMembershipOptions.slice(0, 12).map((item) => (
                        <option key={`${item.no}-${item.name}`}>
                          {item.name} - {item.field}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload CV <span className="text-[#C0392B]">*</span>
                  </label>
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

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Message / Requirement
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your professional membership requirement"
                    className="w-full resize-none rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-[#D6E0F0] accent-[#1B3A6B]"
                  />
                  <p className="text-[15px] font-normal text-[#1A1A2E]">
                    I agree to the{" "}
                    <a
                      href="#terms"
                      className="font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:text-[#C89B3C]"
                    >
                      Terms & Condition
                    </a>
                    <span className="text-[#C0392B]"> *</span>
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
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
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#C89B3C]">
              Keep in Touch with Us
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#FFFFFF]">
              Need support for professional membership?
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
              Contact Edwin Incorporation for professional membership support,
              membership application guidance, academic credentials support, and related
              services.
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
                  Phone: +916262752168
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
    </div>
  );
}