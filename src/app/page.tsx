'use client';

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import './globals.css'
import { LanguageProvider } from './context/LanguageContext';
import ExperienceSection from "./components/Experiences";
import ProjectsSection from "./components/ProjectsSection";
import WelcomePopup from "./components/WelcomePopup";
import ExperienceSummary from "./components/ExperienceSummary";
import ServicesSection from "./components/Services";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

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
                </main>
                <ExperienceSummary />
                <ExperienceSection />
                <ServicesSection />
                <ProjectsSection />
                <ScrollToTopButton />
                {showPopup && <WelcomePopup />}
                <Footer />
            </LanguageProvider>
        </div>
    );
};

export default Home;
