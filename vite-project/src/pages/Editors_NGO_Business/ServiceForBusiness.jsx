import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaBullhorn,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaDatabase,
  FaEnvelopeOpenText,
  FaFileSignature,
  FaGoogle,
  FaHeadset,
  FaLaptopCode,
  FaMobileAlt,
  FaPhoneAlt,
  FaRobot,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaUniversity,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

const heroImages = {
  main: "/images/website-service-hero.jpg",
  web: "/images/web-design-service.jpg",
  automation: "/images/business-automation.jpg",
};

const fallbackImages = {
  main: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=90",
  web: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=90",
  automation:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=90",
};

const serviceCards = [
  {
    title: "Complete Automation",
    subtitle: "University and College Only",
    text: "Complete automation solutions for universities and colleges with CRM, software, workflow and digital system support.",
    icon: FaRobot,
    link: "/business-automation",
  },
  {
    title: "BPO Services",
    subtitle: "Only - Admission and Help Desk",
    text: "Professional BPO support for admission assistance, help desk operations, calling, support and enquiry handling.",
    icon: FaHeadset,
    link: "#website-application-form",
  },
  {
    title: "Digital Marketing",
    subtitle: "Apply Now",
    text: "Digital marketing support for businesses, institutions and organizations with online promotion and branding.",
    icon: FaBullhorn,
    link: "/digital-marketing",
  },
  {
    title: "App Designing",
    subtitle: "Apply Now",
    text: "Application designing support for mobile app, business app, education app and customized digital platform.",
    icon: FaMobileAlt,
    link: "/apps-for-ios-and-android",
  },
  {
    title: "Whatsapp Service",
    subtitle: "Apply Now",
    text: "Professional WhatsApp messaging services without banned numbers for business communication.",
    icon: FaWhatsapp,
    link: "/whatsapp-services",
  },
  {
    title: "Constructions",
    subtitle: "Apply Now",
    text: "Professional construction services for institutional, commercial and residential projects with quality assurance.",
    icon: FaUniversity,
    link: "/constructions",
  },
  {
    title: "Website Development",
    subtitle: "Custom Website Design",
    text: "Modern website development for businesses, colleges, journals, institutions, NGOs and academic services.",
    icon: FaLaptopCode,
    link: "#website-application-form",
  },
  {
    title: "Web Hosting",
    subtitle: "Fast Hosting Support",
    text: "Hosting support with fast loading, reliable deployment and website maintenance assistance.",
    icon: FaServer,
    link: "#website-application-form",
  },
];

const features = [
  {
    title: "Reseller of ZOHO",
    text: "Zoho CRM and automation support for client management, enquiry handling and workflow improvement.",
    icon: FaDatabase,
  },
  {
    title: "Reseller of Google Suite",
    text: "Google Suite support for professional communication, business email and productivity solutions.",
    icon: FaGoogle,
  },
  {
    title: "Custom Software Development",
    text: "Our team of more than 30 dedicated software developers is capable of developing any kind of software or business application.",
    icon: FaCode,
  },
  {
    title: "Secure and Scalable",
    text: "Software solutions are designed to be user-friendly, secure, scalable and aligned with client requirements.",
    icon: FaShieldAlt,
  },
];

const whatsappCards = [
  {
    title: "About Us",
    text: "Edwin Soft was founded in 2012, and within a short span of time, it has achieved an outstanding reputation for providing quality software solutions to a variety of clients.",
  },
  {
    title: "Enquiry Now",
    text: "Edwin Soft Company provides 100% quality assurance and is one of the major software and website development companies in Jabalpur.",
  },
  {
    title: "Web Hosting",
    text: "We’ve added solid state drives to shared hosting to help sites succeed; pages load faster, making it an affordable way to get your website online.",
  },
];

const clients = [
  "International Technological University",
  "AKS University",
  "Roorkee Institute Of Technology",
  "Swami Vivekanand University",
  "Maharshi Dayanand Saraswati University",
  "Asian Institute Of Technology",
  "Swami Shraddhanand College",
  "D.N. Jain College Jabalpur",
];

const solutions = [
  "Complete Automation",
  "Web Design",
  "Digital Marketing",
  "App Designing",
];

const inputClass =
  "w-full rounded-[14px] border border-[#D6E0F0] bg-white px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#8A98AD] focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10";

function WebsiteServiceForm({ status, onSubmit }) {
  return (
    <motion.form
      id="website-application-form"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 rounded-[30px] border border-[#D6E0F0] bg-white p-6 shadow-[0_20px_55px_rgba(27,58,107,0.12)] lg:p-8"
    >
      <div>
        <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
          Apply Now
        </p>
        <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
          Website / Software Service Application Form
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="text" placeholder="Full Name *" className={inputClass} />
        <input required type="email" placeholder="Email Address *" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input required type="tel" placeholder="Mobile Number *" className={inputClass} />

        <select required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select Service Requirement
          </option>
          <option>Complete Automation</option>
          <option>BPO Services</option>
          <option>Digital Marketing</option>
          <option>App Designing</option>
          <option>Website Development</option>
          <option>Web Hosting</option>
          <option>WhatsApp Messaging Without Banned Numbers</option>
          <option>Constructions</option>
          <option>Custom Software Development</option>
          <option>Zoho CRM Automation</option>
          <option>Google Suite Support</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Organization / Business Name" className={inputClass} />
        <input type="text" placeholder="City / State" className={inputClass} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input type="text" placeholder="Current Website URL, if any" className={inputClass} />
        <input type="text" placeholder="Preferred Timeline" className={inputClass} />
      </div>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        className={`${inputClass} file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:text-white`}
      />

      <textarea
        rows="4"
        placeholder="Write your website, software, automation, app, hosting or digital marketing requirement"
        className={`${inputClass} resize-none`}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3A6B] px-8 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-[#C89B3C]"
        >
          Submit Application
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

export default function ApplyForWebsitePage() {
  const [query, setQuery] = useState("");
  const [formStatus, setFormStatus] = useState("");

  

  const filteredServices = useMemo(() => {
    const value = query.toLowerCase().trim();
    if (!value) return serviceCards;
    return serviceCards.filter((service) =>
      `${service.title} ${service.subtitle} ${service.text}`.toLowerCase().includes(value)
    );
  }, [query]);

  const submitForm = (event) => {
    event.preventDefault();
    setFormStatus("Your website/software service application has been prepared successfully.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-16 lg:px-8 lg:py-20">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FFB000]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-black text-[#FFD35A] shadow-sm backdrop-blur-md">
                <FaLaptopCode className="text-[#FFD35A]" />
                Website, Software & Automation Services
              </span>

              <h1 className="mt-6 text-[36px] font-black leading-tight text-white lg:text-[52px]">
                Apply For Website & Business Automation Services
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-[1.9] text-white/82">
                Edwin Incorporation provides website development, custom software,
                business automation, digital marketing, app designing, hosting and
                BPO support for institutions, businesses, universities and colleges.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#website-application-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B66C3] to-[#315BC7] px-7 py-3 text-[15px] font-black text-white shadow-[0_16px_42px_rgba(11,102,195,.28)] transition duration-300 hover:-translate-y-1"
                >
                  Apply Now
                  <FaArrowRight className="text-[13px]" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-[15px] font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071C34]"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["30+", "Software Developers", FaUsers],
                  ["Zoho", "CRM Automation", FaDatabase],
                  ["Google", "Suite Support", FaGoogle],
                ].map(([title, sub, Icon]) => (
                  <div
                    key={title}
                    className="rounded-[22px] border border-white/70 bg-white/95 p-5 shadow-[0_14px_40px_rgba(8,34,74,.10)] transition duration-300 hover:-translate-y-1 hover:border-[#FFB000]"
                  >
                    <Icon className="text-[24px] text-[#FFB000]" />
                    <p className="mt-3 text-[24px] font-black text-[#082B63]">
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
                <div className="overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur-md">
                  <img src={heroImages.main}
                    alt="Website and software development"
                    className="h-[360px] w-full rounded-[26px] object-cover lg:h-[430px]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.main;
                    }} loading="lazy" width="600" height="400" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <img src={heroImages.web}
                    alt="Web design service"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.web;
                    }} loading="lazy" width="600" height="400" />

                  <img src={heroImages.automation}
                    alt="Business automation"
                    className="h-[180px] w-full rounded-[24px] border border-[#D6E0F0] object-cover shadow-[0_10px_28px_rgba(27,58,107,0.10)]"
                    onError={(event) => {
                      event.currentTarget.src = fallbackImages.automation;
                    }} loading="lazy" width="600" height="400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                About
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Updated Technology, Custom Software and Complete Automation
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Edwin Incorporation believes in keeping itself updated with the latest
                technology trends and advancements. The team of developers is well-versed
                with the latest tools and techniques to provide the best possible solutions.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Tie-ups with big service providers like Gmail, Zoho CRM and Salesforce
                help provide clients with complete automation solutions for their businesses.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Custom software development services are also available for businesses
                and organizations. Software solutions are user-friendly, secure and scalable.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className={`group rounded-[24px] border border-[#D6E0F0] p-6 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C] ${index === 0
                        ? "bg-[#1B3A6B] text-white md:col-span-2"
                        : "bg-white"
                      }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[16px] transition duration-300 ${index === 0
                          ? "bg-[#C89B3C] text-white"
                          : "bg-[#EAF1FB] text-[#1B3A6B] group-hover:bg-[#C89B3C] group-hover:text-white"
                        }`}
                    >
                      <Icon />
                    </div>

                    <h3
                      className={`mt-5 text-[20px] font-semibold ${index === 0 ? "text-white" : "text-[#1B3A6B]"
                        }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-[15px] leading-[1.7] ${index === 0 ? "text-white" : "text-[#1A1A2E]"
                        }`}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Services
              </p>

              <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
                Website, Software, BPO and Digital Solutions
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
                Apply for automation, BPO, digital marketing, app designing, hosting
                and customized software development services.
              </p>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A6A85]" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search service..."
                className="w-full rounded-full border border-[#D6E0F0] bg-white py-3 pl-11 pr-4 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B] sm:w-[340px]"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  key={service.title}
                  href={service.link}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[26px] border border-[#D6E0F0] bg-white p-7 shadow-[0_10px_30px_rgba(27,58,107,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]"
                >
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#EAF1FB] transition duration-300 group-hover:bg-[#C89B3C]/20" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#1B3A6B] text-white transition duration-300 group-hover:rotate-6 group-hover:bg-[#C89B3C]">
                      <Icon className="text-2xl" />
                    </div>

                    <p className="mt-6 text-[13px] uppercase tracking-wide text-[#5A6A85]">
                      {service.subtitle}
                    </p>

                    <h3 className="mt-2 text-[21px] font-semibold text-[#1B3A6B]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.75] text-[#1A1A2E]">
                      {service.text}
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

      <section className="bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-[#D6E0F0] bg-[#F6F9FD] p-6 shadow-[0_18px_42px_rgba(27,58,107,0.10)]">
              <div className="rounded-[24px] bg-[#1B3A6B] p-7 text-white">
                <FaWhatsapp className="text-[40px] text-[#C89B3C]" />

                <h3 className="mt-5 text-[28px] font-bold">
                  WhatsApp Messaging - Without Banned Numbers
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-white">
                  Edwin Soft is committed to clients and partners with a passion
                  for new technologies, providing quality software solutions and
                  business communication support.
                </p>

                <a
                  href="#website-application-form"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-7 py-3 text-[15px] font-medium text-white transition duration-200 hover:bg-white hover:text-[#1B3A6B]"
                >
                  Enquiry Now
                  <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              {whatsappCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="rounded-[22px] border border-[#D6E0F0] bg-white p-6 shadow-[0_8px_26px_rgba(27,58,107,0.08)] transition duration-200 hover:border-[#C89B3C]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#EAF1FB] text-[#1B3A6B]">
                      <FaCheckCircle />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-semibold text-[#1B3A6B]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.7] text-[#1A1A2E]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
                Our Clients
              </p>

              <h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#1B3A6B]">
                Trusted by Institutions and Academic Organizations
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Edwin Incorporation has worked with academic institutions, universities
                and organizations for website, software, automation, hosting and digital solutions.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {solutions.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-[#D6E0F0] bg-white p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)]"
                  >
                    <FaCloud className="text-[24px] text-[#C89B3C]" />
                    <p className="mt-3 text-[17px] font-semibold text-[#1B3A6B]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="group rounded-[20px] border border-[#D6E0F0] bg-white p-5 shadow-[0_8px_24px_rgba(27,58,107,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#1B3A6B] text-white transition duration-200 group-hover:bg-[#C89B3C]">
                      <FaUniversity />
                    </div>

                    <p className="text-[15px] font-semibold leading-[1.6] text-[#1B3A6B]">
                      {client}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF4FF] px-5 py-20">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-normal uppercase tracking-wide text-[#5A6A85]">
              Apply Online
            </p>

            <h2 className="mt-3 text-[34px] font-semibold text-[#1B3A6B]">
              Submit Website / Software Requirement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A1A2E]">
              Fill this form for website development, app designing, digital marketing,
              automation, BPO, hosting or custom software development support.
            </p>
          </div>

          <motion.div
            id="website-application-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[22px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[720px] mx-auto relative"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-lg font-bold">
                  Website / Software Application Form
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  Fill all required details carefully
                </p>
              </div>

              <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                <FaFileSignature className="text-[#C89B3C] text-xl" />
              </div>
            </div>

            <div className="relative w-full bg-white p-3">
              <div className="rounded-[18px] border border-[#D6E0F0] overflow-hidden bg-white shadow-inner">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=4dce853cc76afc91d521e1508c8c45cff3c35c74637f1d6ac1fa35bcd0b85ae66f34f4572db28eb960e2a483c535b45egidb1b1113f234667cf2a899931190068e8f246b6b7928ad26cc53ed596ee79a515"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: "none",
                    width: "100%",
                    display: "block",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
