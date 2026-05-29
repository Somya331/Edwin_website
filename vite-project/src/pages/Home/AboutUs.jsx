import React, { useEffect, useState } from 'react';
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
  ArrowUpRight,
  Quote,
  MessageSquare,
  Star,
  ChevronRight 
} from 'lucide-react';

export default function AboutUsStrictPremiumDesign() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreValues = [
    { icon: <Users className="w-6 h-6 text-[#1B3A6B] group-hover:text-[#C89B3C] transition-colors duration-300" />, title: "Customer First", desc: "We prioritize your academic and professional needs with tailored solutions." },
    { icon: <Award className="w-6 h-6 text-[#1B3A6B] group-hover:text-[#C89B3C] transition-colors duration-300" />, title: "Deep Expertise", desc: "Our team of global experts ensures elite guidance at every milestone." },
    { icon: <ShieldCheck className="w-6 h-6 text-[#1B3A6B] group-hover:text-[#C89B3C] transition-colors duration-300" />, title: "Absolute Integrity", desc: "Operating with 100% transparency, honesty, and high ethical standards." },
    { icon: <Lightbulb className="w-6 h-6 text-[#1B3A6B] group-hover:text-[#C89B3C] transition-colors duration-300" />, title: "Continuous Innovation", desc: "Embracing cutting-edge tools to elevate research and education." },
    { icon: <TrendingUp className="w-6 h-6 text-[#1B3A6B] group-hover:text-[#C89B3C] transition-colors duration-300" />, title: "Constant Growth", desc: "Refining our workflows daily based on your valuable feedback." }
  ];

  return (
    <div className="bg-[#EAF1FB] text-[#1A1A2E] font-sans min-h-screen overflow-x-hidden selection:bg-[#C89B3C] selection:text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* ADVANCED CUSTOM EFFECTS (Strictly using Design System shades only) */}
      <style>{`
        @keyframes subtleLinearShimmer {
          0% { transform: translateX(-150%) rotate(45deg); }
          100% { transform: translateX(150%) rotate(45deg); }
        }
        .premium-shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        .premium-shimmer-effect::after {
          content: '';
          position: absolute;
          top: -50%; left: -60%; width: 30%; height: 200%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: rotate(45deg);
          animation: subtleLinearShimmer 4s infinite ease-in-out;
        }
        
        /* SCREENSHOT-STYLE DYNAMIC BORDER & NEON GOLD GLOW TRANSITION */
        .screenshot-glow-card {
          position: relative;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .screenshot-glow-card::before {
          content: ''; 
          position: absolute; 
          inset: 0; 
          opacity: 0;
          background: linear-gradient(135deg, rgba(200,155,60,0.03) 0%, rgba(27,58,107,0.02) 100%);
          transition: opacity 300ms ease; 
          pointer-events: none; 
          z-index: 1;
          border-radius: 12px;
        }
        .screenshot-glow-card:hover::before {
          opacity: 1;
        }
        
        /* HOVER STATES: Sharp border transformation + Deep container aura glow */
        .screenshot-glow-card:hover {
          border-color: rgba(200, 155, 60, 0.6) !important;
          box-shadow: 0 8px 24px rgba(200, 155, 60, 0.12) !important;
          transform: translateY(-5px);
        }

        /* EXTRA LUXURY EFFECT FOR DARK CONTAINER CARDS (As requested from image) */
        .dark-glowing-card {
          position: relative;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dark-glowing-card:hover {
          border-color: rgba(200, 155, 60, 0.8) !important;
          box-shadow: 0 12px 32px rgba(200, 155, 60, 0.18) !important;
          transform: translateY(-6px);
        }
      `}</style>


      {/* 2. MICRO-ANIMATED HERO SECTION */}
      <section className="relative py-32 bg-[#1B3A6B] text-white overflow-hidden border-b-2 border-[#C89B3C]">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#EAF1FB_1.5px,transparent_1.5px)] [background-size:28px_24px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B3C] opacity-[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-5 relative z-10 text-center">
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#C89B3C] bg-white/5 px-5 py-2 rounded-full border border-white/10 inline-flex items-center gap-2">
             Edwin Incorporation
          </span>
          <h1 className="mt-6 text-[40px] font-bold tracking-tight text-white leading-tight">
            About Us
          </h1>
          <p className="mt-6 text-[15px] text-[#EAF1FB]/90 max-w-3xl mx-auto leading-[1.7] font-normal">
            Your global partner in research, publication, academic consultancy, and digital institutional empowerment. We turn your intellectual aspirations into real-world impact.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button 
              className="bg-[#1B3A6B] text-white text-[15px] font-medium rounded-[8px] hover:bg-[#C89B3C] border border-white/20 transition-all duration-200 flex items-center gap-2 group tracking-wide premium-shimmer-effect shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              style={{ padding: '10px 24px', fontWeight: 500 }}
            >
              Explore Our Services <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button 
              className="bg-white border border-[#1B3A6B] text-[#1B3A6B] text-[15px] font-medium rounded-[8px] hover:bg-[#EAF1FB] transition-all duration-200"
              style={{ padding: '10px 24px', fontWeight: 500 }}
            >
              Contact Consultancy
            </button>
          </div>
        </div>
      </section>

      {/* 3. ALTERNATING CONTENT SECTIONS */}
      
      {/* SECTION 1 (DIRECTOR MESSAGE): CLEAN WHITE BACKGROUND */}
      <section className="py-[80px] bg-[#FFFFFF] relative overflow-hidden border-b border-[#D6E0F0]">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[28px] font-bold text-[#1B3A6B] tracking-tight">
              Message from the Director (International Relations)
            </h2>
            <div className="h-0.5 w-16 bg-[#C89B3C] mx-auto mt-3"></div>
          </div>

          <div 
            className="screenshot-glow-card bg-[#FFFFFF] rounded-[12px] border border-[#D6E0F0] flex flex-col lg:flex-row gap-6 items-stretch relative"
            style={{ padding: '24px' }}
          >
            <Quote className="absolute top-8 right-8 w-36 h-36 text-[#EAF1FB] opacity-40 pointer-events-none" strokeWidth={1} />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-stretch w-full">
              
              {/* PROFILE MODULE */}
              <div 
                className="w-full lg:w-1/3 flex flex-col items-center text-center bg-[#EAF1FB] rounded-[12px] border border-[#D6E0F0] justify-between relative overflow-hidden group transition-all duration-300"
                style={{ padding: '24px' }}
              >
                <div className="w-full flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 bg-[#1B3A6B] rounded-[12px] flex items-center justify-center text-white text-3xl font-bold tracking-wider shadow-sm transition-all duration-300 group-hover:scale-[1.02]">
                      DKP
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#C89B3C] text-white p-2.5 rounded-[8px] shadow-sm">
                      <Award size={20} />
                    </div>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1A1A2E] tracking-tight group-hover:text-[#1B3A6B] transition-colors">Dr. Kamesh Satish Pawar</h3>
                  <p className="text-[#5A6A85] text-[13px] font-medium mt-1 uppercase tracking-wider">Director (International Relations)</p>
                  <p className="text-[#5A6A85] text-[13px] font-normal tracking-wide">Edwin Incorporation</p>
                </div>

                <div className="w-full mt-10 pt-6 border-t border-[#D6E0F0]">
                  <div className="flex items-center gap-1.5 bg-[#FFFFFF] px-3 py-1.5 rounded-md border border-[#D6E0F0] justify-center shadow-sm">
                    <div className="flex text-[#C89B3C] gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1B3A6B]">Academic Excellence Hub</p>
                  </div>
                </div>
              </div>

              {/* MESSAGE CONTENT */}
              <div className="w-full lg:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 mb-6 text-[#1B3A6B] border-b border-[#D6E0F0] pb-4 w-full">
                  <MessageSquare className="w-5 h-5 text-[#1B3A6B]" />
                  <span className="text-[13px] font-normal text-[#5A6A85] uppercase tracking-wider">Directorate Briefing</span>
                </div>

                <div className="text-[#1A1A2E] leading-[1.7] space-y-6 text-[15px] font-normal">
                  <p className="font-bold text-[#1B3A6B] text-[16px] tracking-tight">
                    Dear Members, Esteemed Research Scholars, Respected Academicians, and Dedicated Employees,
                  </p>
                  <p>
                    I hope this message finds you well. In these unprecedented times, I wish to extend my heartfelt gratitude to every one of you for your unwavering commitment and dedication to academic and research excellence at Edwin Incorporation.
                  </p>
                  <p>
                    As we navigate through these challenging circumstances, it is imperative that we maintain a positive outlook and continue to strive for excellence in everything we do. Your hard work and perseverance are crucial as we face these hurdles together.
                  </p>
                  
                  <div className="bg-[#EAF1FB] border-l-4 border-[#1B3A6B] p-6 rounded-r-[8px] italic text-[#1A1A2E] my-6 font-medium">
                    "At Edwin Incorporation, we are committed to delivering our very best in all aspects of our operations. However, we recognize that perfection is an ongoing journey, and we welcome feedback from all our stakeholders. Your insights and suggestions play a vital role in helping us improve and evolve rapidly."
                  </div>

                  <p>
                    I am pleased to inform you that we have successfully transitioned to an online platform for our operations. This shift ensures that we can continue our work effectively and efficiently, regardless of external challenges. It is a testament to our adaptability and resilience as an organization.
                  </p>
                  <p>
                    I would like to take this opportunity to express my sincere appreciation to all our partners and collaborators who have stood by us during these times of change and growth. Your support and trust are invaluable to us, and we look forward to continuing our fruitful relationships in the future.
                  </p>
                  <p className="font-bold text-[#1B3A6B] pt-4 text-[16px]">
                    In conclusion, I extend my heartfelt thanks to each one of you for your dedication, hard work, and contributions to Edwin Incorporation. Together, we will overcome challenges, achieve milestones, and emerge stronger than ever before.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[#5A6A85] text-[13px] font-medium italic">
                  <span>Warm regards,</span>
                  <div className="h-px bg-[#D6E0F0] w-12"></div>
                  <span className="text-[#1A1A2E] font-bold">Office of International Relations</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 (VISION & MISSION): LIGHT BLUE SURFACE BACKGROUND */}
      <section className="bg-[#EAF1FB] py-[80px] border-b border-[#D6E0F0]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
            
            {/* Mission Card (Premium White Surface Style) */}
            <div 
              className="screenshot-glow-card bg-[#FFFFFF] rounded-[12px] border border-[#D6E0F0] premium-shimmer-effect group"
              style={{ padding: '24px' }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#EAF1FB] rounded-[8px] flex items-center justify-center text-[#1B3A6B] mb-6 border border-[#D6E0F0] group-hover:bg-[#1B3A6B] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-4 tracking-tight relative inline-block">
                  Our Mission
                  <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#C89B3C] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-[#1A1A2E] text-[15px] leading-[1.7] font-normal opacity-95">
                  At Edwin Incorporation, our mission is to empower academic growth and innovation through comprehensive solutions and expert consultancy. We are dedicated to providing a wide array of services that support research and development, educational initiatives, journal editing, NGO support, and more. By offering high-quality solutions, we aim to assist universities, colleges, and individuals in achieving their academic and intellectual goals.
                </p>
              </div>
            </div>

            {/* Vision Card (Dark Dynamic Premium Glass Layer - Exact match to your shared design structure) */}
            <div 
              className="dark-glowing-card bg-[#1A1A2E] text-white rounded-[12px] border border-[#1B3A6B] premium-shimmer-effect group transition-all duration-300"
              style={{ padding: '24px' }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#1B3A6B] rounded-[8px] flex items-center justify-center text-[#C89B3C] mb-6 border border-[#D6E0F0]/10 group-hover:bg-[#C89B3C] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Lightbulb size={28} />
                </div>
                <span className="text-[13px] font-bold tracking-wider text-[#C89B3C] uppercase block mb-1">Vision Statement</span>
                <h3 className="text-[22px] font-bold text-white mb-4 tracking-tight leading-snug">
                  A sustainable future enabled by elite academic research.
                </h3>
                <p className="text-[#5A6A85] text-[15px] leading-[1.7] font-normal group-hover:text-[#EAF1FB] transition-colors duration-200">
                  Our vision is to be recognized as a leading provider of innovative solutions and expert consultancy in research and development, publication, patent registration, and academic services. We strive to empower individuals and organizations worldwide to reach their full academic and intellectual potential. Through our services, we aim to contribute to societal advancement by fostering intellectual development and promoting academic excellence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 (CORE VALUES GRID): CLEAN WHITE BACKGROUND */}
      <section className="bg-[#FFFFFF] py-[80px] border-b border-[#D6E0F0]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[28px] font-bold text-[#1B3A6B] tracking-tight">Foundational Values</h2>
            <p className="text-[#5A6A85] text-[13px] font-normal mt-2">At Edwin Incorporation, we uphold the following core values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="screenshot-glow-card bg-[#FFFFFF] rounded-[12px] border border-[#D6E0F0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] group"
                style={{ padding: '24px' }}
              >
                <div className="mb-4 inline-block p-2 bg-[#EAF1FB] rounded-[8px] group-hover:bg-[#1B3A6B] transition-all duration-300">{val.icon}</div>
                <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-2 tracking-tight group-hover:text-[#1B3A6B] transition-all duration-200">{val.title}</h3>
                <p className="text-[#1A1A2E] text-[15px] leading-[1.7] font-normal opacity-90">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 (REGULATORY NOTICE): LIGHT BLUE SURFACE BACKGROUND */}
      <section className="bg-[#EAF1FB] py-[80px] border-b border-[#D6E0F0]">
        <div className="max-w-[1200px] mx-auto px-5 relative overflow-hidden">
          <div 
            className="screenshot-glow-card bg-[#FFFFFF] rounded-[12px] border border-[#D6E0F0]"
            style={{ padding: '24px' }}
          >
            <div className="flex items-center gap-3 text-[#1B3A6B] mb-8 border-b border-[#D6E0F0] pb-6">
              <AlertTriangle className="text-[#C89B3C]" size={26} />
              <h2 className="text-[28px] font-bold tracking-tight text-[#1B3A6B]">Notice</h2>
            </div>
            
            <div className="text-[#1A1A2E] text-[15px] leading-[1.7] space-y-4 font-normal">
              <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-md border border-[#D6E0F0] transition-all hover:border-[#C89B3C]">
                <p>Dear Sir/Madam,</p>
                <p>We sincerely appreciate your feedback, as it helps us improve our services. We are committed to supporting academicians in achieving their academic goals through Edwin Educational and Professional Consultancy LLP. Our services include consultancy, access to ISSN-registered journals, editorial board memberships, and article submissions.</p>
              </div>
              
              <div className="space-y-4 bg-[#EAF1FB] p-5 rounded-md border border-[#D6E0F0] transition-all hover:border-[#1B3A6B]">
                <p>Before submitting your application, please note that we carefully review all articles before proceeding with submission to the relevant journals. Yes, we do charge a one-time processing fee to cover our expenses, which includes email communications, WhatsApp updates, and payments for research paper reviews. We offer a 20% discount on all Edwin services and assure you that we charge only once.</p>
              </div>
              
              <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-md border border-[#D6E0F0] transition-all hover:border-[#C89B3C]">
                <p>You are encouraged to submit your feedback via our website’s feedback link. We value your input and are committed to making improvements based on constructive feedback. However, we kindly request that you refrain from making any unfounded comments without knowing the full details. Comments that damage the reputation of any organisation without factual evidence can be subject to investigation and may be considered an offensive act under the Indian Penal Code.</p>
                <p>Please understand that charging for services or memberships does not necessarily indicate whether we are genuine or not. We provide genuine services to all academicians. The process of sending papers for review involves costs, and we may charge accordingly. If you are not prepared to pay the fee, you are free to opt out.</p>
              </div>
              
              <div className="space-y-4 bg-[#EAF1FB] p-5 rounded-md border border-[#D6E0F0] transition-all hover:border-[#1B3A6B]">
                <p>Delays in research processes are common across organisations, often due to issues like plagiarism or the need for document revisions. We work diligently with authors to address these issues and proceed with submission. The submission process requires significant effort from our team, and we do not offer refunds for any services. However, we continue to work on the same research papers until they are successfully submitted.</p>
              </div>
              
              <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-md border border-[#D6E0F0] transition-all hover:border-[#C89B3C]">
                <p>Please note that some journals are under our Memorandum of Understanding (MoU), while others are not. We submit papers for publication, and if you wish to save time in this process, our services are available to assist you. If you prefer to handle submissions independently, you are welcome to do so.</p>
                <p>We are here to support you, and we urge those who have provided comments to reevaluate their statements with proof and submit them through our feedback system.</p>
              </div>
              
              <div className="pt-6 border-t border-[#D6E0F0] mt-6 flex flex-wrap justify-between items-center text-[#5A6A85] text-[13px] gap-4">
                  <p className="font-bold text-[#1B3A6B] text-[16px]">Thank you for your understanding and cooperation.</p>
                  <span className="font-medium bg-[#EAF1FB] p-1.5 rounded-md border border-[#D6E0F0] text-[13px]">Compliance Framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA LEAD BANNER */}
      <section className="bg-[#1B3A6B] py-16 text-center text-white border-t border-[#C89B3C]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] font-bold mb-4 text-white">Ready to Elevate Your Academic Research?</h2>
          <p className="text-[#EAF1FB] opacity-80 text-[15px] mb-8 max-w-xl mx-auto leading-relaxed">Get in touch with our expert advisory board today and fast-track your publications securely.</p>
          <button 
            className="bg-[#C89B3C] text-white text-[15px] font-medium rounded-[8px] hover:bg-white hover:text-[#1B3A6B] transition-all duration-200 shadow-md tracking-wide group flex items-center justify-center gap-2 mx-auto premium-shimmer-effect"
            style={{ padding: '10px 24px', fontWeight: 500 }}
          >
            Get Support Now <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 5. POLISHED INSTITUTIONAL FOOTER */}
      <footer className="bg-[#1B3A6B] text-white border-t border-white/10 py-20 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          
          <div className="space-y-4">
            <h3 className="text-white text-[18px] font-bold tracking-tight">EDWIN INC.</h3>
            <p className="text-[#EAF1FB] opacity-70 text-[13px] leading-[1.7] font-normal tracking-wide">Fostering academic excellence and digital innovation globally since 2012. Empowering the next generation of global research workflows.</p>
            <div className="h-px bg-white opacity-10 w-full pt-2"></div>
            <p className="text-[12px] text-white opacity-40">© 2012–2026 Edwin Incorporation. All rights reserved.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[16px] text-white tracking-tight">Corporate Office</h4>
            <div className="space-y-3 text-[14px] text-white opacity-80">
              <div className="flex gap-3 items-start">
                <MapPin className="text-[#C89B3C] flex-shrink-0 mt-0.5" size={16} />
                <p>15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, 110019</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-[#C89B3C] flex-shrink-0" size={16} />
                <p>+91 6262752167 / +1 2792029553</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[16px] text-white tracking-tight">Support Channels</h4>
            <div className="space-y-3 text-[14px]">
              <div className="flex gap-3 items-center group">
                <Mail className="text-[#C89B3C] flex-shrink-0" size={16} />
                <a href="mailto:care@edwinepc.com" className="text-white opacity-80 hover:text-[#C89B3C] transition-all duration-200">care@edwinepc.com</a>
              </div>
              <div className="flex gap-3 items-center group">
                <Globe className="text-[#C89B3C] flex-shrink-0" size={16} />
                <a href="https://www.academichelpstore.com" className="text-white opacity-80 hover:text-[#C89B3C] transition-all duration-200">www.academichelpstore.com</a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}