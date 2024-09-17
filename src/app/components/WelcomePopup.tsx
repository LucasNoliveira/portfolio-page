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
        }, 100);

        setIsRendered(true);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setIsRendered(false), 300); // Duração da transição
    };

    if (!isRendered) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transform transition-all duration-300 w-72 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
        >
            <div className="text-base font-medium">
                <strong>{translations.hiThere}</strong>
                <br />
                {translations.welcomeMessage}
            </div>
            <button
                onClick={handleClose}
                className="mt-2 text-blue-600 absolute top-2 right-2 text-lg dark:text-blue-400"
            >
                ✕
            </button>
        </div>
    );
};

export default WelcomePopup;
