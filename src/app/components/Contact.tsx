'use client';
import { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: FC = () => {
    const { translations } = useLanguage();

    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-16 px-6 lg:px-16" id="contact">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {translations.contact}
                </motion.h2>

                <p className="text-lg lg:text-xl text-gray-300 text-center mb-8 mx-auto max-w-2xl">
                    {translations.contactIntro}
                </p>

                <div className="flex flex-col md:flex-row justify-center md:space-x-12">
                    <motion.div
                        className="flex items-center mb-6 md:mb-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaPhoneAlt className="text-teal-400 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-white text-xl font-semibold">{translations.phoneLabel}</p>
                            <p className="text-gray-300 text-lg">+55 (11) 972571089</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center mb-6 md:mb-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaEnvelope className="text-teal-400 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-white text-xl font-semibold">{translations.emailLabel}</p>
                            <p className="text-gray-300 text-lg">lucasnoliveira126@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaMapMarkerAlt className="text-teal-400 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-white text-xl font-semibold">{translations.locationLabel}</p>
                            <p className="text-gray-300 text-lg">São Paulo, SP</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
