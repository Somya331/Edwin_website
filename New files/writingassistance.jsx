import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  FaChevronDown, 
  FaPaperPlane, 
  FaFileAlt, 
  FaProjectDiagram, 
  FaPenFancy,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaHandshake,
  FaUserGraduate,
  FaGlobeAmericas,
  FaAward
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
    title: "Expert PhD Assistance",
    subtitle: "Transform your research journey with professional guidance",
  },
  {
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1200",
    title: "Academic Excellence",
    subtitle: "Comprehensive support from proposal to thesis submission",
  },
  {
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200",
    title: "Research Made Easy",
    subtitle: "Expert guidance for papers, projects and dissertations",
  },
];

const services = [
  {
    icon: <FaPenFancy className="w-8 h-8" />,
    title: "Paper Writing Assistant",
    description: "Expert guidance for research papers, dissertations, and academic manuscripts with plagiarism-free content.",
    color: "#C89B3C"
  },
  {
    icon: <FaProjectDiagram className="w-8 h-8" />,
    title: "Major Minor Project Support",
    description: "Comprehensive assistance for major and minor projects across all disciplines and academic levels.",
    color: "#1B3A6B"
  },
  {
    icon: <FaFileAlt className="w-8 h-8" />,
    title: "Synopsis Writing",
    description: "Professional synopsis and proposal writing to help you get your research approved faster.",
    color: "#2ECC71"
  }
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "PhD Scholar, IIT Delhi",
    text: "Edwin Incorporation made my PhD journey smooth and successful. Their research guidance was exceptional.",
    rating: 5,
  },
  {
    name: "Prof. Amit Patel",
    role: "Research Supervisor",
    text: "Professional, responsive, and incredibly knowledgeable. They helped my students with excellent thesis writing.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "PhD Candidate",
    text: "Their synopsis writing service helped me get my research approved in the first attempt. Highly recommended!",
    rating: 5,
  },
];

const benefits = [
  { text: "Personalized research guidance for every scholar", icon: <FaCheckCircle /> },
  { text: "Professional thesis & dissertation writing", icon: <FaFileAlt /> },
  { text: "Plagiarism-free academic content guaranteed", icon: <FaShieldAlt /> },
  { text: "Expert support for research methodology", icon: <FaUserGraduate /> },
  { text: "Timely delivery of academic projects", icon: <FaClock /> },
  { text: "Continuous support throughout your PhD journey", icon: <FaHandshake /> },
];

const WritingAssistancePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
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

  const onSubmit = (data) => {
    if (!termsAccepted) {
      alert('Please accept the Terms & Conditions');
      return;
    }
    console.log('Form Data:', { ...data, selectedCountry, selectedFile });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif] bg-white min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

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

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
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

          .hover-scale {
            transition: transform 0.3s ease;
          }

          .hover-scale:hover {
            transform: scale(1.05);
          }

          .hover-glow:hover {
            box-shadow: 0 0 30px rgba(200, 155, 60, 0.3);
          }

          .shimmer {
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(255,255,255,0.2) 50%, 
              transparent 100%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite;
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

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#1B3A6B] shadow-lg backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex justify-between items-center">
          <div className="text-white text-2xl font-bold tracking-tight hover-scale">
            Edwin<span className="text-[#C89B3C]">Incorporation</span>
          </div>
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-white text-sm hover:text-[#C89B3C] transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B3C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-[#C89B3C] text-sm border-b-2 border-[#C89B3C] transition-colors duration-300">
              Services
            </Link>
            <Link to="/about" className="text-white text-sm hover:text-[#C89B3C] transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B3C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-white text-sm hover:text-[#C89B3C] transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B3C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="md:hidden text-white hover:text-[#C89B3C] transition-colors duration-300">
            <FaChevronDown />
          </div>
        </div>
      </nav>

      {/* HERO SECTION WITH SLIDING IMAGES */}
      <section className="relative h-screen bg-white overflow-hidden">
        {/* Slider */}
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20 hover:scale-110"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20 hover:scale-110"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Content */}
          <div className="relative z-20 flex items-center h-full max-w-[1200px] mx-auto px-5">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium mb-6 hover:bg-white/20 transition-all duration-300">
                <FaUserGraduate className="animate-pulse" />
                PhD Assistance Services
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp">
                {heroSlides[currentSlide].title}
              </h1>

              <p className="text-xl text-gray-200 mt-6 max-w-xl animate-fadeInUp">
                {heroSlides[currentSlide].subtitle}
              </p>

              <p className="text-lg text-gray-300 mt-4 max-w-xl animate-fadeInUp">
                Get expert guidance for your doctoral journey — from research proposal to final thesis submission
              </p>

              <div className="flex flex-wrap gap-4 mt-8 animate-fadeInUp">
                <button className="bg-[#C89B3C] hover:bg-[#A67B2E] transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#C89B3C]/20 hover-lift">
                  Start Your Application
                </button>

                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1B3A6B] transition-all duration-300 px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover-lift">
                  View Services
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 animate-fadeInUp">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-sm text-gray-300 mt-1">PhD Scholars</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white">98%</h3>
                  <p className="text-sm text-gray-300 mt-1">Success Rate</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white">10+</h3>
                  <p className="text-sm text-gray-300 mt-1">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Indicators */}
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

      {/* Services Section */}
      <section className="bg-gradient-to-b from-white to-[#EAF1FB] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaAward />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-[#1B3A6B]">
              Our Academic Services
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
              Comprehensive PhD assistance designed to support your academic journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover-effect bg-white rounded-2xl border border-[#D6E0F0] p-8"
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-all duration-300"
                  style={{
                    backgroundColor: isHovering === index ? service.color : "#EAF1FB",
                    color: isHovering === index ? "white" : service.color,
                    transform: isHovering === index ? "rotate(5deg) scale(1.1)" : "rotate(0deg)",
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
                  Learn More{" "}
                  <FaChevronRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <div className="inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaShieldAlt />
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold text-[#1B3A6B] leading-tight">
              Why Choose Our PhD Assistance?
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-5">
              We provide comprehensive academic support to help you navigate every stage of your doctoral journey successfully.
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
                Trusted Academic Experts
              </div>

              <h3 className="text-3xl font-bold mt-6 leading-snug">
                Helping Scholars Achieve Academic Excellence
              </h3>

              <p className="text-[#D6E0F0] text-[15px] leading-[1.8] mt-5">
                Our team of PhD experts focuses on delivering high-quality research support, ensuring your academic success.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-3xl font-bold">10+</h4>
                  <p className="text-sm text-[#D6E0F0] mt-2">Years Experience</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-3xl font-bold">24/7</h4>
                  <p className="text-sm text-[#D6E0F0] mt-2">Academic Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-[#EAF1FB] py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
                <FaFileAlt />
                Application Form
              </div>
              <h2 className="text-4xl font-bold text-[#1B3A6B]">Apply For PhD Assistance</h2>
              <p className="text-[#5A6A85] mt-4">Fill out the form below and our academic experts will contact you within 24 hours</p>
            </div>
            
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-[#2D7A4F] text-white rounded-lg text-center shadow-lg"
              >
                Application submitted successfully! We'll contact you soon.
              </motion.div>
            )}

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)} 
              className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-[#D6E0F0]"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-[#C0392B] text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-[#C0392B] text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Select Your Location</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                  >
                    <option value="">Select Your Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Designation</label>
                  <select
                    {...register("designation")}
                    className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                  >
                    <option value="">Select Designation</option>
                    <option value="Student">Student</option>
                    <option value="Research Scholar">Research Scholar</option>
                    <option value="Professor">Professor</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Title of Project *</label>
                <input
                  type="text"
                  {...register("projectTitle", { required: "Project title is required" })}
                  className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                  placeholder="Enter your research/project title"
                />
                {errors.projectTitle && <p className="text-[#C0392B] text-xs mt-1">{errors.projectTitle.message}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-[#C0392B] text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Mobile *</label>
                  <input
                    type="tel"
                    {...register("mobile", { required: "Mobile number is required" })}
                    className="w-full px-4 py-3 border-2 border-[#D6E0F0] rounded-lg focus:outline-none focus:border-[#1B3A6B] transition-all duration-200 text-[#1A1A2E] hover:border-[#C89B3C]"
                    placeholder="+91 98765 43210"
                  />
                  {errors.mobile && <p className="text-[#C0392B] text-xs mt-1">{errors.mobile.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[#1B3A6B] text-sm font-semibold mb-2">Upload a File (if Proposal have)</label>
                <div className="border-2 border-dashed border-[#D6E0F0] rounded-lg p-6 text-center hover:border-[#C89B3C] transition-all duration-200 hover:bg-[#EAF1FB] cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileUpload"
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    <div className="text-[#1B3A6B] mb-2">
                      <FaFileAlt className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="text-[#1B3A6B] font-semibold">
                      {selectedFile ? selectedFile : "Choose Files"}
                    </p>
                    <p className="text-[#A0AEC0] text-xs mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </label>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#1B3A6B] border-2 border-[#D6E0F0] rounded focus:ring-[#1B3A6B] cursor-pointer"
                />
                <label className="text-[#1A1A2E] text-sm">
                  I have read and agree to the <span className="text-[#C89B3C] cursor-pointer hover:underline font-semibold">Terms & Conditions</span> *
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#1B3A6B] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#C89B3C] transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
                >
                  Submit Application
                </button>
                <button
                  type="reset"
                  className="px-6 py-4 bg-white border-2 border-[#D6E0F0] text-[#1A1A2E] rounded-lg font-semibold hover:bg-[#EAF1FB] hover:border-[#C89B3C] transition-all duration-300 hover-lift"
                  onClick={() => {
                    setSelectedCountry('');
                    setSelectedFile(null);
                    setTermsAccepted(false);
                  }}
                >
                  Reset Form
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4">
              <FaStar className="text-[#C89B3C]" />
              Testimonials
            </div>
            <h2 className="text-4xl font-bold text-[#1B3A6B]">
              What Our Scholars Say
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A6A85] mt-4">
              Hear from PhD scholars who successfully completed their research with our support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <p className="text-sm text-[#5A6A85]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] py-20 px-5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C89B3C] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B3C] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight animate-fadeInUp">
            Need Personalized Guidance?
          </h2>
          <p className="text-[#D6E0F0] text-lg leading-[1.8] max-w-3xl mx-auto mt-5 animate-fadeInUp">
            Our academic counselors are available 24/7 to help you with your PhD journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fadeInUp">
            <button className="bg-[#C89B3C] hover:bg-[#A67B2E] transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#C89B3C]/20 hover-lift">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1B3A6B] transition-all duration-300 px-8 py-4 rounded-lg font-semibold hover-lift">
              We're Online!
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaPhone className="text-[#C89B3C] text-2xl mx-auto mb-3" />
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
              <p className="text-gray-300 text-sm">Call Us Anytime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaEnvelope className="text-[#C89B3C] text-2xl mx-auto mb-3" />
              <p className="text-white font-semibold">academics@edwininc.com</p>
              <p className="text-gray-300 text-sm">Email Us</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaMapMarkerAlt className="text-[#C89B3C] text-2xl mx-auto mb-3" />
              <p className="text-white font-semibold">New York, USA</p>
              <p className="text-gray-300 text-sm">Visit Our Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1B3A6B] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:bg-[#C89B3C] transition-all duration-300 animate-pulse"
        >
          <FaPaperPlane className="w-5 h-5" />
          <span className="text-sm font-semibold">Chat with us</span>
        </motion.div>
      </div>
    </div>
  );
};

export default WritingAssistancePage;