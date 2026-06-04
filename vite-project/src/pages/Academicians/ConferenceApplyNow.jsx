import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaGlobeAsia,
  FaMapMarkerAlt,
  FaMicrophone,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaSearch,
  FaStar,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const conferenceHeroImageBase = "/images/apply-for-conferences";

const conferenceHeroImageSequence = [
  { no: 43, image: "WhatsApp_20Image_202026-05-12_20at_204.26.02_20PM.jpeg" },
  { no: 43, image: "WhatsApp_20Image_202026-05-12_20at_204.36.08_20PM.jpeg" },
  { no: 40, image: "40.png" },
  { no: 39, image: "39.png" },
  { no: 38, image: "38.png" },
  { no: 37, image: "37.png" },
  { no: 36, image: "36.png" },
  { no: 35, image: "35.png" },
  { no: 34, image: "34.png" },
  { no: 33, image: "33.png" },
  { no: 32, image: "32.png" },
  { no: 31, image: "31.png" },
  { no: 30, image: "WhatsApp_20Image_202026-03-07_20at_2011.54.18_20AM.jpeg" },
  { no: 29, image: "29.png" },
  { no: 28, image: "28.png" },
  { no: 27, image: "27.jpeg" },
  { no: 21, image: "21.png" },
  { no: 18, image: "18.png" },
  { no: 17, image: "17.jpeg" },
  { no: 15, image: "WhatsApp_20Image_202022-01-31_20at_2015.57.52.jpeg" },
  { no: 14, image: "14.jpeg" },
  { no: 13, image: "WhatsApp_20Image_202026-03-07_20at_202.45.57_20PM.jpeg" },
  { no: 12, image: "12.png" },
  { no: 11, image: "11.png" },
  { no: 10, image: "10.png" },
  { no: 9, image: "9.jpg" },
  { no: 8, image: "8.jpeg" },
  { no: 7, image: "7.png" },
  { no: 6, image: "6-2.jpg" },
  { no: 5, image: "5.jpg" },
  { no: 4, image: "4.jpg" },
  { no: 3, image: "3.jpg" },
  { no: 2, image: "2.jpeg" },
  { no: 1, image: "1.jpg" },
  { no: 16, image: "16.jpeg" },
  { no: 44, image: "WhatsApp_20Image_202026-05-09_20at_202.59.15_20PM.jpeg" },
];

const slideImages = conferenceHeroImageSequence.map(
  ({ image }) => `${conferenceHeroImageBase}/${image}`
);


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

const applyCards = [
  { title: "Apply For Conference", subtitle: "Apply for Upcoming Conference", icon: FaFileAlt, link: "#conference-form" },
  { title: "Apply For Speaker/Resource Person", subtitle: "Speaker and Resource Person", icon: FaMicrophone, link: "#speaker-form" },
  { title: "Apply Travel Grant", subtitle: "Apply for Travel Grant", icon: FaPlaneDeparture, link: "#travel-grant-form" },
  { title: "Apply Academic Visit", subtitle: "Academic Visit Only", icon: FaUniversity, link: "#academic-visit-form" },
];

const opportunityCards = [
  {
    title: "Resource Person",
    text: "Selected individuals can serve as resource persons, sharing their expertise on various subjects related to the conference themes.",
    icon: FaMicrophone,
    link: "#speaker-form",
  },
  {
    title: "Travel Grants",
    text: "A 50% travel grant will be provided to eligible participants, helping offset the cost of attending these global events.",
    icon: FaPlaneDeparture,
    link: "#travel-grant-form",
  },
  {
    title: "Award Nominations",
    text: "Participants can nominate themselves or others for awards recognizing innovative contributions in their respective fields.",
    icon: FaAward,
    link: "#award-form",
  },
];

const previousGallery = [
  {
    title: "41st International Conference — Nepal",
    text: "Previous international conference record, participants, gallery images, and recognition details.",
    image: "/images/apply-for-conferences/previous-nepal-01.jpg",
  },
  {
    title: "40th International Conference — U.S.A",
    text: "Conference highlights, research presentations, awards, and participant memories.",
    image: "/images/apply-for-conferences/previous-usa-01.jpg",
  },
  {
    title: "39th International Conference — Vietnam",
    text: "Academic networking, multidisciplinary research, and sustainable development theme.",
    image: "/images/apply-for-conferences/39.png",
  },
  {
    title: "38th International Conference — Malaysia",
    text: "Winner list, participant details, and conference recognition records.",
    image: "/images/apply-for-conferences/38.png",
  },
];

const inputClass =
  "w-full rounded-[12px] border border-[#D6E0F0] px-4 py-3 text-[15px] outline-none transition duration-200 focus:border-[#1B3A6B]";

function BasicForm({ title, subtitle, buttonText, status, onSubmit, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(27,58,107,0.08)]"
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

export default function ApplyForConferencesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [search, setSearch] = useState("");
  const [conferenceStatus, setConferenceStatus] = useState("");
  const [speakerStatus, setSpeakerStatus] = useState("");
  const [travelStatus, setTravelStatus] = useState("");
  const [visitStatus, setVisitStatus] = useState("");
  const [awardStatus, setAwardStatus] = useState("");

  const heroSlides = useMemo(() => {
    return conferences.slice(0, 30).map((item, index) => ({
      no: item[0],
      title: item[1],
      subject: item[4],
      date: item[5],
      venue: item[6],
      image: slideImages[index % slideImages.length],
    }));
  }, []);

  

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const filteredConferences = useMemo(() => {
    const query = search.toLowerCase().trim();
    return conferences.filter((item) => item.join(" ").toLowerCase().includes(query));
  }, [search]);

  const submitForm = (event, setter, message) => {
    event.preventDefault();
    setter(message);
    event.currentTarget.reset();
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#F6F9FD] px-4 py-5 lg:px-8 lg:py-6">
  <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-[#C89B3C]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />

  <div className="relative mx-auto max-w-[1420px]">
    <div className="grid overflow-hidden rounded-[30px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_18px_55px_rgba(27,58,107,0.12)] lg:grid-cols-[1.25fr_0.75fr]">
      <div className="relative min-h-[250px] overflow-hidden bg-[#071B35] lg:min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.image + activeSlide}
            src={currentSlide.image}
            alt={currentSlide.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-[#FFFFFF]/95 px-3 py-1.5 text-[12px] font-semibold text-[#1B3A6B] shadow-sm backdrop-blur">
            Slide {activeSlide + 1} of 30
          </span>

          <span className="rounded-full bg-[#C89B3C] px-3 py-1.5 text-[12px] font-semibold text-[#FFFFFF] shadow-sm">
            Auto Slide
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071B35]/90 via-[#071B35]/40 to-transparent p-4">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#FFFFFF] px-3 py-1.5 text-[11px] font-semibold text-[#1B3A6B]">
              Conference {currentSlide.no}
            </span>
            <span className="rounded-full bg-[#C89B3C] px-3 py-1.5 text-[11px] font-semibold text-[#FFFFFF]">
              {currentSlide.date}
            </span>
          </div>

          <h3 className="mt-3 max-w-2xl text-[20px] font-bold leading-tight text-[#FFFFFF] lg:text-[24px]">
            {currentSlide.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() =>
            setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
          }
          className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/50 bg-[#FFFFFF]/20 text-[#FFFFFF] backdrop-blur transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFFFFF]/50 bg-[#FFFFFF]/20 text-[#FFFFFF] backdrop-blur transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex min-h-[300px] flex-col justify-between bg-[#FFFFFF] p-5 lg:min-h-[300px] lg:p-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-[#EAF1FB] px-3 py-1.5 text-[12px] font-semibold text-[#1B3A6B]">
            <FaGlobeAsia className="text-[#C89B3C]" />
            International Conference Applications
          </span>

          <h1 className="mt-3 text-[28px] font-extrabold leading-tight text-[#1B3A6B] lg:text-[34px]">
            Apply For International Conferences
          </h1>

          <p className="mt-3 text-[13px] leading-[1.6] text-[#1A1A2E]">
            Attending conferences organized by Edwin Incorporation, both nationally and internationally,
            is highly beneficial for academicians. These events provide a platform for sharing research,
            networking with peers and experts, and staying updated with the latest developments in their fields.
          </p>

          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-[16px] border border-[#D6E0F0] bg-[#F8FBFF] p-3">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6A85]">
                Current Theme
              </p>
              <p className="mt-1.5 text-[13px] font-semibold leading-[1.45] text-[#1B3A6B]">
                {currentSlide.subject}
              </p>
            </div>

            <div className="rounded-[16px] border border-[#D6E0F0] bg-[#F8FBFF] p-3">
              <p className="text-[11px] uppercase tracking-wide text-[#5A6A85]">
                Venue
              </p>
              <p className="mt-1.5 text-[13px] font-semibold leading-[1.45] text-[#1B3A6B]">
                {currentSlide.venue}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="#conference-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-5 py-2.5 text-[13px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              Apply Now
              <FaArrowRight className="text-[13px]" />
            </a>

            <a
              href="#conference-table"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B3A6B] px-5 py-2.5 text-[13px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
            >
              View Conferences
            </a>
          </div>

          <div className="mt-4 flex max-w-full flex-wrap items-center gap-1.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.no}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-[#C89B3C]"
                    : "w-2 bg-[#CBD6E5] hover:bg-[#1B3A6B]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[24px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-[0_18px_45px_rgba(27,58,107,0.14)]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1B3A6B]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[14px] font-normal leading-[1.7] text-[#5A6A85]">
                      {card.subtitle}
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
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[28px] bg-[#C89B3C]/20" />
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90"
                alt="Conference networking"
                className="relative h-[520px] w-full rounded-[28px] border border-[#D6E0F0] object-cover shadow-[0_20px_50px_rgba(27,58,107,0.12)]" loading="lazy" width="600" height="400" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Conferences for Academic Growth
              </h2>

              <p className="mt-5 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                Attending conferences organized by Edwin Incorporation, both nationally and internationally, is
                highly beneficial for academicians. These events provide a platform for sharing research, networking
                with peers and experts, and staying updated with the latest developments in their fields.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                Participating in such conferences can lead to collaborations, enhance research opportunities, and
                contribute to professional growth. Presenting at these conferences raises an academic's profile,
                potentially leading to recognition and advancement in their career.
              </p>

              <div className="mt-8 grid gap-5">
                {[
                  ["Research Sharing", "Present your research before peers, academicians, and expert panels.", FaBookOpen],
                  ["Interdisciplinary Exchange", "Engage with diverse associations and institutions in a rich academic environment.", FaGlobeAsia],
                  ["Professional Recognition", "Gain recognition through presentations, awards, nominations, and participation.", FaStar],
                ].map(([title, text, Icon], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="group flex gap-5 rounded-[18px] border border-[#D6E0F0] bg-[#FFFFFF] p-5 shadow-[0_4px_20px_rgba(27,58,107,0.06)] transition duration-200 hover:border-[#C89B3C]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#1B3A6B] text-[#FFFFFF] transition duration-200 group-hover:bg-[#C89B3C]">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-[18px] font-semibold text-[#1A1A2E]">{title}</h3>
                      <p className="mt-2 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              For Participants
            </p>
            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Opportunities for Applicants
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              In addition to attending the conferences, participants are invited to apply for the following opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {opportunityCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.link}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="group rounded-[22px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_8px_28px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:scale-110 group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="mt-6 text-[20px] font-semibold text-[#1A1A2E]">{card.title}</h3>
                  <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">{card.text}</p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 group-hover:text-[#C89B3C]">
                    Apply Now
                    <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-10 rounded-[22px] border border-[#D6E0F0] bg-[#EAF1FB] p-7">
            <h3 className="text-[22px] font-semibold text-[#1B3A6B]">How to Apply</h3>
            <p className="mt-3 text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
              Participants can apply online for conference attendance, resource person roles, travel grants,
              and award nominations through the official conference website. Each conference offers a rich agenda,
              including keynote speeches, panel discussions, workshops, and networking opportunities.
            </p>
            <p className="mt-4 text-[15px] font-semibold text-[#1B3A6B]">
              Our Travel Partner: DYA Tours and Travel Services
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Previous Conferences
              </p>
              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Previous Conference Gallery
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.8] text-[#1A1A2E]">
                View previous international conference records, winner lists, participant memories, and gallery highlights.
              </p>
            </div>

            <a
              href="#conference-table"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              View Full List
              <FaArrowRight />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {previousGallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className={`group overflow-hidden rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_12px_35px_rgba(27,58,107,0.10)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C] ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition duration-500 group-hover:scale-110 ${
                      index === 0 ? "h-[430px]" : "h-[220px]"
                    }`} loading="lazy" width="600" height="400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex rounded-full bg-[#C89B3C] px-3 py-1 text-[12px] font-semibold text-[#FFFFFF]">
                      Gallery
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[20px] font-semibold leading-tight text-[#1B3A6B]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">{item.text}</p>
                  <a
                    href="#conference-table"
                    className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 group-hover:text-[#C89B3C]"
                  >
                    View Details
                    <FaArrowRight className="text-[13px] transition duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {[
              "41st International Conference: Nepal",
              "40th International Conference: USA",
              "39th International Conference – Vietnam 2025",
              "Edwin Academic Conferences Services | Delhi",
              "Edwin's Award Services | Delhi",
            ].map((page) => (
              <a
                key={page}
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[14px] border border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4 transition duration-200 hover:border-[#C89B3C]"
              >
                <span className="flex items-center gap-3 text-[14px] font-medium text-[#1B3A6B]">
                  <FaFacebookF className="text-[#C89B3C]" />
                  {page}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    <section
  id="conference-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-16"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Online
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          Conference Application Form
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Submit your application for upcoming international conferences, participant registration,
          award nomination, speaker application, travel grant, or academic visit.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            "International Conference Registration",
            "Speaker / Resource Person Application",
            "Award Nomination",
            "Travel Grant / Academic Visit",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 text-[15px] font-semibold text-[#1B3A6B] shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
          <div>
            <h3 className="text-[26px] font-bold text-white">
              Upcoming Conference
            </h3>
            
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
            ✍
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <div className="max-h-[610px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="Upcoming Conference Application Form"
                className="block h-[1080px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=20f445b7c831f7886bce7a83dde6d4a33de4bf1791f8c9b02eeb574c53d6cb339c94ac3e89bcabfd7404f75b05b92751gidf049ebb99cb38fd6b269cd2ce7562d43c552c9c3105e85d946c9c7ed5833d49c"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  id="application-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-16"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
          <div>
            <h3 className="text-[26px] font-bold text-white">
              Register as a Resource person
            </h3>

            <p className="mt-1 text-[14px] text-white/75">
              Complete the application form below. Our team will contact you shortly.
            </p>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
            ✍
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <iframe
              title="Academic Visit Application Form"
              className="block h-[720px] w-full border-0"
              scrolling="auto"
              src="https://crm.zoho.in/crm/WebFormServeServlet?rid=9a8f28248897d24ce72f39ce851095339804da29bb96d7f2fe95d1c37f122270999f8748d158b0c5b333a0e6ff861848gid8f268c553e63db42f40c3e51f82399f803efaed6ecdaed5f34c67dfe81742d9e"
            />
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Online
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          Register Now as Resource Person
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Submit your academic visit request, institutional details, accompanying person information,
          reference details, and required documents through this secure online form.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            "Academic Visit Request",
            "Institute & Designation Details",
            "Accommodation Requirement",
            "Document Upload Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 text-[15px] font-semibold text-[#1B3A6B] shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="travel-grant-form"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-14"
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Online
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          Get Travel Grants
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Apply for travel grant support for academic conferences, research visits,
          paper presentations, institutional programs, and international academic participation.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            "Conference Travel Support",
            "Research Visit Assistance",
            "Academic Participation Grant",
            "Document Upload & Review",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 text-[15px] font-semibold text-[#1B3A6B] shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_28px_80px_rgba(27,58,107,0.18)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-5">
          <div>
            <h3 className="text-[26px] font-bold text-white">
              Travel Grant Application
            </h3>

            <p className="mt-1 text-[14px] text-white/75">
              Complete the travel grant form below.
            </p>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[26px] text-[#F4B400] md:flex">
            ✈️
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <div className="max-h-[520px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="Travel Grant Application Form"
                className="block h-[940px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=dadb991ae3c1fd81b43c402591cd9d805d19fd1b3967049954240dfe6b47ab27542826775beaea0de9b1bf2cceb3c8b7gidfd3f97cd840b43fc49c35d521b52c84b42f3fdd178116ca065b52cc88f1b67c8"
              />
            </div>
          </div>
        </div>
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

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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
            <div className="max-h-[520px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="Award Application Form"
                className="block h-[1080px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=b017f14ce01d6069078d8a476eaa4cd8947c8a3c25340adc11b1feb8c68f7245b227d60c49b68dc3140ffc3e234ea723gidfc49e8a9052a5e4249f555acafb3282e3d61b7459cad821af0751993c1846f38"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Online
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          Apply for Award
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Submit your award nomination or application for academic excellence,
          research contribution, professional achievement, innovation, and institutional recognition.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            "Academic Excellence Award",
            "Research Contribution Recognition",
            "Professional Achievement Award",
            "Profile & Document Review",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D6E0F0] bg-white/80 px-5 py-4 text-[15px] font-semibold text-[#1B3A6B] shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
