'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiJavascript, SiDocker, SiJest, SiPython, SiKubernetes, SiIcloud } from 'react-icons/si';
import { FaDownload, FaComments } from 'react-icons/fa';
import Popup from "./Popup";

type SkillIconKeys = 'React' | 'Next.js' | 'TypeScript' | 'Tailwind CSS' | 'Node.js' | 'GraphQL' | 'JavaScript' | 'Docker' | 'Jest' | 'Express' | 'Python' | 'Django' | 'AWS' | 'Kubernetes';

const skillIcons: Record<SkillIconKeys, JSX.Element> = {
    React: <FaReact className="h-6 w-6 text-blue-600" />,
    'Next.js': <SiNextdotjs className="h-6 w-6 text-black" />,
    TypeScript: <SiTypescript className="h-6 w-6 text-blue-600" />,
    'Tailwind CSS': <SiTailwindcss className="h-6 w-6 text-cyan-500" />,
    'Node.js': <FaNodeJs className="h-6 w-6 text-green-600" />,
    GraphQL: <SiGraphql className="h-6 w-6 text-e535ab" />,
    JavaScript: <SiJavascript className="h-6 w-6 text-yellow-500" />,
    Docker: <SiDocker className="h-6 w-6 text-blue-400" />,
    Jest: <SiJest className="h-6 w-6 text-red-500" />,
    Express: <FaNodeJs className="h-6 w-6 text-green-600" />,
    Python: <SiPython className="h-6 w-6 text-blue-300" />,
    Django: <SiPython className="h-6 w-6 text-green-600" />,
    AWS: <SiIcloud className="h-6 w-6 text-orange-500" />,
    Kubernetes: <SiKubernetes className="h-6 w-6 text-blue-500" />,
};

const allSkills = [
    'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Docker', 'Kubernetes', 'GraphQL', 'Jest', 'Python', 'Django', 'AWS',
];


const HeroSection: FC = () => {
    const { translations } = useLanguage();
    const [showAll, setShowAll] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const displayedSkills = showAll ? allSkills : allSkills.slice(0, 6);

    const handleGetInTouchButtonClick = () => {
        setIsPopupVisible(true);
    };

    const closeGetInTouchPopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <section className="bg-gray-100 py-20 mt-3">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col items-center border-yellow">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full border-2 border-transparent -z-10"></div>
                        <Image
                            src="/img/undraw.svg"
                            alt="Lucas Oliveira"
                            width={400}
                            height={400}
                            className='mb-2'
                        />
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://www.linkedin.com/in/lucasnevesoliveira" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition duration-300">
                            <FaLinkedin className="h-8 w-8" />
                        </a>
                        <a href="https://github.com/lucasnoliveira" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300">
                            <FaGithub className="h-8 w-8" />
                        </a>
                        <a href="mailto:lucanoliveira@gmail.com" className="text-gray-700 hover:text-red-600 transition duration-300">
                            <FaEnvelope className="h-8 w-8" />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row mt-8 gap-4">
                        <a
                            href="#"
                            onClick={handleGetInTouchButtonClick}
                            className="inline-flex justify-center items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
                        >
                            <FaComments className="mr-2" />
                            {translations.getInTouch}
                        </a>

                        {isPopupVisible && <Popup onClose={closeGetInTouchPopup} />}
                        <a
                            href="/path-to-your-resume.pdf"
                            download
                            className="inline-flex justify-center items-center bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-700 transition duration-300"
                        >
                            <FaDownload className="mr-2" />
                            {translations.downloadCV}
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                        <span className="text-blue-600">Lucas</span> Oliveira
                    </h1>
                    <hr className="my-4 border-t-4 border-blue-600 mx-auto md:mx-0 w-24" />

                    <p className="text-xl md:text-2xl text-gray-600 mt-4">
                        Full Stack Web Developer
                    </p>

                    <p className="max-w-lg text-gray-500 mt-6">
                        {translations.heroDescription}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mt-10">
                        {displayedSkills.map((skill) => (
                            <div key={skill} className="flex items-center border p-4 rounded-md hover:bg-gray-100 transition duration-300">
                                <div className="mr-3">
                                    {skillIcons[skill as SkillIconKeys]}
                                </div>
                                <p className="text-lg font-semibold text-gray-700">{skill}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 px-4 py-2 rounded-full text-lg font-semibold"
                        >
                            {showAll ? `${translations.showLess}` : `${translations.showMore}`}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
