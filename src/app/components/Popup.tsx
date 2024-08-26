import React, { useEffect, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaDiscord } from "react-icons/fa";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 w-full max-w-md mx-4 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="space-y-4">
          <a
            href="mailto:lucasnoliveira126@gmail.com"
            className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Send me an Email
          </a>
          <a
            href="https://wa.me/+551972571089"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            <FaWhatsapp className="mr-2" />
            Send me a WhatsApp
          </a>
          <a
            href="https://t.me/lucasnoliveira126"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            <FaTelegramPlane className="mr-2" />
            Send me a Telegram
          </a>
          <a
            href="https://discord.com/users/yagami_rukasu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            <FaDiscord className="mr-2" />
            Send me a Discord Message
          </a>
        </div>
        <button
          onClick={handleClose}
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
