'use client';
import { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectsSection: FC = () => {
    const { translations } = useLanguage();

    return (
        <section className="bg-gray-100 py-20" id="projects">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {translations.projects}
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {translations.projectsList.map((project: any, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { translations } = useLanguage();
    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{project.stack}</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-4 line-clamp-3">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                    {translations.viewProject}
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectsSection;
