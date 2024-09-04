'use client';
import React, { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';

const WelcomePopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const { translations } = useLanguage()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Minimum delay to allow animation start

        setIsRendered(true);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setIsRendered(false), 300); // Transition duration
    };

    if (!isRendered) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 
            w-80 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
            <div className="text-sm sm:text-base lg:text-lg font-medium">
                <strong>{translations.hiThere}</strong>
                <br />
                {translations.welcomeMessage}
            </div>
            <button
                onClick={handleClose}
                className="mt-2 text-blue-600 absolute top-2 right-2 text-base sm:text-lg"
            >
                ✕
            </button>
        </div>
    );
};

export default WelcomePopup;
