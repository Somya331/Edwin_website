import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/916262752167"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-110 hover:bg-[#1EBE5D]"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-[32px]" />
    </a>
  );
};

export default FloatingWhatsApp;