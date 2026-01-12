import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/918939982169" // 🔴 replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-white w-7 h-7" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
