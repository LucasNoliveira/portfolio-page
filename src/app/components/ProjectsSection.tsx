'use client';
import { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './CustomArrows';
import ProjectCard from './ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                    {translations.someThingsBuilt}
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

                <div className="text-center mt-12">
                    <a
                        href="#more-projects"
                        className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                    >
                        {translations.viewMoreProjects}
                        <svg
                            className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-1"
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
            </div>
        </section>
    );
};

export default ProjectsSection;