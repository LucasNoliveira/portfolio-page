'use client';

import { FC, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Warning: FC = () => {
    const { translations } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-lg shadow-lg max-w-lg mx-4 md:mx-auto relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <button 
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900"
                >
                    <FaTimes className="h-5 w-5" />
                </button>
                <div className="text-center">
                    <strong className="text-lg md:text-xl">{translations.warningTitle}</strong>
                    <p className="mt-2 text-sm md:text-base">
                        {translations.warningMessage}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Warning;
