import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaDownload,
  FaEnvelope,
  FaFlask,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaMedal,
  FaPhoneAlt,
  FaSchool,
  FaSearch,
  FaStar,
  FaTrophy,
  FaUniversity,
  FaUsers,
  FaFileAlt ,
  FaEye,
  FaPlus,
  FaBars,
} from "react-icons/fa";

const awardHeroImages = {
  main: "https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=1600&q=90",
  ceremony: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=90",
  achievement: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=90",
  research: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=90",
};

const conferences = [
  [52, "52nd International Conference — Philippines", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Trends in Innovation, Education and Social Sciences", "19–21 Dec 2026", "University of the Philippines, Diliman (Metro Manila), Manila", "Scheduled", "52nd phillippines conference brochure 2026.pdf"],
  [51, "51st International Conference — Maldives", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Global Research and Education Conclave", "12–14 Dec 2026", "The Maldives National University, Malé", "Scheduled", "51st conference maldives brochure.pdf"],
  [50, "50th International Conference — Thailand", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Frontiers in Research, Education and Innovation", "21–23 Nov 2026", "Chulalongkorn University, Bangkok", "Scheduled", "thailand-brochure.pdf"],
  [49, "49th International Conference — Bhutan", "Scheduled", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Future Directions in Research, Policy and Practice", "24–26 Oct 2026", "Royal University of Bhutan, Thimphu", "Scheduled", "Bhutan Conference Brochure 2026.pdf"],
  [48, "48th International Conference — Mauritius", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Advances in Science, Humanities and Technology", "18–20 Jul 2026", "University of Mauritius, Réduit (near Port Louis)", "Scheduled", "48th conference Mauritius conference brochure 2026.pdf"],
  [47, "47th International Conference — Malaysia", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Innovation, Knowledge and Sustainable Development", "4–6 Jul 2026", "Universiti Malaya, Kuala Lumpur", "Scheduled", "47th conference malaysia brochure.pdf"],
  [46, "46th International Conference — France", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Recent Trends in Research and Development", "20–22 Jun 2026", "Sorbonne Université, Paris", "Scheduled", "46th conference france brochure.pdf"],
  [45, "45th International Conference — United Kingdom", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Contemporary Issues in Research and Global Education", "6–8 Jun 2026", "University College London", "Scheduled", "United Kingdom Conference Brochure 2026.pdf"],
  [44, "44th International Conference — Germany", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "Recent Trends in Research and Development", "23–25 May 2026", "Humboldt University of Berlin, Berlin", "Scheduled", "Germany brochure 2026 -1-.pdf"],
  [43, "43rd International Conference — Switzerland", "NEW", "In Association with Mahakoshal University, Jabalpur (M.P., India)", "International Forum on Knowledge, Culture and Development", "9–11 May 2026", "University of Bern, Bern", "Scheduled", "Switzerland Conference brochure 2026.pdf"],
  [42, "42nd International Conference — Sri Lanka", "", "In Association with AKS University, Satna & Mahakoshal University, Jabalpur (M.P., India)", "Global Perspectives in Science, Technology and Society", "20–22 Feb 2026", "University of Colombo, Colombo", "Scheduled", "Sri lanka brochure 2026.pdf"],
  [41, "41st International Conference — Nepal", "", "In Association with AKS University, Satna & Mahakoshal University, Jabalpur (M.P., India)", "Recent Trends in Research and Higher Education", "6–8 Feb 2026", "Tribhuvan University, Kathmandu", "Scheduled", "Nepal brochure 2026.pdf"],
  [40, "40th International Conference — USA", "", "In Association with AKS University, Satna & Mahakoshal University, Jabalpur (M.P., India)", "Strengthening America: Multidisciplinary Insights into Resilience, Renewal, and Sustainability", "26 Oct 2025", "USA", "Scheduled", "USA Brouser-1.pdf"],
  [39, "39th International Conference — Vietnam", "", "In Association with AKS University, Satna & Mahakoshal University, Jabalpur (M.P., India)", "Transforming Vietnam: Multidisciplinary Strategies for Sustainable Development", "28 Sept 2025", "Vietnam", "Scheduled", "Vietnam_Brouser -1-.pdf"],
  [38, "38th International Conference — Malaysia", "", "In Association with AKS University, Satna & Mahakoshal University, Jabalpur (M.P., India)", "Navigating Change: Multidisciplinary Approaches to Sustainability in Malaysia", "22–24 Jun 2025", "Malaysia", "Winner's List", "Download"],
  [37, "37th International Conference — Indonesia", "", "In Association with Partner Universities in Indonesia", "Unity in Diversity: Multidisciplinary Solutions for Indonesia's Future", "25–27 May 2025", "Indonesia", "Winner's List", "Download"],
  [36, "36th International Conference — Australia", "", "In Association with Partner Universities in Australia", "Collaborative Innovation: Tackling 21st Century Challenges in Australia", "20–22 Apr 2025", "Australia", "Winner's List", "Download"],
  [35, "35th International Conference — Singapore", "", "In Association with Partner Universities in Singapore", "Innovating Education & Research: A Multidisciplinary Approach", "15–17 Dec 2024", "Singapore", "Winner's List", "Download"],
  [34, "34th International Conference — India", "", "In Association with Partner Universities in France", "Innovating Education & Research: A Multidisciplinary Approach", "22–24 Apr 2024", "France", "Winner's List", "Download"],
  [33, "33rd International Conference — London, UK", "", "In Association with Partner Universities in UK", "Shifting Perspectives: The Impact of Fresh Ideas on Society", "15–17 Dec 2023", "London, UK", "Winner's List", "Download"],
  [32, "32nd International Conference — India", "", "In Association with Partner Universities in India", "National Education Policy–Transformational Reforms in Higher Education (NEP-TRHE)", "24–26 Jun 2023", "India", "Winner's List", "Download"],
  [31, "31st International Conference — India", "", "In Association with Partner Universities in India", "Online Evaluation of Education Policy with India Road to ANB (Atma Nirbhar Bharat)", "24–26 Jun 2023", "India", "Winner's List", "Download"],
  [30, "30th International Conference — Thailand", "", "In Association with AKS University, Satna", "Digital World Progress, New Initiatives, and Challenges", "20–22 Nov 2022", "Thailand", "Winner's List", "Download"],
  [29, "29th International Conference — Dubai", "", "In Association with Partner Universities in Dubai", "Technologies for Smart Green Connected Society", "27–29 Jul 2022", "Dubai", "Winner's List", "Download"],
  [28, "28th International Conference — India", "", "In Association with South Asia Managment Association", "Aatm Nirbhar Bharat: Present Status, Constraints, and Solutions", "25 Mar 2022", "India", "Winner's List", "Download"],
  [27, "27th International Conference — Online", "", "In Association with International Research Networks", "Virtual Conference on Multidisciplinary Research", "20 Nov 2020", "Online", "Winner's List", "Download"],
  [26, "26th International Conference — Online", "", "In Association with International Research Networks", "Virtual Conference on Multidisciplinary Research", "04 Oct 2020", "Online", "Winner's List", "Download"],
  [25, "25th International Conference — Online", "", "In Association with International Research Networks", "Virtual Conference on Multidisciplinary Research", "18 Sept 2020", "Online", "Winner's List", "Download"],
  [24, "24th International Conference — Online", "", "In Association with International Research Networks", "Virtual Conference on Multidisciplinary Research", "12 Aug 2020", "Online", "Winner's List", "Download"],
  [23, "23rd International Conference — Online", "", "In Association with International Research Networks", "Virtual Conference on Multidisciplinary Research", "22 Jul 2020", "Online", "Winner's List", "Download"],
  [22, "22nd International Conference — India", "", "In Association with Partner Universities in India", "Online Education versus Conventional Education during COVID-19", "18 Jun 2020", "India", "Winner's List", "Download"],
  [21, "21st International Conference — India", "", "In Association with Partner Universities in India", "Online Education - Opportunities & Challenges", "04 Jun 2020", "India", "Winner's List", "Download"],
  [20, "20th International Conference — India", "", "In Association with Partner Universities in India", "Paradigm Shifts & Evolving Trends in Synthesizing Realms of Studies", "06–08 Jun 2020", "India", "Winner's List", "Download"],
  [19, "19th International Conference — India", "", "In Association with Partner Universities in India", "Environment, Biodiversity Conservation, Sustainable Resource Management", "28 Feb 2020", "India", "Winner's List", "Download"],
  [18, "18th International Conference — Thailand", "", "In Association with Partner Universities in Thailand", "Challenge and Opportunities in Research", "26–27 Dec 2019", "Thailand", "Winner's List", "Download"],
  [17, "17th International Conference — USA", "", "In Association with Partner Universities in USA", "Innovative Research in Science, Technology, and Management", "28 Apr 2019", "USA", "Winner's List", "Download"],
  [16, "16th International Conference — India", "", "In Association with South Asia Management Association", "Innovative Research in Science, Technology, and Management Towards Inclusive and Sustainable Development of the Society", "27–28 Apr 2019", "India", "Winner's List", "Download"],
  [15, "15th International Conference — India", "", "In Association with Partner Universities in India", "Research for the Development of India", "23 Feb 2019", "India", "Winner's List", "Download"],
  [14, "14th International Conference — India", "", "In Association with South Asia Management Association", "Research and Development of India as Multidisciplinary Approach", "29–31 Dec 2018", "India", "Winner's List", "Download"],
  [13, "13th International Conference — Singapore", "", "In Association with Partner Universities in Singapore", "Multidisciplinary Studies", "27–28 Dec 2018", "NUS, Singapore", "Winner's List", "Download"],
  [12, "12th International Conference — India", "", "In Association with Partner Universities in India", "Social Entrepreneurship, Social Media, Business Research and Academic Research", "08 Sept 2018", "India", "Winner's List", "Download"],
  [11, "11th International Conference — India", "", "In Association with Partner Universities in India", "Multidisciplinary Studies", "09 Jun 2018", "India", "Winner's List", "Download"],
  [10, "10th International Conference — India", "", "In Association with Partner Universities in India", "Strategies for Promoting Inclusive Development", "17 Mar 2018", "India", "Winner's List", "Download"],
  [9, "9th International Conference — India", "", "In Association with South Asia Management Association", "Higher Education Standards and Trends Towards Multidisciplinary Studies in the World", "27–29 Jan 2018", "India", "Winner's List", "Download"],
  [8, "8th International Conference — India", "", "In Association with South Asia Managment Association & Jabalpur managment Association", "Human Values and Culture in Literature", "20-21 Jun 2017", "MDSU Ajmer(Raj.)India", "Winner's List", "Download"],
  [7, "7th International Conference — Thailand", "", "In Association with Asian Institute of Technology", "Recent Research in Science, Society, Culture, Humanities And Technology", "2-4 Dec 2017", "Thailand", "Winner's List", "Download"],
  [6, "6th International Conference — India", "", "In Association with South Asia Management Association & Jabalpur managment Association", "Multidisciplinary Studies", "26-28 Aug 2017", "India", "Winner's List", "Download"],
  [5, "5th International Conference — India", "", "In Association with South Asia Management Association & Jabalpur managment Association", "Advances in Science, Society, Culture, Humanities, and Technology", "11-13 Mar 2017", "India", "Winner's List", "Download"],
  [4, "4th International Conference — India", "", "In Association with Partner Universities in India", "Recent Trends and Research in Higher Education", "12–14 Nov 2016", "India", "Winner's List", "Download"],
  [3, "3rd International Conference — Thailand", "", "In Association with South Asia Management Association", "Multidisciplinary Studies", "10–12 Oct 2016", "Thailand", "Winner's List", "Download"],
  [2, "2nd International Conference — India", "", "In Association with Partner Universities in India", "Multidisciplinary Research For The Achievement Of Excellence In Higher Education & Industry", "27–28 Oct 2015", "India", "Winner's List", "Download"],
  [1, "1st International Conference — India", "", "In Association with Partner Universities in India", "Innovative Technologies Driven by Multidisciplinary Research", "05 Jul 2014", "India", "Winner's List", "Download"],
];

const winnerDetails = [
  {
    name: "Dr SAMPATH DAKSHINA MURTHY ACHANTA",
    designation: "",
    award: "",
  },
  {
    name: "Dr. B. P. Shukla",
    designation:
      "Professor and Head, Department of Surgery and Radiology, Veterinary College, Mhow M.P.",
    award: "Award for Teachers With Highest Potential",
  },
  {
    name: "Mr. Sagar Gopal Rathod",
    designation:
      "Assistant Professor School of Social Science Punyashlok Ahilyadevi Holkar Solapur University Solapur, Maharashtra, Ind",
    award: "International Young Researcher Award",
  },
  {
    name: "Dr. Chandrakant Bansidhar Bhange",
    designation:
      "Professor and Head Department of Military Science MSP Mandal's Shri Shivaji College, Parbhani C/o Ambika Nivas, North Shivramnagar, Basmat Road, Parbhani, Maharashtra, India.",
    award: "International Award for Excellence in Teaching Methodology",
  },
  {
    name: "Dr. Mustafa Sareer",
    designation:
      "TGT Social Studies Jawahar Navodaya Vidyalaya, Kishtwar, Jammu and Kashmir, India",
    award: "Award for Teachers with Highest Potential",
  },
  {
    name: "Prof. Shafqat Alauddin",
    designation:
      "Professor Department of Chemistry Shibli National College, Azamgarh, Uttar Pradesh, India",
    award: "International Award for Innovative Research Technologist",
  },
];

const awardCategories = [
  {
    title: "Awards for Students",
    text: "Recognition for students showing academic excellence, innovation, leadership, and outstanding learning achievements.",
    icon: FaGraduationCap,
  },
  {
    title: "Awards for Scientist",
    text: "Honouring research excellence, scientific contribution, innovation, and impactful scholarly work.",
    icon: FaFlask,
  },
  {
    title: "Awards for Industries",
    text: "Celebrating industrial innovation, leadership, entrepreneurship, sustainability, and professional excellence.",
    icon: FaBriefcase,
  },
  {
    title: "Awards For Academicians",
    text: "Recognising educators, faculty members, research supervisors, and academic leaders for excellence.",
    icon: FaUniversity,
  },
  {
    title: "Awards for Schools and Colleges",
    text: "Institutional awards for educational contribution, academic quality, innovation, and student development.",
    icon: FaSchool,
  },
  {
    title: "Awards for Research Scholar",
    text: "Special recognition for research scholars contributing through quality research and academic dedication.",
    icon: FaBookOpen,
  },
];

const awardBenefits = [
  "Recognize scholarly excellence and academic achievements.",
  "Enhance visibility, credibility, and professional reputation.",
  "Create opportunities for research funding and collaborations.",
  "Receive public recognition in a formal award ceremony.",
  "Connect with academicians, scholars, professionals, and innovators.",
  "Celebrate outstanding contribution in academia, research, business, and innovation.",
];

const awardProcess = [
  {
    title: "Submit Nomination",
    text: "Fill the award form with personal, academic, institutional, and achievement details.",
    icon: FaFileAlt,
  },
  {
    title: "Profile Review",
    text: "The submitted profile is reviewed for category, eligibility, and supporting documents.",
    icon: FaSearch,
  },
  {
    title: "Award Ceremony",
    text: "Selected awardees are invited for recognition during the international academic ceremony.",
    icon: FaTrophy,
  },
];

const galleryItems = [
  {
    title: "Formal Recognition Ceremony",
    image: awardHeroImages.ceremony,
  },
  {
    title: "Academic Excellence Awards",
    image: awardHeroImages.achievement,
  },
  {
    title: "Research Contribution Honours",
    image: awardHeroImages.research,
  },
];

const inputClass =
  "w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none transition duration-200 focus:border-[#1B3A6B]";

const siteBaseUrl = "https://www.academichelpstore.com";

const toSiteFileUrl = (fileName) => {
  if (!fileName || fileName === "Download") return "#";
  if (fileName.startsWith("http")) return fileName;
  return `${siteBaseUrl}/${encodeURIComponent(fileName).replace(/%2F/g, "/")}`;
};

const actionLinks = {
  participant: `${siteBaseUrl}/apply-for-conferences#AC`,
  speaker: `${siteBaseUrl}/apply-for-conferences#Speaker`,
  travelGrant: `${siteBaseUrl}/apply-for-conferences#TG`,
  award: `${siteBaseUrl}/apply-for-conferences#AA`,
  venueDetails: `${siteBaseUrl}/International%20Conference%202026%20Venue%20Details.pdf`,
};

const getStatusLink = (no) => {
  if (no >= 39 && no <= 52) return `${siteBaseUrl}/${no}.pdf`;
  return null;
};

const getDownloadLink = (no, download) => {
  if (no === 40) return `${siteBaseUrl}/USA%20Brouser-1.pdf`;
  if (no === 39) return `${siteBaseUrl}/Vietnam_Brouser%20-1-.pdf`;
  return toSiteFileUrl(download);
};

function BasicForm({ title, subtitle, buttonText, status, onSubmit, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_14px_38px_rgba(27,58,107,0.10)]"
    >
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          {subtitle}
        </p>
        <h2 className="mt-3 text-[30px] font-semibold text-[#1B3A6B]">{title}</h2>
      </div>

      {children}

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
        >
          {buttonText}
        </button>

        <button
          type="reset"
          className="rounded-full border border-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
        >
          Reset
        </button>
      </div>

      {status && (
        <p className="rounded-[12px] border border-[#2D7A4F] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
          {status}
        </p>
      )}
    </form>
  );
}

export default function ApplyForAwardPage() {
  const [search, setSearch] = useState("");
  const [awardStatus, setAwardStatus] = useState("");

  

  const filteredConferences = useMemo(() => {
    const query = search.toLowerCase().trim();
    return conferences.filter((item) => item.join(" ").toLowerCase().includes(query));
  }, [search]);

  const submitForm = (event, setter, message) => {
    event.preventDefault();
    setter(message);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#F6F9FD] px-5 py-10 lg:px-8 lg:py-14">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#C89B3C]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#1B3A6B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1300px]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 hidden h-24 w-24 rounded-[28px] bg-[#C89B3C]/20 lg:block" />

              <div className="relative overflow-hidden rounded-[34px] border border-[#D6E0F0] bg-[#FFFFFF] p-4 shadow-[0_22px_60px_rgba(27,58,107,0.14)]">
                <img src={awardHeroImages.main}
                  alt="Apply for Award"
                  className="h-[420px] w-full rounded-[26px] object-cover" loading="lazy" width="600" height="400" />

                <div className="absolute bottom-8 left-8 right-8 rounded-[22px] border border-[#FFFFFF]/40 bg-[#FFFFFF]/90 p-5 backdrop-blur">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-[#1B3A6B] px-4 py-2 text-[12px] font-semibold text-[#FFFFFF]">
                      Academic Achievement
                    </span>
                    <span className="rounded-full bg-[#C89B3C] px-4 py-2 text-[12px] font-semibold text-[#FFFFFF]">
                      Award Ceremony
                    </span>
                  </div>

                  <h3 className="mt-4 text-[24px] font-bold leading-tight text-[#1B3A6B]">
                    International Academic Achievement Award Ceremony
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-[#FFFFFF] px-5 py-2 text-[13px] font-semibold text-[#1B3A6B] shadow-[0_8px_24px_rgba(27,58,107,0.08)]">
                <FaTrophy className="text-[#C89B3C]" />
                Edwin Incorporation Awards
              </span>

              <h1 className="mt-6 text-[42px] font-extrabold leading-tight text-[#1B3A6B] lg:text-[62px]">
                Apply For Award
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-[#1A1A2E]">
                Recognize excellence with Edwin Incorporation. Apply for prestigious
                awards and showcase your achievements in academia, research, innovation,
                business, industry, schools, colleges, and institutional development.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)]">
                  <FaAward className="text-[24px] text-[#C89B3C]" />
                  <p className="mt-3 text-[24px] font-extrabold text-[#1B3A6B]">6+</p>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">Award Categories</p>
                </div>

                <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)]">
                  <FaUsers className="text-[24px] text-[#C89B3C]" />
                  <p className="mt-3 text-[24px] font-extrabold text-[#1B3A6B]">Global</p>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">Recognition</p>
                </div>

                <div className="rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)]">
                  <FaMedal className="text-[24px] text-[#C89B3C]" />
                  <p className="mt-3 text-[24px] font-extrabold text-[#1B3A6B]">Formal</p>
                  <p className="mt-1 text-[13px] text-[#5A6A85]">Ceremony</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#award-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-7 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
                >
                  Apply Now
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#award-table"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B3A6B] px-7 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                >
                  View Award Ceremonies
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About Awards
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Awards That Recognize Scholarly Excellence
              </h2>

              <p className="mt-5 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                Awards are significant for academicians as they recognize scholarly
                excellence and contribute to their professional reputation. Receiving an
                award can boost an academic&apos;s career by enhancing visibility,
                credibility, and prestige in their field.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                Edwin Incorporation organizes award ceremonies based on nominations,
                inviting applications through official channels and recommendations,
                thereby ensuring a formal process that celebrates academic achievements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {awardBenefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="group rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:bg-[#C89B3C] group-hover:text-[#FFFFFF]">
                    <FaStar />
                  </div>

                  <p className="mt-5 text-[15px] font-normal leading-[1.75] text-[#1A1A2E]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Award Categories
              </p>

              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Choose Your Relevant Award Category
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {awardCategories.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.a
                      key={card.title}
                      href="#award-form"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_8px_28px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                    >
                      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                      <div className="relative flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                          <Icon className="text-xl" />
                        </div>

                        <div>
                          <h3 className="text-[18px] font-semibold text-[#1B3A6B]">
                            {card.title}
                          </h3>

                          <p className="mt-2 text-[14px] font-normal leading-[1.7] text-[#1A1A2E]">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5">
              <img src={awardHeroImages.ceremony}
                alt="Award ceremony"
                className="h-[250px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_18px_42px_rgba(27,58,107,0.12)]" loading="lazy" width="600" height="400" />
              <img src={awardHeroImages.achievement}
                alt="Academic award"
                className="h-[250px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_18px_42px_rgba(27,58,107,0.12)]" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {awardProcess.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="relative rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_10px_32px_rgba(27,58,107,0.08)]"
                >
                  <div className="absolute right-6 top-6 text-[56px] font-extrabold text-[#EAF1FB]">
                    0{index + 1}
                  </div>

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#1B3A6B] text-[#FFFFFF]">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="mt-6 text-[22px] font-semibold text-[#1B3A6B]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.8] text-[#1A1A2E]">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<section
  id="award-winners-report"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-10"
>
  <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="mb-6 text-center">
      <h2 className="text-[34px] font-bold leading-tight text-[#1B3A6B] md:text-[44px]">
        Winners Details Report
      </h2>

      <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

      <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.7] text-[#1A1A2E]">
        View award winner records, winner details, recognition information, and related award
        data through the live Zoho Creator report.
      </p>
    </div>

    <div className="rounded-[28px] border border-[#D6E0F0] bg-white shadow-[0_24px_70px_rgba(27,58,107,0.16)] overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-6 md:px-8 py-4">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.22)_25%,rgba(255,255,255,0.22)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.22)_75%)] bg-[length:22px_22px]" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Award Winners Report
            </h3>
            <p className="text-white/75 text-sm mt-1">
              Live Zoho Creator embedded report
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold">
              Live Data
            </span>
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[24px] text-[#F4B400]">
              🏆
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
        <div className="rounded-[22px] bg-white border border-[#D6E0F0] shadow-inner overflow-hidden">
          <iframe
            title="Award Winners Details Report"
            className="w-full h-[560px] border-0 block"
            scrolling="auto"
            src="https://creatorapp.zohopublic.in/edwininc/award-winner/report-embed/Winners_Details_Report/Qs4UPyEjE40m70wbAQv9rnxgu0BzunUAtqqZbNsqt9v5Nq9Kk9wuzbUJKT7keuuZgAJAfSXY8Mmg5U37pvBMTfZ83aDk2XZTwW7F"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      <section id="conference-table" className="bg-[#FFFFFF] px-4 py-14 lg:px-8">
  <div className="mx-auto max-w-[1500px]">
    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          Conferences - 2026-27
        </p>

        <h2 className="mt-3 text-[32px] font-semibold text-[#1B3A6B]">
          International Conferences
        </h2>

        <p className="mt-3 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
          Upcoming and previous conferences with subject, date, venue, awards status,
          participants, and brochure download.
        </p>
      </div>

      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search conference..."
          className="w-full rounded-full border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[360px]"
        />
      </div>
    </div>

    <div className="overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_18px_50px_rgba(27,58,107,0.12)]">
      <div className="max-h-[560px] overflow-auto">
        <table className="w-full min-w-[1260px] border-collapse">
          <thead className="sticky top-0 z-20">
            <tr className="bg-[#F4F6F9] text-left shadow-sm">
              <th className="w-[60px] px-4 py-4 text-[14px] font-bold text-[#111827]">S No.</th>
              <th className="w-[265px] px-4 py-4 text-[14px] font-bold text-[#111827]">Conference Name</th>
              <th className="w-[240px] px-4 py-4 text-[14px] font-bold text-[#111827]">Subject</th>
              <th className="w-[120px] px-4 py-4 text-[14px] font-bold text-[#111827]">Date</th>
              <th className="w-[210px] px-4 py-4 text-[14px] font-bold text-[#111827]">Venue</th>
              <th className="w-[150px] px-4 py-4 text-[14px] font-bold text-[#111827]">Awards Status</th>
              <th className="w-[210px] px-4 py-4 text-[14px] font-bold text-[#111827]">Participants</th>
              <th className="w-[130px] px-4 py-4 text-center text-[14px] font-bold text-[#111827]">Download</th>
            </tr>
          </thead>

          <tbody>
            {filteredConferences.map((item, index) => {
              const [no, name, badge, association, subject, date, venue, status, download] = item;
              const isScheduled = status === "Scheduled";

              return (
                <tr
                  key={`${no}-${name}`}
                  className={`border-t border-[#D6E0F0] transition duration-200 hover:bg-[#FFF8E8] ${
                    index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F8FBFF]"
                  }`}
                >
                  <td className="align-top px-4 py-4 text-[15px] font-bold text-[#1B3A6B]">{no}</td>

                  <td className="align-top px-4 py-4">
                    <div className="text-[15px] font-bold leading-[1.5] text-[#111827]">
                      {name}
                      {badge === "NEW" && (
                        <span className="ml-2 inline-flex rounded-full bg-gradient-to-r from-[#13C2C2] to-[#1677FF] px-2 py-1 text-[9px] font-bold uppercase text-[#FFFFFF]">
                          NEW
                        </span>
                      )}
                      {badge === "Scheduled" && (
                        <span className="ml-2 inline-flex rounded-full bg-[#F0F0F0] px-2 py-1 text-[10px] font-bold text-[#444444]">
                          Scheduled
                        </span>
                      )}
                    </div>

                    <span className="mt-2 block text-[12px] italic leading-[1.5] text-[#5A6A85]">
                      {association}
                    </span>
                  </td>

                  <td className="align-top px-4 py-4 text-[15px] leading-[1.55] text-[#111827]">{subject}</td>
                  <td className="align-top px-4 py-4 text-[15px] font-semibold leading-[1.5] text-[#1B3A6B]">{date}</td>
                  <td className="align-top px-4 py-4 text-[15px] leading-[1.55] text-[#111827]">{venue}</td>

                  <td className="align-top px-4 py-4">
                    <div className="flex flex-col items-start gap-2">
                      <span className="inline-flex rounded-full bg-[#F0F0F0] px-3 py-1.5 text-[12px] font-semibold text-[#555555]">
                        {status}
                      </span>

                      {isScheduled && (
                        <a
                          href="#award-form"
                          className="inline-flex rounded-full border border-[#C3A6FF] bg-[#F0E9FF] px-3 py-1.5 text-[12px] font-semibold text-[#6633CC] hover:bg-[#6633CC] hover:text-white"
                        >
                          Nominate Now
                        </a>
                      )}
                    </div>
                  </td>

                  <td className="align-top px-4 py-4">
                    {isScheduled ? (
                      <div className="flex flex-col items-start gap-2">
                        <a href="#conference-form" className="inline-flex rounded-full border border-[#B3C7E6] bg-[#E9F0FB] px-3 py-1.5 text-[12px] font-semibold text-[#3366CC] hover:bg-[#1B3A6B] hover:text-white">
                          Apply as Participant
                        </a>

                        <a href="#speaker-form" className="inline-flex rounded-full border border-[#B3C7E6] bg-[#E9F0FB] px-3 py-1.5 text-[12px] font-semibold text-[#3366CC] hover:bg-[#1B3A6B] hover:text-white">
                          Apply for Resource Person
                        </a>

                        <a href="#travel-grant-form" className="inline-flex rounded-full border border-[#B3C7E6] bg-[#E9F0FB] px-3 py-1.5 text-[12px] font-semibold text-[#3366CC] hover:bg-[#1B3A6B] hover:text-white">
                          Apply for Travel Grant
                        </a>
                      </div>
                    ) : (
                      <a href="#conference-table" className="inline-flex rounded-full border border-[#B3C7E6] bg-[#E9F0FB] px-4 py-2 text-[12px] font-semibold text-[#3366CC]">
                        List of Participants
                      </a>
                    )}
                  </td>

                  <td className="align-top px-4 py-4 text-center">
                    <a
                      href={download === "Download" ? "#" : download}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F0C6A0] bg-[#FDF0E9] px-4 py-2 text-[12px] font-bold text-[#CC5200] transition duration-200 hover:bg-[#C89B3C] hover:text-[#FFFFFF]"
                    >
                      <FaDownload className="text-[12px]" />
                      Download
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
        <p className="text-[13px] font-normal text-[#5A6A85]">
          Showing {filteredConferences.length} conference records
        </p>
      </div>
    </div>
  </div>
</section>

    
     <section
  id="award-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-14"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
    <div>
      <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
        Application Form
      </p>

      <h2 className="mt-3 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
        Apply-for-award
      </h2>

      <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

      <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
        Submit your award application with profile details, designation,
        achievements, award category, and supporting documents.
      </p>

      <div className="mt-7 rounded-[26px] border border-[#D6E0F0] bg-white/80 p-6 shadow-sm backdrop-blur">
        <h3 className="text-[22px] font-semibold text-[#1B3A6B]">
          Contact for Award Support
        </h3>

        <div className="mt-5 space-y-4">
          <div className="flex gap-3">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
              15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019
            </p>
          </div>

          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
              India : 011-66155019
              <br />
              Phone: +91 6262752167
            </p>
          </div>

          <div className="flex gap-3">
            <FaEnvelope className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-[15px] leading-[1.7] text-[#1A1A2E]">
              care@edwinepc.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
        <div>
          <h3 className="text-[26px] font-bold text-white">
            Award Application Form
          </h3>

          <p className="mt-1 text-[14px] text-white/75">
            Complete the award application form below.
          </p>
        </div>

        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
          🏆
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
        <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
          <div className="max-h-[560px] overflow-y-auto overflow-x-hidden">
            <iframe
              title="Award Application Form"
              className="block h-[1080px] w-full border-0"
              scrolling="auto"
              src="https://crm.zoho.in/crm/WebFormServeServlet?rid=41356a0f93652588f20b5b6d2e6ab735455ca5cc057f728d160f6795d7acc9ab6370603d2e20d8ab5eaa9249826e322cgidfeaf2f684d37a692f628e4f389ebdbe2264aa7ecd400fb19b7c1a091ef675833"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}