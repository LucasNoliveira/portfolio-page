'use client';
import { FC, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaCode, FaMobileAlt, FaPalette, FaDatabase } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const ServicesSection: FC = () => {
    const { translations } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4, once: true });

    return (
        <section ref={ref} className="bg-gray-700 py-20" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-50">
                        {translations.servicesTitle}
                    </h2>
                    <p className="mt-4 text-gray-50">
                        {translations.servicesSubtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {translations.services.map((service: any, index: number) => (
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
        icon: string;
    };
    isInView: boolean;
    index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, isInView, index }) => {
    const { title, description, icon } = service;

    const iconMap: Record<string, JSX.Element> = {
        development: <FaCode className="w-8 h-8 text-blue-600" />,
        design: <FaPalette className="w-8 h-8 text-pink-500" />,
        mobile: <FaMobileAlt className="w-8 h-8 text-green-500" />,
        database: <FaDatabase className="w-8 h-8 text-yellow-500" />,
    };

    return (
        <motion.div
            className="w-full md:w-1/3 lg:w-1/4 p-6 bg-gray-600 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gray-100">
                    {iconMap[icon]}
                </div>
                <h3 className="text-xl font-semibold text-gray-50">
                    {title}
                </h3>
                <p className="text-gray-50 mt-2">
                    {description}
                </p>
                <motion.button
                    className="mt-6 px-4 py-2 rounded-lg font-semibold bg-gray-700 text-gray-50 border border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ServicesSection;
