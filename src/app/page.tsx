'use client';

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import './globals.css'
import { LanguageProvider } from './context/LanguageContext';
import ExperienceSection from "./components/Experiences";
import ProjectsSection from "./components/Projects";
import WelcomePopup from "./components/WelcomePopup.tsx";
import ExperienceSummary from "./components/ExperienceSummary";
import ServicesSection from "./components/Services";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Home: NextPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <LanguageProvider>
                <Header />
                <main className="p-4">
                    <HeroSection />
                    <ExperienceSummary />
                    <ServicesSection />
                    <ExperienceSection />
                    <ProjectsSection />
                </main>
                <ScrollToTopButton />
                {showPopup && <WelcomePopup />}
            </LanguageProvider>
        </div>
    );
};

export default Home;
