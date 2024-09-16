'use client';
import { FC, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Flag from 'react-world-flags';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import HobbiesSection from './Hobbies.tsx';

const AboutSection: FC = () => {
    const { translations } = useLanguage();

    const [threshold, setThreshold] = useState(0.8);
    const { ref, inView } = useInView({
        threshold: threshold,
    });

    const [hasAnimated, setHasAnimated] = useState(false);
    const hasAnimatedRef = useRef(false);

    const getProgressWidth = (level: string) => {
        switch (level) {
            case 'native':
            case 'nativo':
            case 'ネイティブ':
                return '100%';
            case 'advanced':
            case 'avançado':
            case 'avanzado':
            case '上級':
                return '75%';
            case 'intermediate':
            case 'intermediário':
            case '中級':
            case 'intermedio':
                return '50%';
            case 'basic':
            case 'básico':
            case '初級':
                return '20%';
            default:
                return '0%';
        }
    };

    const languageFlags: Record<string, string> = {
        portuguese: 'BR',
        english: 'US',
        japanese: 'JP',
        spanish: 'ES',
    };

    useEffect(() => {
        const handleResize = () => {
            setThreshold(window.innerWidth <= 640 ? 0.3 : 0.8);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (inView && !hasAnimatedRef.current) {
            setHasAnimated(true);
            hasAnimatedRef.current = true;
        }
    }, [inView]);

    return (
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20" id="about">
            <div ref={ref} className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-16">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 lg:mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {translations.aboutMe}
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 lg:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {translations.aboutIntro}
                    </motion.p>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700"
                        initial={{ opacity: 0, y: 30 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {translations.profileDescription}
                    </motion.p>

                    {/* Spoken Languages Section */}
                    <motion.div
                        className="mt-8 space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{translations.spokenLanguages}</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {translations.languages.map((language: { name: string; level: string }) => (
                                <li key={language.name} className="flex items-center">
                                    <Flag code={languageFlags[language.name]} className="w-6 h-6 mr-2" />
                                    <span className="text-lg font-semibold text-gray-800 mr-1">{language.name}</span>
                                    <div className="ml-auto bg-gray-300 rounded-full h-2 w-3/4 overflow-hidden">
                                        <motion.div
                                            className={`h-2 ${['native', 'nativo', 'ネイティブ'].includes(language.level)
                                                ? 'bg-green-500'
                                                : ['advanced', 'avançado', 'avanzado', '上級'].includes(language.level)
                                                    ? 'bg-blue-500'
                                                    : ['intermediate', 'intermediário', 'intermedio', '中級'].includes(language.level)
                                                        ? 'bg-yellow-500'
                                                        : ['basic', 'básico', '初級'].includes(language.level)
                                                            ? 'bg-red-500'
                                                            : 'bg-gray-500'
                                                }`}
                                            style={{ width: getProgressWidth(language.level) }}
                                            initial={{ width: 0 }}
                                            animate={hasAnimated ? { width: getProgressWidth(language.level) } : {}}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        ></motion.div>
                                    </div>
                                    <span className="ml-2 text-sm font-medium text-gray-800">{language.level}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                    <motion.div
                        className="relative w-64 sm:w-72 md:w-80 lg:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <Image
                            src="/img/me.jpeg"
                            alt="About Me"
                            width={500}
                            height={500}
                            className="rounded-full shadow-lg"
                        />
                    </motion.div>

                </div>
            </div>
            <HobbiesSection />
        </section>
    );
};

export default AboutSection;
