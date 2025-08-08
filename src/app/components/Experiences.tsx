"use client";
import { FC, useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { techColors } from "./techTags";
import { useInView } from "react-intersection-observer";

const ExperienceCard: FC<{ exp: any; index: number }> = ({ exp, index }) => {
  const [showAllTechs, setShowAllTechs] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { translations } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const toggleTechStack = () => {
    setShowAllTechs(!showAllTechs);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      const isOverflowing =
        descriptionRef.current.scrollHeight >
        descriptionRef.current.clientHeight;
      setIsTruncated(isOverflowing);
    }
  }, []);

  const renderTechStack = (techStack: string[], showAll: boolean) => {
    const maxVisibleItems = 4;
    const visibleTechs = techStack.slice(0, maxVisibleItems);
    const hiddenTechs = techStack.slice(maxVisibleItems);
    const hiddenCount = techStack.length - maxVisibleItems;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {visibleTechs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: techColors[tech], color: "#fff" }}
          >
            {tech}
          </span>
        ))}
        {showAll &&
          hiddenTechs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: techColors[tech], color: "#fff" }}
            >
              {tech}
            </span>
          ))}
        {hiddenCount > 0 && !showAll && (
          <span
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white cursor-pointer"
            onClick={toggleTechStack}
          >
            +{hiddenCount} more
          </span>
        )}
        {showAll && hiddenCount > 0 && (
          <span
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white cursor-pointer"
            onClick={toggleTechStack}
          >
            Show less
          </span>
        )}
      </div>
    );
  };

  return (
    <motion.li
      ref={ref}
      className={`flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      } relative`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
        {exp.logo && (
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="w-14 h-14 object-contain rounded-full"
          />
        )}
      </div>

      <div
        className={`w-full md:p-6  py-6 px-3 bg-gray-700 rounded-lg shadow-lg transform ${
          index % 2 === 0 ? "md:-translate-x-1" : "md:translate-x-1"
        } md:w-5/12`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={exp.logo}
            className="rounded-full h-10 w-10 block md:hidden"
          />
          <h3 className="sm:text-lg lg:text-xl font-semibold text-gray-200 mb-1 md:mb-2">
            {exp.company}
          </h3>
        </div>
        <p className="sm:text-lg md:text-md lg:text-lg text-blue-400">
          {exp.role}
        </p>

        <div className="text-gray-200 text-sm font-semibold mt-2 md:hidden">
          {exp.startDate} - {exp.endDate}
        </div>

        <div className="relative">
          <p
            ref={descriptionRef}
            className={`md:text-base sm:text-lg text-gray-300 whitespace-pre-line ${
              !showMore ? "line-clamp-5" : ""
            }`}
          >
            {exp.description}
          </p>
          {isTruncated && (
            <span
              className="sm:text-sm md:text-md lg:text-lg text-blue-400 cursor-pointer hover:underline"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? translations.readLess : translations.readMore}
            </span>
          )}
        </div>

        {exp.techStack && (
          <div className="mt-4">
            <h4 className="text-gray-700 dark:text-gray-300 font-semibold sm:text-sm md:text-md lg:text-lg">
              Tech Stack:
            </h4>
            {renderTechStack(exp.techStack, showAllTechs)}
          </div>
        )}
      </div>

      <div
        className={`absolute hidden md:block ${
          index % 2 === 0
            ? "left-1/2 translate-x-8"
            : "right-1/2 -translate-x-8 mr-3"
        } bg-gray-700 text-gray-200 text-sm font-semibold px-4 py-2 rounded-full ml-3`}
      >
        {exp.startDate} - {exp.endDate}
      </div>
    </motion.li>
  );
};

const ExperienceSection: FC = () => {
  const { translations } = useLanguage();
  const { experiences } = translations;
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(
        Math.max(windowHeight - rect.top - 500, 0),
        rect.height
      );
      setFillHeight(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="bg-gray-800 py-20 md:px-5"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-gray-200 text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {translations.professionalBackground}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] overflow-hidden">
            <div
              style={{ height: `${fillHeight}px` }}
              className="bg-blue-600 w-full transition-all duration-200 ease-out"
            />
          </div>
          <ul className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
