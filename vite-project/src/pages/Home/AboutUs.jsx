import React from "react";
import {
  Award,
  Target,
  Lightbulb,
  ShieldCheck,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  AlertTriangle,
  Quote,
  MessageSquare,
  Star,
  ChevronRight,
  Sparkles,
} from "lucide-react";

<div className="mx-auto flex h-[240px] w-[240px] items-center justify-center rounded-full border-[7px] border-[#FFF2C8] bg-white shadow-[0_18px_45px_rgba(7,28,52,.22)]">
  <span className="text-[46px] font-black text-[#071C34]">DKP</span>
</div>

export default function AboutUsStrictPremiumDesign() {
  const coreValues = [
    {
      icon: <Users size={24} />,
      title: "Customer First",
      desc: "We prioritize your academic and professional needs with tailored solutions.",
    },
    {
      icon: <Award size={24} />,
      title: "Deep Expertise",
      desc: "Our team of global experts ensures elite guidance at every milestone.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Absolute Integrity",
      desc: "Operating with 100% transparency, honesty, and high ethical standards.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Continuous Innovation",
      desc: "Embracing cutting-edge tools to elevate research and education.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Constant Growth",
      desc: "Refining our workflows daily based on your valuable feedback.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF5FF] font-['Plus_Jakarta_Sans',sans-serif] text-[#08224A]">
      <style>{`
        @keyframes floatSoft {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shineMove {
          0% { transform: translateX(-170%) rotate(16deg); }
          100% { transform: translateX(230%) rotate(16deg); }
        }

        .glass-card {
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          top: -55%;
          left: -65%;
          width: 16%;
          height: 230%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,176,0,.10),
            rgba(255,255,255,.16),
            rgba(255,211,90,.14),
            transparent
          );
          filter: blur(18px);
          opacity: 0;
          pointer-events: none;
        }

        .glass-card:hover::before {
          opacity: 1;
          animation: shineMove 1.5s ease;
        }

        .float-soft {
          animation: floatSoft 5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-24 text-white">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-[#FFB000]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#4DA3FF]/25 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#FFD35A_1.2px,transparent_1.2px)] [background-size:28px_28px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD35A]/35 bg-white/10 px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#FFD35A] backdrop-blur-md">
            <Sparkles size={16} />
            Edwin Incorporation
          </span>

          <h1 className="mt-6 text-[42px] font-black leading-tight md:text-[58px]">
            About{" "}
            <span className="bg-gradient-to-r from-[#FFB000] to-[#FFD35A] bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] font-semibold leading-[1.8] text-white/82">
            Your global partner in research, publication, academic consultancy,
            and digital institutional empowerment. We turn your intellectual
            aspirations into real-world impact.
          </p>
        </div>
      </section>

      <section className="relative bg-[#EEF5FF] px-5 py-20">
        <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-[#FFD35A]/25 blur-3xl" />
        <div className="absolute -left-28 bottom-10 h-96 w-96 rounded-full bg-[#073B86]/12 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#073B86] shadow-sm">
              Director Message
            </span>
            <h2 className="mt-4 text-[34px] font-black text-[#071C34]">
              Message from the Director (International Relation's)
            </h2>
          </div>

          <div className="glass-card rounded-[36px] border border-white/80 bg-white/75 p-6 shadow-[0_30px_90px_rgba(97,54,0,.12)] backdrop-blur-xl md:p-10">
            <Quote className="absolute right-10 top-10 h-32 w-32 text-[#DFA321]/18" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[350px_1fr] lg:items-start">
              <div className="float-soft rounded-[30px] border border-white/20 bg-gradient-to-br from-[#071C34] via-[#0C315E] to-[#8B5A2B] p-7 text-center text-white shadow-[0_28px_70px_rgba(7,28,52,.24)]">
               <div className="mx-auto flex h-[240px] w-[240px] items-center justify-center rounded-full border-[7px] border-[#FFF2C8] bg-white shadow-[0_18px_45px_rgba(7,28,52,.22)]">
  <span className="text-[46px] font-black text-[#071C34]">DKP</span>
</div>

                <h3 className="mt-7 text-[22px] font-black">
                  Dr. Kamesh Satish Pawar
                </h3>
                <p className="mt-2 text-[13px] font-bold uppercase tracking-wide text-white/75">
                  Director, International Relations
                </p>
                <p className="text-[13px] font-semibold text-[#DFA321]">
                  Edwin Incorporation
                </p>

                <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <div className="flex justify-center gap-1 text-[#DFA321]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-2 text-[12px] font-black uppercase tracking-wide">
                    Academic Excellence Hub
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#F4D48A] bg-white/90 p-6 shadow-[0_18px_55px_rgba(7,28,52,.08)] md:p-8">
                <div className="mb-6 flex items-center gap-3 border-b border-[#F4D48A] pb-4 text-[#071C34]">
                  <MessageSquare size={22} className="text-[#C46A00]" />
                  <span className="text-[13px] font-black uppercase tracking-wide">
                    Directorate Briefing
                  </span>
                </div>

                <div className="space-y-5 text-[15.5px] font-medium leading-[1.85] text-[#172033]">
                  <p className="text-[17px] font-black text-[#071C34]">
                    Dear Members, Esteemed Research Scholars, Respected
                    Academicians, and Dedicated Employees,
                  </p>

                  <p>
                    I hope this message finds you well. In these unprecedented
                    times, I wish to extend my heartfelt gratitude to every one
                    of you for your unwavering commitment and dedication to
                    academic and research excellence at Edwin Incorporation.
                  </p>

                  <p>
                    As we navigate through these challenging circumstances, it
                    is imperative that we maintain a positive outlook and
                    continue to strive for excellence in everything we do. Your
                    hard work and perseverance are crucial as we face these
                    hurdles together.
                  </p>

                  <div className="rounded-r-[18px] border-l-4 border-[#C46A00] bg-[#FFF8EA] p-5 text-[15px] font-bold italic text-[#071C34]">
                    “At Edwin Incorporation, we are committed to delivering our
                    very best in all aspects of our operations. However, we
                    recognize that perfection is an ongoing journey, and we
                    welcome feedback from all our stakeholders. Your insights
                    and suggestions play a vital role in helping us improve and
                    evolve rapidly.”
                  </div>

                  <p>
                    I am pleased to inform you that we have successfully
                    transitioned to an online platform for our operations. This
                    shift ensures that we can continue our work effectively and
                    efficiently, regardless of external challenges. It is a
                    testament to our adaptability and resilience as an
                    organization.
                  </p>

                  <p>
                    I would like to take this opportunity to express my sincere
                    appreciation to all our partners and collaborators who have
                    stood by us during these times of change and growth. Your
                    support and trust are invaluable to us, and we look forward
                    to continuing our fruitful relationships in the future.
                  </p>

                  <p>
                    In conclusion, I extend my heartfelt thanks to each one of
                    you for your dedication, hard work, and contributions to
                    Edwin Incorporation. Together, we will overcome challenges,
                    achieve milestones, and emerge stronger than ever before.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-3 text-[13px] font-bold italic text-[#536071]">
                  <span>Warm regards</span>
                  <div className="h-px w-14 bg-[#F4D48A]" />
                  <span className="text-[#071C34]">
                    Office of International Relations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071C34] via-[#0C315E] to-[#111827] px-5 py-20">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#C46A00]/18 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#DFA321]/16 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
          <div className="glass-card group rounded-[30px] border border-white/15 bg-white/10 p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#DFA321]/80 hover:bg-white/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#C46A00] to-[#DFA321] text-[#071C34] shadow-[0_16px_35px_rgba(196,106,0,.30)]">
              <Target size={30} />
            </div>
            <h3 className="text-[26px] font-black">Our Mission</h3>
            <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-white/82">
              At Edwin Incorporation, our mission is to empower academic growth
              and innovation through comprehensive solutions and expert
              consultancy. We are dedicated to providing a wide array of
              services that support research and development, educational
              initiatives, journal editing, NGO support, and more.
            </p>
          </div>

          <div className="glass-card group rounded-[30px] border border-[#DFA321]/35 bg-gradient-to-br from-[#B85F00] via-[#C98213] to-[#DFA321] p-8 text-[#071C34] shadow-[0_24px_70px_rgba(196,106,0,.18)] transition duration-500 hover:-translate-y-3">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#071C34] text-[#DFA321]">
              <Lightbulb size={30} />
            </div>
            <span className="text-[13px] font-black uppercase tracking-wide">
              Vision Statement
            </span>
            <h3 className="mt-2 text-[26px] font-black">
              A sustainable future enabled by elite academic research.
            </h3>
            <p className="mt-4 text-[15px] font-bold leading-[1.8] text-[#071C34]/85">
              Our vision is to be recognized as a leading provider of innovative
              solutions and expert consultancy in research and development,
              publication, patent registration, and academic services.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#FFF8EA] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-white px-5 py-2 text-[13px] font-black uppercase tracking-wide text-[#C46A00] shadow-sm">
              Our Values
            </span>
            <h2 className="mt-4 text-[36px] font-black text-[#071C34]">
              Foundational Values
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-card group rounded-[28px] border border-white/80 bg-white/75 p-6 shadow-[0_18px_50px_rgba(97,54,0,.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#C46A00] hover:bg-gradient-to-br hover:from-white hover:to-[#FFF0C2]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#C46A00] to-[#DFA321] text-[#071C34] shadow-md transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {val.icon}
                </div>
                <h3 className="text-[19px] font-black text-[#071C34]">
                  {val.title}
                </h3>
                <p className="mt-3 text-[14.5px] font-semibold leading-[1.75] text-[#536071]">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20">
        <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-[#DFA321]/26 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="glass-card rounded-[34px] border border-[#F4D48A] bg-white/80 p-6 shadow-[0_28px_80px_rgba(97,54,0,.12)] backdrop-blur-xl md:p-10">
            <div className="mb-8 flex items-center gap-4 border-b border-[#F4D48A] pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#C46A00] to-[#DFA321] text-[#071C34]">
                <AlertTriangle size={26} />
              </div>
              <div>
                <span className="text-[13px] font-black uppercase tracking-wide text-[#C46A00]">
                  Compliance Framework
                </span>
                <h2 className="text-[32px] font-black text-[#071C34]">
                  Notice
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-[15px] font-medium leading-[1.8] text-[#172033]">
              {[
                "Dear Sir/Madam, We sincerely appreciate your feedback, as it helps us improve our services. We are committed to supporting academicians in achieving their academic goals through Edwin Educational and Professional Consultancy LLP.",
                "Before submitting your application, please note that we carefully review all articles before proceeding with submission to the relevant journals. Yes, we do charge a one-time processing fee to cover our expenses.",
                "You are encouraged to submit your feedback via our website’s feedback link. We value your input and are committed to making improvements based on constructive feedback.",
                "Delays in research processes are common across organisations, often due to issues like plagiarism or the need for document revisions. We work diligently with authors to address these issues.",
                "Please note that some journals are under our Memorandum of Understanding (MoU), while others are not. We submit papers for publication, and if you wish to save time in this process, our services are available to assist you.",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`rounded-[20px] border p-5 transition duration-300 hover:-translate-y-1 ${
                    index % 2 === 0
                      ? "border-[#F4D48A] bg-[#FFF8EA] hover:border-[#C46A00]"
                      : "border-[#E8EDF5] bg-white hover:border-[#C46A00]"
                  }`}
                >
                  {text}
                </div>
              ))}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#F4D48A] pt-6">
                <p className="text-[17px] font-black text-[#071C34]">
                  Thank you for your understanding and cooperation.
                </p>
                <span className="rounded-full bg-gradient-to-r from-[#C46A00] to-[#DFA321] px-5 py-2 text-[13px] font-black text-[#071C34]">
                  Compliance Framework
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
