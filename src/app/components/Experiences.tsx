'use client';
import { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const ExperienceSection: FC = () => {
    const { translations } = useLanguage();
    const { experiences } = translations;

    return (
        <section className="bg-gray-800 py-20 px-10" id="experience">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-gray-100 text-center mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {translations.experience}
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
                    <ul className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.li
                                key={index}
                                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.3 }}
                            >
                                {/* Timeline Circle with Logo */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="w-10 h-10 object-contain rounded-full"
                                        />
                                    )}
                                </div>

                                {/* Experience Card */}
                                <div
                                    className={`w-full md:w-5/12 p-6 bg-gray-100 rounded-lg shadow-lg transform ${
                                        index % 2 === 0 ? '-translate-x-2' : 'translate-x-2'
                                    }`}
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                        {exp.company}
                                    </h3>
                                    <p className="text-lg text-gray-700">{exp.role}</p>
                                    <p className="text-sm text-gray-600 mt-4 whitespace-pre-line">{exp.description}</p>
                                </div>

                                {/* Duration */}
                                <div
                                    className={`absolute ${
                                        index % 2 === 0 ? 'left-1/2 translate-x-8' : 'right-1/2 -translate-x-8'
                                    }  bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full`}
                                >
                                    {exp.startDate} - {exp.endDate}
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;