import React, { useState, useEffect, useRef } from 'react';
import {
  FaBuilding,
  FaShieldAlt,
  FaHandshake,
  FaSmile,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaChalkboardTeacher,
  FaUsers,
  FaBriefcase,
  FaRegGem,
  FaClock,
  FaFileSignature
} from 'react-icons/fa';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

const FacultyCoGuideRegistration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const heroSlides = [
    {
      id: 1,
      title: 'Faculty & Co-Guide Registration',
      subtitle: "Join India's Premier Academic Network",
      description: 'Connect with top universities and research institutions across India',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop'
    },
    {
      id: 2,
      title: 'Research Employment Support',
      subtitle: 'Find Your Perfect Academic Position',
      description: 'Get matched with government and private university opportunities',
      image: 'https://images.unsplash.com/photo-1544717305-38f3146bf189?w=1600&h=900&fit=crop'
    },
    {
      id: 3,
      title: 'HR Staffing Solutions',
      subtitle: 'For Universities & Colleges',
      description: 'Comprehensive recruitment and onboarding support',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=900&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Secure Job (Guarantee)',
      description:
        'We help academicians and researchers connect with verified universities and colleges for faculty and research opportunities.'
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: 'Insurance of Job',
      description:
        'Our academic HR support team assists candidates throughout the recruitment and onboarding process.'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Perfect Match of Requirement',
      description:
        'We match faculty qualifications and research expertise with suitable university requirements.'
    },
    {
      icon: <FaSmile className="w-8 h-8" />,
      title: 'Support & Motivation',
      description:
        'We provide continuous guidance, application support, and career assistance for academicians and research scholars.'
    }
  ];

  const services = [
    {
      title: 'Jobs for Faculties',
      description: 'Latest faculty positions in universities and colleges',
      icon: <FaChalkboardTeacher className="w-8 h-8" />
    },
    {
      title: 'Faculties Profile for University and Colleges',
      description: 'Profile management and matching services',
      icon: <FaUsers className="w-8 h-8" />
    },
    {
      title: 'Job Insurance of Faculties',
      description: 'Secure your academic career with our insurance',
      icon: <FaShieldAlt className="w-8 h-8" />
    },
    {
      title: 'Recruitment Solutions',
      description: 'End-to-end recruitment for academic institutions',
      icon: <FaBriefcase className="w-8 h-8" />
    }
  ];

  const universities = [
    {
      name: 'International Technological University',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&h=150&fit=crop',
      established: 1987
    },
    {
      name: 'AKS University',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&h=150&fit=crop',
      established: 2005
    },
    {
      name: 'Roorkee Institute Of Technology',
      logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=150&h=150&fit=crop',
      established: 1998
    },
    {
      name: 'Swami Vivekanand University',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=150&fit=crop',
      established: 2010
    },
    {
      name: 'Maharishi Dayanand Saraswati University',
      logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571dcc?w=150&h=150&fit=crop',
      established: 1987
    },
    {
      name: 'Swami Shraddhanand College',
      logo: 'https://images.unsplash.com/photo-1541829070764-84a7a30df3f3?w=150&h=150&fit=crop',
      established: 1967
    },
    {
      name: 'D.N. Jain College Jabalpur',
      logo: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=150&h=150&fit=crop',
      established: 1960
    },
    {
      name: 'Asian Institute Of Technology',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&h=150&fit=crop',
      established: 1959
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Associate Professor',
      text: 'Edwin Incorporation helped me find the perfect faculty position. Their support throughout the application process was exceptional.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Research Scholar',
      text: 'The job insurance and placement support gave me confidence in my academic career. Highly recommended!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Prof. Meera Singh',
      role: 'Dean of Academics',
      text: 'Their recruitment solutions helped us find qualified faculty members quickly. Professional and efficient service.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif] bg-white min-h-screen overflow-x-hidden">

      {/* Hero Section */}
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
                  scale
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/85 to-[#1B3A6B]/50 backdrop-blur-[2px]" />

              <div className="relative h-full flex items-center justify-center text-center px-5">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  className="max-w-4xl"
                >
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
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
      </div>

      {/* About Section */}
      <section className="bg-gradient-to-b from-white to-[#EAF1FB] py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="bg-gradient-to-r from-[#1B3A6B]/10 to-[#C89B3C]/10 text-[#1B3A6B] px-6 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mt-6 mb-6">
              About Edwin Incorporation
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mb-10 rounded-full" />

            <p className="text-[#1A1A2E] text-lg leading-relaxed mb-8">
              Edwin Incorporation offers specialized{' '}
              <span className="font-semibold text-[#C89B3C]">
                HR services for academicians, research scholars, and PhD aspirants
              </span>
              . Our services include up-to-date job information via WhatsApp for government
              and private university positions, and comprehensive assistance with
              application forms.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-md bg-white/50 rounded-2xl p-6 border border-[#D6E0F0] shadow-lg"
              >
                <FaRegGem className="text-[#C89B3C] w-10 h-10 mx-auto mb-3" />
                <p className="text-2xl font-bold text-[#1B3A6B]">
                  One-Year Membership
                </p>
                <p className="text-3xl font-bold text-[#C89B3C]">INR 8,000</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-md bg-white/50 rounded-2xl p-6 border border-[#D6E0F0] shadow-lg"
              >
                <FaClock className="text-[#C89B3C] w-10 h-10 mx-auto mb-3" />
                <p className="text-2xl font-bold text-[#1B3A6B]">
                  Six-Month Membership
                </p>
                <p className="text-3xl font-bold text-[#C89B3C]">INR 5,600</p>
              </motion.div>
            </div>

            <p className="text-[#1A1A2E] text-lg leading-relaxed mb-10">
              Our goal is to streamline the job search process, allowing academicians
              to focus on their core responsibilities.
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

      {/* Services Section */}
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

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">
              SERVICES FOR BUSINESS & ACADEMICS
            </h2>

            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">
              Comprehensive solutions for academic institutions and faculty members
            </p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#C89B3C] to-[#D4AA50] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />

                <motion.div
                  className="text-[#1B3A6B] mb-5 flex justify-center relative z-10"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <div className="p-3 bg-gradient-to-br from-[#EAF1FB] to-white rounded-xl group-hover:from-[#C89B3C]/20 transition-all duration-300">
                    {service.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 text-center group-hover:text-[#C89B3C] transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>

                <p className="text-[#5A6A85] text-sm leading-relaxed text-center mb-5 relative z-10">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#1B3A6B] font-semibold text-sm flex items-center justify-center gap-2 mx-auto group-hover:text-[#C89B3C] transition-colors relative z-10"
                >
                  Apply Now <span>→</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">
              Why Choose Us
            </h2>

            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">
              We provide end-to-end support for your academic career journey
            </p>
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
                  transition={{ type: 'spring', stiffness: 300 }}
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

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">
              Our Esteemed Clients
            </h2>

            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">
              Trusted by leading universities and institutions across India
            </p>
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
                  <img src={university.logo}
                    alt={university.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        'https://via.placeholder.com/150/1B3A6B/FFFFFF?text=University';
                    }} width="64" height="64" />
                </div>

                <h3 className="text-[#1A1A2E] font-semibold text-sm mb-1 group-hover:text-[#C89B3C] transition-colors">
                  {university.name}
                </h3>

                <p className="text-[#5A6A85] text-xs">
                  Est. {university.established}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] mb-4">
              What Our Clients Say
            </h2>

            <p className="text-[#5A6A85] text-lg max-w-2xl mx-auto">
              Success stories from our valued clients
            </p>
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
                  <img src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C89B3C] group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        'https://via.placeholder.com/50/1B3A6B/FFFFFF?text=User';
                    }} loading="lazy" width="600" height="400" />

                  <div>
                    <p className="font-bold text-[#1A1A2E] group-hover:text-[#C89B3C] transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-[#5A6A85] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZOHO FORM SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
              <FaFileSignature className="text-[#C89B3C]" />
              Application Form
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B]">
              Research Employment Support
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-5 mb-6 rounded-full" />

            <p className="text-[16px] leading-[1.7] text-[#5A6A85] max-w-2xl mx-auto">
              Complete the application form below. Our team will contact you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[28px] bg-white shadow-2xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

            <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-xl font-bold">
                  Faculty & Co-Guide Application Form
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  Fill all required details carefully
                </p>
              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
                <FaFileSignature className="text-[#C89B3C] text-2xl" />
              </div>
            </div>

            <div className="relative w-full bg-white p-3 sm:p-5">
              <div className="rounded-[20px] border border-[#D6E0F0] overflow-hidden bg-[#F8FBFF] shadow-inner">
                <iframe
                  title="Zoho CRM Web Form"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=bd1afb2d5877bdf89dacc87e53ecd73d1fc4e8cf43d641caee6420e25d85465c0b6ca1cd272a5dca77c66f5ff32728cfgid267679a7cc517bf9ebef6725adf61817670ef2d60d532b48040517c66f3e6284"
                  width="100%"
                  height="620"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    border: 'none',
                    width: '100%',
                    maxWidth: '100%',
                    display: 'block',
                    backgroundColor: 'white'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZOHO FORM SECTION */}
<section className="relative py-24 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden">
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl" />

  <div className="max-w-5xl mx-auto px-5 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      {/* <div className="inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm">
        <FaFileSignature className="text-[#C89B3C]" />
        Application Form
      </div> */}

      <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B]">
        HR Support for Business
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-[#C89B3C] to-[#1B3A6B] mx-auto mt-5 mb-6 rounded-full" />

      {/* <p className="text-[16px] leading-[1.7] text-[#5A6A85] max-w-2xl mx-auto">
        Complete the application form below. Our team will contact you shortly.
      </p> */}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-[28px] bg-white shadow-2xl border border-[#D6E0F0] overflow-hidden max-w-[950px] mx-auto relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#1B3A6B]/5" />

      <div className="relative bg-gradient-to-r from-[#1B3A6B] via-[#254F80] to-[#2C5F8A] px-6 py-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-xl font-bold">
            Research Employment Application Form
          </h3>
          <p className="text-white/75 text-sm mt-1">
            Fill all required details carefully
          </p>
        </div>

        <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">
          <FaFileSignature className="text-[#C89B3C] text-2xl" />
        </div>
      </div>

      <div className="relative w-full bg-white p-3 sm:p-5">
        <div className="rounded-[20px] border border-[#D6E0F0] overflow-hidden bg-[#F8FBFF] shadow-inner">
          <iframe
            title="Zoho CRM Web Form"
            src="https://crm.zoho.in/crm/WebFormServeServlet?rid=968bce90d1205ddafac153f7957117fc169f83f46dbcee93258f9553417940ce317f148fbe3a6b665a355f93d18d8a9dgid3bc6eb41d6c21e30ebc0d3da7b42e039956106b1ed9986fc1e0d7b76326b23ce"
            width="100%"
            height="620"
            frameBorder="0"
            scrolling="yes"
            style={{
              border: "none",
              width: "100%",
              maxWidth: "100%",
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
};

export default FacultyCoGuideRegistration;