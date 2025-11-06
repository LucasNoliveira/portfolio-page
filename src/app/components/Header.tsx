"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faCog,
  faFolder,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/themeContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, translations, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  type Language = "EN" | "PT" | "ES" | "JP";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      languageRef.current &&
      !languageRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
      setIsLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const getCVLink = () => {
    return language === "PT"
      ? "/cv/Lucas_Oliveira_CV_FullStack_2025.pdf"
      : "/cv/Lucas_Oliveira_CV_FullStack_2025.pdf";
  };

  const logoSrc = theme === "dark" ? "/img/logo_dark.png" : "/img/logo.png";

  return (
    <header className="bg-gray-50 dark:bg-gray-800 fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center px-5 relative">
        <Link href="/">
          <img src={logoSrc} alt="Logo" className="h-20 relative -left-5" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center mx-auto dark:border-gray-700 rounded-full p-1 px-8">
          {/* <Link
            href="/"
            className="font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {translations.home}
          </Link> */}
          <Link
            href="/about"
            className="font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {translations.about}
          </Link>
          <Link
            href="#experiences"
            className="font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {translations.experience}
          </Link>
          <Link
            href="#services"
            className="font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {translations.services}
          </Link>
          {/* <Link
            href="/projects"
            className="font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {translations.projects}
          </Link> */}
          <Link
            href="/contact"
            className="font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {translations.contact}
          </Link>

          <div className="relative" ref={dropdownRef}>
            <Link
              href={getCVLink()}
              download
              onClick={() => setIsDropdownOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded flex items-center transition duration-300"
            >
              {translations.downloadCV}
            </Link>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
                isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            ></div>
          </div>
        </div>

        {/* Language Toggle for Desktop */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center  mr-3 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
        >
          {theme === "light" ? (
            <FiMoon size={24} className="mr-2" />
          ) : (
            <FiSun size={24} className="mr-2" />
          )}
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
        <div
          className="hidden md:block absolute right-5 top-5 md:static md:right-0"
          ref={languageRef}
        >
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center space-x-1 hover:text-blue-600 transition duration-300 text-gray-800 dark:text-gray-300"
          >
            <HiOutlineGlobeAlt className="h-5 w-5" />
            <span>{language}</span>
            <FontAwesomeIcon
              icon={faChevronDown as IconProp}
              className="h-4 w-4"
            />
          </button>
          <div
            className={`absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
              isLanguageOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 z-50"
            }`}
          >
            <button
              className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              onClick={() => handleLanguageChange("EN")}
            >
              English
            </button>
            <button
              className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              onClick={() => handleLanguageChange("PT")}
            >
              Português
            </button>
            <button
              className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              onClick={() => handleLanguageChange("ES")}
            >
              Español
            </button>
            <button
              className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              onClick={() => handleLanguageChange("JP")}
            >
              日本語
            </button>
          </div>
        </div>

        <div className="md:hidden absolute right-5 top-5 flex gap-3 items-center">
          <button
            onClick={toggleTheme}
            className="dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            style={{ marginRight: "" }}
          >
            {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
          </button>
          {/* Language Toggle for Mobile */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-1 hover:text-blue-600 transition duration-300 text-gray-800 dark:text-gray-300"
            >
              <HiOutlineGlobeAlt className="h-5 w-5" />
              <span>{language}</span>
              <FontAwesomeIcon
                icon={faChevronDown as IconProp}
                className="h-4 w-4"
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
                isLanguageOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 z-50"
              }`}
            >
              <button
                className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                onClick={() => handleLanguageChange("EN")}
              >
                English
              </button>
              <button
                className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                onClick={() => handleLanguageChange("PT")}
              >
                Português
              </button>
              <button
                className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                onClick={() => handleLanguageChange("ES")}
              >
                Español
              </button>
              <button
                className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                onClick={() => handleLanguageChange("JP")}
              >
                日本語
              </button>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="relative focus:outline-none h-6 w-6 z-50"
          >
            <div className="relative w-6 h-6 flex flex-col gap-1.5 justify-center">
              <div
                className={`w-full h-[1.5px] bg-gray-700 dark:bg-gray-200 rounded transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></div>
              <div
                className={`w-4 h-[1.5px] bg-gray-700 dark:bg-gray-200 rounded transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-[1.5px] bg-gray-700 dark:bg-gray-200 rounded transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 translate-y-[-11px]" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-sm overflow-hidden transition-transform ${
          isOpen
            ? "translate-x-0 duration-200 ease-in"
            : "translate-x-full duration-500 ease-out"
        }`}
      >
        <nav
          className={`flex flex-col h-full items-center justify-center space-y-4 p-6 transition-opacity ${
            isOpen
              ? "opacity-100 duration-300 ease-in"
              : "opacity-0 duration-500 ease-out"
          }`}
        >
          {/* <Link
            href="/"
            onClick={toggleMenu}
            className="font-bold text-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            <FontAwesomeIcon
              icon={faHome as IconProp}
              className="h-5 w-5 mr-2"
            />
            {translations.home}
          </Link> */}
          <Link
            href="/about"
            onClick={toggleMenu}
            className="font-bold text-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            <FontAwesomeIcon
              icon={faUser as IconProp}
              className="h-5 w-5 mr-2"
            />{" "}
            {translations.about}
          </Link>
          <Link
            href="#experiences"
            onClick={toggleMenu}
            className="font-bold text-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            <FontAwesomeIcon
              icon={faBriefcase as IconProp}
              className="h-5 w-5 mr-2"
            />{" "}
            {translations.experience}
          </Link>
          <Link
            href="#services"
            onClick={toggleMenu}
            className="font-bold text-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            <FontAwesomeIcon
              icon={faCog as IconProp}
              className="h-5 w-5 mr-2"
            />{" "}
            {translations.services}
          </Link>
          {/* <Link
            href="/projects"
            onClick={toggleMenu}
            className="font-bold text-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            <FontAwesomeIcon
              icon={faFolder as IconProp}
              className="h-5 w-5 mr-2"
            />{" "}
            {translations.projects}
          </Link> */}
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="font-bold text-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 transition duration-300 flex items-center"
          >
            <IoChatboxEllipsesSharp className="h-5 w-5 mr-2" />{" "}
            {translations.contact}
          </Link>
          <div className="relative" ref={dropdownRef}>
            <Link
              href={getCVLink()}
              download
              onClick={() => setIsDropdownOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition duration-300">
              {translations.downloadCV}
            </Link>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
                isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
