import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { 
  FaPaperPlane, FaBuilding, FaUserTie, FaShieldAlt, 
  FaHandshake, FaSmile, FaChevronLeft, FaChevronRight, FaStar,
  FaQuoteLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaChalkboardTeacher, FaRegLightbulb, FaUsers, FaGraduationCap,
  FaBriefcase, FaChartLine, FaRegGem, FaClock, FaCheckCircle,
  FaUniversity, FaFileAlt, FaPenFancy,FaFileSignature, FaProjectDiagram
} from 'react-icons/fa';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

const MajorProjects = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedService, setSelectedService] = useState('');
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "UGC Major & Minor Research Projects",
      subtitle: "Guidelines & Grants",
      description: "Get expert assistance for funded research projects from UGC and other funding agencies",
      image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=1600&h=900&fit=crop",
    },
    {
      id: 2,
      title: "Research Funding Support",
      subtitle: "Major & Minor Projects",
      description: "Complete guidance for proposal writing and application submission",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop",
    },
    {
      id: 3,
      title: "Academic Research Excellence",
      subtitle: "Enhance Your Profile",
      description: "200+ research projects successfully assisted every year",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop",
    }
  ];

  const projectTypes = [
    { 
      title: "Govt. Sponsored Minor and Major Project", 
      description: "Assistance for UGC, DST, CSIR, and other government funding agency projects",
      icon: <FaUniversity className="w-8 h-8" />,
      buttonText: "Apply Now"
    },
    { 
      title: "Writing Works", 
      description: "Professional project proposal writing, synopsis, and research documentation",
      icon: <FaPenFancy className="w-8 h-8" />,
      buttonText: "Apply Now"
    },
    { 
      title: "Private Sponsored Minor and Major Project", 
      description: "Support for industry-sponsored and private sector research projects",
      icon: <FaBuilding className="w-8 h-8" />,
      buttonText: "Apply Now"
    },
    { 
      title: "Project - JRA", 
      description: "Junior Research Associate project assistance and guidance",
      icon: <FaUsers className="w-8 h-8" />,
      buttonText: "Apply Now"
    },
    { 
      title: "Small Project", 
      description: "Short-term research project support for early career researchers",
      icon: <FaRegLightbulb className="w-8 h-8" />,
      buttonText: "Apply Now"
    },
    { 
      title: "Project - SRA", 
      description: "Senior Research Associate project management and mentorship",
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      buttonText: "Apply Now"
    }
  ];

  const services = [
    { title: "Research Support", description: "Complete guidance for research projects", icon: <FaChartLine className="w-8 h-8" /> },
    { title: "Major Patent Proposal Writing", description: "Expert assistance for patent applications", icon: <FaFileAlt className="w-8 h-8" /> },
    { title: "Book Writing Assistance", description: "Professional book writing and publishing support", icon: <FaPenFancy className="w-8 h-8" /> }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Professional assistance from experienced academic researchers"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Funding Agency Liaison",
      description: "Direct connection with various funding agencies and UGC norms compliance"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Profile Enhancement",
      description: "Boost your academic profile with funded research projects"
    },
    {
      icon: <FaSmile className="w-8 h-8" />,
      title: "End-to-End Support",
      description: "From proposal writing to final submission and follow-up"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Amit Kumar",
      role: "Associate Professor",
      text: "Edwin Incorporation helped me secure a major research project from UGC. Their proposal writing assistance was exceptional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Dr. Neha Gupta",
      role: "Research Scholar",
      text: "The team guided me through the entire application process for a minor project. Highly recommended for academicians!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
      name: "Prof. Rajesh Singh",
      role: "Dean Research",
      text: "Professional service with deep understanding of UGC guidelines and funding processes.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/45.jpg"
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

  const onSubmit = (event) => {
    event.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the Terms & Conditions');
      return;
    }
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log('Form Data:', { ...data, selectedLocation, selectedCountry, selectedService, selectedFile });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    event.currentTarget.reset();
    setSelectedLocation('');
    setSelectedCountry('');
    setSelectedService('');
    setSelectedFile(null);
    setTermsAccepted(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

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
                  scale: scale
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
                      UGC Research Projects
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
                      Apply For Projects
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

      {/* Only for Academic Section */}
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
                Only for Academic
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-6">Major & Minor Research Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mb-10 rounded-full"></div>
            
            <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
              We assist you with <span className="font-semibold text-[#C89B3C]">Minor and Major Projects</span>, sponsored by the Private or Public Sector.
            </p>
            
            <p className="text-[#1A1A2E] text-base leading-relaxed mb-6">
              Major and minor funded projects are the best resources for academicians to conduct research apart from teaching, 
              and this can greatly enhance their profile as per UGC norms. Edwin Incorporations helps academicians achieve this 
              goal by assisting them in writing proposals that can be accepted by funding agencies and by guiding them through 
              the application process on various funding agencies' websites.
            </p>
            
            <p className="text-[#1A1A2E] text-base leading-relaxed mb-8">
              Every year, Edwin Incorporations offers over <span className="font-semibold text-[#C89B3C]">200 research projects</span>, 
              but due to a lack of information, many academicians do not apply. We provide information about upcoming projects 
              and help them prepare project proposals to increase their chances of success.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#1B3A6B] to-[#2A4A8A] text-white px-8 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Apply For Minor/Major Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Types Section - Grid Cards */}
      <section className="bg-[#EAF1FB] py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Apply Now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">Research Project Opportunities</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">Choose from various project categories and get expert assistance</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C89B3C] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <motion.div 
                  className="text-[#1B3A6B] mb-5 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="p-3 bg-gradient-to-br from-[#EAF1FB] to-white rounded-xl group-hover:from-[#C89B3C]/20 transition-all duration-300">
                    {project.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 text-center group-hover:text-[#C89B3C] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#5A6A85] text-sm leading-relaxed text-center mb-5">
                  {project.description}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="w-full bg-[#1B3A6B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C89B3C] transition-all duration-300 shadow-md"
                >
                  {project.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">Research Support Services</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">Comprehensive assistance for all your research needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                    {service.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#C89B3C] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#5A6A85] text-sm leading-relaxed">
                  {service.description}
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

      {/* Benefits Section */}
      <section className="bg-[#EAF1FB] py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">Why Choose Edwin Incorporation</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">We provide end-to-end support for your research journey</p>
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
                className="group backdrop-blur-sm bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D6E0F0] hover:border-[#C89B3C]"
              >
                <motion.div 
                  className="text-[#1B3A6B] mb-5 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 bg-gradient-to-br from-[#EAF1FB] to-white rounded-2xl group-hover:from-[#C89B3C]/20 transition-all duration-300">
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
                  className="h-0.5 bg-gradient-to-r from-[#C89B3C] to-transparent mt-4 origin-left mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



     

      {/* Contact Info Section with Dr. Steve Austin */}
{/* Premium Contact Section with Image */}
<section className="relative bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] py-28 px-5 overflow-hidden">
  <div className="absolute top-10 left-10 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-[1200px] mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-14 items-center bg-white/70 backdrop-blur-xl rounded-[36px] shadow-2xl border border-[#D6E0F0] p-8 md:p-14">
      
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="inline-block bg-[#1B3A6B]/10 text-[#1B3A6B] px-5 py-2 rounded-full text-sm font-semibold mb-5">
          Need Assistance?
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] leading-tight mb-6">
          How may I assist you?
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mb-8 rounded-full" />

        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-5 shadow-md border border-[#D6E0F0]">
            <p className="text-sm text-[#5A6A85] mb-1">Support Person</p>
            <h3 className="text-2xl font-bold text-[#1B3A6B]">Dr. Steve Austin</h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border border-[#D6E0F0]">
            <p className="text-sm text-[#5A6A85] mb-1">Mobile</p>
            <h3 className="text-2xl font-bold text-[#1B3A6B]">6262752169</h3>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border border-[#D6E0F0]">
            <p className="text-sm text-[#5A6A85] mb-1">Email</p>
            <h3 className="text-2xl font-bold text-[#1B3A6B]">care@edwinepc.com</h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex justify-center"
      >
        <div className="absolute -top-6 -right-6 w-full h-full rounded-[32px] bg-[#C89B3C]/20" />
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=900&fit=crop"
            alt="Dr. Steve Austin"
            className="w-[430px] h-[500px] object-cover" loading="lazy" width="600" height="400" />
        </div>

        <div className="absolute -bottom-6 left-6 bg-[#1B3A6B] text-white px-6 py-4 rounded-2xl shadow-xl">
          <p className="text-sm text-white/70">Available for</p>
          <p className="font-bold text-lg">Project Guidance</p>
        </div>
      </motion.div>

    </div>
  </div>
</section>

 {/* ZOHO FORM SECTION */}
<section id="major-minor-form" className="relative py-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="max-w-3xl mx-auto px-4 relative z-10">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
        <FaFileSignature />
        Application Form
      </div>

      <h2 className="text-4xl font-bold text-[#1B3A6B]">
       Apply For Minor/Major Projects
      </h2>

      <p className="text-[16px] leading-[1.7] text-[#5A6A85] mt-3 max-w-xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p>
    </div>

    <div className="rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[650px] mx-auto">
      <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4">
        <h3 className="text-white text-xl font-bold">Apply For Minor/Major Projects</h3>
      </div>

      <div className="w-full flex justify-center bg-white">
        <iframe
          title="Zoho CRM Web Form"
          src="https://crm.zoho.in/crm/WebFormServeServlet?rid=a531f32547fa4dc8c10ed9b84d5e7884d5992f22435685e04ce37a2f0265c6381cadc6834824cc5d49cf3fcf8a81b3a4gid3a9a5f833a623ec528c2516db64a6696d1edb448afba3af3d7b0ca901b85a48f"
          width="610"
          height="500"
          frameBorder="0"
          scrolling="yes"
          style={{
            border: "none",
            maxWidth: "100%",
            display: "block",
          }}
        />
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
};

export default MajorProjects;
