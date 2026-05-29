import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGlobe,
  FaHashtag,
  FaIdCard,
  FaLink,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

const heroImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80";

const benefits = [
  {
    title: "Reliable Content Linking",
    text: "DOI membership supports reliable content linking and citation tracking for digital academic publications.",
    icon: FaLink,
  },
  {
    title: "Metadata Registration",
    text: "Publishers and institutions can register and update metadata for academic content in an organized manner.",
    icon: FaDatabase,
  },
  {
    title: "Search Visibility",
    text: "DOI support helps improve visibility in search engines and indexing platforms.",
    icon: FaGlobe,
  },
  {
    title: "Persistent Identifiers",
    text: "DOIs protect publications from broken links by providing persistent identifiers.",
    icon: FaShieldAlt,
  },
];

const allocationSteps = [
  {
    title: "Apply for DOI Membership",
    text: "Submit publisher, journal, institution, or conference details through the DOI membership form.",
    icon: FaIdCard,
  },
  {
    title: "Document Verification",
    text: "Submitted information and required documents are reviewed for DOI membership processing support.",
    icon: FaFileAlt,
  },
  {
    title: "Metadata Preparation",
    text: "Publication metadata is structured for DOI registration and updating.",
    icon: FaDatabase,
  },
  {
    title: "DOI Allocation Support",
    text: "The DOI allocation process is supported with academic publication workflow coordination.",
    icon: FaHashtag,
  },
];

const doiAllocationRows = [
  {
    no: 1,
    title:
      "INFLUENCE OF THE MARGIN OF ERROR RELATED TO THE USE OF AERIAL PHOTOGRAPHS ON THE INTERPRETATION OF THE SHORELINE CHANGES: EVIDENCE FROM THREE CASE STUDIES FROM THE ATLANTIC COAST OF MOROCCO",
    url: "https://iaeme.com/MasterAdmin/Journal_uploads/IJCIET/VOLUME_10_ISSUE_1/IJCIET_10_01_001.pdf",
    doi: "10.34218/IJCIET.10.1.2019.001",
  },
  {
    no: 2,
    title:
      "Role of RBPj in Notch Dependent Signalling in Early Embryonic Development of Mice",
    url: "Review Article",
    doi: "DOI Applied",
  },
  {
    no: 3,
    title:
      "Nyctanthes Arbor-Tristis: Influence of Mordants on Colour Fastness in Artistic Rendering on Cotton & Silk",
    url: "https://www.textileassociationindia.org/post/nyctanthes-arbor-tristis-influence-of-mordants-on-colour-fastness-in-artistic-rendering-on-cotton",
    doi: "DOI Applied",
  },
  {
    no: 4,
    title: "Applying Deep Learning to Mobile Home and Flood Insurance Risk Evaluation",
    url: "https://aajed.com/index.php/aajed/article/view/1",
    doi: "DOI Applied",
  },
  {
    no: 5,
    title: "CLINICAL PHARMACIST ROLE IN RATIONAL USE OF PROTON PUMP INHIBITORS",
    url: "https://www.ejpmr.com/home/abstract_id/1",
    doi: "DOI Applied",
  },
  {
    no: 6,
    title: "Textile-to-Textile Recycling: Technologies, Sorting, and Management Pathways",
    url: "https://www.textileassociationindia.org/post/textile-to-textile-recycling-technologies-sorting-and-management-pathways",
    doi: "DOI Applied",
  },
  {
    no: 7,
    title:
      "CLOPIDOGREL-EXCIPIENT COMPATIBILITY STUDIES FOR ADVANCED DRUG DELIVERY SYSTEMS DEVELOPMENT",
    url: "https://wjpr.net/abstract_show/28945",
    doi: "DOI Applied",
  },
  {
    no: 8,
    title:
      "FRAMEWORK FOR COMPREHENSIVE FEATURE EXTRACTION FOR MEDICAL IMAGE ANALYSIS USING WAVELET PACKET DECOMPOSITION AND COMPLEMENTARY DESCRIPTORS",
    url: "https://wjert.org/home/article_abstract/16",
    doi: "DOI Applied",
  },
  {
    no: 9,
    title: "Metal Ion Complexation on Polyester Fabrics for EMI Shielding Applications",
    url: "https://www.textileassociationindia.org/post/metal-ion-complexation-on-polyester-fabrics-for-emi-shielding-applications",
    doi: "DOI Applied",
  },
];

export default function DoiMembershipPage() {
  const [formStatus, setFormStatus] = useState("");
  const [doiSearch, setDoiSearch] = useState("");

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

  const filteredDoiAllocations = useMemo(() => {
    const query = doiSearch.toLowerCase().trim();

    return doiAllocationRows.filter((item) =>
      `${item.no} ${item.title} ${item.url} ${item.doi}`
        .toLowerCase()
        .includes(query)
    );
  }, [doiSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Your DOI membership application has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <header className="relative w-full overflow-hidden bg-[#FFFFFF]">
        <div className="grid min-h-[650px] lg:grid-cols-[1fr_0.85fr]">
          <div className="relative flex items-center bg-[#1B3A6B] px-5 py-20">
            <div className="absolute inset-0 bg-[#1B3A6B]" />

            <div className="relative mx-auto w-full max-w-[650px] lg:mr-0">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-2 text-[13px] font-normal text-[#5A6A85]">
                  <FaHashtag className="text-[#C89B3C]" />
                  Apply For DOI Membership
                </div>

                <h1 className="text-[40px] font-bold leading-tight text-[#FFFFFF]">
                  DOI Membership
                </h1>

                <p className="mt-5 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  A DOI (Digital Object Identifier) is a unique alphanumeric string
                  assigned to a digital publication, which provides a persistent and
                  actionable link to its location on the internet.
                </p>

                <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
                  It ensures that even if the article’s URL changes over time, the DOI
                  will always redirect users to the correct source.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#doi-application"
                    className="rounded-[8px] bg-[#C89B3C] px-6 py-[10px] text-center text-[15px] font-medium text-[#FFFFFF] transition duration-200 ease-in-out hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
                  >
                    Get Started Now
                  </a>

                  <a
                    href="#doi-allocation"
                    className="rounded-[8px] border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-[10px] text-center text-[15px] font-medium text-[#1B3A6B] transition duration-200 ease-in-out hover:bg-[#EAF1FB]"
                  >
                    DOI Allocation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[650px]">
            <img
              src={heroImage}
              alt="DOI Membership digital publication"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#1B3A6B]/20" />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              className="absolute bottom-8 left-5 right-5 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] lg:left-8 lg:right-8"
            >
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                DOI Infrastructure Supports
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[28px] font-semibold text-[#1B3A6B]">Link</p>
                  <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                    Persistent Identifier
                  </p>
                </div>

                <div>
                  <p className="text-[28px] font-semibold text-[#1B3A6B]">Data</p>
                  <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                    Metadata Updating
                  </p>
                </div>

                <div>
                  <p className="text-[28px] font-semibold text-[#1B3A6B]">Cite</p>
                  <p className="mt-1 text-[13px] font-normal text-[#5A6A85]">
                    Citation Tracking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Get Started Now
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                DOI Membership Benefits
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Through DOI membership, publishers and academic institutions gain
                access to a robust infrastructure for digital publication management,
                metadata registration, and persistent citation linking.
              </p>

              <div className="mt-8 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
                  Why DOI is Important
                </h3>

                <p className="mt-3 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                  DOI ensures that even if a publication’s web address changes, readers
                  and citation systems can still locate the correct source using the
                  persistent identifier.
                </p>
              </div>
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

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Workflow
            </p>

            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              DOI Membership Process
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              A structured DOI membership support process for publishers, journals,
              institutions, and conference publications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {allocationSteps.map((step, index) => {
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

      <section id="doi-allocation" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              DOI Allocation
            </p>

            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              DOI Allocation Details
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
              Below is the DOI allocation record for research papers, article URLs,
              and DOI status/details.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-5">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Total DOI Records
              </p>

              <p className="mt-2 text-[28px] font-semibold text-[#1B3A6B]">
                {doiAllocationRows.length}
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />

              <input
                type="text"
                value={doiSearch}
                onChange={(event) => setDoiSearch(event.target.value)}
                placeholder="Search DOI allocation..."
                className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[360px]"
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse">
                <thead className="bg-[#1B3A6B]">
                  <tr>
                    <th className="w-[80px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      S.No.
                    </th>
                    <th className="px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      Title of Research Paper
                    </th>
                    <th className="w-[330px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      URL of Paper
                    </th>
                    <th className="w-[220px] px-5 py-4 text-left text-[13px] font-medium text-[#FFFFFF]">
                      DOI
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredDoiAllocations.map((item, index) => (
                    <tr
                      key={`${item.no}-${item.title}`}
                      className={`border-b border-[#D6E0F0] ${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAF1FB]"
                      }`}
                    >
                      <td className="px-5 py-4 text-[15px] font-semibold text-[#1B3A6B]">
                        {item.no}
                      </td>

                      <td className="px-5 py-4 text-[15px] font-semibold leading-[1.7] text-[#1A1A2E]">
                        {item.title}
                      </td>

                      <td className="px-5 py-4">
                        {item.url.startsWith("http") ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 break-all text-[15px] font-normal leading-[1.7] text-[#1B3A6B] transition duration-200 ease-in-out hover:text-[#C89B3C]"
                          >
                            View Paper
                            <FaExternalLinkAlt className="shrink-0 text-[12px]" />
                          </a>
                        ) : (
                          <span className="text-[15px] font-normal text-[#1A1A2E]">
                            {item.url}
                          </span>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-[8px] border border-[#2D7A4F] bg-[#FFFFFF] px-3 py-1 text-[13px] font-normal text-[#2D7A4F]">
                          {item.doi}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#D6E0F0] bg-[#FFFFFF] px-5 py-4">
              <p className="text-[13px] font-normal text-[#5A6A85]">
                Showing {filteredDoiAllocations.length} of {doiAllocationRows.length} DOI
                allocation records
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="doi-application" className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Apply Now
              </p>

              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                DOI Membership Application Form
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                Fill this form to apply for DOI membership, DOI allocation support, or
                DOI portal assistance.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Submit publisher, journal, institution, or conference publication
                    details.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Upload required documents for DOI membership and allocation support.
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-5">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#1B3A6B]" />
                  <p className="text-[15px] font-normal leading-[1.7] text-[#1A1A2E]">
                    Get assistance for metadata registration and DOI allocation workflow.
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
                      Organization / Journal Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter publisher, journal, or institution name"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Service Type
                    </label>

                    <select className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out focus:border-[#1B3A6B]">
                      <option value="">Select service type</option>
                      <option>DOI Membership</option>
                      <option>DOI Allocation</option>
                      <option>DOI Portal</option>
                      <option>Article DOI Support</option>
                      <option>Conference Proceeding DOI</option>
                      <option>Metadata Registration Support</option>
                    </select>
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
                      With complete institute or publisher name
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                      Website / Journal URL
                    </label>

                    <input
                      type="url"
                      placeholder="https://"
                      className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 ease-in-out placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Upload Document <span className="text-[#C0392B]">*</span>
                  </label>

                  <input
                    type="file"
                    required
                    multiple
                    className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF]"
                  />

                  <p className="mt-2 text-[13px] font-normal leading-[1.7] text-[#5A6A85]">
                    Please upload publisher, journal, institution, or DOI-related
                    document.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-normal text-[#5A6A85]">
                    Message / Requirement
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Write your DOI membership or DOI allocation requirement"
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
              Need support for DOI membership?
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#FFFFFF]">
              Contact Edwin Incorporation for DOI membership, DOI allocation, metadata
              registration support, and related academic publication services.
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