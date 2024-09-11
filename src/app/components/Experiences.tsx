'use client';
import { FC, useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { techColors } from './techTags'; // Ensure techColors is imported

const ExperienceCard: FC<{ exp: any; index: number }> = ({ exp, index }) => {
    const [showAllTechs, setShowAllTechs] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const { translations } = useLanguage();


    const toggleTechStack = () => {
        setShowAllTechs(!showAllTechs);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            // Verifica se a altura do parágrafo é maior que o limite de 5 linhas
            const isOverflowing = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
            setIsTruncated(isOverflowing);
        }
    }, []);

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
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.3 }}
        >
            {/* Timeline Circle with Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
                {exp.logo && (
                    <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-14 h-14 object-contain rounded-full"
                    />
                )}
            </div>

            {/* Experience Card */}
            <div
                className={`w-full p-6 bg-gray-100 rounded-lg shadow-lg transform ${index % 2 === 0 ? 'md:-translate-x-1' : 'md:translate-x-1'
                    } md:w-5/12`}
            >
                <div className='flex items-center gap-3 md:gap-4'>
                    <img
                        src={exp.logo}
                        className='rounded-full h-10 w-10 block md:hidden'
                    />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">
                        {exp.company}
                    </h3>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-blue-600">{exp.role}</p>

                {/* Duration for mobile and smaller screens */}
                <div
                    className="text-gray-800 text-sm font-semibold mt-2 md:hidden"
                >
                    {exp.startDate} - {exp.endDate}
                </div>

                <div className="relative">
                    <p
                        ref={descriptionRef}
                        className={`text-sm md:text-base text-gray-600 whitespace-pre-line ${!showMore ? 'line-clamp-5' : ''}`}
                    >
                        {exp.description}
                    </p>
                    {isTruncated && (
                        <span
                            className="text-blue-600 cursor-pointer hover:underline"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? translations.readLess : translations.readMore}
                        </span>
                    )}
                </div>

                {exp.techStack && (
                    <div className="mt-4">
                        <h4 className="text-gray-700 font-semibold">Tech Stack:</h4>
                        {renderTechStack(exp.techStack, showAllTechs)}
                    </div>
                )}
            </div>

            {/* Duration for desktop */}
            <div
                className={`absolute hidden md:block ${index % 2 === 0 ? 'left-1/2 translate-x-8' : 'right-1/2 -translate-x-8 mr-3'
                    } bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full ml-3`}
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
        <section className="bg-gray-800 py-20 md:px-5" id="experience">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-gray-50 text-center mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {translations.professionalBackground}
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
                    <ul className="space-y-12">
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
