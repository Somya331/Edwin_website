import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaUserGraduate,
  FaFacebookF,
  FaPhoneAlt,
  FaStore,
  FaHome,
  FaUsers,
  FaGem,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUniversity,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

const academiciansZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=4f7ac1ecc8ab4afd86c5d5518e197019b81d1feb228646f5a5383d053c098dec9eb277188e1042d676d81fe2224ce914gid4bb2c45863c3c629bf4dd50d7288ff73dacae9f99f79ce51ef6766182f13955c";

const ngoZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=5279c48ab5874dd7c25f23ca9f22f81ba8ef49a9afdcb546eab89756872f396e5b68e1afd98edfee9a526309f0f45676gid4ce15c34ee50bbb45ee99b86497bcfb1eebf3c8901fbbab94ce158638db6bb58";

const localCityZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=5ed870d160444197be387ee8fb41087186e00051d408cfe7f5fa235bc2b7839b466ea537970460dfd04e26cf637dfe72gidae25958631231f9f785761a79d0fc5d31889c422838d29782f7b9a7af6887443";

const businessZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=36270d35fad757f02f3e4931fdc3489fc9ad4904f1cb000a1f520beceb516b083d13564eb9f8138351a95999fce4e2c3gid7b892a2d9b0ebdcd3c522b1406087c9c79fb4bd648bbc79474b1016692794773";

const universityZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=5cfeac513a1532cfd20827a7901335d4b83a1f34cd889281e5d038bd3d3f59397fe3d3abb31f67609b4eb4d48808e205gide38034c372898fbcbe5ee555b317d05e311458fd80cbe4c111554dc441c4567d";

const editorZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=e0d0d506c1df8691aa345e6ee25f3c1299e18f3b62a69926ad8c1f9898538b7a34cb4006bc73b0045b51845d964a55d3gidd9e234a1c7a6819b9774e1d2966192a352b8f2b3c423c712ce7393823eb69fa7";

const phdZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=31de7efb7aaecfe7237f2fc3fa594867999f2793a5fc9f0398cac953c5c0fa8484b908da29dbfde9511e889f7bac9bd5gid788b5d0259d6efd8abd49f9e9b62772e7c92b2f21db275d9d01052ad21bb770e";

const admissionZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=cd6215cd59653486761744b7fb09d0661701249f73c50e53ca2605b0b2e04fa02b241f8908ff9789b68f882f23b55b88gid978db1230c20b7e882dd40f446b086e7bf4ddf9bfb2fb23897d368dabf1a0210";

const gemZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=beb83d159fde1071e9edd071530c60a2fe9d9c02d3fe9d216e77c572e4da52b89b17d202e1fab36095805ca2c49e01f1gidb635a243fbc46c10f464ed5eb81175b1175a58b43911a4e9ab23c091e59da931";

const facebookZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=ec9c953c812343116f98c304a5b8b791cfb095e0dd159760514b0ecc3f53d254653e0c4f61ab05c442b68ef46babac34gid91a68ce61d25785c25ced1b8ae266d445d5b00629bda9744d5a7e8453f5855a8";

const callLeadsZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=037ffbcb614289838d2e006a7129ca0f4075390db465a4b2e4c8ec469a93a16c43d42f643f2cf93c01fb8d2765724b48gid76028499a72ac26b1282cc9fd994123e983ef4b822abc0c8249b5ed6af6bc469";

const justDialZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=24a0d4eb5293e575da16ef6ccf6396ecd49b99a83c545a40bd1560015bba0b9bd210ffab4dc892515e88e3fe537447d6gid83011a15c088d1d9220b0912874cd80e9b4cc11bb4f903f7c52dd9c21cb2d6b9";

const propertyZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=fa53177224a38cf345648ac87a9379161651a8125c9aaf2510f886950d95434dee215f34b7cec35f30ed9fc27a3e35a9gid9fa34c305352e6acc251e39b6d5280a4cb5108aba2c14c093419500f217fecdd";

const vendorsZohoFormUrl =
  "https://crm.zoho.in/crm/WebFormServeServlet?rid=3bd8f9be92c70c489c346b0758ce154295c1ebe13854c0f32a99b96901080b13f645e6b8aa220ea3d55ac19729050a96gidf44c015a9987ecc69abec8b51d99b3468e87cc436a4de3267e8b51ff68f5ae73";

const tabs = [
  { key: "academicians", label: "Academicians Serv", icon: FaUserGraduate },
  { key: "ngo", label: "NGO Serv", icon: FaUsers },
  { key: "local", label: "Local City Ser", icon: FaMapMarkerAlt },
  { key: "business", label: "Business Ser", icon: FaBriefcase },
  { key: "university", label: "University Serv", icon: FaUniversity },
  { key: "editor", label: "Editor Serv", icon: FaDatabase },
  { key: "phd", label: "PhD Student Serv", icon: FaUserGraduate },
  { key: "admission", label: "Admission Student Serv", icon: FaUsers },
];

const serviceForms = {
  academicians: {
    title: "Academician DEO",
    subtitle: "Academicians data lead entry form",
    isZohoIframe: true,
    iframeUrl: academiciansZohoFormUrl,
  },
  ngo: {
    title: "NGO Service DEO",
    subtitle: "NGO service data lead entry form",
    isZohoIframe: true,
    iframeUrl: ngoZohoFormUrl,
  },
  local: {
    title: "Local City Service DEO",
    subtitle: "Local city data lead entry form",
    isZohoIframe: true,
    iframeUrl: localCityZohoFormUrl,
  },
  business: {
    title: "Business Needs - DEO",
    subtitle: "Business needs data lead entry form",
    isZohoIframe: true,
    iframeUrl: businessZohoFormUrl,
  },
  university: {
    title: "University Service DEO",
    subtitle: "University service data lead entry form",
    isZohoIframe: true,
    iframeUrl: universityZohoFormUrl,
  },
  editor: {
    title: "Editor Service DEO",
    subtitle: "Journal editor service lead entry form",
    isZohoIframe: true,
    iframeUrl: editorZohoFormUrl,
  },
  phd: {
    title: "PhD Student Service DEO",
    subtitle: "PhD student lead entry form",
    isZohoIframe: true,
    iframeUrl: phdZohoFormUrl,
  },
  admission: {
    title: "Admission Student Service DEO",
    subtitle: "Admission student lead entry form",
    isZohoIframe: true,
    iframeUrl: admissionZohoFormUrl,
  },
};

const quickForms = [
  {
    key: "gem",
    title: "GEM Entries",
    subtitle: "GEM Bids",
    icon: FaGem,
    isZohoIframe: true,
    iframeUrl: gemZohoFormUrl,
  },
  {
    key: "facebook",
    title: "Facebook",
    subtitle: "Facebook Lead - DEO",
    icon: FaFacebookF,
    isZohoIframe: true,
    iframeUrl: facebookZohoFormUrl,
  },
  {
    key: "call",
    title: "Call Leads",
    subtitle: "Call Lead - DEO",
    icon: FaPhoneAlt,
    isZohoIframe: true,
    iframeUrl: callLeadsZohoFormUrl,
  },
  {
    key: "justdial",
    title: "Just Dial",
    subtitle: "Just Dial Leads",
    icon: FaStore,
    isZohoIframe: true,
    iframeUrl: justDialZohoFormUrl,
  },
  {
    key: "property",
    title: "Properties Details",
    subtitle: "Properties Details",
    icon: FaHome,
    isZohoIframe: true,
    iframeUrl: propertyZohoFormUrl,
  },
  {
    key: "vendors",
    title: "Vendors Entries",
    subtitle: "Vendor Details",
    icon: FaUsers,
    isZohoIframe: true,
    iframeUrl: vendorsZohoFormUrl,
  },
];

function ZohoIframeForm({ iframeUrl, title }) {
  return (
    <div className="rounded-[24px] border border-[#E6ECF5] bg-[#F8FAFC] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      

      <div className="h-[610px] overflow-y-auto overflow-x-hidden rounded-[20px] border border-[#D6E0F0] bg-[#FFFFFF] p-2">
        <iframe
          title={title}
          src={iframeUrl}
          className="h-[1120px] w-full rounded-[14px] border-0"
        />
      </div>
    </div>
  );
}

function StyledForm({
  title,
  subtitle,
  icon: Icon = FaDatabase,
  isZohoIframe = false,
  iframeUrl,
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E6ECF5] bg-[#FFFFFF] shadow-[0_20px_60px_rgba(27,58,107,0.12)]">
      <div className="relative overflow-hidden bg-[#122B55] px-7 py-6">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C89B3C]/25 blur-2xl" />
        <div className="relative flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[22px] font-extrabold text-[#FFFFFF]">
              {title}
            </h3>
            <p className="mt-1 text-[13px] font-medium text-[#EAF1FB]">
              {subtitle}
            </p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#FFFFFF]/30 bg-[#FFFFFF]/15 text-[#FFFFFF] backdrop-blur">
            <Icon className="text-[24px]" />
          </div>
        </div>
      </div>

      {isZohoIframe && (
        <div className="p-5">
          <ZohoIframeForm iframeUrl={iframeUrl} title={title} />
        </div>
      )}
    </div>
  );
}

export default function DEOPage() {
  const [activeTab, setActiveTab] = useState("academicians");
  const activeForm = useMemo(() => serviceForms[activeTab], [activeTab]);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const messageHandler = (evt) => {
      if (
        evt.origin === "https://crm.zoho.in" ||
        evt.origin === "https://crm.zohopublic.in"
      ) {
        const locObj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });

        evt.source?.postMessage(
          "prnt_wnd_pg_lc_rc_frm_prwindow_" + locObj,
          evt.origin
        );
      }
    };

    window.addEventListener("message", messageHandler, false);

    return () => {
      document.head.removeChild(fontLink);
      window.removeEventListener("message", messageHandler, false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#122B55] px-5 py-20">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#C89B3C]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#EAF1FB]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/40 bg-[#FFFFFF]/10 px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#FFFFFF] backdrop-blur">
              <FaDatabase className="text-[#C89B3C]" />
              Edwin Incorporation CRM
            </span>

            <h1 className="mt-6 text-[42px] font-extrabold leading-tight text-[#FFFFFF] md:text-[58px]">
              Data Entry Work
            </h1>

            <p className="mt-5 max-w-2xl text-[16px] font-medium leading-[1.8] text-[#EAF1FB]">
              Facebook Data Leads, Conference Data Leads, Journals Data Leads
              and multiple CRM based service forms in one clean dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#main-form"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#C89B3C] px-7 py-3 text-[15px] font-bold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#122B55]"
              >
                Start Entry <FaArrowRight />
              </a>
              <a
                href="#all-forms"
                className="rounded-[12px] border border-[#FFFFFF]/30 bg-[#FFFFFF]/10 px-7 py-3 text-[15px] font-bold text-[#FFFFFF] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#122B55]"
              >
                View All Forms
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-[30px] border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 p-6 backdrop-blur-md"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["14+", "CRM Forms"],
                ["8", "Main Services"],
                ["6", "Quick Modules"],
                ["Live", "Zoho Forms"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-[#FFFFFF]/20 bg-[#FFFFFF]/12 p-6 text-center text-[#FFFFFF]"
                >
                  <p className="text-[34px] font-extrabold text-[#C89B3C]">
                    {number}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EAF1FB] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[14px] font-bold transition duration-300 hover:-translate-y-1 ${
                    isActive
                      ? "border-[#122B55] bg-[#122B55] text-[#FFFFFF] shadow-[0_12px_28px_rgba(27,58,107,0.20)]"
                      : "border-[#D6E0F0] bg-[#FFFFFF] text-[#122B55] hover:border-[#C89B3C]"
                  }`}
                >
                  <Icon className="text-[14px]" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id="main-form"
            className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="rounded-[28px] border border-[#D6E0F0] bg-[#FFFFFF] p-7 shadow-[0_16px_45px_rgba(27,58,107,0.10)]">
              <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
                Active Service Form
              </p>
              <h2 className="mt-3 text-[30px] font-extrabold text-[#122B55]">
                {activeForm.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#1A1A2E]">
                Click any service tab above and that service form will open here.
                All forms are connected with Zoho CRM iframe.
              </p>

              <div className="mt-6 rounded-[22px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <FaCheckCircle className="text-[30px] text-[#2D7A4F]" />
                <h3 className="mt-4 text-[18px] font-extrabold text-[#122B55]">
                  Scroll Form Design
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                  Long CRM forms stay inside a fixed height scroll box so the
                  page does not become too long.
                </p>
              </div>
            </div>

            <StyledForm
              title={activeForm.title}
              subtitle={activeForm.subtitle}
              icon={tabs.find((tab) => tab.key === activeTab)?.icon}
              isZohoIframe={activeForm.isZohoIframe}
              iframeUrl={activeForm.iframeUrl}
            />
          </div>
        </div>
      </section>

      <section id="all-forms" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Multiple Data Entry Forms
            </p>
            <h2 className="mt-3 text-[36px] font-extrabold text-[#122B55]">
              DEO Lead Entry Modules
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-7 lg:grid-cols-3">
            {quickForms.map((form, index) => {
              const Icon = form.icon;

              return (
                <motion.div
                  key={form.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="h-full"
                >
                  <StyledForm
                    title={form.title}
                    subtitle={form.subtitle}
                    icon={Icon}
                    isZohoIframe={form.isZohoIframe}
                    iframeUrl={form.iframeUrl}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#122B55] px-5 py-14">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#C89B3C]">
              Data Entry Management
            </p>
            <h2 className="mt-3 text-[26px] font-extrabold text-[#FFFFFF]">
              All CRM forms are ready inside this dashboard layout.
            </h2>
          </div>

          <a
            href="#main-form"
            className="inline-flex items-center justify-center rounded-[12px] bg-[#C89B3C] px-7 py-3 text-[15px] font-bold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:text-[#122B55]"
          >
            Back to Form
          </a>
        </div>
      </section>
    </div>
  );
}