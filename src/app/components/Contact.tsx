'use client';
import { FC, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: FC = () => {
    const { translations } = useLanguage();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const validateForm = (): boolean => {
        let isValid = true;
        const errors = { name: '', email: '', message: '' };

        if (!formData.name) {
            errors.name = translations.requiredField;
            isValid = false;
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = translations.invalidEmail;
            isValid = false;
        }

        if (!formData.message) {
            errors.message = translations.requiredField;
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        // Placeholder for form submission logic
        try {
            // Example: Sending form data to a server
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            setFormSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Clear form fields after submission
        } catch (error) {
            console.error('Form submission error:', error);
            // Handle submission error here
        }
    };

    return (
        <section className="bg-gray-800 py-20 px-10" id="contact">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-gray-100 text-center mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {translations.contact}
                </motion.h2>

                <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    {translations.contactIntro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        <div className="flex items-center">
                            <FaPhoneAlt className="text-blue-500 w-8 h-8 mr-4" />
                            <div>
                                <p className="text-gray-100 text-lg font-semibold">{translations.phoneLabel}</p>
                                <p className="text-gray-400">+1 (123) 456-7890</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-blue-500 w-8 h-8 mr-4" />
                            <div>
                                <p className="text-gray-100 text-lg font-semibold">{translations.emailLabel}</p>
                                <p className="text-gray-400">contact@lucasoliveira.dev</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-blue-500 w-8 h-8 mr-4" />
                            <div>
                                <p className="text-gray-100 text-lg font-semibold">{translations.locationLabel}</p>
                                <p className="text-gray-400">New York, NY</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
                        onSubmit={handleSubmit}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        <div>
                            <label htmlFor="name" className="block text-gray-400 mb-2">{translations.nameLabel}</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                            {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-400 mb-2">{translations.emailLabel}</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                            {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-400 mb-2">{translations.messageLabel}</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                            {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            {translations.sendMessage}
                        </button>
                        {formSubmitted && <p className="text-green-500 mt-4">{translations.thankYouMessage}</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
