'use client';
import { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiEye, FiGithub } from 'react-icons/fi';

const ProjectsSection: FC = () => {
    const { translations } = useLanguage();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-gray-100 py-20 px-10" id="projects">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 text-center mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {translations.projects}
                </motion.h2>

                <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                    {/* Take a look at our portfolio to see how our expert solutions have helped our clients achieve their goals and elevate their online presence. */}
                    Some things I’ve built
                </p>

                <motion.div
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
                    <Slider {...settings}>
                        {translations.projectsList.map((project: any, index: number) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer text-gray-800`}
            style={{ ...style, display: "block", fontSize: "30px" }}
            onClick={onClick}
        >
            <FaChevronRight className='text-gray-400' />
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer text-gray-800`}
            style={{ ...style, display: "block", fontSize: "30px" }}
            onClick={onClick}
        >
            <FaChevronLeft className='text-gray-400' />
        </div>
    );
};

interface ProjectCardProps {
    project: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { translations } = useLanguage();
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

export default ProjectsSection;
