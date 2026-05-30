import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaDatabase,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaFilter,
  FaGlobe,
  FaGraduationCap,
  FaJournalWhills,
  FaLayerGroup,
  FaMicroscope,
  FaPaperPlane,
  FaSearch,
  FaShieldAlt,
  FaUniversity,
} from "react-icons/fa";

const heroImages = {
  main: "/images/edwin-journals-hero.jpg",
  journal: "/images/edwin-journals-library.jpg",
  research: "/images/edwin-journals-research.jpg",
};

const fallbackImages = {
  main: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=90",
  journal:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=90",
  research:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90",
};

const journals = [
  {
    title: "Journal of Management Practices and Innovations",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Management",
    desc: "Publishes practical insights and scholarly research on management innovations and evolving organizational strategies.",
  },
  {
    title: "JMA Journal of Business & Societal Transformations",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Business",
    desc: "Explores the impact of business trends on societal evolution, sustainability, and inclusive transformation.",
  },
  {
    title: "Journal of Leadership, Economics, and Management",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Management",
    desc: "Covers cross-disciplinary studies in leadership theories, economic models, and strategic management practices.",
  },
  {
    title: "JMA Journal of Multidisciplinary Management and Research",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Multidisciplinary",
    desc: "Focuses on diverse areas of management research through a multidisciplinary lens to foster academic innovation.",
  },
  {
    title: "Mahakoushal Journal of Multidisciplinary Studies",
    issn: "P-ISSN: 3050-841X, E-ISSN: 3050-8428",
    status: "Done",
    category: "Multidisciplinary",
    desc: "Publishes interdisciplinary research fostering academic excellence across fields of science, humanities, and applied studies through innovative findings and thoughtful discourse.",
  },
  {
    title: "Edwin Group Journals",
    issn: "ISSN: 2395-1079, 2348-0459, 2394-4498, 2394-3084",
    status: "Done",
    category: "Group Journals",
    desc: "A multi-journal platform hosting diverse academic research and advancements with a focus on quality publishing across varied disciplines globally.",
  },
  {
    title: "International Journal of Nursing Science and Healthcare",
    issn: "E-ISSN: 3050-6719, P-ISSN: 3050-6727",
    status: "Done",
    category: "Healthcare",
    desc: "Focuses on clinical, community, and theoretical aspects of nursing and healthcare sciences with an aim to promote evidence-based practice.",
  },
  {
    title: "Global Journal of Engineering, Science & Social Science Studies",
    issn: "ISSN: 2394-3084",
    status: "Done",
    category: "Engineering",
    desc: "An interdisciplinary journal integrating engineering, science, and social sciences to encourage cross-domain research and global innovation.",
  },
  {
    title: "IJAVFA - Int. Journal of Animal, Veterinary, Fishery & Allied Sciences",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Veterinary",
    desc: "Provides a forum for current research and practices in animal sciences, veterinary medicine, aquaculture, and allied disciplines impacting global ecosystems.",
  },
  {
    title: "DYA Journal of Modern Nursing Science",
    issn: "E-3050-6859, P-3050-6840",
    status: "Done",
    category: "Nursing",
    desc: "Dedicated to advanced nursing theory, research, and practices aiming to transform healthcare delivery and patient outcomes worldwide.",
  },
  {
    title: "Int. Journal of Multidisciplinary Research in Science & Business",
    issn: "E-3050-7219",
    status: "Done",
    category: "Science & Business",
    desc: "Explores the convergence of science and business disciplines, encouraging real-world application and scholarly impact through innovative research.",
  },
  {
    title: "Journal of Scientific Advances",
    issn: "P-ISSN: 3050-757X, E-ISSN: 3050-7588",
    status: "Done",
    category: "Science",
    desc: "Publishes breakthrough research in science and technology to accelerate the global pace of innovation and academic progression.",
  },
  {
    title: "South Asia Journal of Multidisciplinary Studies",
    issn: "ISSN: 2395-1079 (UGC Approved)",
    status: "Done",
    category: "Multidisciplinary",
    desc: "Recognized by UGC, this journal focuses on multidisciplinary studies reflecting regional issues and innovative practices in South Asia.",
  },
  {
    title: "GJMS - Global Journal of Multidisciplinary Studies",
    issn: "ISSN: 2348-0459",
    status: "Done",
    category: "Multidisciplinary",
    desc: "Encourages global discourse and scholarly research across disciplines, contributing to impactful knowledge sharing and academic growth.",
  },
  {
    title: "JCHRI - Journal of Collaborative Healthcare Research and Innovations",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Healthcare",
    desc: "Focuses on collaborative healthcare practices, innovations in medical science, and interdisciplinary research for better patient outcomes.",
  },
  {
    title: "Journal of Integrated Management Studies",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Management",
    desc: "Bridges theory and practice in management, integrating cross-functional strategies and leadership insights in business environments.",
  },
  {
    title: "Jabalpur Journal of Global Management and Innovation",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Management",
    desc: "Examines global business practices, leadership models, and innovation strategies for evolving competitive markets.",
  },
  {
    title: "JMA Journal of Business, Technology, and Society",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Technology",
    desc: "Explores intersections of business, technology, and social sciences to foster inclusive growth and digital transformation.",
  },
  {
    title: "Jabalpur Journal of Organizational and Developmental Studies",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Management",
    desc: "Supports empirical and theoretical studies in organization behavior, development, and change management.",
  },
  {
    title: "JMA Journal of Strategic Management and Interdisciplinary Studies",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Management",
    desc: "Integrates strategic thinking with interdisciplinary approaches, guiding business transformation and policy innovation.",
  },
  {
    title: "Jabalpur Journal of Applied Management and Emerging Trends",
    issn: "P-ISSN 3051-3723, E-ISSN 3051-3724",
    status: "Done",
    category: "Management",
    desc: "Focuses on application-based management research and emerging global business trends.",
  },
  {
    title: "Intellect Horizon Journal",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Multidisciplinary",
    desc: "Fosters forward-thinking research in emerging disciplines, spotlighting innovation and intellectual exploration across academic frontiers.",
  },
  {
    title: "The Research Frontier Journal",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Research",
    desc: "Explores new frontiers in research, encouraging experimentation and novel insights across a broad spectrum of disciplines.",
  },
  {
    title: "Epoch Journal of Science & Humanities",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Science & Humanities",
    desc: "Publishes peer-reviewed research blending scientific inquiry with humanities, fostering cross-disciplinary dialogue and innovative perspectives.",
  },
  {
    title: "Global Insights Journal",
    issn: "P-ISSN 3051-2336, E-ISSN 3051-2344",
    status: "Done",
    category: "Global Studies",
    desc: "Focuses on global perspectives and emerging research across science, culture, technology, and policy for diverse readership worldwide.",
  },
  {
    title: "Transcendence: A Multidisciplinary Journal",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Multidisciplinary",
    desc: "Encourages scholarly contributions that transcend boundaries between fields, fostering integrative academic research and ideas.",
  },
  {
    title: "Journal of Advanced Studies",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Advanced Studies",
    desc: "Dedicated to cutting-edge research in advanced disciplines, promoting thought leadership and academic rigor.",
  },
  {
    title: "Innovative Research Review",
    issn: "ISSN: Not listed",
    status: "Done",
    category: "Research Review",
    desc: "Covers diverse academic innovations, offering critical reviews and synthesis of cutting-edge studies in all disciplines.",
  },
  {
    title: "Journal of Advanced Research in Law and Justice",
    issn: "P-ISSN: 3117-521X E-ISSN: 3117-5228",
    status: "Done",
    category: "Law",
    desc: "Explores research in law and justice, with a focus on contemporary challenges and emerging practices in legal theory.",
  },
  {
    title: "Global Review of Jurisprudence and Policy",
    issn: "P-ISSN: 3117-5236 E-ISSN: 3117-5244",
    status: "Done",
    category: "Law",
    desc: "Covers global perspectives on jurisprudence and public policy, addressing the latest legal reforms and debates.",
  },
  {
    title: "Edwin Journal of Law, Ethics and Governance",
    issn: "ISSN: EJLEG",
    status: "Done",
    category: "Law",
    desc: "Focuses on the intersections of law, ethics, and governance, emphasizing ethical governance in modern institutions.",
  },
  {
    title: "Journal of Modern Legal Thought and Practice",
    issn: "ISSN: JMLTP",
    status: "Done",
    category: "Law",
    desc: "Publishes contemporary research in legal thought, modern practice, and transformative legal policies.",
  },
  {
    title: "FutureScape: Journal of Ghost Science",
    issn: "P-ISSN: 3051-1097 E-ISSN: 3051-1100",
    status: "Done",
    category: "Special Studies",
    desc: "Explores research in ghost science, covering paranormal theories, ghost studies, and unexplained phenomena.",
  },
  {
    title: "Innovative Horizons Journal of Drama",
    issn: "P-ISSN: 3051-0872 E-ISSN: 3051-0880",
    status: "Done",
    category: "Drama",
    desc: "Covers innovative approaches in drama, theatre, and performance studies, encouraging critical discourse in the field.",
  },
  {
    title: "Journal of Visionary Insights of Physics",
    issn: "P-ISSN: 3051-0899 E-ISSN: 3051-0902",
    status: "Done",
    category: "Physics",
    desc: "Focuses on visionary approaches to physics, highlighting groundbreaking research in theoretical and experimental physics.",
  },
  {
    title: "Journal of Advanced Healthcare Research in Pediatric",
    issn: "P-ISSN: 3051-0856 E-ISSN: 3051-0864",
    status: "Done",
    category: "Healthcare",
    desc: "Focuses on pediatric healthcare, from early childhood development to advanced research in pediatric medical sciences.",
  },
  {
    title: "Journal of Biomedical Science Innovations and Practice",
    issn: "P-ISSN: 3051-083X E-ISSN: 3051-0848",
    status: "Done",
    category: "Biomedical",
    desc: "Dedicated to research in biomedical sciences, exploring innovations in healthcare and cutting-edge clinical practices.",
  },
  {
    title: "Journal of Clinical Frontiers & Emerging Therapies Research",
    issn: "P-ISSN: 3051-0813 E-ISSN: 3051-0821",
    status: "Done",
    category: "Clinical Research",
    desc: "Explores the latest advancements in clinical research, focusing on emerging therapies and cutting-edge healthcare solutions.",
  },
  {
    title: "Journal of Health Pharma and Life Sciences",
    issn: "P-ISSN: 3117-5368 E-ISSN: 3117-5376",
    status: "Done",
    category: "Pharma",
    desc: "Dedicated to interdisciplinary research in health, pharmaceuticals, and life sciences, promoting breakthroughs in global healthcare.",
  },
  {
    title: "International Journal Advance Research Publication",
    issn: "P-ISSN: 3117-5309 E-ISSN: 3117-5317",
    status: "Done",
    category: "Research",
    desc: "Publishes high-quality research across diverse academic fields, fostering knowledge exchange and academic growth worldwide.",
  },
];

const categories = ["All", ...Array.from(new Set(journals.map((journal) => journal.category)))];

const featureCards = [
  {
    title: "Fast Peer-Reviewed Publication",
    text: "Research publication opportunities across multiple academic disciplines.",
    icon: FaPaperPlane,
  },
  {
    title: "Interdisciplinary Journal Network",
    text: "A wide academic publishing hub promoting research, innovation, and global collaboration.",
    icon: FaLayerGroup,
  },
  {
    title: "Academic Visibility",
    text: "Support for authors, researchers, editors, and institutions seeking scholarly publication.",
    icon: FaGlobe,
  },
];

const inputClass =
  "w-full rounded-[14px] border border-[#D6E0F0] bg-white px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#8A98AD] focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10";

function SubmitPaperForm({ status, onSubmit }) {
  return (
    <motion.form
      id="submit-paper-form"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 rounded-[30px] border border-[#D6E0F0] bg-white p-6 shadow-[0_20px_55px_rgba(27,58,107,0.12)] lg:p-8"
    >
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          Submit Your Research Paper
        </p>
        <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
          Research Paper Submission Form
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="text" placeholder="Author Name *" className={inputClass} />
        <input required type="email" placeholder="Email Address *" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="tel" placeholder="Mobile Number *" className={inputClass} />
        <select required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select Journal Category
          </option>
          {categories
            .filter((item) => item !== "All")
            .map((item) => (
              <option key={item}>{item}</option>
            ))}
        </select>
      </div>

      <input type="text" placeholder="Paper / Article Title" className={inputClass} />

      <select className={inputClass} defaultValue="">
        <option value="" disabled>
          Select Preferred Journal
        </option>
        {journals.map((journal) => (
          <option key={journal.title}>{journal.title}</option>
        ))}
      </select>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Institution / Affiliation" className={inputClass} />
        <input type="text" placeholder="Country / City" className={inputClass} />
      </div>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className={`${inputClass} file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-white`}
      />

      <textarea
        rows="4"
        placeholder="Write abstract, subject area, publication requirement, or message"
        className={`${inputClass} resize-none`}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-[#C89B3C]"
        >
          Submit Paper
          <FaArrowRight className="text-[13px]" />
        </button>

        <button
          type="reset"
          className="rounded-full border border-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
        >
          Reset
        </button>
      </div>

      {status && (
        <p className="rounded-[12px] border border-[#2D7A4F] bg-[#F4FFF8] px-4 py-3 text-center text-[15px] text-[#2D7A4F]">
          {status}
        </p>
      )}
    </motion.form>
  );
}

export default function EdwinJournalsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  const filteredJournals = useMemo(() => {
    const query = search.toLowerCase().trim();

    return journals.filter((journal) => {
      const matchesSearch = `${journal.title} ${journal.issn} ${journal.desc} ${journal.category}`
        .toLowerCase()
        .includes(query);

      const matchesCategory = category === "All" || journal.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const submitForm = (event) => {
    event.preventDefault();
    setFormStatus("Your research paper submission request has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#F6F9FD] px-5 py-12 lg:px-8 lg:py-16">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C89B3C]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#1B3A6B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E0F0] bg-white px-5 py-2 text-[13px] font-semibold text-[#1B3A6B] shadow-[0_8px_24px_rgba(27,58,107,0.08)]">
                <FaJournalWhills className="text-[#C89B3C]" />
                Edwin Journals
              </span>

              <h1 className="mt-6 text-[42px] font-extrabold leading-tight text-[#1B3A6B] lg:text-[62px]">
                About Journals
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-[#1A1A2E]">
                Edwin Journals is a prominent hub for interdisciplinary academic
                publishing, promoting high-quality research, innovation, and global
                collaboration. It offers fast, peer-reviewed publication opportunities
                for researchers in various fields.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#submit-paper-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-7 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-[#C89B3C]"
                >
                  Submit Your Research Paper
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#journals-list"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B3A6B] px-7 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                >
                  View Journals
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["40+", "Listed Journals", FaBookOpen],
                  ["Global", "Collaboration", FaGlobe],
                  ["Peer", "Reviewed", FaCheckCircle],
                ].map(([title, sub, Icon]) => (
                  <div
                    key={title}
                    className="rounded-[22px] border border-[#D6E0F0] bg-white p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)]"
                  >
                    <Icon className="text-[24px] text-[#C89B3C]" />
                    <p className="mt-3 text-[24px] font-extrabold text-[#1B3A6B]">
                      {title}
                    </p>
                    <p className="mt-1 text-[13px] text-[#5A6A85]">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-[28px] bg-[#C89B3C]/20 lg:block" />

              <div className="relative grid gap-4">
                <div className="overflow-hidden rounded-[34px] border border-[#D6E0F0] bg-white p-4 shadow-[0_22px_60px_rgba(27,58,107,0.14)]">
                  <img
                    src={heroImages.main}
                    alt="Edwin Journals"
                    className="h-[360px] w-full rounded-[26px] object-cover lg:h-[430px]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.main;
                    }}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <img
                    src={heroImages.journal}
                    alt="Academic journal library"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.journal;
                    }}
                  />

                  <img
                    src={heroImages.research}
                    alt="Research publication"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.research;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Academic Publishing Hub
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Interdisciplinary Journals for Researchers, Academicians and Institutions
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Edwin Journals supports scholarly communication across management,
                science, healthcare, law, humanities, technology, business, nursing,
                engineering, and multidisciplinary research.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Researchers can explore suitable journals and submit their research
                paper through the submission form.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {featureCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="group rounded-[24px] border border-[#D6E0F0] bg-white p-6 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-300 group-hover:bg-[#C89B3C] group-hover:text-white">
                      <Icon className="text-[22px]" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold text-[#1B3A6B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#1A1A2E]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="journals-list" className="bg-[#F6F9FD] px-5 py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Edwin Journals List
              </p>

              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Browse Journals
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                Search by journal title, ISSN, category, or subject area.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search journal..."
                  className="w-full rounded-full border border-[#D6E0F0] bg-white py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[360px]"
                />
              </div>

              <div className="relative">
                <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full appearance-none rounded-full border border-[#D6E0F0] bg-white py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 focus:border-[#1B3A6B]"
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredJournals.map((journal, index) => (
              <motion.article
                key={journal.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.18) }}
                className="group relative overflow-hidden rounded-[26px] border border-[#D6E0F0] bg-white p-6 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#1B3A6B] text-white transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                      <FaBookOpen className="text-[22px]" />
                    </div>

                    <span className="rounded-full bg-[#EAF1FB] px-3 py-1 text-[12px] font-semibold text-[#1B3A6B]">
                      {journal.status}
                    </span>
                  </div>

                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-wide text-[#C89B3C]">
                    {journal.category}
                  </p>

                  <h3 className="mt-2 text-[20px] font-semibold leading-tight text-[#1B3A6B]">
                    {journal.title}
                  </h3>

                  <p className="mt-3 text-[13px] font-semibold leading-[1.6] text-[#5A6A85]">
                    {journal.issn}
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.75] text-[#1A1A2E]">
                    {journal.desc}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#submit-paper-form"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-5 py-2.5 text-[13px] font-medium text-white transition duration-200 hover:bg-[#C89B3C]"
                    >
                      Submit Paper
                      <FaArrowRight className="text-[11px]" />
                    </a>

                    <a
                      href="#submit-paper-form"
                      className="inline-flex items-center justify-center rounded-full border border-[#1B3A6B] px-5 py-2.5 text-[13px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
                    >
                      Visit Journal
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-[18px] border border-[#D6E0F0] bg-white px-5 py-4">
            <p className="text-[14px] text-[#5A6A85]">
              Showing {filteredJournals.length} journal records
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-[#D6E0F0] bg-[#F6F9FD] p-6 shadow-[0_18px_42px_rgba(27,58,107,0.10)]">
              <div className="rounded-[24px] bg-[#1B3A6B] p-7 text-white">
                <FaEnvelopeOpenText className="text-[38px] text-[#C89B3C]" />

                <h3 className="mt-5 text-[28px] font-bold">
                  Ready to Submit Your Research Paper?
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-white">
                  Select your preferred journal, upload your manuscript, and submit
                  your research paper details for review and publication support.
                </p>

                <a
                  href="#submit-paper-form"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
                >
                  Submit Paper Online
                  <FaArrowRight />
                </a>
              </div>
            </div>

            <SubmitPaperForm status={formStatus} onSubmit={submitForm} />
          </div>
        </div>
      </section>
    </div>
  );
}