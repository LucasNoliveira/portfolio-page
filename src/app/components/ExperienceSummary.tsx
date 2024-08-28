'use client';
import { FC, useState, useEffect, useRef } from 'react';
import { FaLaptopCode, FaCog, FaProjectDiagram } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ExperienceSummary: FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.8,
    });

    // Ref to track whether the animation has occurred
    const [hasAnimated, setHasAnimated] = useState(false);
    const hasAnimatedRef = useRef(false);
    const { translations } = useLanguage();

    useEffect(() => {
        if (inView && !hasAnimatedRef.current) {
            setHasAnimated(true);
            hasAnimatedRef.current = true;
        }
    }, [inView]);

    return (
        <section className="bg-gray-800 py-10" id="experience-summary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-50">{translations.experience}</h2>
                </div>
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <ExperienceBlock
                            icon={<FaLaptopCode className="text-white h-8 w-8" />}
                            title={translations.ExperienceSummary.techXp.name}
                            description={hasAnimated ? <CountUp end={3} duration={4} suffix=" Years" /> : `${translations.ExperienceSummary.techXp.experienceYears}`} // Duration increased to 4 seconds
                            backgroundColor="bg-blue-500"
                            textColor="text-white"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <ExperienceBlock
                            icon={<FaCog className="text-white h-8 w-8" />}
                            title={translations.ExperienceSummary.webDevXp.name}
                            description={hasAnimated ? <CountUp end={2} duration={4} suffix=" Years" /> : `${translations.ExperienceSummary.webDevXp.experienceYears}`} // Duration increased to 4 seconds
                            backgroundColor="bg-teal-500"
                            textColor="text-white"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <ExperienceBlock
                            icon={<FaProjectDiagram className="text-white h-8 w-8" />}
                            title={translations.ExperienceSummary.services.name}
                            description={hasAnimated ? <CountUp end={27} duration={4} /> : `${translations.ExperienceSummary.services.quantity}`} // Duration increased to 4 seconds
                            backgroundColor="bg-purple-500"
                            textColor="text-white"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

interface ExperienceBlockProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    backgroundColor: string;
    textColor: string;
}

const ExperienceBlock: FC<ExperienceBlockProps> = ({ icon, title, description, backgroundColor, textColor }) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${backgroundColor} ${textColor}`}
        >
            <div className="flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
            <p className={`text-4xl font-bold text-center ${textColor}`}>{description}</p>
        </div>
    );
};

export default ExperienceSummary;
