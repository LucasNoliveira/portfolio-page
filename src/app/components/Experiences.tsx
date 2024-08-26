'use client';
import { FC, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';
import { FiBriefcase } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ExperienceSection: FC = () => {
    const { translations } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4, once: true }); // Aqui usamos "amount"

    return (
        <section ref={ref} className="bg-gray-50 py-20" id='experiences'>
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col md:flex-row"
                >
                    {/* Seção de Experiência */}
                    <motion.div 
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left mb-12 md:mb-8 flex items-center justify-center md:justify-start">
                            <FiBriefcase className="mr-2" />
                            {translations.experience}
                        </h2>

                        <div className="relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>
                            <div className="flex flex-col space-y-12">
                                {translations.experiences.map((experience: any, index: number) => (
                                    <ExperienceItem 
                                        key={index} 
                                        experience={experience} 
                                        isInView={isInView} 
                                        index={index} 
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Imagem à direita */}
                    <motion.div 
                        className="w-full md:w-1/2 flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Image
                            src="/professional.svg"
                            alt="Experience Illustration"
                            width={300}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

interface ExperienceItemProps {
    experience: any;
    isInView: boolean;
    index: number;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience, isInView, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <motion.div 
            className="relative flex items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <FaBriefcase className="h-6 w-6" />
            </div>
            <div className="ml-4 flex-1">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">{experience.role}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                    <p className="text-gray-500">{experience.startDate} - {experience.endDate}</p>
                    <p className={`text-gray-700 mt-4 whitespace-pre-line ${isExpanded ? '' : 'line-clamp-5'}`}>
                        {experience.description}
                    </p>
                    {experience.description.split('\n').length > 5 && (
                        <button 
                            onClick={toggleExpand} 
                            className="mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                            {isExpanded ? 'Ler menos' : 'Ler mais'}
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceSection;
