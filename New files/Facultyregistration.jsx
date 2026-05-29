import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { 
  FaPaperPlane, FaBuilding, FaUserTie, FaShieldAlt, 
  FaHandshake, FaSmile, FaChevronLeft, FaChevronRight, FaStar,
  FaQuoteLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaChalkboardTeacher, FaRegLightbulb, FaUsers, FaGraduationCap,
  FaBriefcase, FaChartLine, FaRegGem, FaClock, FaCheckCircle
} from 'react-icons/fa';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

const FacultyCoGuideRegistration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegisterAs, setSelectedRegisterAs] = useState('');
  const [selectedPreferred, setSelectedPreferred] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Faculty & Co-Guide Registration",
      subtitle: "Join India's Premier Academic Network",
      description: "Connect with top universities and research institutions across India",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop",
    },
    {
      id: 2,
      title: "Research Employment Support",
      subtitle: "Find Your Perfect Academic Position",
      description: "Get matched with government and private university opportunities",
      image: "https://images.unsplash.com/photo-1544717305-38f3146bf189?w=1600&h=900&fit=crop",
    },
    {
      id: 3,
      title: "HR Staffing Solutions",
      subtitle: "For Universities & Colleges",
      description: "Comprehensive recruitment and onboarding support",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=900&fit=crop",
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Secure Job (Guarantee)",
      description: "We help academicians and researchers connect with verified universities and colleges for faculty and research opportunities."
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Insurance of Job",
      description: "Our academic HR support team assists candidates throughout the recruitment and onboarding process."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Perfect Match of Requirement",
      description: "We match faculty qualifications and research expertise with suitable university requirements."
    },
    {
      icon: <FaSmile className="w-8 h-8" />,
      title: "Support & Motivation",
      description: "We provide continuous guidance, application support, and career assistance for academicians and research scholars."
    }
  ];

  const services = [
    { title: "Jobs for Faculties", description: "Latest faculty positions in universities and colleges", icon: <FaChalkboardTeacher className="w-8 h-8" /> },
    { title: "Faculties Profile for University and Colleges", description: "Profile management and matching services", icon: <FaUsers className="w-8 h-8" /> },
    { title: "Job Insurance of Faculties", description: "Secure your academic career with our insurance", icon: <FaShieldAlt className="w-8 h-8" /> },
    { title: "Recruitment Solutions", description: "End-to-end recruitment for academic institutions", icon: <FaBriefcase className="w-8 h-8" /> }
  ];

  const universities = [
    { name: "International Technological University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=150&h=150&fit=crop", established: 1987 },
    { name: "AKS University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&h=150&fit=crop", established: 2005 },
    { name: "Roorkee Institute Of Technology", logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=150&h=150&fit=crop", established: 1998 },
    { name: "Swami Vivekanand University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=150&fit=crop", established: 2010 },
    { name: "Maharishi Dayanand Saraswati University", logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571dcc?w=150&h=150&fit=crop", established: 1987 },
    { name: "Swami Shraddhanand College", logo: "https://images.unsplash.com/photo-1541829070764-84a7a30df3f3?w=150&h=150&fit=crop", established: 1967 },
    { name: "D.N. Jain College Jabalpur", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=150&h=150&fit=crop", established: 1960 },
    { name: "Asian Institute Of Technology", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&h=150&fit=crop", established: 1959 }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Associate Professor",
      text: "Edwin Incorporation helped me find the perfect faculty position. Their support throughout the application process was exceptional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Research Scholar",
      text: "The job insurance and placement support gave me confidence in my academic career. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Prof. Meera Singh",
      role: "Dean of Academics",
      text: "Their recruitment solutions helped us find qualified faculty members quickly. Professional and efficient service.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    reset();
    setSelectedLocation('');
    setSelectedCountry('');
    setSelectedRegisterAs('');
    setSelectedPreferred('');
    setSelectedFile(null);
    setTermsAccepted(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  // Card variants for staggered animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif] bg-white min-h-screen overflow-x-hidden">
      
      {/* Hero Section with Parallax - No Top Bar */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <motion.div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  y: springY,
                  scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/85 to-[#1B3A6B]/50 backdrop-blur-[2px]" />
              <div className="relative h-full flex items-center justify-center text-center px-5">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="max-w-4xl"
                >
                  <motion.div 
                    className="inline-block mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <span className="bg-[#C89B3C]/20 backdrop-blur-md text-[#C89B3C] px-4 py-1 rounded-full text-sm font-semibold border border-[#C89B3C]/30">
                      Edwin Incorporation
                    </span>
                  </motion.div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-[#C89B3C] mb-6 font-semibold">
                    {slide.subtitle}
                  </p>
                  <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] text-[#1B3A6B] px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Register Now
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="backdrop-blur-md bg-white/10 border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1B3A6B] transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows with Glassmorphism */}
        <button 
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/10 p-4 rounded-full hover:bg-[#C89B3C] transition-all duration-300 z-20 hover:scale-110"
        >
          <FaChevronLeft className="text-white w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/10 p-4 rounded-full hover:bg-[#C89B3C] transition-all duration-300 z-20 hover:scale-110"
        >
          <FaChevronRight className="text-white w-6 h-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-12 h-2 bg-[#C89B3C]' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              } rounded-full`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* About Section - Glassmorphism Cards */}
      <section className="bg-gradient-to-b from-white to-[#EAF1FB] py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div 
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-6">About Edwin Incorporation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mb-10 rounded-full"></div>
            
            <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
              Edwin Incorporation offers specialized <span className="font-semibold text-[#C89B3C]">HR services for academicians, research scholars, and PhD aspirants</span>. 
              Our services include up-to-date job information via WhatsApp for government and private university positions, 
              and comprehensive assistance with application forms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-md bg-white/50 rounded-2xl p-6 border border-[#D6E0F0] shadow-lg"
              >
                <FaRegGem className="text-[#C89B3C] w-10 h-10 mx-auto mb-3" />
                <p className="text-2xl font-bold text-[#1B3A6B]">One-Year Membership</p>
                <p className="text-3xl font-bold text-[#C89B3C]">INR 8,000</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-md bg-white/50 rounded-2xl p-6 border border-[#D6E0F0] shadow-lg"
              >
                <FaClock className="text-[#C89B3C] w-10 h-10 mx-auto mb-3" />
                <p className="text-2xl font-bold text-[#1B3A6B]">Six-Month Membership</p>
                <p className="text-3xl font-bold text-[#C89B3C]">INR 5,600</p>
              </motion.div>
            </div>
            
            <p className="text-[#1A1A2E] text-lg leading-relaxed mb-10">
              Our goal is to streamline the job search process, allowing academicians to focus on their core responsibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#1B3A6B] to-[#2A4A8A] text-white px-8 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Apply for HR Staffing Solution
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-[#1B3A6B] text-[#1B3A6B] px-8 py-3 rounded-xl font-semibold hover:bg-[#1B3A6B] hover:text-white transition-all duration-300"
              >
                Apply for HR University Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards with Glowing Borders */}
      <section className="bg-gradient-to-b from-[#EAF1FB] to-white py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">SERVICES FOR BUSINESS & ACADEMICS</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">Comprehensive solutions for academic institutions and faculty members</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#D6E0F0] hover:border-[#C89B3C]"
              >
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C89B3C] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <motion.div 
                  className="text-[#1B3A6B] mb-5 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="p-3 bg-gradient-to-br from-[#EAF1FB] to-white rounded-xl group-hover:from-[#C89B3C]/20 transition-all duration-300">
                    {service.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 text-center group-hover:text-[#C89B3C] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#5A6A85] text-sm leading-relaxed text-center mb-5">
                  {service.description}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-[#1B3A6B] font-semibold text-sm flex items-center justify-center gap-2 mx-auto group-hover:text-[#C89B3C] transition-colors"
                >
                  Apply Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Redesigned with Icon Scaling */}
      <section className="bg-gradient-to-b from-white to-[#EAF1FB] py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Why Trust Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">Why Choose Us</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">We provide end-to-end support for your academic career journey</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group backdrop-blur-sm bg-gradient-to-br from-white to-[#EAF1FB]/50 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D6E0F0] hover:border-[#C89B3C]"
              >
                <motion.div 
                  className="text-[#1B3A6B] mb-5 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 bg-gradient-to-br from-[#1B3A6B]/5 to-[#C89B3C]/10 rounded-2xl group-hover:from-[#C89B3C]/20 group-hover:to-[#1B3A6B]/10 transition-all duration-300">
                    {benefit.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#C89B3C] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[#5A6A85] text-sm leading-relaxed">
                  {benefit.description}
                </p>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="h-0.5 bg-gradient-to-r from-[#C89B3C] to-transparent mt-4 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gradient-to-b from-[#EAF1FB] to-white py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">Our Esteemed Clients</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">Trusted by leading universities and institutions across India</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group backdrop-blur-sm bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D6E0F0] hover:border-[#C89B3C]"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[#EAF1FB] to-white p-1 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={university.logo}
                    alt={university.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/150/1B3A6B/FFFFFF?text=University';
                    }}
                  />
                </div>
                <h3 className="text-[#1A1A2E] font-semibold text-sm mb-1 group-hover:text-[#C89B3C] transition-colors">
                  {university.name}
                </h3>
                <p className="text-[#5A6A85] text-xs">Est. {university.established}</p>
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-0.5 bg-[#C89B3C] mx-auto mt-3 rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Design */}
      <section className="bg-gradient-to-b from-white to-[#EAF1FB] py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">What Our Clients Say</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">Success stories from our valued clients</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group backdrop-blur-sm bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D6E0F0] hover:border-[#C89B3C] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C89B3C]/10 to-transparent rounded-bl-full" />
                <FaQuoteLeft className="text-[#C89B3C] text-4xl mb-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <p className="text-[#1A1A2E] text-base leading-relaxed mb-5 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#C89B3C] w-5 h-5" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C89B3C] group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/50/1B3A6B/FFFFFF?text=User';
                    }}
                  />
                  <div>
                    <p className="font-bold text-[#1A1A2E] group-hover:text-[#C89B3C] transition-colors">{testimonial.name}</p>
                    <p className="text-[#5A6A85] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form - Improved Design with Glassmorphism */}
      <section className="bg-gradient-to-br from-[#1B3A6B] via-[#1B3A6B] to-[#2A4A8A] py-24 px-5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="bg-[#C89B3C]/20 backdrop-blur-md text-[#C89B3C] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4 border border-[#C89B3C]/30">
                Register Now
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Faculty & Co-Guide Registration</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">Register to get access to premium faculty positions and research opportunities</p>
            </motion.div>
            
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mb-6 p-5 bg-gradient-to-r from-[#2D7A4F] to-[#3A9B6A] text-white rounded-xl text-center shadow-2xl"
              >
                <FaCheckCircle className="inline-block mr-2 w-5 h-5" />
                Registration submitted successfully! We'll contact you soon.
              </motion.div>
            )}

            <motion.form 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)} 
              className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl p-8 md:p-10 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Select Your Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E] bg-white"
                  >
                    <option value="">Select Location</option>
                    <option value="North">North India</option>
                    <option value="South">South India</option>
                    <option value="East">East India</option>
                    <option value="West">West India</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Select Your Country</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E] bg-white"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E]"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-[#C0392B] text-xs mt-1 flex items-center gap-1"><FaExclamationCircle /> {errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E]"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-[#C0392B] text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Register as Research</label>
                  <select
                    value={selectedRegisterAs}
                    onChange={(e) => setSelectedRegisterAs(e.target.value)}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E] bg-white"
                  >
                    <option value="">Select Role</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Research Scholar">Research Scholar</option>
                    <option value="PhD Candidate">PhD Candidate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Preferred (Govt / Private)</label>
                  <select
                    value={selectedPreferred}
                    onChange={(e) => setSelectedPreferred(e.target.value)}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E] bg-white"
                  >
                    <option value="">Select Preference</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E]"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-[#C0392B] text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Postal Address *</label>
                <textarea
                  {...register("address", { required: "Address is required" })}
                  rows="3"
                  className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E]"
                  placeholder="Enter your complete postal address"
                />
                {errors.address && <p className="text-[#C0392B] text-xs mt-1">{errors.address.message}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Upload Single PDF (10th, 12th, UG, PG, PhD, Resume)</label>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="border-2 border-dashed border-[#D6E0F0] rounded-xl p-8 text-center hover:border-[#1B3A6B] transition-all duration-300 hover:bg-[#EAF1FB]/50 cursor-pointer bg-white"
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileUpload"
                    accept=".pdf"
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    <motion.div 
                      whileHover={{ y: -3 }}
                      className="text-[#1B3A6B] mb-3"
                    >
                      <FaPaperPlane className="w-12 h-12 mx-auto" />
                    </motion.div>
                    <p className="text-[#5A6A85] font-medium">
                      {selectedFile ? selectedFile : "Choose Files"}
                    </p>
                    <p className="text-[#A0AEC0] text-sm mt-2">PDF only, max 10MB</p>
                  </label>
                </motion.div>
              </div>

              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#1B3A6B] border-2 border-[#D6E0F0] rounded focus:ring-[#1B3A6B] cursor-pointer"
                />
                <label className="text-[#1A1A2E]">
                  I have read and agree to the <span className="text-[#C89B3C] font-semibold cursor-pointer hover:underline">Terms & Conditions</span> *
                </label>
              </div>

              <div className="flex gap-5">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#1B3A6B] to-[#2A4A8A] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Submit Registration
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="reset"
                  className="px-8 py-4 bg-white border-2 border-[#D6E0F0] text-[#1A1A2E] rounded-xl font-semibold hover:bg-[#EAF1FB] transition-all duration-300"
                  onClick={() => {
                    setSelectedLocation('');
                    setSelectedCountry('');
                    setSelectedRegisterAs('');
                    setSelectedPreferred('');
                    setSelectedFile(null);
                    setTermsAccepted(false);
                  }}
                >
                  Reset Form
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Info Section - Added in CTA style with Glassmorphism */}
      <section className="bg-gradient-to-r from-[#1B3A6B] via-[#2A4A8A] to-[#1B3A6B] py-20 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C89B3C%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Advance Your Academic Career?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Join thousands of successful academicians who found their dream positions through us</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:border-[#C89B3C] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#C89B3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhoneAlt className="text-[#C89B3C] w-7 h-7" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/80">+91 98765 43210</p>
              <p className="text-white/60 text-sm">Mon-Fri, 9AM-6PM</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:border-[#C89B3C] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#C89B3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-[#C89B3C] w-7 h-7" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Email Us</h3>
              <p className="text-white/80">support@edwinincorporation.com</p>
              <p className="text-white/60 text-sm">24/7 Support</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:border-[#C89B3C] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#C89B3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-[#C89B3C] w-7 h-7" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-white/80">New Delhi, India</p>
              <p className="text-white/60 text-sm">By Appointment Only</p>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] text-[#1B3A6B] px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Apply Now - Membership
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-md bg-white/20 border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1B3A6B] transition-all duration-300"
            >
              Chat with us
            </motion.button>
          </div>
        </div>
      </section>

      {/* Floating Chat Button with Pulse Effect */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: ["0 0 0 0 rgba(200, 155, 60, 0.7)", "0 0 0 20px rgba(200, 155, 60, 0)", "0 0 0 0 rgba(200, 155, 60, 0)"]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] text-[#1B3A6B] px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span className="font-semibold">Chat with us</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Helper component for error icon
const FaExclamationCircle = () => (
  <svg className="w-3 h-3 inline" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

export default FacultyCoGuideRegistration;