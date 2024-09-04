'use client';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: FC = () => {
    const { translations } = useLanguage();

    return (
        <section className="bg-gray-100 py-20" id="about">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16">
                {/* Text Section */}
                <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {translations.aboutMe}
                    </motion.h2>
                    <motion.p
                        className="text-lg lg:text-xl text-gray-700 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {translations.aboutIntro}
                    </motion.p>
                    <motion.p
                        className="text-lg lg:text-xl text-gray-700"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {translations.profileDescription}
                    </motion.p>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <motion.div
                        className="relative w-full max-w-md lg:max-w-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <Image
                            src="/img/me.jpeg"
                            alt="About Me"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
