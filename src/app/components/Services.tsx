'use client';
import { FC, useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaCode, FaMobileAlt, FaPalette, FaDatabase } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { FaComments } from 'react-icons/fa';
import Popup from './Popup';
import { BsCheckCircle } from 'react-icons/bs';

const ServicesSection: FC = () => {
    const { translations } = useLanguage();
    const [threshold, setThreshold] = useState(0.4);

    const ref = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setThreshold(window.innerWidth <= 640 ? 0.2 : 0.4);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isInView = useInView(ref, { amount: threshold, once: true });

    return (
        <section 
            ref={ref} 
            className="bg-gray-100 dark:bg-gray-900 py-16 sm:py-20 lg:py-24 border-b-4 border-gray-300 dark:border-gray-700" 
            id="services"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">
                        {translations.servicesTitle}
                    </h2>
                    <p className="mt-4 text-gray-800 dark:text-gray-300 text-base sm:text-lg lg:text-xl">
                        {translations.servicesSubtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
                    {translations.servicesList.map((service: any, index: number) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            isInView={isInView}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        details: [];
        icon: string;
    };
    isInView: boolean;
    index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, isInView, index }) => {
    const { title, description, icon, details } = service;
    const { translations } = useLanguage();
    const [isModalOpen, setModalOpen] = useState(false);

    const iconMap: Record<string, JSX.Element> = {
        development: <FaCode className="w-8 h-8 text-blue-600" />,
        design: <FaPalette className="w-8 h-8 text-pink-500" />,
        mobile: <FaMobileAlt className="w-8 h-8 text-green-500" />,
        database: <FaDatabase className="w-8 h-8 text-yellow-500" />,
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <motion.div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-600 dark:border-blue-500"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 sm:p-6 rounded-full bg-gray-200 dark:bg-gray-700">
                        {iconMap[icon]}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-base lg:text-lg">
                        {description}
                    </p>
                    <motion.button
                        className="mt-4 sm:mt-6 px-4 py-2 rounded-lg font-semibold bg-gray-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-500 transition-colors duration-300 hover:bg-blue-600 hover:text-gray-50 dark:hover:bg-blue-500 dark:hover:text-gray-200"
                        onClick={openModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {translations.learnMore}
                    </motion.button>
                </div>
            </motion.div>

            {isModalOpen && (
                <Modal
                    title={title}
                    description={description}
                    details={details}
                    icon={iconMap[icon]}
                    closeModal={closeModal}
                />
            )}
        </>
    );
};

interface ModalProps {
    title: string;
    description: string;
    details?: string[];
    icon: JSX.Element;
    closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ title, description, details, icon, closeModal }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { translations } = useLanguage();

    useEffect(() => {
        // Disable scrolling on body when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleGetInTouchButtonClick = () => {
        setIsPopupVisible(true);
    };

    const closeGetInTouchPopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg max-w-[95vw] max-h-[80vh] mx-auto p-6 relative overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="absolute top-4 left-4 flex space-x-2">
                    <button
                        onClick={closeModal}
                        className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none"
                        aria-label="Close"
                    />
                    <button
                        className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
                        aria-label="Minimize"
                        disabled
                    />
                    <button
                        className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
                        aria-label="Maximize"
                        disabled
                    />
                </div>

                <div className="flex items-center mb-4 pt-8">
                    <div className="mr-2 p-2 rounded-full bg-gray-200 flex items-center justify-center">
                        <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                            {icon}
                        </div>
                    </div>
                    {/* Título com fontes responsivas */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{title}</h3>
                </div>

                {/* Descrição com fontes responsivas */}
                <p
                    className="text-sm md:text-base lg:text-lg text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                {/* Detalhes com fontes responsivas */}
                {details && (
                    <ul className="list-none space-y-2 mb-4 pl-6">
                        {details.map((detail, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm md:text-base lg:text-lg text-gray-700">
                                <BsCheckCircle className="text-blue-500 text-xl w-7 h-7 flex-shrink-0" />
                                <span className="flex-1" dangerouslySetInnerHTML={{ __html: detail }} />
                            </li>
                        ))}
                    </ul>
                )}

                <div className="sticky bottom-0 py-4 text-center">
                    <a
                        onClick={handleGetInTouchButtonClick}
                        className="inline-flex justify-center items-center bg-blue-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-md lg:text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
                    >
                        <FaComments className="mr-2" />
                        {translations.getInTouch}
                    </a>
                    {isPopupVisible && <Popup onClose={closeGetInTouchPopup} />}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ServicesSection;
