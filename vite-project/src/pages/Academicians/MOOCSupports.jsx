import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaGlobe,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlayCircle,
  FaRocket,
  FaSchool,
  FaStar,
  FaUniversity,
  FaUserGraduate,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1900&q=90";

const heroSideImage =
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1400&q=90";

const studentImage =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=90";

const creatorImage =
  "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?auto=format&fit=crop&w=1400&q=90";

const institutionImage =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90";

const applyCards = [
  {
    title: "Apply Online As Students",
    text: "Join online learning courses as a student and start learning through Edwin Incorporation MOOC support.",
    icon: FaUserGraduate,
    link: "#student-form",
  },
  {
    title: "Become Course Creator",
    text: "Register as a course creator and create your own course through the online learning platform.",
    icon: FaChalkboardTeacher,
    link: "#creator-form",
  },
  {
    title: "Online Platform University or Colleges",
    text: "Universities and colleges can connect for online education learning course platform support.",
    icon: FaUniversity,
    link: "#institution-form",
  },
  {
    title: "Course Available",
    text: "Explore available course options including Edwin School of Online Learning, Swayam, and foreign degree courses.",
    icon: FaBookOpen,
    link: "#courses",
  },
];

const courseOptions = [
  {
    title: "Edwin School Of Online Learning",
    text: "Apply Now",
    icon: FaSchool,
  },
  {
    title: "Swayam - Free Degree",
    text: "Apply Now",
    icon: FaGraduationCap,
  },
  {
    title: "Swayam - Free ARPIT (3-8 Credit)",
    text: "Apply Now",
    icon: FaCertificate,
  },
  {
    title: "Foreign Free Degree",
    text: "Apply Now",
    icon: FaGlobe,
  },
  {
    title: "Foreign Degree Paid",
    text: "Apply Now",
    icon: FaAward,
  },
];

const learningCards = [
  {
    title: "Learning Online",
    text: "This is a great place to let your visitors know who you are. Add useful information that your users may find interesting.",
    icon: FaLaptopCode,
  },
  {
    title: "4-10 Credit Course",
    text: "This is a great place to let your visitors know who you are. Add useful information that your users may find interesting.",
    icon: FaStar,
  },
  {
    title: "UGC or Other Norms",
    text: "This is a great place to let your visitors know who you are. Add useful information that your users may find interesting.",
    icon: FaFileAlt,
  },
];

const stats = [
  {
    value: "9000",
    label: "Certificate Received",
  },
  {
    value: "80",
    label: "Participants Countries",
  },
  {
    value: "1267",
    label: "Online Learners",
  },
  {
    value: "05",
    label: "Recently Completed",
  },
];

const registeredApplicants = [
  {
    name: "Student Applicant",
    type: "MOOC Student",
    course: "Edwin School Of Online Learning",
    status: "Application Support",
  },
  {
    name: "Course Creator",
    type: "Instructor / Faculty",
    course: "Course Creator Registration",
    status: "Course Creation",
  },
  {
    name: "University / College",
    type: "Institutional Platform",
    course: "Online Platform Support",
    status: "Platform Support",
  },
  {
    name: "Online Learner",
    type: "MOOC Participant",
    course: "Swayam / Foreign Degree Course",
    status: "Learning Support",
  },
];

const courseTypes = [
  "Edwin School Of Online Learning",
  "Swayam - Free Degree",
  "Swayam - Free ARPIT (3-8 Credit)",
  "Foreign Free Degree",
  "Foreign Degree Paid",
  "Course Creator Registration",
  "University or College Online Platform",
];

export default function MoocSupportPage() {
  const [studentStatus, setStudentStatus] = useState("");
  const [creatorStatus, setCreatorStatus] = useState("");
  const [institutionStatus, setInstitutionStatus] = useState("");

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

  const handleStudentSubmit = (event) => {
    event.preventDefault();
    setStudentStatus("Your student MOOC application has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleCreatorSubmit = (event) => {
    event.preventDefault();
    setCreatorStatus("Your course creator registration has been prepared successfully.");
    event.currentTarget.reset();
  };

  const handleInstitutionSubmit = (event) => {
    event.preventDefault();
    setInstitutionStatus("Your online platform request has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="MOOC online education learning"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.28),transparent_35%),linear-gradient(120deg,rgba(27,58,107,0.98),rgba(7,27,53,0.9))]" />
        </div>

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-[18%] hidden h-24 w-24 rounded-full border border-[#D6E0F0]/30 bg-[#FFFFFF]/10 backdrop-blur lg:block"
        />

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18%] right-[7%] hidden h-32 w-32 rounded-[28px] border border-[#D6E0F0]/25 bg-[#C89B3C]/20 backdrop-blur lg:block"
        />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6E0F0]/35 bg-[#FFFFFF]/10 px-5 py-2 text-[13px] font-normal text-[#FFFFFF] backdrop-blur">
                <FaPlayCircle className="text-[#C89B3C]" />
                Online Education Learning Course
              </div>

              <h1 className="max-w-3xl text-[44px] font-bold leading-tight text-[#FFFFFF] lg:text-[58px]">
                Build Your Future with Edwin MOOC Learning
              </h1>

              <p className="mt-6 max-w-3xl text-[16px] font-normal leading-[1.8] text-[#FFFFFF]">
                Massive open online learning courses are one of the best initiatives
                from Edwin Incorporation, known for its online education and learning
                courses, and administered through the online learning system.
              </p>

              <p className="mt-4 max-w-3xl text-[16px] font-normal leading-[1.8] text-[#FFFFFF]">
                Edwin Incorporation provides the best platform to teach and learn using
                MOOCs. You can join the program as a student or as a course creator.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#student-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  Apply as Student
                  <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#creator-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FFFFFF]/80 bg-[#FFFFFF]/10 px-7 py-3 text-[15px] font-medium text-[#FFFFFF] backdrop-blur transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                >
                  Become Course Creator
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.18 + index * 0.06,
                    }}
                    className="rounded-[16px] border border-[#D6E0F0]/25 bg-[#FFFFFF]/10 p-4 backdrop-blur"
                  >
                    <p className="text-[26px] font-bold text-[#FFFFFF]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[12px] font-normal leading-[1.5] text-[#D6E0F0]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 -top-6 h-full w-full rounded-[34px] border border-[#C89B3C]/45" />
              <div className="relative overflow-hidden rounded-[34px] border border-[#D6E0F0]/30 bg-[#FFFFFF]/10 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur">
                <img
                  src={heroSideImage}
                  alt="Digital classroom and online learners"
                  className="h-[560px] w-full rounded-[26px] object-cover"
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-8 top-8 rounded-[18px] border border-[#D6E0F0]/40 bg-[#FFFFFF]/95 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.22)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#1B3A6B] text-[#FFFFFF]">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <p className="text-[20px] font-bold text-[#1B3A6B]">4-10</p>
                      <p className="text-[12px] font-normal text-[#5A6A85]">
                        Credit Course
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 rounded-[18px] border border-[#D6E0F0]/40 bg-[#FFFFFF]/95 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.22)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#C89B3C] text-[#FFFFFF]">
                      <FaCertificate />
                    </div>
                    <div>
                      <p className="text-[20px] font-bold text-[#1B3A6B]">9000</p>
                      <p className="text-[12px] font-normal text-[#5A6A85]">
                        Certificate Received
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="relative bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applyCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.link}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(27,58,107,0.08)] transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_18px_45px_rgba(27,58,107,0.14)]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1B3A6B]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {card.text}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 group-hover:text-[#C89B3C]">
                      Apply Now
                      <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[28px] bg-[#C89B3C]/20" />
              <img
                src={studentImage}
                alt="Online students learning"
                className="relative h-[520px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_20px_50px_rgba(27,58,107,0.12)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About MOOC
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Online Education Learning Course
              </h2>

              <p className="mt-5 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                As you may know, the University Grants Commission provides API marks in
                MOOCs, and the international MOOC system is affiliated with Work and IT
                in California and is being adopted by many universities around the
                world.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                The first student to join this course will receive their certificate
                within two months of passing the online exam. The second option is for
                course creators, who can get registered and create their courses.
              </p>

              <div className="mt-8 grid gap-5">
                {learningCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: index * 0.05,
                      }}
                      className="group flex gap-5 rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_4px_20px_rgba(27,58,107,0.06)] transition duration-200 hover:border-[#C89B3C]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-200 group-hover:bg-[#C89B3C]">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                          {card.title}
                        </h3>

                        <p className="mt-2 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                          {card.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Apply Now
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              MOOC Course Options
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Edwin School Of Online Learning / Swayam - Free Degree / Swayam - Free
              ARPIT (3-8 Credit) / Foreign Free Degree / Foreign Degree Paid
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {courseOptions.map((course, index) => {
              const Icon = course.icon;

              return (
                <motion.a
                  key={course.title}
                  href="#student-form"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className="group rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 text-center shadow-[0_8px_28px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:scale-110 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold leading-[1.45] text-[#1A1A2E]">
                    {course.title}
                  </h3>

                  <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#1B3A6B] px-4 py-2 text-[13px] font-medium text-[#1B3A6B] transition duration-200 group-hover:bg-[#C89B3C] group-hover:border-[#C89B3C] group-hover:text-[#FFFFFF]">
                    {course.text}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Registred Applicants
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Registered Applicants
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Applicant records for student learning, course creator, institution
                platform, and online learner support.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Applicant Name
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Applicant Type
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Course / Platform
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {registeredApplicants.map((applicant, index) => (
                    <tr
                      key={`${applicant.name}-${index}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {applicant.name}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {applicant.type}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {applicant.course}
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-1 text-[13px] font-normal text-[#2D7A4F]">
                          {applicant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {registeredApplicants.length} registered applicant records
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="student-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Register as Student
              </p>

              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Apply Online As Students
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Apply as a student for online education learning course support and
                MOOC-related guidance.
              </p>

              <div className="mt-8 overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
                <img
                  src={studentImage}
                  alt="Students online course"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <form onSubmit={handleStudentSubmit} className="grid gap-6">
                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Select Your Location <span className="text-[#C0392B]">*</span>
                  </label>
                  <select
                    required
                    className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 focus:border-[#1B3A6B]"
                  >
                    <option value="">-None-</option>
                    <option>India</option>
                    <option>Other Country</option>
                    <option>Mobile Number</option>
                  </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Last Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
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
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
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
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Course Type
                    </label>
                    <select className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 focus:border-[#1B3A6B]">
                      <option value="">Select course</option>
                      {courseTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Qualification
                    </label>
                    <input
                      type="text"
                      placeholder="Enter qualification"
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload Document
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
                    className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Message / Requirement
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your MOOC learning requirement"
                    className="w-full resize-none rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                  >
                    Submit
                  </button>

                  <button
                    type="reset"
                    className="rounded-full border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                  >
                    Reset
                  </button>
                </div>

                {studentStatus && (
                  <p className="rounded-[12px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {studentStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="creator-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <form onSubmit={handleCreatorSubmit} className="grid gap-6">
                <div>
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Register as Course Creator
                  </p>

                  <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                    Become Course Creator
                  </h2>

                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Register and create your course through Edwin Incorporation online
                    education learning platform.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Full Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
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
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Course Topic
                    </label>
                    <input
                      type="text"
                      placeholder="Enter course topic"
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Course Description
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write course description"
                    className="w-full resize-none rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload Profile / Course File
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".doc,.docx,.pdf,.ppt,.pptx"
                    className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                  >
                    Register as Course Creator
                  </button>

                  <button
                    type="reset"
                    className="rounded-full border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                  >
                    Reset
                  </button>
                </div>

                {creatorStatus && (
                  <p className="rounded-[12px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {creatorStatus}
                  </p>
                )}
              </form>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
                <img
                  src={creatorImage}
                  alt="Course creator registration"
                  className="h-[380px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1A1A2E]">
                    Create Your Course
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Course creators can get registered and create their courses through
                    Edwin Online Education Learning Course support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="institution-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                University or Colleges
              </p>

              <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">
                Online Platform University or Colleges
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Apply for online platform support for universities and colleges.
              </p>

              <div className="mt-8 overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
                <img
                  src={institutionImage}
                  alt="University online platform"
                  className="h-[300px] w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]">
              <form onSubmit={handleInstitutionSubmit} className="grid gap-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Institution Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
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
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Requirement
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your university or college online platform requirement"
                    className="w-full resize-none rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                  >
                    Submit
                  </button>

                  <button
                    type="reset"
                    className="rounded-full border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                  >
                    Reset
                  </button>
                </div>

                {institutionStatus && (
                  <p className="rounded-[12px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {institutionStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

     

      <a
        href="https://wa.me/916262752167"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3A6B] text-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C89B3C]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}