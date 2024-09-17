'use client';

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Warning from './components/Warning';
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import './globals.css'
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/themeContext';
import ExperienceSection from "./components/Experiences";
import ProjectsSection from "./components/ProjectsSection";
import WelcomePopup from "./components/WelcomePopup";
import ExperienceSummary from "./components/ExperienceSummary";
import ServicesSection from "./components/Services";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import ContactSection from "./components/Contact";

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
            <ThemeProvider>
            <LanguageProvider>
                <Header />
                <Warning />
                <main>
                    <HeroSection />
                </main>
                <AboutSection />
                <ExperienceSummary />
                <ExperienceSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />
                <ScrollToTopButton />
                {showPopup && <WelcomePopup />}
                <Footer />
            </LanguageProvider>
            </ ThemeProvider>
        </div>
    );
};

export default Home;
