'use client';
import { FC, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { techColors } from './techTags'; // Ensure techColors is imported

const ExperienceCard: FC<{ exp: any; index: number }> = ({ exp, index }) => {
    const [showAllTechs, setShowAllTechs] = useState(false);

    const toggleTechStack = () => {
        setShowAllTechs(!showAllTechs);
    };

    const renderTechStack = (techStack: string[], showAll: boolean) => {
        const maxVisibleItems = 4;
        const visibleTechs = techStack.slice(0, maxVisibleItems);
        const hiddenTechs = techStack.slice(maxVisibleItems);
        const hiddenCount = techStack.length - maxVisibleItems;

        return (
            <div className="flex flex-wrap gap-2 mt-2">
                {visibleTechs.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: techColors[tech], color: '#fff' }}
                    >
                        {tech}
                    </span>
                ))}
                {showAll && hiddenTechs.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: techColors[tech], color: '#fff' }}
                    >
                        {tech}
                    </span>
                ))}
                {hiddenCount > 0 && !showAll && (
                    <span
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white cursor-pointer"
                        onClick={toggleTechStack}
                    >
                        +{hiddenCount} more
                    </span>
                )}
                {showAll && hiddenCount > 0 && (
                    <span
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white cursor-pointer"
                        onClick={toggleTechStack}
                    >
                        Show less
                    </span>
                )}
            </div>
        );
    };

    return (
        <motion.li
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} relative`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.3 }}
        >
            {/* Timeline Circle with Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                {exp.logo && (
                    <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full"
                    />
                )}
            </div>

            {/* Experience Card */}
           
            <div
                className={`w-full md:w-10/12 lg:w-8/12 xl:w-6/12 p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg transform ${
                    index % 2 === 0 ? '-translate-x-1' : 'translate-x-1'
                }`}
            >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    {exp.company}
                </h3>
                <p className="text-lg md:text-xl text-gray-700">{exp.role}</p>
                <p className="text-base text-gray-600 mt-4 whitespace-pre-line">{exp.description}</p>
                {exp.techStack && (
                    <div className="mt-4">
                        <h4 className="text-gray-700 font-semibold">Tech Stack:</h4>
                        {renderTechStack(exp.techStack, showAllTechs)}
                    </div>
                )}
            </div>

            {/* Duration */}
            <div
                className={`absolute ${
                    index % 2 === 0 ? 'left-1/2 translate-x-8' : 'right-1/2 -translate-x-8'
                } bg-gray-100 text-gray-800 text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}
            >
                {exp.startDate} - {exp.endDate}
            </div>
        </motion.li>
    );
};

const ExperienceSection: FC = () => {
    const { translations } = useLanguage();
    const { experiences } = translations;

    return (
        <section className="bg-gray-800 py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12" id="experience">
            <div className="container mx-auto">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-50 text-center mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {translations.experience}
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
                    <ul className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
