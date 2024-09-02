import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiEye, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { techColors } from './techTags';

interface ProjectCardProps {
    project: {
        image: string;
        title: string;
        description: string;
        github: string;
        link: string;
        techStack: string[];
    };
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { translations } = useLanguage();

    const renderTechStack = (techStack: string[]) => {
        const maxVisibleItems = 4;
        const visibleTechs = techStack.slice(0, maxVisibleItems);
        const hiddenCount = techStack.length - maxVisibleItems;

        return (
            <div className="flex flex-wrap gap-2 mt-2">
                {visibleTechs.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: techColors[tech], color: '#fff' }}
                    >
                        {tech}
                    </span>
                ))}
                {hiddenCount > 0 && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white">
                        +{hiddenCount}
                    </span>
                )}
            </div>
        );
    };

    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-2"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="relative group">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                    >
                        <FiEye />
                    </a>
                </div>
            </div>
            <div className="p-6">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-gray-800 hover:underline"
                >
                    {project.title}
                </a>
                <p className="text-gray-600 mt-4 line-clamp-3">{project.description}</p>
                <div>
                    <h4 className="text-gray-700 font-semibold">Tech Stack:</h4>
                    {renderTechStack(project.techStack)}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 bg-blue-600 text-white px-3 py-1 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 text-base md:text-lg lg:text-xl"
                >
                    {translations.viewProject}
                    <svg
                        className="ml-2 h-5 w-5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;