'use client';
import { FC } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Footer: FC = () => {
    const { translations } = useLanguage();

    return (
        <footer className="bg-gray-900 text-gray-200 py-16">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="text-3xl font-bold text-white mb-4">
                            Lucas Oliveira
                        </Link>
                        <p className="text-center md:text-left text-gray-400">
                            Elevating your web experience with cutting-edge technology and elegant design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#about" className="hover:text-white transition-colors duration-300">
                                {translations.about}
                            </Link>
                            <Link href="#projects" className="hover:text-white transition-colors duration-300">
                                {translations.projects}
                            </Link>
                            <Link href="#contact" className="hover:text-white transition-colors duration-300">
                                {translations.contact}
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaEnvelope className="text-teal-500 mr-2" />
                                <a href="mailto:info@yourbrand.com" className="hover:text-white hover:underline transition-colors duration-300">
                                    lucasnoliveira126@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="https://twitter.com/seu-perfil"
                                aria-label="Twitter"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/seu-perfil"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                            >
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="https://github.com/lucasnoliveira"
                                aria-label="GitHub"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <FaGithub className="h-6 w-6" />
                            </a>
                            <a
                                href="https://instagram.com/lucas127"
                                aria-label="Instagram"
                                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-gray-700" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="mb-6 md:mb-0">
                        &copy; {new Date().getFullYear()} Lucas Oliveira. {translations.rightsReserved}.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#" className="hover:text-blue-600 transition duration-300">
                            {translations.privacyPolicy}
                        </Link>
                        <Link href="#" className="hover:text-blue-600 transition duration-300">
                            {translations.termsOfService}
                        </Link>
                        <Link href="#" className="hover:text-blue-600 transition duration-300">
                            {translations.cookiePolicy}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
