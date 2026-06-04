import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheckCircle,
  FaEnvelope,
  FaGlobeAsia,
  FaMicrophoneAlt,
  FaPause,
  FaPlay,
  FaQuoteLeft,
  FaStar,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";

const getYouTubeId = (url) => {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "").split("?")[0];
    }

    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    if (parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1].split("?")[0];
    }

    if (parsedUrl.pathname.includes("/shorts/")) {
      return parsedUrl.pathname.split("/shorts/")[1].split("?")[0];
    }

    return "";
  } catch {
    return "";
  }
};

const YouTubePlayer = ({ url, title, className = "h-[320px]" }) => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const videoId = getYouTubeId(url);

  const sendCommand = (command) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*"
    );
  };

  const toggleVideo = () => {
    if (isPlaying) {
      sendCommand("pauseVideo");
      setIsPlaying(false);
      setShowButton(true);
    } else {
      sendCommand("playVideo");
      setIsPlaying(true);
      setShowButton(false);
    }
  };

  const showControlAgain = () => {
    if (isPlaying) {
      setShowButton(true);
      setTimeout(() => setShowButton(false), 1800);
    }
  };

  if (!videoId) {
    return (
      <div className="flex h-[260px] items-center justify-center rounded-[24px] border border-[#DDE9F7] bg-white p-6 text-center shadow-[0_18px_55px_rgba(8,34,74,.10)]">
        <p className="text-[15px] text-[#08224A]">
          Please add a valid YouTube link.
        </p>
      </div>
    );
  }

  return (
    <div
      onClick={showControlAgain}
      className="relative overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-white p-4 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
    >
      <iframe
        ref={iframeRef}
        className={`${className} w-full rounded-[24px]`}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {showButton && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleVideo();
          }}
          className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#082B63] text-[24px] text-[#FFFFFF] shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:bg-[#FFB000]"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      )}
    </div>
  );
};
const AcademicNewsChannel = () => {
  

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const videos = [
    {
      title: "Cover About Conferences",
      subtitle: "Special Coverage of International Conference",
      url: "https://youtu.be/SHaxRKsFOpw",
    },
    {
      title: "Hon. Dr Rajkumar Acharya",
      subtitle:
        "Vice Chancellor, Awadesh Pratap Singh University, Rewa University, MP India",
      url: "https://youtu.be/FwsWhVgPt-k",
    },
    {
      title: "Prof.(Dr.) Surendra Singh",
      subtitle: "Rani Durgawati University, Jabalpur MP India",
      url: "https://youtu.be/8bVMaQDQWek",
    },
  ];

  const benefits = [
    "Educational and academic news coverage",
    "Interviews with academicians and intellectuals",
    "Conference and academic event coverage",
    "Motivation and guidance for students and researchers",
    "Platform for academic achievements and insights",
    "Bridge between academic theory and real-world application",
  ];

  const formFields = [
    "First Name",
    "Last Name *",
    "Designation with Institute Name",
    "Email",
    "Mobile",
    "Enter the Captcha",
  ];

  const testimonials = [
    {
      name: "Academic Viewer",
      text: "The channel provides valuable academic insights and motivational content.",
    },
    {
      name: "Research Scholar",
      text: "Interviews and educational features are useful for learning and inspiration.",
    },
    {
      name: "Faculty Member",
      text: "A good platform to highlight academic achievements and intellectual discussion.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#EEF5FF] font-['Plus_Jakarta_Sans'] text-[#08224A]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#073B86] to-[#051B3B] px-5 py-20">
        <div className="absolute -left-24 top-8 h-[300px] w-[300px] rounded-full bg-[#FFB000]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#4DA3FF]/25 blur-3xl" />
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 inline-flex rounded-xl border border-[#FFB000] bg-white/95 px-4 py-2 text-[13px] text-[#5A6A85]">
              Academic News Channel
            </p>
            <h1 className="mb-5 text-[40px] font-bold leading-tight text-white">
              Learning for Life with Academic News
            </h1>
            <p className="mb-6 text-[15px] leading-[1.7] text-white/82">
              Academic News Channel is a platform focusing on educational and
              academic content. It provides valuable insights into the lives and
              careers of academicians and intellectuals, sharing their
              experiences, challenges, and achievements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-[#082B63] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
              >
                Book Your Appointment <FaArrowRight />
              </a>
              <a
                href="#videos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-[10px] text-[15px] font-medium text-white transition duration-300 hover:bg-white hover:text-[#082B63]"
              >
                Watch Videos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <YouTubePlayer
              url="https://youtu.be/pkC-KOtQxSU"
              title="Academic News Intro"
              className="h-[430px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
              About News Channel
            </h2>
            <a
              href="#apply"
              className="inline-flex rounded-xl bg-[#082B63] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
            >
              Book Your Appointment
            </a>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
            >
              <FaMicrophoneAlt className="mb-5 text-[42px] text-[#082B63]" />
              <h3 className="mb-3 text-[18px] font-semibold text-[#08224A]">
                Academic Interviews & Features
              </h3>
              <p className="text-[15px] leading-[1.7]">
                Through interviews and features, it highlights significant
                contributions in various academic fields and offers motivation
                and guidance to viewers.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="space-y-4 rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
            >
              <p className="text-[15px] leading-[1.7]">
                Academic News Channel is a platform focusing on educational and
                academic content. It aims to provide valuable insights into the
                lives and careers of academicians and intellectuals, sharing
                their experiences, challenges, and achievements. The channel
                serves as a resource for learning and inspiration, catering to a
                wide audience interested in academic and educational topics.
              </p>
              <p className="text-[15px] leading-[1.7]">
                The mission of Academic News Channel is likely to be centered on
                disseminating educational and academic knowledge, providing a
                platform for intellectual discourse, and showcasing academic
                achievements and insights. Its vision could involve being a
                leading source for academic news and inspiration, aiming to
                bridge the gap between academic theory and real-world
                application, and empowering viewers with knowledge and
                motivation from the academic world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
              Academic News Intro
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Watch Academic News content, interviews, features, and academic
              updates designed for students, researchers, faculty members, and
              academic professionals.
            </p>
            <a
              href="https://youtu.be/pkC-KOtQxSU"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#082B63] px-6 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
            >
              <FaYoutube /> Watch Videos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <YouTubePlayer
              url="https://youtu.be/pkC-KOtQxSU"
              title="Academic News Intro"
              className="h-[330px]"
            />
          </motion.div>
        </div>
      </section>

      <section id="videos" className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
              Featured Academic Videos
            </h2>
            <p className="mx-auto max-w-3xl text-[15px] leading-[1.7]">
              Academic News covers conferences, interviews, academic
              achievements, and important educational conversations.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[24px] border border-[#DDE9F7] bg-white shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <div className="p-6">
                  <h3 className="mb-3 text-[18px] font-semibold text-[#08224A]">
                    {video.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#5A6A85]">
                    {video.subtitle}
                  </p>
                </div>
                <YouTubePlayer
                  url={video.url}
                  title={video.title}
                  className="h-[260px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
              Benefits of Academic News Channel
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="flex gap-4 rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <FaCheckCircle className="mt-1 text-[20px] text-[#2D7A4F]" />
                <p className="text-[15px] leading-[1.7]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
              Testimonials
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)] transition duration-300 hover:border-[#FFB000]"
              >
                <FaQuoteLeft className="mb-4 text-[22px] text-[#FFB000]" />
                <div className="mb-4 flex gap-1 text-[#FFB000]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="mb-5 text-[15px] leading-[1.7]">{item.text}</p>
                <h3 className="text-[18px] font-semibold">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mb-5 text-[28px] font-semibold text-[#082B63]">
              Apply for News
            </h2>
            <p className="mb-6 text-[15px] leading-[1.7]">
              Submit your details to connect with Academic News Channel for
              interviews, features, academic coverage, and appointment booking.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-6">
                <FaCalendarCheck className="mb-4 text-[26px] text-[#082B63]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  Book Your Appointment
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Schedule academic news coverage, interviews, or feature
                  discussions.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#DDE9F7] bg-[#EEF5FF] p-6">
                <FaVideo className="mb-4 text-[26px] text-[#082B63]" />
                <h3 className="mb-3 text-[18px] font-semibold">
                  Academic Coverage
                </h3>
                <p className="text-[15px] leading-[1.7]">
                  Share conferences, academic activities, achievements, and
                  educational stories.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[24px] border border-[#DDE9F7] bg-white p-6 shadow-[0_18px_55px_rgba(8,34,74,.10)]"
          >
            <h3 className="mb-8 text-[18px] font-semibold text-[#08224A]">
              Apply for News
            </h3>

            <div className="mb-5">
              <label className="mb-2 block text-[13px] text-[#5A6A85]">
                Select Your Location
              </label>
              <select className="w-full rounded-xl border border-[#DDE9F7] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#082B63]">
                <option>-None-</option>
                <option>India</option>
                <option>International</option>
              </select>
              <p className="mt-2 text-[13px] text-[#5A6A85]">
                Select Your Country
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {formFields.map((label) => (
                <div key={label}>
                  <label className="mb-2 block text-[13px] text-[#5A6A85]">
                    {label}
                  </label>
                  <input className="w-full rounded-xl border border-[#DDE9F7] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#082B63]" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label className="flex items-center gap-3 text-[15px] text-[#082B63]">
                <input type="checkbox" /> Terms & Condition * Read
              </label>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                type="button"
                className="rounded-xl bg-[#082B63] px-8 py-[10px] text-[15px] font-medium text-[#FFFFFF] transition duration-300 hover:bg-[#FFB000]"
              >
                Submit
              </button>
              <button
                type="reset"
                className="rounded-xl border border-[#082B63] bg-white px-8 py-[10px] text-[15px] font-medium text-[#082B63] transition duration-300 hover:bg-[#EEF5FF]"
              >
                Reset
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <section className="bg-[#EEF5FF] px-5 py-20">
        <motion.div
          className="mx-auto max-w-[1200px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <FaGlobeAsia className="mx-auto mb-5 text-[42px] text-[#FFB000]" />
          <h2 className="mb-4 text-[28px] font-semibold text-[#082B63]">
            Connect with Academic News Channel
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[15px] leading-[1.7] text-[#5A6A85]">
            Contact Edwin Incorporation for academic interviews, news coverage,
            conferences, appointment booking, and educational features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:care@edwinepc.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFB000] px-6 py-[10px] text-[15px] font-medium text-[#071C34]"
            >
              <FaEnvelope /> care@edwinepc.com
            </a>
            <a
              href="tel:+916262752167"
              className="inline-flex items-center gap-2 rounded-xl border border-[#082B63] bg-white px-6 py-[10px] text-[15px] font-medium text-[#082B63]"
            >
              +91 6262752167
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AcademicNewsChannel;
