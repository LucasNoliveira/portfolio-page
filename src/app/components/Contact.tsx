'use client';
import { FC, useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ContactSection: FC = () => {
    const { translations } = useLanguage();
    const [threshold, setThreshold] = useState(0.8);
    const { ref, inView } = useInView({
        threshold: threshold,
    });

    const [hasAnimated, setHasAnimated] = useState(false);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        // Atualize o threshold baseado no tamanho da tela no lado do cliente
        const handleResize = () => {
            setThreshold(window.innerWidth <= 640 ? 0.3 : 0.8);
        };

        // Defina o threshold inicial
        handleResize();

        // Adicione o listener para redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Limpeza do listener ao desmontar o componente
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
        <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16 lg:py-20 px-6 lg:px-16" id="contact">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200 text-center mb-6 md:mb-8 lg:mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {translations.contact}
                </motion.h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 text-center mb-6 md:mb-8 lg:mb-12 mx-auto max-w-xl md:max-w-2xl">
                    {translations.contactIntro}
                </p>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="flex items-start p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaPhoneAlt className="text-blue-600 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl font-semibold">{translations.phoneLabel}</p>
                            <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">+55 (11) 972571089</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaEnvelope className="text-blue-600 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl font-semibold">{translations.emailLabel}</p>
                            <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">lucasnoliveira126@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaMapMarkerAlt className="text-blue-600 text-3xl md:text-4xl mr-4" />
                        <div>
                            <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl font-semibold">{translations.locationLabel}</p>
                            <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">São Paulo, SP</p>
                        </div>
                    </motion.div>
                </div>

                <div className="flex justify-center mt-12">
                    <motion.a
                        href="https://calendly.com/lucasnoliveira126" // Altere para o seu link de agendamento
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FaCalendarAlt className="mr-2 text-xl" />
                        {translations.scheduleMeeting}
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
