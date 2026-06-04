import React, { useState, useEffect } from "react";
import {
  FaGlobeAmericas,
  FaUserGraduate,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight,
  FaAward,
  FaUserTie,
  FaFileSignature,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaClock,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    title: "Your American Dream Starts Here",
    subtitle: "Expert guidance for extraordinary professionals",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    title: "EB-1 Visa Specialists",
    subtitle: "Tailored solutions for exceptional achievements",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    title: "Proven Success Rate",
    subtitle: "Building strong petitions for global talent",
  },
];

const services = [
  {
    title: "EB-1A (Extraordinary Ability)",
    description:
      "Designed for individuals with extraordinary achievements in arts, sciences, education, business, or athletics. We help prepare strong petitions with complete documentation support.",
    icon: <FaAward />,
    color: "#C89B3C",
  },
  {
    title: "EB-1B (Outstanding Professors & Researchers)",
    description:
      "We assist professors and researchers in preparing evidence of academic excellence, publications, citations, and research contributions for successful EB-1B petitions.",
    icon: <FaUserGraduate />,
    color: "#1B3A6B",
  },
  {
    title: "EB-1C (Executives & Managers)",
    description:
      "Professional immigration support for multinational executives and managers seeking permanent residency opportunities in the United States.",
    icon: <FaUserTie />,
    color: "#2ECC71",
  },
];

const benefits = [
  { text: "Personalized immigration guidance for every applicant", icon: <FaCheckCircle /> },
  { text: "Professional documentation & petition preparation", icon: <FaFileSignature /> },
  { text: "Expert support for USCIS filing requirements", icon: <FaShieldAlt /> },
  { text: "Dedicated consultation from experienced specialists", icon: <FaUserTie /> },
  { text: "Strong approval-focused application strategy", icon: <FaAward /> },
  { text: "Continuous support throughout the visa process", icon: <FaHandshake /> },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We analyze your eligibility and identify the best EB-1 visa category for your profile.",
    icon: <FaUserTie />,
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "Our team helps collect achievements, publications, awards, and supporting evidence.",
    icon: <FaFileSignature />,
  },
  {
    step: "03",
    title: "Petition Filing",
    description:
      "We professionally prepare and submit your petition to USCIS with complete guidance.",
    icon: <FaBuilding />,
  },
  {
    step: "04",
    title: "Approval Support",
    description:
      "We stay connected until final approval and provide updates throughout the process.",
    icon: <FaCheckCircle />,
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Research Scientist",
    text: "Edwin Incorporation made my EB-1A application seamless. Their attention to detail and expertise was outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Senior Executive",
    text: "Professional, responsive, and incredibly knowledgeable. They guided me through every step of my EB-1C process.",
    rating: 5,
  },
  {
    name: "Prof. Robert Williams",
    role: "University Professor",
    text: "Their understanding of EB-1B requirements for academics is unparalleled. Highly recommended for researchers.",
    rating: 5,
  },
];

function EdwinAcademicImmigrationSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <style>
        {`
          

          * {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out;
          }

          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out;
          }

          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(27, 58, 107, 0.15);
          }

          .hover-glow:hover {
            box-shadow: 0 0 30px rgba(200, 155, 60, 0.3);
          }

          .card-hover-effect {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .card-hover-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(200, 155, 60, 0.1) 50%, 
              transparent 100%
            );
            transition: left 0.6s ease;
          }

          .card-hover-effect:hover::before {
            left: 100%;
          }

          .card-hover-effect:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(27, 58, 107, 0.2);
            border-color: #C89B3C;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="relative h-screen bg-white overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: `scale(1.1) translateY(${scrollY * 0.2}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/90 to-[#1B3A6B]/60" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20"
          >
            <FaChevronRight className="text-xl" />
          </button>

          <div className="relative z-20 flex items-center h-full max-w-[1200px] mx-auto px-5">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium mb-6 hover:bg-white/20 transition-all duration-300">
                <FaGlobeAmericas className="animate-pulse" />
                EB-1 Immigration Services
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp">
                {heroSlides[currentSlide].title}
              </h1>

              <p className="text-xl text-gray-200 mt-6 max-w-xl animate-fadeInUp">
                {heroSlides[currentSlide].subtitle}
              </p>

              <p className="text-lg text-gray-300 mt-4 max-w-xl animate-fadeInUp">
                Edwin Incorporation specializes in EB-1A, EB-1B, and EB-1C visa
                solutions for extraordinary professionals seeking permanent
                residency in the United States.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 animate-fadeInUp">
                <button className="bg-[#C89B3C] hover:bg-[#A67B2E] transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#C89B3C]/20 hover-lift">
                  Apply For Visa
                </button>

                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1B3A6B] transition-all duration-300 px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover-lift">
                  Book Consultation
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-12 animate-fadeInUp">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-sm text-gray-300 mt-1">Consultations</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white">98%</h3>
                  <p className="text-sm text-gray-300 mt-1">Satisfaction</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white">10+</h3>
                  <p className="text-sm text-gray-300 mt-1">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#C89B3C] w-16"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gradient-to-b from-white to-[#EAF1FB] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaAward />
              Our Services
            </div>

            <h2 className="text-4xl font-bold text-[#1B3A6B]">
              Our EB-1 Visa Categories
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
              Professional immigration support designed to help extraordinary
              individuals and executives achieve permanent residency in the
              United States.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover-effect bg-white rounded-2xl border border-[#D6E0F0] p-8"
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-all duration-300"
                  style={{
                    backgroundColor:
                      isHovering === index ? service.color : "#EAF1FB",
                    color: isHovering === index ? "white" : service.color,
                    transform:
                      isHovering === index
                        ? "rotate(5deg) scale(1.1)"
                        : "rotate(0deg)",
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-[22px] font-semibold text-[#1A1A2E] mt-6">
                  {service.title}
                </h3>

                <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-[#1B3A6B] hover:text-[#C89B3C] transition-all duration-300 font-medium group">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <div className="inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaShieldAlt />
              Why Choose Us
            </div>

            <h2 className="text-4xl font-bold text-[#1B3A6B] leading-tight">
              Why Choose Edwin Incorporation?
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-5">
              We simplify complex immigration procedures with strategic
              consultation, documentation assistance, and personalized support
              throughout the EB-1 visa process.
            </p>

            <div className="grid gap-4 mt-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="hover-lift bg-[#EAF1FB] border border-[#D6E0F0] rounded-xl p-5 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="text-[#C89B3C] text-xl mt-1 group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <p className="text-[15px] leading-[1.7] text-[#1A1A2E] font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slideInRight bg-gradient-to-br from-[#1B3A6B] to-[#2C5F8A] rounded-[24px] p-10 text-white relative overflow-hidden hover-glow transition-shadow duration-300">
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#C89B3C] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-[#C89B3C] rounded-full opacity-10"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
                <FaCheckCircle className="text-[#C89B3C]" />
                Trusted Immigration Experts
              </div>

              <h3 className="text-3xl font-bold mt-6 leading-snug">
                Helping Professionals Build Their Future In The USA
              </h3>

              <p className="text-[#D6E0F0] text-[15px] leading-[1.8] mt-5">
                Our team focuses on building strong EB-1 petitions through
                proper documentation, eligibility analysis, and immigration
                consultation support.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-3xl font-bold">10+</h4>
                  <p className="text-sm text-[#D6E0F0] mt-2">
                    Years Experience
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-3xl font-bold">24/7</h4>
                  <p className="text-sm text-[#D6E0F0] mt-2">
                    Consultation Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#EAF1FB] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaClock />
              Our Process
            </div>

            <h2 className="text-4xl font-bold text-[#1B3A6B]">
              Our Immigration Process
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
              A structured and transparent process to guide you from
              consultation to visa approval.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {process.map((item, index) => (
              <div
                key={index}
                className="card-hover-effect relative bg-white rounded-2xl border border-[#D6E0F0] p-7"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2C5F8A] text-white flex items-center justify-center text-2xl shadow-lg">
                    {item.icon}
                  </div>

                  <span className="text-4xl font-bold text-[#EAF1FB]">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold text-[#1A1A2E]">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
                  {item.description}
                </p>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#C89B3C] text-2xl">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaStar className="text-[#C89B3C]" />
              Testimonials
            </div>

            <h2 className="text-4xl font-bold text-[#1B3A6B]">
              What Our Clients Say
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
              Hear from professionals who successfully obtained their EB-1 visas
              with our support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="hover-lift bg-gradient-to-b from-[#EAF1FB] to-white rounded-2xl border border-[#D6E0F0] p-8 relative"
              >
                <FaQuoteLeft className="text-4xl text-[#C89B3C] opacity-50 mb-4" />

                <p className="text-[15px] leading-[1.8] text-[#5A6A85] italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#C89B3C]" />
                  ))}
                </div>

                <div className="border-t border-[#D6E0F0] mt-6 pt-4">
                  <h4 className="font-semibold text-[#1B3A6B]">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-[#5A6A85]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ZOHO FORM SECTION */}
<section className="relative py-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="max-w-5xl mx-auto px-4 relative z-10">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
        <FaFileSignature />
        Apply Now
      </div>

      <h2 className="text-4xl font-bold text-[#1B3A6B]">
        EB-1 Visa Application Form
      </h2>

      <p className="text-[16px] leading-[1.7] text-[#5A6A85] mt-3 max-w-2xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p>
    </div>

    <div className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden">
      <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4">
        <h3 className="text-white text-xl font-bold">
          Application Form
        </h3>
      </div>

      <iframe
        title="Zoho CRM Web Form"
        src="https://crm.zoho.in/crm/WebFormServeServlet?rid=10e82c0d7b54cdc93e2c4e476d74423cae8a64561dde736ea4b44cd5b4d8085059881b5df68554605c26d79d17a3fa3agid24da6f4d0b762ddad1244ca9337e302ee419f08e17e8fd762e758e6bd82d53d2"
        width="100%"
        height="430"
        frameBorder="0"
        scrolling="yes"
        style={{
          border: "none",
          width: "100%",
          display: "block",
        }}
      />
    </div>
  </div>
</section>

{/* ZOHO FORM SECTION */}
<section className="relative py-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="max-w-5xl mx-auto px-4 relative z-10">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
        <FaFileSignature />
        Apply Now
      </div>

      <h2 className="text-4xl font-bold text-[#1B3A6B]">
        Passport Application Form
      </h2>

      <p className="text-[16px] leading-[1.7] text-[#5A6A85] mt-3 max-w-2xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p>
    </div>

    <div className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden">
      <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4">
        <h3 className="text-white text-xl font-bold">
          Application Form
        </h3>
      </div>

      <iframe
        title="Zoho CRM Web Form"
        src="https://crm.zoho.in/crm/WebFormServeServlet?rid=9bde249f47bc02c54a880a78c2d48660131e55177f6bec2fe69fd2c5e83a2ef8a21ada5cfc06bc6722947f8f69ba83c4gid9cf07970b6726da6e7abfcf2e93b3c8cd535041dbb6d19729e7caf941af37dc9"
        width="100%"
        height="520"
        frameBorder="0"
        scrolling="yes"
        style={{
          border: "none",
          width: "100%",
          display: "block",
        }}
      />
    </div>
  </div>
</section>
    </div>
  );
}

export default EdwinAcademicImmigrationSolutions;