import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  FaPaperPlane, FaBuilding, FaUserTie, FaShieldAlt, 
  FaHandshake, FaSmile, FaChevronLeft, FaChevronRight, FaStar,
  FaQuoteLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaChalkboardTeacher, FaRegLightbulb, FaUsers, FaGraduationCap,
  FaBriefcase, FaChartLine, FaRegGem, FaClock, FaCheckCircle,
  FaUniversity, FaFileAlt, FaPenFancy, FaProjectDiagram
} from 'react-icons/fa';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

const MajorProjects = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
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

      {/* Testimonials Section */}
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">What Our Clients Say</h2>
            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">Success stories from academicians we've helped</p>
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
                className="group backdrop-blur-sm bg-[#EAF1FB] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D6E0F0] hover:border-[#C89B3C] relative overflow-hidden"
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

      {/* Registration Form Section */}
      <section className="bg-gradient-to-br from-[#1B3A6B] via-[#1B3A6B] to-[#2A4A8A] py-24 px-5 relative overflow-hidden">
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
                Apply Now
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Apply For Minor/Major Projects</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">Fill out the form below and our experts will contact you</p>
            </motion.div>
            
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mb-6 p-5 bg-gradient-to-r from-[#2D7A4F] to-[#3A9B6A] text-white rounded-xl text-center shadow-2xl"
              >
                <FaCheckCircle className="inline-block mr-2 w-5 h-5" />
                Application submitted successfully! We'll contact you soon.
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

              <div className="mb-6">
                <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Services For</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E] bg-white"
                >
                  <option value="">Select Service</option>
                  <option value="Research Support">Research Support for Major</option>
                  <option value="Patent Proposal">Patent Proposal Writing</option>
                  <option value="Book Writing">Book Writing Assistance</option>
                </select>
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
                  {errors.firstName && <p className="text-[#C0392B] text-xs mt-1">{errors.firstName.message}</p>}
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
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E]"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-[#C0392B] text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Mobile *</label>
                  <input
                    type="tel"
                    {...register("mobile", { required: "Mobile number is required" })}
                    className="w-full px-5 py-3 border-2 border-[#D6E0F0] rounded-xl focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20 transition-all duration-300 text-[#1A1A2E]"
                    placeholder="+91 98765 43210"
                  />
                  {errors.mobile && <p className="text-[#C0392B] text-xs mt-1">{errors.mobile.message}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#5A6A85] text-sm font-semibold mb-2">Upload a File (if Proposal have)</label>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="border-2 border-dashed border-[#D6E0F0] rounded-xl p-8 text-center hover:border-[#1B3A6B] transition-all duration-300 hover:bg-[#EAF1FB]/50 cursor-pointer bg-white"
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileUpload"
                    accept=".pdf,.doc,.docx"
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
                    <p className="text-[#A0AEC0] text-sm mt-2">PDF, DOC, DOCX up to 10MB</p>
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
                  Submit Application
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="reset"
                  className="px-8 py-4 bg-white border-2 border-[#D6E0F0] text-[#1A1A2E] rounded-xl font-semibold hover:bg-[#EAF1FB] transition-all duration-300"
                  onClick={() => {
                    setSelectedLocation('');
                    setSelectedCountry('');
                    setSelectedService('');
                    setSelectedFile(null);
                    setTermsAccepted(false);
                  }}
                >
                  Reset
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Info Section with Dr. Steve Austin */}
      <section className="bg-gradient-to-r from-[#1B3A6B] via-[#2A4A8A] to-[#1B3A6B] py-20 px-5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay Connected with Us!</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Follow us on Facebook for the latest <span className="text-[#C89B3C] font-semibold">Major & Minor Project Support</span>, updates & exclusive content.
            </p>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-6 bg-[#C89B3C] text-[#1B3A6B] px-8 py-3 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg"
            >
              Follow us on Facebook
            </motion.a>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:border-[#C89B3C] transition-all duration-300"
            >
              <div className="w-20 h-20 bg-[#C89B3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-[#C89B3C] w-8 h-8" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Dr. Steve Austin</h3>
              <p className="text-white/80 flex items-center justify-center gap-2"><FaPhoneAlt className="w-3 h-3" /> Mobile: 6262752169</p>
              <p className="text-white/80 flex items-center justify-center gap-2"><FaEnvelope className="w-3 h-3" /> care@edwinepc.com</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:border-[#C89B3C] transition-all duration-300"
            >
              <div className="w-20 h-20 bg-[#C89B3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-[#C89B3C] w-8 h-8" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Dr. Steve Austin</h3>
              <p className="text-white/80 flex items-center justify-center gap-2"><FaPhoneAlt className="w-3 h-3" /> Mobile: 6262752169</p>
              <p className="text-white/80 flex items-center justify-center gap-2"><FaEnvelope className="w-3 h-3" /> care@edwinepc.com</p>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] text-[#1B3A6B] px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Apply For Minor/Major Projects
            </motion.button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default MajorProjects;