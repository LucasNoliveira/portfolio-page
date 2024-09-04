'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const { language, translations, setLanguage } = useLanguage();

    const dropdownRef = useRef<HTMLDivElement>(null);
    const languageRef = useRef<HTMLDivElement>(null);

    type Language = 'EN' | 'PT' | 'ES' | 'JP';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) &&
            (languageRef.current && !languageRef.current.contains(event.target as Node))
        ) {
            setIsDropdownOpen(false);
            setIsLanguageOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setIsLanguageOpen(!isLanguageOpen)
    };

    return (
        <header className="bg-gray-100 fixed w-full z-10 top-0 left-0">
            <div className="container mx-auto flex justify-between items-center p-5 relative">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="h-8" />
                </Link>

                {/* Adicionando borda com cantos arredondados */}
                <div className="hidden md:flex space-x-6 items-center mx-auto border border-gray-300 rounded-full p-1 px-8">
                    <Link href="/" className="font-bold text-[#555] hover:text-blue-300 transition duration-300">{translations.home}</Link>
                    <Link href="/about" className="font-bold text-[#555] hover:text-blue-300 transition duration-300">{translations.about}</Link>
                    <Link href="#experiences" className="font-bold text-[#555] hover:text-blue-300 transition duration-300">{translations.experience}</Link>
                    <Link href="#services" className="font-bold text-[#555] hover:text-blue-300 transition duration-300">{translations.services}</Link>
                    <Link href="/projects" className="font-bold text-[#555] hover:text-blue-300 transition duration-300">{translations.projects}</Link>
                    <Link href="/contact" className="font-bold text-[#555] hover:text-blue-300 transition duration-300">{translations.contact}</Link>
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition duration-300">
                            {translations.downloadCV}
                            <ChevronDownIcon className="h-5 w-5 ml-2" />
                        </button>
                        <div
                            className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <Link href="/curriculo.pdf" download onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-black-600 hover:bg-gray-100">{translations.downloadCV}</Link>
                            <Link href="/curriculo-online" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-black-600 hover:bg-gray-100">{translations.readOnline}</Link>
                        </div>
                    </div>
                </div>
            
            {/* Language Toggle */}
            <div className="hidden md:block absolute right-5 top-5 md:static md:right-0" ref={languageRef}>
                <button onClick={toggleLanguageDropdown} className="flex items-center space-x-1 hover:text-blue-300 transition duration-300">
                    <GlobeAltIcon className="h-5 w-5" />
                    <span>{language}</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>
                <div
                    className={`absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${isLanguageOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('EN')}>English</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('PT')}>Português</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('ES')}>Español</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('JP')}>日本語</button>
                </div>
            </div>

            <div className="md:hidden absolute right-5 top-5">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isOpen ? (
                        <XMarkIcon className="h-6 w-6 z-50 absolute top-0 right-0" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>
        </div>

            {/* Mobile Menu */ }
    <div className={`md:hidden fixed inset-0 bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <nav className="space-y-2 p-5 flex flex-col h-full items-center justify-center">
            <Link href="/" onClick={toggleMenu} className="block hover:text-blue-300 transition duration-300">{translations.home}</Link>
            <Link href="/about" onClick={toggleMenu} className="block hover:text-blue-300 transition duration-300">{translations.about}</Link>
            <Link href="/experience" onClick={toggleMenu} className="block hover:text-blue-300 transition duration-300">{translations.experience}</Link>
            <Link href="#services" onClick={toggleMenu} className="block hover:text-blue-300 transition duration-300">{translations.services}</Link>
            <Link href="/projects" onClick={toggleMenu} className="block hover:text-blue-300 transition duration-300">{translations.projects}</Link>
            <Link href="/contact" onClick={toggleMenu} className="block hover:text-blue-300 transition duration-300">{translations.contact}</Link>
            <div className="w-full flex justify-center space-x-2">
                <Link href="/curriculo.pdf" download onClick={toggleMenu} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition duration-300 justify-center">
                    {translations.downloadCV}
                </Link>
                <Link href="/curriculo-online" onClick={toggleMenu} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition duration-300 justify-center">
                    {translations.readOnline}
                </Link>
            </div>
            {/* Language Toggle in Mobile Menu */}
            <button onClick={toggleLanguageDropdown} className="flex items-center space-x-1 hover:text-blue-300 transition duration-300">
                <GlobeAltIcon className="h-5 w-5" />
                <span>{language}</span>
                <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div
                className={`mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${isLanguageOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('EN')}>English</button>
                <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('PT')}>Português</button>
                <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('ES')}>Español</button>
                <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left" onClick={() => handleLanguageChange('JP')}>日本語</button>
            </div>
        </nav>
    </div>
        </header >
    );
};

export default Header;
