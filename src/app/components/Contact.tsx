'use client';
import { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: FC = () => {
    const { translations } = useLanguage();

    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-12 md:py-16 lg:py-20 px-6 lg:px-16" id="contact">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-6 md:mb-8 lg:mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {translations.contact}
                </motion.h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-300 text-center mb-6 md:mb-8 lg:mb-12 mx-auto max-w-xl md:max-w-2xl">
                    {translations.contactIntro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaPhoneAlt className="text-teal-400 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-white text-lg md:text-xl font-semibold">{translations.phoneLabel}</p>
                            <p className="text-gray-300 text-sm md:text-base">+55 (11) 972571089</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaEnvelope className="text-teal-400 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-white text-lg md:text-xl font-semibold">{translations.emailLabel}</p>
                            <p className="text-gray-300 text-sm md:text-base">lucasnoliveira126@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaMapMarkerAlt className="text-teal-400 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-white text-lg md:text-xl font-semibold">{translations.locationLabel}</p>
                            <p className="text-gray-300 text-sm md:text-base">São Paulo, SP</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
