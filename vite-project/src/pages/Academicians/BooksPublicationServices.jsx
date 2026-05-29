import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaArrowRight,
  FaBook,
  FaBookOpen,
  FaBuilding,
  FaCertificate,
  FaCheckCircle,
  FaEdit,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
  FaRegFileAlt,
  FaRocket,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaUserEdit,
  FaWhatsapp,
} from "react-icons/fa";

const amazonStoreLink =
  "https://www.amazon.in/s?k=edwin%2Bincorporation&crid=10DN8I73F4PHH&sprefix=edwin%2Bincorporation%2Caps%2C232&ref=nb_sb_noss_2";

const heroImage =
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1900&q=90";

const publishingDeskImage =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80";

const amazonBookImage =
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1400&q=80";

const services = [
  {
    title: "About Us",
    text: "Welcome to Edwin Consultancy Services for Publications. Founded in 2014, Edwin Consultancy Services today publishes a complete range of subjects and genres for academicians and researchers globally.",
    icon: FaBuilding,
  },
  {
    title: "Author’s",
    text: "Write My Book: Get your book written, polished, and published all from one trusted source — without hassles, mistakes, or worries!",
    icon: FaUserEdit,
  },
  {
    title: "Publications",
    text: "Tridev Publication Nepal, GJMS Publication, Bonfring Publication Coimbatore, Bangbook Publication Thailand, and many more partners collaborate with Edwin INC.",
    icon: FaPrint,
  },
  {
    title: "Published Books",
    text: "Get your book written, polished, and published from one source, ensuring high quality and worldwide distribution — hassle-free.",
    icon: FaBookOpen,
  },
];

const applyCards = [
  {
    title: "Apply Book Publication",
    subtitle: "Single Authors",
    description:
      "Submit your manuscript or proposal for ISBN book publication, national publication, and international publication support.",
    icon: FaBook,
    link: "#book-publication-form",
  },
  {
    title: "Submit Chapter for Edited Book",
    subtitle: "Upcoming Edited_Book",
    description:
      "Submit your chapter for upcoming edited book projects across disciplines and academic themes.",
    icon: FaRegFileAlt,
    link: "#chapter-form",
  },
  {
    title: "Apply for Book Editor",
    subtitle: "Only Science Background",
    description:
      "Apply as an editor for edited book projects and contribute to academic publishing leadership.",
    icon: FaEdit,
    link: "#editor-form",
  },
];

const featureCards = [
  {
    title: "70 % Royalty",
    text: "Authors usually receive their royalties on time based on the number of books sold.",
    icon: FaStar,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Books Availability on Amazon",
    text: "Edwin Group of Publications keeps books on Amazon.com for convenient ordering and delivery.",
    icon: FaAmazon,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Verify Books Only",
    text: "Books are published after following instructions and required publication standards.",
    icon: FaCertificate,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Advertisement Supports",
    text: "Publication support includes book visibility, promotional communication, and platform support.",
    icon: FaRocket,
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=900&q=80",
  },
];

const publishingStats = [
  { value: "23+", label: "Publication Houses Worldwide" },
  { value: "2014", label: "Founded Publication Services" },
  { value: "70%", label: "Royalty Model Highlight" },
  { value: "ISBN", label: "Compulsory for Book Publication" },
];

const publishedBooksReport = [
  {
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80",
    title: "Basic Fundamental Of Physics",
    date: "26-May-2022",
    type: "International",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=300&q=80",
    title: "Janankikeeya Parivartan Evam Arthik Rupaantran",
    date: "22-Aug-2019",
    type: "International",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=300&q=80",
    title: "Conference Proceedings - Nirmala College, Ujjain, MP",
    date: "2022",
    type: "Conference Proceedings",
  },
];

const ebookResources = [
  {
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=300&q=80",
    title: "Statistics In Research: Dimensions, Trends And Challenges",
    edition: "Hindi",
    language: "English",
    author: "Dr. Shruti, Dr. Gaurav Sankalp",
    order: amazonStoreLink,
  },
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80",
    title: "Indian Knowledge Tradition in Modern Context",
    edition: "Hindi",
    language: "English",
    author: "Prof (Dr.) Sanjay Jain, Prof (Dr.) Samta Jain",
    order: amazonStoreLink,
  },
  {
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80",
    title: "Fintech: in India",
    edition: "Hindi",
    language: "English",
    author: "Dr. Anil Kumar Mahra, Dr. Kamesh Satish Pawar",
    order: amazonStoreLink,
  },
  {
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=300&q=80",
    title: "Research Methods and Academic Writing",
    edition: "First",
    language: "English",
    author: "Edwin Group of Publications",
    order: amazonStoreLink,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=300&q=80",
    title: "Emerging Trends in Multidisciplinary Research",
    edition: "First",
    language: "English",
    author: "Edwin Group of Publications",
    order: amazonStoreLink,
  },
  {
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=300&q=80",
    title: "Conference Proceedings and Academic Innovations",
    edition: "First",
    language: "English",
    author: "Edwin Group of Publications",
    order: amazonStoreLink,
  },
  {
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80",
    title: "Management and Research Perspectives",
    edition: "First",
    language: "English",
    author: "Edwin Group of Publications",
    order: amazonStoreLink,
  },
];

const editedBooks = [
  {
    discipline: "Technology and Computer Science",
    titles: [
      "AI Revolution: Navigating the Future of Intelligence",
      "Quantum Computing: Unlocking the Next Technological Leap",
      "Cybersecurity Frontiers: Emerging Threats and Defenses",
      "Edge Computing: Decentralizing the Future of Data",
      "The Internet of Things: Connecting Everything",
      "Deep Learning: Breakthroughs in Artificial Intelligence",
    ],
  },
  {
    discipline: "Health and Medicine",
    titles: [
      "Genomics in Medicine: Personalized Healthcare Breakthroughs",
      "Pandemic Preparedness: Lessons from COVID-19 and Beyond",
      "Digital Health: Innovations Transforming Patient Care",
      "Telemedicine: The New Era of Healthcare Delivery",
      "Immunotherapy: Advancing Cancer Treatment",
      "Gut Health: The Microbiome Revolution",
    ],
  },
  {
    discipline: "Environmental Science",
    titles: [
      "Climate Solutions: Innovations for a Sustainable Planet",
      "Biodiversity in Crisis: Conservation Strategies for the 21st Century",
      "Renewable Energy: Pathways to a Greener Future",
      "Oceans Under Threat: The Fight Against Marine Pollution",
      "Urban Ecology: Integrating Nature into Cities",
      "Climate Adaptation: Strategies for a Changing World",
    ],
  },
  {
    discipline: "Social Sciences",
    titles: [
      "The Changing Face of Society: Trends in Demographics and Culture",
      "Global Inequality: Causes, Consequences, and Solutions",
      "Digital Sociology: Understanding Human Behavior in the Online Age",
      "The Gig Economy: Shaping the Future of Work",
      "Migration and Society: Global Movements and Local Impacts",
      "Social Media and Mental Health: Navigating the Digital Landscape",
    ],
  },
  {
    discipline: "Education",
    titles: [
      "EdTech Revolution: Transforming Learning in the Digital Age",
      "Inclusive Education: Strategies for Diverse Classrooms",
      "Lifelong Learning: Adapting to a Rapidly Changing World",
      "STEM Education: Preparing the Innovators of Tomorrow",
      "E-Learning Innovations: Transforming Traditional Classrooms",
      "Mindfulness in Education: Enhancing Focus and Well-being",
    ],
  },
  {
    discipline: "Business and Economics",
    titles: [
      "The Future of Work: Automation and Employment Trends",
      "Sustainable Business Practices: Profit with Purpose",
      "Cryptocurrencies and the Blockchain Economy",
      "The Sharing Economy: Disrupting Traditional Business Models",
      "Green Finance: Investing in a Sustainable Future",
      "Artificial Intelligence in Business: Opportunities and Challenges",
    ],
  },
  {
    discipline: "Psychology",
    titles: [
      "Mental Health in the Modern World: Challenges and Solutions",
      "The Neuroscience of Behavior: Insights from Brain Research",
      "Positive Psychology: Cultivating Well-being in Everyday Life",
      "The Psychology of Resilience: Coping in a Complex World",
      "Digital Detox: Finding Balance in a Hyperconnected Age",
      "Trauma-Informed Care: Approaches for Healing",
    ],
  },
  {
    discipline: "Arts and Humanities",
    titles: [
      "Digital Art: Exploring Creativity in the Virtual Realm",
      "Cultural Heritage in the Age of Globalization",
      "Literature and Society: Reflections of Contemporary Issues",
      "Virtual Reality in the Arts: New Frontiers of Creativity",
      "The Role of Storytelling in Shaping Culture",
      "Art and Activism: Voices for Social Change",
    ],
  },
  {
    discipline: "Engineering",
    titles: [
      "Sustainable Engineering: Designing for the Future",
      "Robotics and Automation: Shaping the Modern World",
      "Smart Cities: Engineering Urban Innovations",
      "Additive Manufacturing: Revolutionizing Production",
      "Resilient Infrastructure: Engineering for Disaster Preparedness",
      "Bioengineering: Innovations in Health and Medicine",
    ],
  },
  {
    discipline: "Physics and Mathematics",
    titles: [
      "The Quantum Universe: New Perspectives on Reality",
      "Mathematical Models: Applications in Science and Technology",
      "The Expanding Cosmos: Advances in Astrophysics",
      "Dark Matter and Dark Energy: Unveiling the Universe's Mysteries",
      "Topological Mathematics: New Horizons in Geometry",
      "Quantum Mechanics: Bridging Theory and Application",
    ],
  },
  {
    discipline: "Law and Policy",
    titles: [
      "Tech Policy: Governance in the Age of Innovation",
      "Human Rights in a Globalized World: New Challenges",
      "Environmental Law: Protecting the Planet through Policy",
      "Data Privacy: Navigating the Legal Landscape",
      "Blockchain and Law: Regulating Decentralized Technologies",
      "International Law in the Age of Globalization",
    ],
  },
  {
    discipline: "Agriculture and Food Sciences",
    titles: [
      "AgriTech Innovations: The Future of Farming",
      "Sustainable Food Systems: From Farm to Fork",
      "Genetic Engineering in Agriculture: Promise and Perils",
      "Vertical Farming: Urban Agriculture for a Growing Population",
      "Precision Agriculture: Using Technology to Boost Crop Yields",
      "Alternative Proteins: The Future of Sustainable Food",
    ],
  },
  {
    discipline: "Architecture and Urban Planning",
    titles: [
      "Smart Buildings: Integrating Technology into Architecture",
      "Sustainable Urban Design: Planning for Green Cities",
      "Affordable Housing: Solutions for a Growing Crisis",
    ],
  },
  {
    discipline: "Political Science",
    titles: [
      "Populism and Democracy: Understanding the Global Shift",
      "Global Governance: Navigating a Multipolar World",
      "Cyber Warfare: The New Battlefield",
    ],
  },
  {
    discipline: "Sports Science",
    titles: [
      "Sports Analytics: Enhancing Performance with Data",
      "Injury Prevention in Sports: Latest Research and Techniques",
      "The Psychology of Winning: Mental Strategies for Success",
    ],
  },
];

const formTypes = [
  "Book Publication",
  "Single Authors",
  "Chapter in Edited Book",
  "Become Editor in Edited Book",
  "ISBN Book Publication",
  "International Book Publication",
];

export default function EdwinGroupPublicationsPage() {
  const [bookSearch, setBookSearch] = useState("");
  const [publicationStatus, setPublicationStatus] = useState("");
  const [chapterStatus, setChapterStatus] = useState("");
  const [editorStatus, setEditorStatus] = useState("");

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

  const filteredBooks = useMemo(() => {
    const query = bookSearch.toLowerCase().trim();

    return editedBooks.filter((item) =>
      `${item.discipline} ${item.titles.join(" ")}`.toLowerCase().includes(query)
    );
  }, [bookSearch]);

  const handlePublicationSubmit = (event) => {
    event.preventDefault();
    setPublicationStatus(
      "Your book publication application has been prepared successfully."
    );
    event.currentTarget.reset();
  };

  const handleChapterSubmit = (event) => {
    event.preventDefault();
    setChapterStatus(
      "Your edited book chapter submission has been prepared successfully."
    );
    event.currentTarget.reset();
  };

  const handleEditorSubmit = (event) => {
    event.preventDefault();
    setEditorStatus("Your book editor application has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative min-h-[760px] overflow-hidden bg-[#1B3A6B]">
        <img
          src={heroImage}
          alt="Edwin Book Publication"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FFFFFF] to-transparent" />

        <div className="relative mx-auto flex min-h-[760px] max-w-[1200px] items-center px-5 py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-[20px] border border-[#D6E0F0]/40 bg-[#FFFFFF]/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur lg:p-10"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#EAF1FB] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
                <FaBookOpen className="text-[#C89B3C]" />
                Edwin Group of Publications
              </div>

              <h1 className="text-[42px] font-bold leading-tight text-[#1B3A6B]">
                Edwin Book Publication
              </h1>

              <p className="mt-5 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Book publication is vital for academicians as it significantly enhances
                their scholarly profile. It helps in demonstrating depth of expertise,
                contributes to academic discourse, and often plays a crucial role in
                career advancement, such as in tenure evaluations and promotions.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Publishing a book also allows academicians to share their research with a
                wider audience, establish authority in their field, and can lead to new
                opportunities for collaboration and research funding.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#book-publication-form"
                  className="rounded-[8px] bg-[#1B3A6B] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                >
                  Apply Book Publication
                </a>

                <a
                  href="#ebook-order"
                  className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                >
                  E-Book Order Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {publishingStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[18px] border border-[#D6E0F0]/50 bg-[#FFFFFF]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur"
                >
                  <p className="text-[34px] font-bold text-[#1B3A6B]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[14px] font-normal text-[#5A6A85]">
                    {stat.label}
                  </p>
                </div>
              ))}

              <a
                href={amazonStoreLink}
                target="_blank"
                rel="noreferrer"
                className="group col-span-full rounded-[18px] border border-[#D6E0F0]/50 bg-[#FFFFFF]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur transition duration-200 ease-in-out hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#C89B3C] text-[#FFFFFF]">
                    <FaAmazon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1A1A2E]">
                      Published Books on Amazon
                    </h3>
                    <p className="mt-1 text-[14px] font-normal text-[#5A6A85]">
                      Click here to open Edwin Incorporation books on Amazon.
                    </p>
                  </div>
                  <FaArrowRight className="ml-auto text-[#1B3A6B] transition duration-200 ease-in-out group-hover:translate-x-1 group-hover:text-[#C89B3C]" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-[#FFFFFF] px-5 py-12">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {applyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.link}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.05 }}
                className="group rounded-[16px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:-translate-y-1 hover:border-[#C89B3C]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:bg-[#1B3A6B] group-hover:text-[#FFFFFF]">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="mt-5 text-[22px] font-semibold text-[#1B3A6B]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] font-normal text-[#5A6A85]">
                  {card.subtitle}
                </p>
                <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out group-hover:text-[#C89B3C]">
                  Go to Form <FaArrowRight className="text-[13px]" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Book Publication Services for Researchers
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                International Platform for Academic Books
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                The ISBN (International Standard Book Number) is important as it provides
                a unique identifier for the book, facilitating its distribution and sale
                globally. Edwin Incorporation supports this endeavor by publishing books
                from various corners of the world, including India, Singapore, the USA,
                Canada, the UK, and Dubai.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Edwin Group of Publications is a part of Edwin Incorporation and has
                more than 23 publication houses worldwide. The organization publishes
                books from different parts of the world, with publication houses based
                in the US, Singapore, Thailand, Dubai, the UK, California, and Chicago,
                among others.
              </p>

              <div className="mt-8 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <img
                  src={publishingDeskImage}
                  alt="Book writing and publication desk"
                  className="h-[310px] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
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
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {service.text}
                    </p>

                    <a
                      href="#book-publication-form"
                      className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:text-[#C89B3C]"
                    >
                      Read More
                      <FaArrowRight className="text-[13px]" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Publishing Assurance
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                ISBN, Amazon Availability and Royalty Support
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Before publishing any books, the organization follows the instructions
                given by the top authority to ensure that the books meet the required
                standards. Additionally, an ISBN is compulsory for all book publication
                processes.
              </p>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                To provide the best platform for ordering books, Edwin Group of
                Publications keeps all the books on Amazon.com. This makes it easy for
                academicians and people who want to buy the book to access the books and
                place orders for delivery.
              </p>
            </div>

            <div className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <img
                src={amazonBookImage}
                alt="Books availability on Amazon"
                className="h-[360px] w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                    <FaAmazon />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                      E -Book Order Now
                    </h3>
                    <p className="mt-2 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      Published Books on Amazon and Conference Proceedings are supported
                      for wider publication visibility.
                    </p>
                    <a
                      href={amazonStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-5 py-2 text-[13px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                    >
                      Open Amazon Store
                      <FaArrowRight className="text-[11px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className="group overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-200 ease-in-out hover:border-[#C89B3C]"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B] transition duration-200 ease-in-out group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mt-5 text-[18px] font-semibold text-[#1A1A2E]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[18px] border border-[#D6E0F0] bg-[#EAF1FB] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                  Published Book Box
                </p>
                <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                  Published Books on Amazon
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  Use this Amazon link to view Edwin Incorporation published books and
                  available resources.
                </p>
              </div>

              <a
                href={amazonStoreLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[8px] bg-[#C89B3C] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#1B3A6B]"
              >
                <FaAmazon />
                View Edwin Books on Amazon
                <FaArrowRight className="text-[12px]" />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Published Books
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              Book Published Report
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Published books report with cover page, title, publication date, and
              publication type.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Cover Page
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Title of Book
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Date of Publication
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Publication Type
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {publishedBooksReport.map((book, index) => (
                    <tr
                      key={`${book.title}-${index}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="h-24 w-20 rounded-[8px] border border-[#D6E0F0] object-cover"
                        />
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1A1A2E]">
                        {book.title}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {book.date}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {book.type}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {publishedBooksReport.length} published book records
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ebook-order" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Amazon Books
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              E -Book Order Now
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Order published resources and e-books through Amazon links.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Image
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Title
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Edition
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Language
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Author
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Order Now
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {ebookResources.map((book, index) => (
                    <tr
                      key={`${book.title}-${index}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="h-24 w-24 rounded-[8px] border border-[#D6E0F0] object-cover"
                        />
                      </td>
                      <td className="px-5 py-4 text-[15px] font-semibold leading-[1.7] text-[#1A1A2E]">
                        {book.title}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {book.edition}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal text-[#1A1A2E]">
                        {book.language}
                      </td>
                      <td className="px-5 py-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                        {book.author}
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href={book.order}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-4 py-2 text-[13px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                        >
                          <FaShoppingCart />
                          Order Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {ebookResources.length} of {ebookResources.length} resources
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="edited-books" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Edited Books (Upcoming)
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Book Titles by Discipline
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Explore upcoming edited book titles across disciplines and submit your
                chapter for edited book publication.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={bookSearch}
                onChange={(event) => setBookSearch(event.target.value)}
                placeholder="Search discipline or title..."
                className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[360px]"
              />
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="w-[260px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Discipline
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Book Title
                    </th>
                    <th className="w-[170px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBooks.map((group, groupIndex) =>
                    group.titles.map((title, titleIndex) => (
                      <tr
                        key={`${group.discipline}-${title}`}
                        className={`border-b border-[#D6E0F0] ${
                          (groupIndex + titleIndex) % 2 === 0
                            ? "bg-[#FFFFFF]"
                            : "bg-[#EAF1FB]"
                        }`}
                      >
                        <td className="px-5 py-4 text-[15px] font-semibold text-[#1B3A6B]">
                          {titleIndex === 0 ? group.discipline : ""}
                        </td>
                        <td className="px-5 py-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                          {title}
                        </td>
                        <td className="px-5 py-4">
                          <a
                            href="#chapter-form"
                            className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-4 py-2 text-[13px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                          >
                            Submit Chapter
                            <FaArrowRight className="text-[11px]" />
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {filteredBooks.length} of {editedBooks.length} disciplines
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book-publication-form" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Application for Book Publication
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                Apply Now
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Book Publication in 2 days, Springer book publication, submit proposal
                for book publication, Elsevier book publication, Authentik book
                publication services, ISBN book publication, free book publication,
                international Book Publication, international Book Publisher, National
                Book Publishers.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Single Authors",
                  "ISBN book publication support",
                  "International and national book publication guidance",
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

            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <form onSubmit={handlePublicationSubmit} className="grid gap-6">
                <div className="grid gap-5 md:grid-cols-2">
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
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Publication Type
                    </label>
                    <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]">
                      {formTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
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

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Book Title / Proposed Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book title"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload Manuscript / Proposal{" "}
                    <span className="text-[#C0392B]">*</span>
                  </label>
                  <input
                    type="file"
                    required
                    multiple
                    accept=".doc,.docx,.pdf"
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />
                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    Please upload manuscript, book proposal, CV, or relevant document.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Message / Requirement
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your book publication requirement"
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
                    Apply Now
                  </button>

                  <button
                    type="reset"
                    className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-8 py-[10px] text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                  >
                    Reset
                  </button>
                </div>

                {publicationStatus && (
                  <p className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {publicationStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="chapter-form" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaRegFileAlt />
                </div>

                <div>
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Submit Chapter for Edited Book
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                    Chapter in Book
                  </h2>
                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Submit your chapter for edited book publication and upcoming edited
                    book projects.
                  </p>
                </div>
              </div>

              <form onSubmit={handleChapterSubmit} className="mt-8 grid gap-5">
                <input
                  type="text"
                  placeholder="Author Name"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
                <input
                  type="text"
                  placeholder="Chapter Title"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
                <input
                  type="file"
                  required
                  accept=".doc,.docx,.pdf"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                />
                <button
                  type="submit"
                  className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                >
                  Chapter in Book
                </button>
                {chapterStatus && (
                  <p className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {chapterStatus}
                  </p>
                )}
              </form>
            </div>

            <div
              id="editor-form"
              className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#1B3A6B] text-[#FFFFFF]">
                  <FaEdit />
                </div>

                <div>
                  <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                    Become Editor in Edited Book
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                    Apply for Book Editor
                  </h2>
                  <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Apply as an editor for edited book projects. Only Science Background
                    applies where required.
                  </p>
                </div>
              </div>

              <form onSubmit={handleEditorSubmit} className="mt-8 grid gap-5">
                <input
                  type="text"
                  placeholder="Editor Name"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
                <input
                  type="text"
                  placeholder="Subject Background"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                />
                <input
                  type="file"
                  required
                  accept=".doc,.docx,.pdf"
                  className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                />
                <button
                  type="submit"
                  className="rounded-[8px] bg-[#1B3A6B] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#C89B3C]"
                >
                  Apply for Book Editor
                </button>
                {editorStatus && (
                  <p className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-4 py-3 text-center text-[15px] font-normal text-[#2D7A4F]">
                    {editorStatus}
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
              Need book publication support?
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
              Contact Edwin Incorporation for book publication, ISBN publication,
              chapter submission, edited book, and international publishing support.
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