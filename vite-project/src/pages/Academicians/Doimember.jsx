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
            <img src={heroImage}
              alt="DOI Membership digital publication"
              className="absolute inset-0 h-full w-full object-cover" loading="lazy" width="600" height="400" />

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

      <section
  id="doi-allocation"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-10"
>
  <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="mx-auto max-w-3xl text-center">
      
      <h2 className="mt-3 text-[34px] font-bold text-[#1B3A6B] md:text-[44px]">
        DOI Allocation Details
      </h2>

     </div>

    <div className="mt-8 rounded-[28px] border border-[#D6E0F0] bg-white shadow-[0_24px_70px_rgba(27,58,107,0.16)] overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-6 md:px-8 py-4">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.22)_25%,rgba(255,255,255,0.22)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.22)_75%)] bg-[length:22px_22px]" />

        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              All Papers DOI Report
            </h3>
            <p className="text-white/75 text-sm mt-1">
              Live Zoho Creator embedded report
            </p>
          </div>

          <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Live Data
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
        <div className="rounded-[22px] border border-[#D6E0F0] bg-white shadow-inner overflow-hidden">
          <iframe
            title="DOI Allocation Details Report"
            className="block h-[560px] w-full border-0"
            scrolling="auto"
            src="https://creatorapp.zohopublic.in/edwininc/doi-allocation/report-embed/All_Papers/dK2ETPhZ6T2OOevd6E5AAM2uN5FFw0HW1HftrUnRQTj099MEZn0j0W8KKWxCZwJ8wxVU6tMyRUSSUXeyb8bEWMTBfbt5vuRtf6Rj"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section
  id="doi-allocation"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-10"
>
  <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
        DOI Allocation
      </p>

      <h2 className="mt-3 text-[34px] font-bold text-[#1B3A6B] md:text-[44px]">
        Apply Now
      </h2>

      <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

      <p className="mt-4 text-[16px] leading-[1.7] text-[#1A1A2E]">
        Submit research paper details, paper URL, and required information for DOI allocation.
      </p>
    </div>

    <div className="mt-8 rounded-[28px] border border-[#D6E0F0] bg-white shadow-[0_24px_70px_rgba(27,58,107,0.16)] overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-6 md:px-8 py-4">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.22)_25%,rgba(255,255,255,0.22)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.22)_75%)] bg-[length:22px_22px]" />

        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Submit Papers
            </h3>
            
          </div>

          <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Secure Form
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
        <div className="rounded-[22px] border border-[#D6E0F0] bg-white shadow-inner overflow-hidden">
          <iframe
            title="Submit Paper for DOI Allocation Form"
            className="block h-[560px] w-full border-0"
            scrolling="auto"
            src="https://creatorapp.zohopublic.in/edwininc/doi-allocation/form-embed/Submit_Papers/CqfJ2tzxAq77GzSwsSwgCWSZpQytyk7FOaegz0vqMQy1t01QpUEQW31ymOuCHCsXXPHvCgu1SdXqPFT4AA9QaMhObF6eKDjfsYef"
          />
        </div>
      </div>
    </div>
  </div>
</section>


     <section
  id="doi-application"
  className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF8E8] px-5 py-12"
>
  <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#1B3A6B]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1250px]">
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="lg:sticky lg:top-10">
        <span className="inline-flex rounded-full border border-[#D6E0F0] bg-white/80 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#1B3A6B] shadow-sm backdrop-blur">
          Apply Now
        </span>

        <h2 className="mt-5 text-[38px] font-bold leading-tight text-[#1B3A6B] md:text-[48px]">
          DOI Membership Application Form
        </h2>

        <div className="mt-5 h-[4px] w-[82px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#1B3A6B]" />

        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-[#1A1A2E]">
          Fill this form to apply for DOI membership, DOI allocation support, or
          DOI portal assistance.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            "Submit publisher, journal, institution, or conference publication details.",
            "Upload required documents for DOI membership and allocation support.",
            "Get assistance for metadata registration and DOI allocation workflow.",
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

      <div className="rounded-[30px] border border-[#D6E0F0] bg-white shadow-[0_24px_65px_rgba(27,58,107,0.16)] overflow-hidden">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#173765] via-[#244B86] to-[#173765] px-7 py-4">
          <div>
            <h3 className="text-[24px] font-bold text-white">
              DOI Application
            </h3>

            <p className="mt-1 text-[14px] text-white/75">
              Complete the DOI membership form below.
            </p>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[24px] text-[#F4B400] md:flex">
            🔗
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F8FBFF] to-white p-4">
          <div className="rounded-[22px] border border-[#D6E0F0] bg-white overflow-hidden">
            <div className="max-h-[480px] overflow-y-auto overflow-x-hidden">
              <iframe
                title="DOI Membership Application Form"
                className="block h-[730px] w-full border-0"
                scrolling="auto"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=e041c73797fa7fc2be776faae2ec4eec981c753e6149f0d7c1eacd320424584ea0ebab7c8344917fbea69fd1ae6e1ab0gid4fd1ee833518e3ebc49e7e4cf05170f1405656c6081d36296111dc70e089f339"
              />
            </div>
          </div>
        </div>
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
    </div>
  );
}