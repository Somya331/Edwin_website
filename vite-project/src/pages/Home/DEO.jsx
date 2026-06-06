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
  FaPaperPlane,
  FaRedo,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";
//yahan uper wale forms hai

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
//yahan se quick forms hai
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

const inputClass =
  "w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] outline-none transition duration-200 placeholder:text-[#A0AEC0] focus:border-[#1B3A6B]";

function Field({ field }) {
  if (field.type === "select") {
    return (
      <select className={inputClass}>
        <option>-None-</option>
        <option>Bengaluru</option>
        <option>Delhi</option>
        <option>Jabalpur</option>
        <option>India</option>
      </select>
    );
  }

  if (field.type === "file") {
    return (
      <input
        type="file"
        className="w-full rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#1A1A2E] file:mr-4 file:rounded-[8px] file:border-0 file:bg-[#1B3A6B] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#FFFFFF] focus:border-[#1B3A6B]"
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <textarea
        rows="4"
        placeholder={field.placeholder || ""}
        className={`${inputClass} resize-none`}
      />
    );
  }

  return <input type={field.type} className={inputClass} />;
}

function ZohoIframeForm({ iframeUrl }) {
  return (
    <div className="rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-4">
      

      <div className="h-[560px] overflow-y-auto overflow-x-hidden rounded-[10px] border border-[#D6E0F0] bg-[#FFFFFF] p-3">
        <iframe
          title="Zoho CRM Form"
          src={iframeUrl}
          className="h-[780px] w-full rounded-[8px] border-0"
        />
      </div>
    </div>
  );
}
function StyledForm({
  title,
  subtitle,
  fields = [],
  icon: Icon = FaDatabase,
  compact = false,
  isZohoIframe = false,
  iframeUrl,
}) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between bg-[#1B3A6B] px-6 py-5">
        <div>
          <h3 className="text-[18px] font-semibold text-[#FFFFFF]">
            {title}
          </h3>
          <p className="mt-1 text-[13px] text-[#FFFFFF]">
            {subtitle}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#D6E0F0] bg-[#FFFFFF] text-[#1B3A6B]">
          <Icon className="text-[22px]" />
        </div>
      </div>

      {isZohoIframe ? (
        <div className="p-4">
          <ZohoIframeForm iframeUrl={iframeUrl} />
        </div>
      ) : (
        <form
          className={
            compact ? "max-h-[520px] overflow-y-auto p-6" : "p-6"
          }
        >
          <div className="grid gap-5">
            {fields.map((field) => (
              <div key={field.label}>
                <label className="mb-2 block text-[13px] text-[#5A6A85]">
                  {field.label}
                </label>

                <Field field={field} />

                {field.note && (
                  <p className="mt-2 text-[13px] text-[#5A6A85]">
                    {field.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
            >
              <FaPaperPlane /> Submit
            </button>

            <button
              type="reset"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
            >
              <FaRedo /> Reset
            </button>
          </div>
        </form>
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
    <div className="min-h-screen bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A2E]">
      <section className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] text-[#1B3A6B]">
              <FaDatabase className="text-[28px]" />
            </div>

            <h1 className="mt-6 text-[40px] font-bold leading-tight text-[#1B3A6B]">
              Data Entry Work
            </h1>

            <p className="mt-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
              Facebook Data Leads, Conference Data Leads, Journals Data Leads
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#main-form"
                className="rounded-[8px] bg-[#1B3A6B] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#C89B3C]"
              >
                Start Entry
              </a>
              <a
                href="#all-forms"
                className="rounded-[8px] border border-[#1B3A6B] bg-[#FFFFFF] px-6 py-3 text-[15px] font-medium text-[#1B3A6B] transition duration-200 hover:bg-[#EAF1FB]"
              >
                View All Forms
              </a>
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
                  className={`inline-flex items-center gap-2 rounded-[8px] border px-5 py-3 text-[14px] font-medium transition duration-200 ${
                    isActive
                      ? "border-[#1B3A6B] bg-[#1B3A6B] text-[#FFFFFF]"
                      : "border-[#D6E0F0] bg-[#FFFFFF] text-[#1B3A6B] hover:border-[#C89B3C] hover:bg-[#FFFFFF]"
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
            className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <div className="rounded-[12px] border border-[#D6E0F0] bg-[#FFFFFF] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-[13px] text-[#5A6A85]">
                Active Service Form
              </p>
              <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
                {activeForm.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#1A1A2E]">
                Click any service tab above and that service form will open
                here. Academicians form is connected with Zoho CRM iframe.
              </p>

              <div className="mt-6 rounded-[12px] border border-[#D6E0F0] bg-[#EAF1FB] p-6">
                <FaCheckCircle className="text-[30px] text-[#2D7A4F]" />
                <h3 className="mt-4 text-[18px] font-semibold text-[#1A1A2E]">
                  Scroll Form Design
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#1A1A2E]">
                  Long CRM forms will stay inside a fixed height scroll box so
                  the page does not take too much space.
                </p>
              </div>
            </div>

            <StyledForm
  title={activeForm.title}
  subtitle={activeForm.subtitle}
  fields={activeForm.fields || []}
  icon={tabs.find((tab) => tab.key === activeTab)?.icon}
  compact
  isZohoIframe={activeForm.isZohoIframe}
  iframeUrl={activeForm.iframeUrl}
/>
          </div>
        </div>
      </section>

      <section id="all-forms" className="bg-[#FFFFFF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="text-[13px] text-[#5A6A85]">
              Multiple Data Entry Forms
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#1B3A6B]">
              DEO Lead Entry Modules
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
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
  fields={form.fields || []}
  icon={Icon}
  compact
  isZohoIframe={form.isZohoIframe}
  iframeUrl={form.iframeUrl}
/>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-[#C89B3C]">
              Data Entry Management
            </p>
            <h2 className="mt-3 text-[28px] font-semibold text-[#FFFFFF]">
              CRM form code can be integrated into this layout later.
            </h2>
          </div>

          <a
            href="#main-form"
            className="inline-flex items-center justify-center rounded-[8px] bg-[#C89B3C] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#1B3A6B]"
          >
            Back to Form
          </a>
        </div>
      </section>
    </div>
  );
}