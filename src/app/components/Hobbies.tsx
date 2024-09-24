'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HobbiesSection: FC = () => {
    const { translations } = useLanguage();

    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16 lg:py-20" id="hobbies">
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-8 "
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {translations.hobbies}
                </motion.h2>
                <div className="flex flex-wrap gap-8 justify-center">
                    {translations.hobbiesList.map((hobby, index) => (
                        <motion.div
                            key={index}
                            className="group relative w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <img
                                src={hobby.image}
                                alt={hobby.title}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[5deg]"
                            />
                            <div className="group absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                                {hobby.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HobbiesSection;