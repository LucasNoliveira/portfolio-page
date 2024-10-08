import React, { useEffect, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg transform transition-transform duration-300 w-full max-w-md mx-4 relative ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        role="dialog"
        aria-labelledby="popup-title"
        aria-modal="true"
      >
        <div className="absolute top-4 left-4 flex space-x-2">
          <button
            onClick={handleClose}
            className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none"
            aria-label="Close"
          />
          <button
            className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
            aria-label="Minimize"
            disabled
          />
          <button
            className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
            aria-label="Maximize"
            disabled
          />
        </div>

        <h2 id="popup-title" className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200 mt-5">
          {translations.getInTouch}
        </h2>
        <div className="space-y-4">
          <a
            href="mailto:lucasnoliveira126@gmail.com"
            className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            <FaEnvelope className="mr-2 text-lg md:text-xl" />
            {translations.sendMeAnEmail}
          </a>
          <a
            href="https://wa.me/+551972571089"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 dark:bg-green-700 dark:hover:bg-green-600"
          >
            <FaWhatsapp className="mr-2 text-lg md:text-xl" />
            {translations.sendMeAWhatsapp}
          </a>
          <a
            href="https://t.me/lucasnoliveira126"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <FaTelegramPlane className="mr-2 text-lg md:text-xl" />
            {translations.sendMeATelegram}
          </a>
          <a
            href="https://discord.com/users/yagami_rukasu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 dark:bg-indigo-700 dark:hover:bg-indigo-600"
          >
            <FaDiscord className="mr-2 text-lg md:text-xl" />
            {translations.sendMeADiscord}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
