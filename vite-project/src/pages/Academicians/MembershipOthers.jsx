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

    <div className="mt-10 overflow-hidden rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_14px_40px_rgba(27,58,107,0.10)]">
      <div className="max-h-[520px] overflow-auto">
        <table className="w-full min-w-[850px] border-collapse">
          <thead className="sticky top-0 z-20 bg-[#1B3A6B]">
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
                className={`border-b border-[#D6E0F0] transition duration-200 hover:bg-[#FFF8E8] ${
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
                    // href={item.link}
                    href="https://www.samaindia.org/Members#Apply_ASA"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-4 py-2 text-[13px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#1B3A6B] hover:text-[#FFFFFF]"
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

  <section
  id="membership-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-14"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Now
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          Professional Membership Application Form
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Fill this form to apply for professional membership support through
          Edwin Incorporation.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            "Select your professional body or preferred membership option.",
            "Upload your CV or academic document for profile verification.",
            "Edwin Incorporation will coordinate membership assistance and communication.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 shadow-sm backdrop-blur"
            >
              <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
              <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
          <div>
            <h3 className="text-[26px] font-bold text-white">
              Membership Application
            </h3>

            <p className="mt-1 text-[14px] text-white/75">
              Complete the membership application form below.
            </p>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
            🎓
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <div className="max-h-[560px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="Professional Membership Application Form"
                className="block h-[870px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=291a6d096a536ef364a244c9f77e390777ebba08f31ad00679c556f76d3cdf67761e00e881508e10cdb3d61ca1fc6778gid2f32ee96a98de3e686aad3c38265794cec11422b488a6613514f7983d0d6fa23"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}